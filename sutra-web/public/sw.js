const VERSION = "v1";
const SHELL = `sutra-shell-${VERSION}`;
const ASSETS = `sutra-assets-${VERSION}`;
const DATA = `sutra-data-${VERSION}`;

const PRECACHE = [
  "/",
  "/manifest.json",
  "/favicon.ico",
  "/icon.svg",
  "/apple-touch-icon.png",
  "/sutra-brandmark-black.svg",
  "/sutra-brandmark-white.svg",
  "/sutra-wordmark-black.svg",
  "/sutra-wordmark-white.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(SHELL).then((cache) => cache.addAll(PRECACHE)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  const keep = new Set([SHELL, ASSETS, DATA]);
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.filter((k) => !keep.has(k)).map((k) => caches.delete(k))
      );
      await self.clients.claim();
    })(),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname === "/sw.js") return;

  if (req.mode === "navigate") {
    event.respondWith(navigationHandler(req));
    return;
  }

  if (url.pathname.startsWith("/_next/static/")) {
    event.respondWith(cacheFirst(req, ASSETS));
    return;
  }

  if (url.pathname.endsWith(".json") || url.pathname.startsWith("/_next/data/")) {
    event.respondWith(staleWhileRevalidate(req, DATA));
    return;
  }

  event.respondWith(cacheFirst(req, ASSETS));
});

async function navigationHandler(req) {
  const cache = await caches.open(SHELL);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch {
    return (await cache.match(req)) || (await cache.match("/")) || Response.error();
  }
}

async function cacheFirst(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res.ok) cache.put(req, res.clone());
  return res;
}

async function staleWhileRevalidate(req, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const fetchPromise = fetch(req)
    .then((res) => {
      if (res.ok) cache.put(req, res.clone());
      return res;
    })
    .catch(() => cached);
  return cached || fetchPromise;
}

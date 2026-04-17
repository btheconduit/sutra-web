"use client";

import { useState, useEffect, useRef } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { IconInfo, IconUser, Tooltip } from "./Icons";

function formatJoinDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function AuthDropdown({ user, onClose, noteCount }: { user: User | null; onClose: () => void; noteCount: number }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [signingOut, setSigningOut] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (sent) return;
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose, sent]);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!supabase) {
      setError("Sign-in is not available");
      return;
    }
    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true, emailRedirectTo: window.location.origin },
    });
    if (err) setError(err.message);
    else setSent(true);
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!supabase) return;
    setVerifying(true);
    const { error: err } = await supabase.auth.verifyOtp({
      email,
      token: otp.trim(),
      type: "email",
    });
    setVerifying(false);
    if (err) setError(err.message);
  }

  async function handleSignOut() {
    setSigningOut(true);
    await supabase?.auth.signOut();
    onClose();
  }

  if (user) {
    return (
      <div ref={ref} className="absolute top-full right-0 mt-2 w-56 rounded-lg border border-zinc-200/60 bg-white/90 p-3.5 shadow-lg backdrop-blur-xl dark:border-zinc-700/40 dark:bg-zinc-900/90">
        <p className="truncate text-xs text-zinc-600 dark:text-zinc-300">{user.email}</p>
        <p className="mt-1.5 text-[11px] text-zinc-400 dark:text-zinc-500">
          {noteCount} {noteCount === 1 ? "note" : "notes"} · joined {formatJoinDate(user.created_at)}
        </p>
        <button
          onClick={handleSignOut}
          disabled={signingOut}
          className="mt-3 text-[11px] text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          {signingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    );
  }

  if (sent) {
    return (
      <div ref={ref} className="absolute top-full right-0 mt-2 w-64 rounded-lg border border-zinc-200/60 bg-white/90 p-4 shadow-lg backdrop-blur-xl dark:border-zinc-700/40 dark:bg-zinc-900/90">
        <div className="flex items-start justify-between">
          <p className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300">
            Check your email for a sign-in link, or enter the code below.
          </p>
          <button
            onClick={onClose}
            className="ml-2 shrink-0 text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-600 dark:hover:text-zinc-400"
            aria-label="Close"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>
        </div>
        <form onSubmit={handleVerifyOtp} className="mt-3">
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={8}
            required
            autoFocus
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="00000000"
            className="w-full rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-center text-sm tracking-widest text-zinc-800 outline-none transition-colors placeholder:text-zinc-300 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:placeholder:text-zinc-600 dark:focus:border-zinc-500"
          />
          {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={otp.length < 6 || otp.length > 8 || verifying}
            className="mt-2 w-full rounded-md bg-zinc-800 px-3 py-1.5 text-xs text-white transition-colors hover:bg-zinc-700 disabled:opacity-40 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {verifying ? "Verifying..." : "Verify code"}
          </button>
        </form>
        <button
          onClick={() => { setSent(false); setEmail(""); setOtp(""); setError(""); }}
          className="mt-2 text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          Try a different email
        </button>
      </div>
    );
  }

  return (
    <div ref={ref} className="absolute top-full right-0 mt-2 w-64 rounded-lg border border-zinc-200/60 bg-white/90 p-4 shadow-lg backdrop-blur-xl dark:border-zinc-700/40 dark:bg-zinc-900/90">
      <form onSubmit={handleSignIn}>
        <label className="mb-1.5 block text-xs text-zinc-500 dark:text-zinc-400">
          Sign in or create account
        </label>
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-800 outline-none transition-colors placeholder:text-zinc-300 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:placeholder:text-zinc-600 dark:focus:border-zinc-500"
        />
        {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
        <button
          type="submit"
          className="mt-2.5 w-full rounded-md bg-zinc-800 px-3 py-1.5 text-xs text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Continue
        </button>
        <p className="mt-2 text-center text-[11px] text-zinc-400 dark:text-zinc-500">
          We&apos;ll email you a magic link to sign in.
        </p>
      </form>
    </div>
  );
}

export function MobileAuthDropdown({ user, onClose, noteCount }: { user: User | null; onClose: () => void; noteCount: number }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState("");
  const [signingOut, setSigningOut] = useState(false);

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!supabase) {
      setError("Sign-in is not available");
      return;
    }
    const { error: err } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true, emailRedirectTo: window.location.origin },
    });
    if (err) setError(err.message);
    else setSent(true);
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!supabase) return;
    setVerifying(true);
    const { error: err } = await supabase.auth.verifyOtp({
      email,
      token: otp.trim(),
      type: "email",
    });
    setVerifying(false);
    if (err) setError(err.message);
  }

  async function handleSignOut() {
    setSigningOut(true);
    await supabase?.auth.signOut();
    onClose();
  }

  if (user) {
    return (
      <div>
        <p className="truncate text-sm text-zinc-600 dark:text-zinc-300">{user.email}</p>
        <p className="mt-2 text-xs text-zinc-400 dark:text-zinc-500">
          {noteCount} {noteCount === 1 ? "note" : "notes"} · joined {formatJoinDate(user.created_at)}
        </p>
        <button
          onClick={handleSignOut}
          disabled={signingOut}
          className="mt-4 text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:text-zinc-500 dark:hover:text-zinc-300"
        >
          {signingOut ? "Signing out..." : "Sign out"}
        </button>
      </div>
    );
  }

  if (sent) {
    return (
      <div>
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
          Check your email for a sign-in link, or enter the code below.
        </p>
        <form onSubmit={handleVerifyOtp} className="mt-4">
          <input
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={8}
            required
            autoFocus
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            placeholder="00000000"
            className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-center text-base tracking-widest text-zinc-800 outline-none transition-colors placeholder:text-zinc-300 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:placeholder:text-zinc-600 dark:focus:border-zinc-500"
          />
          {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
          <button
            type="submit"
            disabled={otp.length < 6 || otp.length > 8 || verifying}
            className="mt-3 w-full rounded-lg bg-zinc-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 disabled:opacity-40 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
          >
            {verifying ? "Verifying..." : "Verify code"}
          </button>
        </form>
        <button
          onClick={() => { setSent(false); setEmail(""); setOtp(""); setError(""); }}
          className="mt-3 text-xs text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
        >
          Try a different email
        </button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label className="mb-2 block text-sm text-zinc-500 dark:text-zinc-400">
          Sign in or create account
        </label>
        <input
          type="email"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-zinc-200 bg-white px-4 py-3 text-base text-zinc-800 outline-none transition-colors placeholder:text-zinc-300 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:placeholder:text-zinc-600 dark:focus:border-zinc-500"
        />
        <button
          type="submit"
          className="mt-3 w-full rounded-lg bg-zinc-800 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-200 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Continue
        </button>
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
        <p className="mt-3 text-xs text-zinc-400 dark:text-zinc-500">
          We&apos;ll email you a magic link to sign in.
        </p>
      </form>
    </div>
  );
}

export function TopBar({
  dark,
  onToggle,
  onInfoClick,
  user,
  noteCount,
  showAuth,
  setShowAuth,
}: {
  dark: boolean;
  onToggle: () => void;
  onInfoClick: () => void;
  user: User | null;
  noteCount: number;
  showAuth: boolean;
  setShowAuth: (v: boolean) => void;
}) {
  return (
    <div className="fixed top-5 right-5 z-20 flex items-center gap-3 rounded-lg border border-zinc-200/40 bg-white/40 px-3 py-2 leading-none backdrop-blur-2xl backdrop-saturate-150 dark:border-zinc-700/30 dark:bg-zinc-950/30">
      <Tooltip label="About (I)">
        <button
          onClick={onInfoClick}
          aria-label="About Sutra"
          className="flex items-center text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
        >
          <IconInfo />
        </button>
      </Tooltip>
      <Tooltip label={dark ? "Light mode (O)" : "Dark mode (O)"}>
        <button
          onClick={onToggle}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          className="flex items-center text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"
        >
          {dark ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          )}
        </button>
      </Tooltip>
      <div className="h-3 w-px bg-zinc-200/60 dark:bg-zinc-700/40" />
      <div className="relative">
        <Tooltip label={user ? "Account" : "Sign in"}>
          <button
            onClick={() => setShowAuth(!showAuth)}
            aria-label={user ? "Account" : "Sign in"}
            className={`flex items-center transition-colors ${user ? "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200" : "text-zinc-300 hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400"}`}
          >
            <IconUser />
          </button>
        </Tooltip>
        {showAuth && <AuthDropdown user={user} onClose={() => setShowAuth(false)} noteCount={noteCount} />}
      </div>
    </div>
  );
}

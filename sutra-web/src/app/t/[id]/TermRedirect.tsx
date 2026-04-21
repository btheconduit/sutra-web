"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function TermRedirect({ id, found }: { id: string; found: boolean }) {
  const router = useRouter();

  useEffect(() => {
    if (found) {
      localStorage.setItem("sutra-share-entry", id);
    } else {
      localStorage.setItem("sutra-share-not-found", "1");
    }
    router.replace("/");
  }, [id, found, router]);

  return (
    <div className="flex h-full items-center justify-center text-sm text-zinc-400 dark:text-zinc-500">
      Opening&hellip;
    </div>
  );
}

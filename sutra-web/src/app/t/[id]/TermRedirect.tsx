"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export function TermRedirect({ id }: { id: string }) {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("sutra-share-entry", id);
    router.replace("/");
  }, [id, router]);

  return (
    <div className="flex h-full items-center justify-center text-sm text-zinc-400 dark:text-zinc-500">
      Opening&hellip;
    </div>
  );
}

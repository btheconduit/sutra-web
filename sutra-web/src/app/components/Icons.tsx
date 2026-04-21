export const iconButtonClass =
  "text-zinc-300 transition-colors hover:text-zinc-500 dark:text-zinc-700 dark:hover:text-zinc-400";

export function IconExpand({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M6 3H3v3M10 3h3v3M6 13H3v-3M10 13h3v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCollapse({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M3 6h3V3M10 3v3h3M3 10h3v3M10 13v-3h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMinimize({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconInfo({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 7v4M8 5.5v-.01" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconUser({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="8" cy="5.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.5 14c0-3 2.5-4.5 5.5-4.5s5.5 1.5 5.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function IconCopy({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <rect x="5.5" y="5.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10.5 5.5V4a1.5 1.5 0 0 0-1.5-1.5H4A1.5 1.5 0 0 0 2.5 4v5A1.5 1.5 0 0 0 4 10.5h1.5" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

export function IconShare({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <path d="M6 9l4-4M10 5H6.5M10 5v3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 9v2.5a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 3 11.5v-4A1.5 1.5 0 0 1 4.5 6H7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function Wordmark({ width = 120, className }: { width?: number; className?: string }) {
  const aspect = 838 / 442;
  const height = Math.round(width / aspect);
  return (
    <span className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/sutra-wordmark-black.svg" alt="Sutra" width={width} height={height} className="block dark:hidden" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/sutra-wordmark-white.svg" alt="Sutra" width={width} height={height} className="hidden dark:block" />
    </span>
  );
}

export function Tooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <span className="group relative">
      {children}
      <span className="pointer-events-none absolute top-full right-0 mt-2 whitespace-nowrap rounded bg-zinc-800 px-2 py-1 text-[11px] text-zinc-200 opacity-0 shadow-md transition-opacity delay-0 group-hover:opacity-100 group-hover:delay-150 dark:bg-zinc-700 dark:text-zinc-100">
        {label}
      </span>
    </span>
  );
}

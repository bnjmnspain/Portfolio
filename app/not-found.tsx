import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-5">
      <p className="font-mono text-xs uppercase tracking-widest text-ink-soft mb-4">404</p>
      <h1 className="font-serif text-3xl sm:text-4xl mb-4">This page wandered off.</h1>
      <p className="text-ink-soft mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist, or it&apos;s moved somewhere else.
      </p>
      <Link
        href="/"
        className="font-sans font-semibold text-sm px-7 py-3.5 rounded-sm border border-ink bg-line hover:bg-line/70 transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}

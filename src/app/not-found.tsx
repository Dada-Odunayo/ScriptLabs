import { ArrowLeft, Home, SearchX } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-ink text-white">
      <div className="lab-grid absolute inset-0 -z-20" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,rgba(25,211,255,0.16),transparent_38rem)]" />
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
        <div className="grid size-16 place-items-center rounded-lg border border-cyan-glow/35 bg-cyan-glow/10 text-cyan-glow shadow-glow">
          <SearchX aria-hidden="true" size={32} />
        </div>

        <p className="mt-8 font-mono text-sm uppercase text-cyan-glow">404 / Route not found</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
          This page drifted outside the lab.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
          The page you are looking for does not exist, may have moved, or is still waiting to be
          built properly.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-glow px-6 py-3.5 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-glow focus:ring-offset-2 focus:ring-offset-ink"
          >
            <Home aria-hidden="true" size={18} />
            Back Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-glow/70 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-violet-glow focus:ring-offset-2 focus:ring-offset-ink"
          >
            <ArrowLeft aria-hidden="true" size={18} />
            Contact ScriptLabs
          </Link>
        </div>
      </section>
    </main>
  );
}

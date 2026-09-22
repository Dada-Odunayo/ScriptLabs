import { ArrowRight, Cpu, TerminalSquare } from "lucide-react";

const systemStats = [
  { label: "Mobile", value: "iOS / Android" },
  { label: "AI", value: "ML / LLM" },
  { label: "Systems", value: "Embedded / CMMS" },
];

export function HeroSection() {
  return (
    <section className="relative isolate pt-20" aria-labelledby="hero-heading">
      <div className="absolute inset-x-0 top-0 -z-10 h-[44rem] bg-[radial-gradient(circle_at_top,rgba(25,211,255,0.13),transparent_42rem)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-14 pt-12 sm:px-8 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:pb-16 lg:pt-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs uppercase text-cyan-glow">
            <span className="size-2 rounded-full bg-cyan-glow shadow-[0_0_16px_rgba(25,211,255,0.95)]" />
            Engineering reliable digital systems
          </p>
          <h1
            id="hero-heading"
            className="mt-6 max-w-5xl text-4xl font-semibold leading-[1.07] text-white sm:text-5xl"
          >
            We Build Software, AI Systems, and Embedded Solutions That Move Businesses Forward
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            ScriptLabs helps startups, businesses, and institutions design and build reliable
            mobile apps, web platforms, AI/ML solutions, embedded systems, and CMMS platforms.
          </p>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-glow px-6 py-3.5 text-sm font-bold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-glow focus:ring-offset-2 focus:ring-offset-ink"
            >
              Start a Project
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-violet-glow/70 hover:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-violet-glow focus:ring-offset-2 focus:ring-offset-ink"
            >
              View Services
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-glow/18 via-transparent to-violet-glow/24 blur-2xl" />
          <div className="relative overflow-hidden rounded-lg border border-white/10 bg-slate-950/74 shadow-2xl shadow-cyan-950/30 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex gap-2" aria-hidden="true">
                <span className="size-3 rounded-full bg-rose-400/80" />
                <span className="size-3 rounded-full bg-amber-300/80" />
                <span className="size-3 rounded-full bg-emerald-400/80" />
              </div>
              <p className="font-mono text-xs text-slate-400">scriptlabs.systems</p>
            </div>
            <div className="relative p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-3">
                {systemStats.map((item) => (
                  <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                    <p className="font-mono text-xs uppercase text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-lg border border-cyan-glow/20 bg-black/45 p-4 font-mono text-xs leading-6 text-slate-300 sm:text-sm">
                <p>
                  <span className="text-violet-300">const</span>{" "}
                  <span className="text-cyan-200">solution</span> = build(
                </p>
                <p className="pl-5 text-slate-400">&quot;software&quot;, &quot;ai&quot;, &quot;embedded&quot;</p>
                <p>);</p>
                <p className="mt-3 text-emerald-300">deploy(solution.reliable());</p>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-panel/80 p-5">
                  <TerminalSquare className="text-cyan-glow" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold text-white">Product-grade interfaces</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">Fast, usable, maintainable.</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-panel/80 p-5">
                  <Cpu className="text-violet-glow" aria-hidden="true" />
                  <p className="mt-4 text-sm font-semibold text-white">Hardware-aware systems</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">From devices to dashboards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

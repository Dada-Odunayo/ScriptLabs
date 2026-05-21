import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-28" aria-labelledby="about-heading">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="text-left">
          <p className="font-mono text-sm font-medium uppercase text-cyan-glow">
            About
          </p>
          <h2 id="about-heading" className="mt-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
            A technical partner for products with real-world complexity
          </h2>
        </div>
        <div className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-glow/12 to-violet-glow/16 blur-2xl" />
          <div className="rounded-lg border border-white/10 bg-panel/72 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
            <p className="text-lg leading-9 text-slate-200">
              ScriptLabs works at the intersection of software, artificial intelligence, and
              engineering systems. We help businesses turn complex technical ideas into reliable,
              usable, and scalable products.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {["Design", "Build", "Deploy"].map((step, index) => (
                <div key={step} className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
                  <p className="font-mono text-xs text-slate-500">0{index + 1}</p>
                  <p className="mt-2 font-semibold text-white">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

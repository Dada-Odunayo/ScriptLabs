import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const reasons = [
  "Full-stack product development",
  "Mobile, web, AI, and hardware capability under one roof",
  "Practical engineering, not buzzword-driven solutions",
  "Built for startups, SMEs, healthcare, fintech, logistics, and industrial use cases",
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="relative border-y border-white/10 bg-white/[0.025] py-24 sm:py-28"
      aria-labelledby="why-us-heading"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(25,211,255,0.08),transparent_38%,rgba(154,108,255,0.09))]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          id="why-us-heading"
          eyebrow="Why Us"
          title="Built for teams that need engineering judgment, not noise"
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason}
              className="flex gap-4 rounded-lg border border-white/10 bg-slate-950/55 p-5 backdrop-blur transition hover:border-violet-glow/35 hover:bg-slate-950/70"
            >
              <CheckCircle2 className="mt-1 shrink-0 text-cyan-glow" aria-hidden="true" size={22} />
              <p className="text-base leading-7 text-slate-200">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

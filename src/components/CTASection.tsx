import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-28" aria-labelledby="contact-heading">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-cyan-glow/20 bg-gradient-to-br from-cyan-glow/12 via-white/[0.035] to-violet-glow/16 p-8 shadow-glow sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-mono text-sm uppercase text-cyan-glow">Contact</p>
            <h2 id="contact-heading" className="mt-4 text-3xl font-semibold text-white sm:text-5xl">
              Have an idea or technical problem you want to solve?
            </h2>
            <p className="mt-5 text-xl text-slate-300">Let&apos;s build it properly.</p>
          </div>
          <a
            href="mailto:hello@scriptlabs.example"
            aria-label="Book a consultation with ScriptLabs"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ink"
          >
            Book a Consultation
            <ArrowUpRight aria-hidden="true" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

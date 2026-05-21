const footerServices = [
  "Mobile Apps",
  "Web Apps",
  "AI/ML/LLM",
  "Embedded Systems",
  "CMMS",
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <a href="#" className="text-xl font-semibold text-white" aria-label="ScriptLabs home">
            ScriptLabs
          </a>
          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Software, AI, and embedded systems built with practical engineering discipline.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase text-slate-300">Services</h2>
          <ul className="mt-4 space-y-3">
            {footerServices.map((service) => (
              <li key={service}>
                <a href="#services" className="text-sm text-slate-400 transition hover:text-cyan-glow">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase text-slate-300">Contact</h2>
          <address className="mt-4 space-y-3 not-italic text-sm text-slate-400">
            <p>hello@scriptlabs.example</p>
            <p>+234 000 000 0000</p>
            <p>Lagos, Nigeria</p>
          </address>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-500">
        © {new Date().getFullYear()} ScriptLabs. All rights reserved.
      </div>
    </footer>
  );
}

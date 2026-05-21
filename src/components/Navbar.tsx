const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#" className="group flex items-center gap-3" aria-label="ScriptLabs home">
          <span className="grid size-9 place-items-center rounded-lg border border-cyan-glow/35 bg-cyan-glow/10 shadow-glow">
            <span className="size-3 rounded-sm bg-cyan-glow shadow-[0_0_18px_rgba(25,211,255,0.85)]" />
          </span>
          <span className="text-lg font-semibold text-white transition-colors group-hover:text-cyan-glow">
            ScriptLabs
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-glow/45 bg-cyan-glow/10 px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:border-cyan-glow hover:bg-cyan-glow/20 focus:outline-none focus:ring-2 focus:ring-cyan-glow focus:ring-offset-2 focus:ring-offset-ink sm:px-5"
        >
          Start a Project
        </a>
      </nav>
    </header>
  );
}

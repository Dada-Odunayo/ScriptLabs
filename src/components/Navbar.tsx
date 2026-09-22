const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

function ScriptLabBrandMark() {
  return (
    <div className="flex items-center gap-3" aria-label="ScriptLabs home">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200/80 sm:h-12 sm:w-12">
        <svg
          viewBox="0 0 120 120"
          className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="scriptlab-mark-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
              <stop offset="0%" stopColor="#1F2A3D" />
              <stop offset="55%" stopColor="#1F2A3D" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>

          <path
            d="M26 18c-12 0-20 8-20 19 0 8 4 15 11 20l12 8c7 5 10 8 10 15 0 8-6 14-15 14-8 0-13-3-18-9l8-10c2 3 6 5 10 5 4 0 7-2 7-6 0-4-3-7-11-12L11 52C4 46 0 39 0 30 0 15 11 5 27 5h16c10 0 18 4 25 13l-12 9c-5-6-9-8-17-8H26z"
            fill="#1F2A3D"
          />
          <path d="M44 18l35 62" stroke="url(#scriptlab-mark-gradient)" strokeWidth="9" strokeLinecap="round"/>
          <path d="M57 18l24 29-16 11-24-28z" fill="#1F2A3D" />
          <path d="M65 66l15 16c3 3 7 3 10 0l8-8c3-3 3-7 0-10L80 51l-15 15z" fill="#1F2A3D" />
          <circle cx="27" cy="84" r="4" fill="#1F2A3D" />
        </svg>
      </div>

      <div className="flex items-end leading-none tracking-tight text-white">
        <span className="text-2xl font-semibold italic sm:text-4xl" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
          Script
        </span>
        <span
          className="text-2xl font-semibold italic sm:text-4xl"
          style={{
            fontFamily: 'Georgia, "Times New Roman", serif',
            color: '#8B5CF6',
          }}
        >
          Lab
        </span>
      </div>
    </div>
  );
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a href="#" className="group flex items-center" aria-label="ScriptLabs home">
          <ScriptLabBrandMark />
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

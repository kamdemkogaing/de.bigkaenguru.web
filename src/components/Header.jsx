const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#vorteile", label: "Vorteile" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <img
            src="/kaenguru-logo.png"
            alt="Känguru Logo"
            className="h-[5rem] w-auto object-contain"
          />
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#182937]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="rounded-full bg-[#F4A825] px-5 py-3 text-sm font-semibold text-[#1B1B1B] shadow-sm transition hover:-translate-y-0.5"
        >
          Angebot anfragen
        </a>
      </div>
    </header>
  );
}

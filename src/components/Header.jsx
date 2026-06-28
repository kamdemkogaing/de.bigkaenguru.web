import { useState } from "react";

const navItems = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#vorteile", label: "Vorteile" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <img
            src="/kaenguru-logo.png"
            alt="Känguru Logo"
            className="h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className="hidden rounded-full bg-[#F4A825] px-5 py-3 text-sm font-semibold text-[#1B1B1B] shadow-sm transition hover:-translate-y-0.5 lg:block"
        >
          Angebot anfragen
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2 hover:opacity-70 transition"
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#182937] transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-[#182937] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-[#182937] transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="border-t border-black/5 bg-white/95 backdrop-blur-md px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block py-3 px-4 text-sm font-medium text-[#182937] rounded-lg hover:bg-[#F4A825]/10 hover:text-[#F4A825] transition"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={closeMenu}
            className="block w-full mt-4 rounded-full bg-[#F4A825] px-5 py-3 text-center text-sm font-semibold text-[#1B1B1B] shadow-sm hover:-translate-y-0.5 transition"
          >
            Angebot anfragen
          </a>
        </nav>
      </div>
    </header>
  );
}

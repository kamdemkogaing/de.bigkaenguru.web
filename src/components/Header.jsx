export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#12372A] text-white shadow-sm">
            🦘
            {/* <img
              src="/kaenguru-logo.jpeg"
              alt="Känguru Logo"
              className="h-6 w-6"
            /> */}
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#12372A]/70">
              Big Känguru
            </p>
            <p className="text-base font-semibold">Umzugsservice</p>
          </div>
        </div>

        <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <a href="#leistungen" className="transition hover:text-[#12372A]">
            Leistungen
          </a>
          <a href="#vorteile" className="transition hover:text-[#12372A]">
            Vorteile
          </a>
          <a href="#ablauf" className="transition hover:text-[#12372A]">
            Ablauf
          </a>
          <a href="#bewertungen" className="transition hover:text-[#12372A]">
            Bewertungen
          </a>
          <a href="#kontakt" className="transition hover:text-[#12372A]">
            Kontakt
          </a>
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

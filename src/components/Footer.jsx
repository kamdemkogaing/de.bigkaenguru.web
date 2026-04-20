export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#1B1B1B] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="text-lg font-semibold">Big Känguru</p>
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">
            Moderne Umzugslösungen für Privatkunden und Unternehmen in Nürnberg
            und Umgebung.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Navigation
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p>Leistungen</p>
            <p>Vorteile</p>
            <p>Ablauf</p>
            <p>Kontakt</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Kontakt
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p>Nürnberg</p>
            <p>info@bigkaenguru.de</p>
            <p>+49 000 000 000</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

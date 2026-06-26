export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[#1B1B1B] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-5 lg:px-10">
        {/* Über uns */}
        <div>
          <img
            src="/kaenguru-logo.jpeg"
            alt="Big Känguru Logo"
            className="h-[4.5rem] w-auto object-contain"
          />
          <p className="mt-3 max-w-sm text-sm leading-7 text-white/65">
            Professionelle Umzugslösungen für Privatkunden und Unternehmen in
            Nürnberg und der Region.
          </p>
        </div>

        {/* Support */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            <span className="text-[#F4A825]">💬</span> Support
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <a href="#" className="block hover:text-white transition">
              <span className="text-[#F4A825]">❓</span> FAQ&apos;s
            </a>
            <a href="#leistungen" className="block hover:text-white transition">
              <span className="text-[#F4A825]">📋</span> Leistungen
            </a>
            <a href="#kontakt" className="block hover:text-white transition">
              <span className="text-[#F4A825]">✉️</span> Kontakt
            </a>
            <a href="#" className="block hover:text-white transition">
              <span className="text-[#F4A825]">🔒</span> Datenschutz
            </a>
            <a href="#" className="block hover:text-white transition">
              <span className="text-[#F4A825]">📄</span> Impressum
            </a>
          </div>
        </div>

        {/* Dienstleistungen */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            <span className="text-[#F4A825]">📦</span> Dienstleistungen
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p>
              <span className="text-[#F4A825]">🏠</span> Privatumzüge
            </p>
            <p>
              <span className="text-[#F4A825]">🏢</span> Gewerbliche Umzüge
            </p>
            <p>
              <span className="text-[#F4A825]">📦</span> Verpacken & Auspacken
            </p>
            <p>
              <span className="text-[#F4A825]">🚚</span> Kleintransport
            </p>
            <p>
              <span className="text-[#F4A825]">♻️</span> Entrümpelung
            </p>
          </div>
        </div>

        {/* Öffnungszeiten */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            <span className="text-[#F4A825]">🕐</span> Öffnungszeiten
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p>Mo - So</p>
            <p className="font-semibold text-white">08:00 - 21:00</p>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-xs text-white/50">Immer erreichbar</p>
              <p className="text-sm font-semibold text-[#F4A825]">
                24/7 Online
              </p>
            </div>
          </div>
        </div>

        {/* Kontakt */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            <span className="text-[#F4A825]">📞</span> Kontakt
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <div className="flex items-start gap-2">
              <span className="text-[#F4A825]">📍</span>
              <div>
                <p>Pilotystraße 46</p>
                <p>90408 Nürnberg</p>
              </div>
            </div>
            <a
              href="tel:+4991181737769"
              className="flex items-center gap-2 font-semibold text-white hover:text-[#F4A825] transition"
            >
              <span className="text-[#F4A825]">☎️</span>
              0911 8173 7769
            </a>
            <a
              href="tel:+491517183711"
              className="flex items-center gap-2 text-white/75 hover:text-white transition"
            >
              <span className="text-[#F4A825]">📱</span>
              0151 7183 7711
            </a>
            <a
              href="mailto:info@bigkaenguru.de"
              className="flex items-center gap-2 text-white/75 hover:text-white transition"
            >
              <span className="text-[#F4A825]">📧</span>
              info@bigkaenguru.de
            </a>
          </div>
        </div>
      </div>

      {/* Social Media & Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-center text-sm text-white/50 lg:text-left">
              © 2024 Big Känguru GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-[#F4A825] hover:text-white transition text-xl"
              >
                f
              </a>
              <a
                href="#"
                className="text-[#F4A825] hover:text-white transition text-xl"
              >
                𝕏
              </a>
              <a
                href="#"
                className="text-[#F4A825] hover:text-white transition text-xl"
              >
                ▶️
              </a>
              <a
                href="#"
                className="text-[#F4A825] hover:text-white transition text-xl"
              >
                📷
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

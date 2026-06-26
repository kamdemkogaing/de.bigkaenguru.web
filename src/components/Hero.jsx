export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F4EE]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(24,41,55,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(244,168,37,0.16),transparent_28%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-24">
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit items-center rounded-full border border-[#182937]/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#182937] shadow-sm">
            Schnell · Zuverlässig · Nürnberg
          </span>

          <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight lg:text-7xl">
            Umziehen <span className="text-[#182937]">ohne Stress</span>.
          </h1>

          <p className="mt-6 max-w-xl text-md leading-6 text-black/70">
            Professionelle Umzüge für Privatkunden und Unternehmen. Klar
            geplant, sicher durchgeführt und auf Wunsch komplett inklusive
            Verpackung, Transport und Entrümpelung.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#kontakt"
              className="rounded-full bg-[#182937] px-6 py-4 text-center text-sm font-semibold text-white shadow-lg shadow-[#182937]/15 transition hover:-translate-y-0.5"
            >
              Kostenloses Angebot anfordern
            </a>
            <a
              href="tel:+491517183711"
              className="rounded-full border border-black/10 bg-white px-6 py-4 text-center text-sm font-semibold text-[#1B1B1B] shadow-sm transition hover:-translate-y-0.5"
            >
              Jetzt anrufen
            </a>
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm text-black/75 md:grid-cols-4">
            {[
              "Schnelle Termine",
              "Faire Preise",
              "Versichert",
              "Regional vor Ort",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-black/8 bg-white px-4 py-3 shadow-sm"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-6 top-10 hidden h-32 w-32 rounded-full bg-[#F4A825]/25 blur-3xl lg:block" />
          <div className="absolute -left-4 bottom-8 hidden h-28 w-28 rounded-full bg-[#182937]/20 blur-3xl lg:block" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white shadow-[0_30px_100px_rgba(0,0,0,0.10)]">
            <div className="border-b border-black/5 bg-[#182937] px-8 py-6 text-white">
              <p className="text-sm uppercase tracking-[0.18em] text-white/65">
                Schnellanfrage
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                In wenigen Schritten zur Anfrage
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Sende uns deine Eckdaten und wir melden uns schnell mit einer
                klaren Einschätzung.
              </p>
            </div>

            <div className="grid gap-5 p-6 lg:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="h-14 rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 outline-none"
                  placeholder="Name"
                />
                <input
                  className="h-14 rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 outline-none"
                  placeholder="Telefon"
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="h-14 rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 outline-none"
                  placeholder="E-Mail"
                />
                <input
                  className="h-14 rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 outline-none"
                  placeholder="Ort"
                />
              </div>
              <input
                className="h-14 rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 outline-none"
                placeholder="Art des Umzugs"
              />
              <textarea
                className="min-h-[120px] resize-none rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 py-4 outline-none"
                placeholder="Beschreibe kurz dein Anliegen"
              />

              <button className="mt-2 h-14 rounded-full bg-[#F4A825] text-sm font-semibold text-[#1B1B1B] shadow-md transition hover:-translate-y-0.5">
                Anfrage absenden
              </button>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="rounded-3xl bg-[#F7F4EE] p-5">
                  <p className="text-sm text-black/50">Reaktionszeit</p>
                  <p className="mt-2 text-xl font-semibold">Kurz & direkt</p>
                </div>
                <div className="rounded-3xl bg-[#F7F4EE] p-5">
                  <p className="text-sm text-black/50">Einsatzgebiet</p>
                  <p className="mt-2 text-xl font-semibold">
                    Nürnberg & Umgebung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

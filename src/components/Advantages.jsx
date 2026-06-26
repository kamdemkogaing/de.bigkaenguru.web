const advantages = [
  "Transparente Preise",
  "Schnelle Rückmeldung",
  "Versicherter Service",
  "Erfahrenes Team",
];

export default function Advantages() {
  return (
    <section id="vorteile" className="bg-[#F8F8F8]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-10">
        <div className="rounded-[2.5rem] bg-[#182937] p-8 text-white shadow-[0_30px_90px_rgba(24,41,55,0.20)] lg:p-10">
          <p className="text-sm uppercase tracking-[0.22em] text-white/60">
            Warum wir
          </p>
          <h2 className="mt-5 text-4xl font-semibold leading-tight">
            Vertrauen entsteht durch Klarheit, Service und Verlässlichkeit.
          </h2>
          <p className="mt-5 max-w-lg leading-8 text-white/75">
            Die Seite setzt bewusst auf eine ruhige, professionelle Darstellung,
            damit potenzielle Kunden schnell Vertrauen fassen und direkt Kontakt
            aufnehmen.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {advantages.map((item) => (
            <div
              key={item}
              className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F4EE] font-semibold text-[#182937]">
                ✓
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-black/60">
                Klare Vorteile helfen dabei, Unsicherheit zu reduzieren und
                Anfragen schneller auszulösen.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

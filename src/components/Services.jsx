const services = [
  {
    title: "Privatumzug",
    text: "Ob Wohnung, Haus oder Seniorenumzug – wir begleiten deinen Umzug sicher, strukturiert und stressfrei.",
    icon: "📦",
  },
  {
    title: "Firmenumzug",
    text: "Wir organisieren Büroumzüge und Standortwechsel effizient, damit Ausfallzeiten so gering wie möglich bleiben.",
    icon: "🏢",
  },
  {
    title: "Transport & Montage",
    text: "Von Möbeltransport bis Tragehilfe: Wir unterstützen zuverlässig bei Logistik, Aufbau und Transport.",
    icon: "🚚",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#182937]">
          Leistungen
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
          Klare Leistungen, modern präsentiert.
        </h2>
        <p className="mt-5 text-lg leading-8 text-black/65">
          Unsere Leistungen sind übersichtlich aufgebaut, damit Besucher sofort
          verstehen, was angeboten wird und wie schnell sie eine passende Lösung
          erhalten.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-[0_14px_40px_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(0,0,0,0.08)]"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7F4EE] text-2xl">
              {service.icon}
            </div>
            <h3 className="mt-6 text-2xl font-semibold">{service.title}</h3>
            <p className="mt-3 leading-8 text-black/65">{service.text}</p>
            <div className="mt-6 text-sm font-semibold text-[#182937]">
              Mehr erfahren →
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

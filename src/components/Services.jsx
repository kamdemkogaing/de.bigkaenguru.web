const services = [
  {
    title: "Privatumzüge",
    text: "Ob Wohnung, Haus oder Seniorenumzug – wir begleiten deinen Umzug sicher, strukturiert und stressfrei.",
    icon: "🏠",
  },
  {
    title: "Gewerbliche Umzüge",
    text: "Wir minimieren Unterbrechungen für Ihr Unternehmen durch sorgfältige Planung und effiziente Durchführung.",
    icon: "🏢",
  },
  {
    title: "Verpacken und Auspacken",
    text: "Unsere Experten kümmern sich um das Verpacken Ihrer Sachen, um maximalen Schutz während des Transports zu gewährleisten.",
    icon: "📦",
  },
  {
    title: "Kleintransport",
    text: "Die Lieferung von Möbeln oder größeren Gegenständen von Geschäften zu Privathaushalten – schnell und zuverlässig.",
    icon: "🚚",
  },
  {
    title: "Entrümpelung",
    text: "Das Aufräumen, Entfernen oder die Entsorgung von unnötigen oder unerwünschten Gegenständen aus Räumen und Gebäuden.",
    icon: "♻️",
  },
  {
    title: "Hilfe bei Lagerung",
    text: "Wir bieten sichere Lageroptionen, falls Sie Ihre Sachen vorübergehend einlagern müssen.",
    icon: "📦",
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

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-[2rem] border border-black/5 bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.05)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4A825]/10 to-[#F4A825]/5 text-4xl group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-[#F4A825]">
              {service.title}
            </h3>
            <p className="mt-3 leading-8 text-black/65">{service.text}</p>
            <div className="mt-6 text-sm font-semibold text-[#182937] group-hover:text-[#F4A825] transition flex items-center gap-2">
              Mehr erfahren
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

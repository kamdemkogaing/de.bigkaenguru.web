const testimonials = [
  {
    name: "Familie Schneider",
    text: "Sehr freundliches Team, pünktlich, sauber und absolut zuverlässig. Der Umzug lief deutlich entspannter als erwartet.",
  },
  {
    name: "Büroservice Meier",
    text: "Professionelle Planung und schnelle Durchführung. Besonders positiv war die klare Kommunikation während des gesamten Ablaufs.",
  },
  {
    name: "Anna K.",
    text: "Vom ersten Kontakt bis zum letzten Möbelstück hat alles sehr gut funktioniert. Klare Empfehlung.",
  },
];

export default function Testimonials() {
  return (
    <section id="bewertungen" className="bg-[#F7F4EE]">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#182937]">
            Kundenstimmen
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
            Echte Zufriedenheit schafft Vertrauen.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[2rem] border border-white/80 bg-white p-7 shadow-sm"
            >
              <p className="text-lg">★★★★★</p>
              <p className="mt-4 leading-8 text-black/70">“{item.text}”</p>
              <p className="mt-6 text-sm font-semibold text-black/85">
                — {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

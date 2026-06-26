const steps = [
  {
    number: "01",
    title: "Anfrage senden",
    text: "Der Kunde sendet die wichtigsten Eckdaten über das Formular oder telefonisch.",
  },
  {
    number: "02",
    title: "Bedarf klären",
    text: "Wir prüfen Umfang, Termin und besondere Anforderungen für den Umzug.",
  },
  {
    number: "03",
    title: "Planung erhalten",
    text: "Der Kunde bekommt eine klare Rückmeldung inklusive passender Lösung und Preisrahmen.",
  },
  {
    number: "04",
    title: "Stressfrei umziehen",
    text: "Am Umzugstag läuft alles organisiert, zuverlässig und nachvollziehbar ab.",
  },
];

export default function Process() {
  return (
    <section id="ablauf" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#182937]">
          Ablauf
        </p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
          In 4 klaren Schritten zum erfolgreichen Umzug.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-4">
        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-[2rem] border border-black/5 bg-white p-7 shadow-sm"
          >
            <span className="inline-flex rounded-full bg-[#182937] px-4 py-2 text-sm font-semibold text-white">
              {step.number}
            </span>
            <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-black/60">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

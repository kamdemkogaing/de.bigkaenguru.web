export default function ContactSection() {
  return (
    <section id="kontakt" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
      <div className="grid gap-8 rounded-[2.5rem] bg-[#182937] p-8 text-white shadow-[0_30px_90px_rgba(24,41,55,0.22)] lg:grid-cols-[1fr_0.9fr] lg:p-10">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-white/60">
            Kontakt
          </p>
          <h2 className="mt-4 max-w-xl text-4xl font-semibold leading-tight lg:text-5xl">
            Jetzt unverbindlich anfragen und Umzug entspannt planen.
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-white/75">
            Ob Privatumzug, Firmenumzug, Transport oder Unterstützung bei
            kurzfristigen Terminen – wir beraten dich gerne persönlich.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-6 text-[#1B1B1B] shadow-sm">
          <div className="grid gap-4">
            <input
              className="h-14 rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 outline-none"
              placeholder="Name"
            />
            <input
              className="h-14 rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 outline-none"
              placeholder="Telefon"
            />
            <input
              className="h-14 rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 outline-none"
              placeholder="E-Mail"
            />
            <textarea
              className="min-h-[120px] resize-none rounded-2xl border border-black/8 bg-[#F8F8F8] px-4 py-4 outline-none"
              placeholder="Deine Nachricht"
            />
            <button className="h-14 rounded-full bg-[#F4A825] text-sm font-semibold shadow-sm">
              Anfrage senden
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

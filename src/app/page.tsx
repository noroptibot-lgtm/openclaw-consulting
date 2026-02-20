export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-[#2a2a2e] bg-[#0a0a0b]/80 backdrop-blur-xl">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#3b82f6] flex items-center justify-center">
              <span className="text-white font-bold text-sm">OC</span>
            </div>
            <span className="text-[#e8e8ec] font-semibold">OpenClaw Consulting</span>
          </div>
          <a
            href="#contact"
            className="text-sm font-medium text-[#a0a0a8] hover:text-[#e8e8ec] transition-colors"
          >
            Book samtale
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-[#3b82f6] text-sm font-medium tracking-wide uppercase mb-4">
              AI-automatisering for bedrifter
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#e8e8ec] leading-[1.1] mb-6">
              Automatiserte arbeidsflyter<br />
              som jobber mens du sover
            </h1>
            <p className="text-lg md:text-xl text-[#a0a0a8] leading-relaxed mb-8 max-w-2xl">
              Vi bygger AI-agenter som tar over repetitive oppgaver, overvåker systemer,
              og driver prosesser 24/7 — slik at teamet ditt kan fokusere
              på det som faktisk skaper verdi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-lg transition-colors"
              >
                Book gratis strategisamtale
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#2a2a2e] text-[#a0a0a8] hover:text-[#e8e8ec] hover:border-[#3a3a3e] font-medium rounded-lg transition-colors"
              >
                Se hvordan det fungerer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#2a2a2e]" />
      </div>

      {/* What is OpenClaw */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3b82f6] text-sm font-medium tracking-wide uppercase mb-3">
            Plattformen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8ec] mb-4">
            Hva er OpenClaw?
          </h2>
          <p className="text-[#a0a0a8] text-lg mb-12 max-w-3xl leading-relaxed">
            OpenClaw er en AI-agent plattform som lar deg bygge autonome assistenter 
            som jobber i bakgrunnen — hele døgnet. Tenk på det som en digital medarbeider 
            som aldri sover, aldri glemmer, og aldri trenger ferie.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon="🤖"
              title="AI-agenter som handler"
              description="Ikke bare chatbots som svarer på spørsmål. Agenter som faktisk gjør ting — sender meldinger, oppdaterer systemer, overvåker data."
            />
            <FeatureCard
              icon="🔗"
              title="Kobler seg til alt"
              description="E-post, CRM, regnskap, sosiale medier, nettsider, databaser — agentene jobber på tvers av alle verktøyene du allerede bruker."
            />
            <FeatureCard
              icon="⚡"
              title="Alltid på"
              description="Agentene kjører 24/7. De fanger opp leads klokka 3 om natta, svarer på henvendelser i helgen, og holder systemene dine oppdatert."
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#2a2a2e]" />
      </div>

      {/* What you get */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3b82f6] text-sm font-medium tracking-wide uppercase mb-3">
            Leveransen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8ec] mb-4">
            Alt du trenger for å lykkes med OpenClaw
          </h2>
          <p className="text-[#a0a0a8] text-lg mb-12 max-w-2xl">
            Vi gjør ikke bare oppsett. Vi bygger, tilpasser og optimaliserer 
            AI-systemet til din bedrift — fra første samtale til fullt operativt system.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <PainCard
              title="Skreddersydde AI-agenter"
              description="Vi bygger agenter tilpasset din bedrift. Ikke generiske maler — men systemer som forstår dine prosesser, ditt språk og dine kunder."
            />
            <PainCard
              title="Automatiserte arbeidsflyter"
              description="Lead-generering, kundeoppfølging, rapportering, datainnsamling, innholdsproduksjon — alt som kan systematiseres, automatiserer vi."
            />
            <PainCard
              title="Integrasjoner med eksisterende verktøy"
              description="Vi kobler OpenClaw til CRM, e-post, regnskap, nettside, sosiale medier og andre systemer du allerede bruker. Ingen bytte av plattformer."
            />
            <PainCard
              title="Opplæring og support"
              description="Ditt team lærer å bruke og tilpasse systemet selv. Vi er tilgjengelige for spørsmål, feilsøking og videreutvikling."
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#2a2a2e]" />
      </div>

      {/* Process */}
      <section id="how" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3b82f6] text-sm font-medium tracking-wide uppercase mb-3">
            Prosessen
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8ec] mb-4">
            Fra første samtale til fullt operativt system
          </h2>
          <p className="text-[#a0a0a8] text-lg mb-12 max-w-2xl">
            Vi starter smått, beviser verdi raskt, og skalerer det som fungerer.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <PricingCard
              step="01"
              title="Strategisamtale"
              price="Gratis"
              description="30 minutter der vi kartlegger bedriften din, finner flaskehalser og identifiserer de største automatiseringsmulighetene."
              items={[
                "Gjennomgang av nåværende prosesser",
                "Identifisering av tidssluker",
                "Konkret forslag til første automatisering",
              ]}
            />
            <PricingCard
              step="02"
              title="Implementering"
              price="Fra 15K NOK"
              description="2-4 uker der vi bygger og deployer AI-agenter tilpasset din bedrift. Du ser resultater før du committer til noe mer."
              items={[
                "Skreddersydde AI-agenter i produksjon",
                "Integrasjon med eksisterende systemer",
                "Full dokumentasjon og opplæring",
              ]}
              highlighted
            />
            <PricingCard
              step="03"
              title="Løpende drift"
              price="Fra 5K/mnd"
              description="Vi overvåker, optimaliserer og bygger nye automatiseringer etter hvert som behovene dine vokser."
              items={[
                "Kontinuerlig optimalisering",
                "Nye automatiseringer ved behov",
                "Prioritert support og feilsøking",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#2a2a2e]" />
      </div>

      {/* Why consultant */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#111113] border border-[#2a2a2e] rounded-2xl p-8 md:p-12">
            <p className="text-[#3b82f6] text-sm font-medium tracking-wide uppercase mb-3">
              Ofte stilt spørsmål
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8ec] mb-6">
              Hvorfor bruke en konsulent i stedet for å gjøre det selv?
            </h2>
            <div className="space-y-4 text-[#a0a0a8] text-lg leading-relaxed max-w-3xl">
              <p>
                OpenClaw er kraftig, men det krever tid å sette opp riktig. 
                Feil konfigurasjon betyr at agentene gjør feil ting — eller ingenting i det hele tatt.
              </p>
              <p>
                Vi har bygget og driftet AI-systemer for bedrifter i ulike bransjer. 
                Vi vet hvilke automatiseringer som gir størst ROI, hvilke integrasjoner 
                som fungerer best, og hvordan man unngår de vanligste fallgruvene.
              </p>
              <p>
                Resultatet: du får et fungerende system på dager, ikke måneder. 
                Og teamet ditt slipper å lære alt fra scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#2a2a2e]" />
      </div>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-[#3b82f6] text-sm font-medium tracking-wide uppercase mb-3">
            Teamet
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8ec] mb-12">
            Hvem er vi
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <TeamCard
              name="Albert Opdahl"
              role="Grunnlegger & Lead Architect"
              description="18 år, bygger AI-systemer og automatiseringer siden 16. Driver Noropti AS og OpenClaw Community. Spesialist på AI-agenter, e-commerce automatisering og systemarkitektur."
              image="/albert.jpg"
            />
            <TeamCard
              name="Morten Gilje"
              role="Partner & E-Commerce Specialist"
              description="Gründer og eier av Gilje Group AS. Har bygget 8+ nettbutikker, omsatt for millioner i e-commerce, og medgründer av Netthandel Akademiet. Ekspert på skalering, markedsføring og netthandel."
              image="/morten.jpg"
            />
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="border-t border-[#2a2a2e]" />
      </div>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8e8ec] mb-4">
            Book gratis strategisamtale
          </h2>
          <p className="text-[#a0a0a8] text-lg mb-8 max-w-xl mx-auto">
            30 minutter. Ingen forpliktelser. Vi finner ut hvor AI-automatisering 
            kan spare deg mest tid og penger.
          </p>
          <a
            href="https://cal.com/openclaw/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-semibold text-lg rounded-lg transition-colors"
          >
            Book strategisamtale →
          </a>
          <p className="text-[#6b6b75] text-sm mt-4">
            Eller send oss en e-post på{" "}
            <a href="mailto:albert@openclaw.com" className="text-[#3b82f6] hover:underline">
              albert@openclaw.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a2a2e] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#3b82f6] flex items-center justify-center">
              <span className="text-white font-bold text-xs">OC</span>
            </div>
            <span className="text-[#6b6b75] text-sm">OpenClaw Consulting</span>
          </div>
          <p className="text-[#6b6b75] text-sm">
            AI-automatisering som jobber mens du sover.
          </p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <div className="bg-[#111113] border border-[#2a2a2e] rounded-xl p-6 hover:border-[#3a3a3e] transition-colors">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-[#e8e8ec] mb-2">{title}</h3>
      <p className="text-[#a0a0a8] leading-relaxed">{description}</p>
    </div>
  );
}

function PainCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-[#111113] border border-[#2a2a2e] rounded-xl p-6 hover:border-[#3a3a3e] transition-colors">
      <h3 className="text-lg font-semibold text-[#e8e8ec] mb-2">{title}</h3>
      <p className="text-[#a0a0a8] leading-relaxed">{description}</p>
    </div>
  );
}

function TeamCard({
  name,
  role,
  description,
  image,
}: {
  name: string;
  role: string;
  description: string;
  image: string;
}) {
  return (
    <div className="bg-[#111113] border border-[#2a2a2e] rounded-xl p-8 hover:border-[#3a3a3e] transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover object-top border-2 border-[#2a2a2e]"
        />
        <div>
          <h3 className="text-xl font-semibold text-[#e8e8ec]">{name}</h3>
          <p className="text-[#3b82f6] text-sm font-medium">{role}</p>
        </div>
      </div>
      <p className="text-[#a0a0a8] leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({
  step,
  title,
  price,
  description,
  items,
  highlighted = false,
}: {
  step: string;
  title: string;
  price: string;
  description: string;
  items: string[];
  highlighted?: boolean;
}) {
  return (
    <div
      className={`rounded-xl p-6 md:p-8 border transition-colors ${
        highlighted
          ? "bg-[#111113] border-[#3b82f6] ring-1 ring-[#3b82f6]/20"
          : "bg-[#111113] border-[#2a2a2e] hover:border-[#3a3a3e]"
      }`}
    >
      <span className="text-[#6b6b75] text-sm font-medium">Steg {step}</span>
      <h3 className="text-xl font-semibold text-[#e8e8ec] mt-1 mb-2">{title}</h3>
      <p className="text-2xl font-bold text-[#e8e8ec] mb-4">{price}</p>
      <p className="text-[#a0a0a8] text-sm leading-relaxed mb-6">{description}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-[#a0a0a8] text-sm">
            <span className="text-[#3b82f6] mt-0.5 shrink-0">
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                <path d="M2 7L5.5 10.5L12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

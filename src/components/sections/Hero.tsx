import { WHATSAPP_BASE } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative text-white overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Imagem de fundo — DESKTOP */}
      <div
        className="hidden md:block absolute inset-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "20% 15%",
        }}
      />

      {/* Imagem de fundo — MOBILE */}
      <div
        className="md:hidden absolute inset-0 w-full h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-mobile.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      {/* MOBILE: overlay inferior */}
      <div
        className="md:hidden absolute bottom-0 left-0 right-0 h-[45%] pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(10,20,60,0.98), rgba(10,20,60,0.90), rgba(10,20,60,0.40), transparent)" }}
      />

      {/* Overlay topo para navbar — ambos */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/40 to-transparent" />

      <div className="relative z-10 flex flex-col" style={{ minHeight: "100svh" }}>
        <div className="h-16" />

        {/* DESKTOP: card no canto direito, centralizado verticalmente */}
        <div className="hidden md:flex flex-1 items-center justify-end px-8 lg:px-12">
          <div
            className="w-[380px] lg:w-[420px] text-right rounded-2xl px-6 py-6 backdrop-blur-sm"
            style={{ background: "rgba(8,15,50,0.80)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 bg-blue-600/80 border border-blue-400/40 text-blue-100 text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              Fabricado no Brasil
            </span>

            {/* Título */}
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Instrumentos de Percussão{" "}
              <span className="text-yellow-400">Profissionais</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-sm text-blue-100 mb-6 leading-relaxed">
              Qualidade, tradição e dedicação — cada instrumento é produzido com
              os melhores materiais para garantir som e durabilidade excepcionais.
            </p>

            {/* Botões na mesma linha */}
            <div className="flex gap-2 justify-end">
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
              <a
                href="#instrumentos"
                className="flex-1 border-2 border-white/60 hover:border-white hover:bg-white/10 text-white font-bold px-4 py-3 rounded-xl text-sm transition-all text-center whitespace-nowrap"
              >
                Ver Instrumentos
              </a>
            </div>

            {/* Stats */}
            <div className="mt-5 pt-5 border-t border-white/15 grid grid-cols-3 gap-3">
              {[
                { value: "10+", label: "Anos de Experiência" },
                { value: "100%", label: "Fabricado no Brasil" },
                { value: "Brasil", label: "Alcance Nacional" },
              ].map((s) => (
                <div key={s.label} className="text-right">
                  <div className="text-2xl font-extrabold text-yellow-400">{s.value}</div>
                  <div className="text-blue-200 text-xs mt-0.5 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE: card na parte inferior */}
        <div className="md:hidden flex flex-col flex-1 justify-end px-5 pb-10">
          <div className="text-center rounded-2xl px-4 py-5" style={{ background: "rgba(8,15,50,0.80)", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
            <span className="inline-flex items-center gap-2 bg-blue-700/80 border border-blue-400/40 text-blue-100 text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block" />
              Fabricado no Brasil
            </span>
            <h1 className="text-3xl font-extrabold leading-tight mb-3">
              Instrumentos de Percussão{" "}
              <span className="text-yellow-400">Profissionais</span>
            </h1>
            <p className="text-sm text-blue-100 mb-5 leading-relaxed px-2">
              Qualidade, tradição e dedicação — instrumentos produzidos com os melhores materiais.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={WHATSAPP_BASE}
                target="_blank"
                rel="noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl text-base transition-all shadow-lg flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Falar no WhatsApp
              </a>
              <a
                href="#instrumentos"
                className="border-2 border-white/70 text-white font-bold px-6 py-3.5 rounded-xl text-base text-center"
              >
                Ver Instrumentos
              </a>
            </div>
            <div className="mt-5 pt-5 border-t border-white/20 grid grid-cols-3 gap-2">
              {[
                { value: "10+", label: "Anos" },
                { value: "100%", label: "Brasileiro" },
                { value: "🇧🇷", label: "Todo Brasil" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-xl font-extrabold text-yellow-400">{s.value}</div>
                  <div className="text-blue-100 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll cue desktop */}
        <div className="hidden md:flex justify-center py-5">
          <a href="#sobre" className="animate-bounce" aria-label="Rolar para baixo">
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
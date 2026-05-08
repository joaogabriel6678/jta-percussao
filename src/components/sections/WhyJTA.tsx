import { WHY_FEATURES, WHATSAPP_BASE } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyJTA() {
  return (
    <section className="py-20 bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Nossos Diferenciais"
          title={
            <>
              Por que escolher a <span className="text-yellow-400">JTA</span>?
            </>
          }
          subtitle="Combinamos experiência, técnica e paixão pela percussão para entregar instrumentos que superam expectativas."
          light
        />

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-blue-700/40 border border-blue-600/40 rounded-2xl p-6 hover:bg-blue-700/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-600/50 flex items-center justify-center text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="font-bold text-white mb-2 text-sm">{f.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 bg-blue-900/60 border border-blue-600/30 rounded-2xl p-8 md:p-10 text-center">
          <div className="h-1 w-12 bg-yellow-400 mx-auto mb-6 rounded-full" />
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
            Pronto para adquirir seu instrumento?
          </h3>
          <p className="text-blue-200 mb-8">
            Entre em contato e receba um atendimento personalizado para você ou seu grupo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_BASE}
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href="#instrumentos"
              className="border border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Ver Catálogo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ACCESSORIES, ACCESSORY_CAT_STYLES, WHATSAPP_NUMBER } from "@/lib/constants";
import type { Accessory } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

function AccessoryCard({ accessory }: { accessory: Accessory }) {
  const waMessage = encodeURIComponent(
    `Olá! Gostaria de saber o preço de: ${accessory.name}`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;
  const catStyle = ACCESSORY_CAT_STYLES[accessory.cat] ?? "bg-gray-100 text-gray-700";

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
      <div className="relative">
        <div className="w-full h-44 bg-gray-50 flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={accessory.img}
            alt={accessory.name}
            className="w-full h-full object-contain p-3"
            loading="lazy"
          />
        </div>
        <span
          className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${catStyle}`}
        >
          {accessory.cat}
        </span>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="h-0.5 w-8 bg-green-500 rounded mb-3" />
        <h3 className="font-bold text-blue-700 text-sm mb-2">{accessory.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed flex-1">{accessory.desc}</p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-4 border border-gray-200 hover:border-blue-300 text-gray-600 hover:text-blue-700 font-semibold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Consultar preço
        </a>
      </div>
    </article>
  );
}

export function Accessories() {
  return (
    <section id="acessorios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Acessórios e Peças"
          badgeColor="green"
          title="Acessórios"
          subtitle="Peças e acessórios de qualidade para manutenção e personalização dos seus instrumentos de percussão."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACCESSORIES.map((a) => (
            <AccessoryCard key={a.name} accessory={a} />
          ))}
        </div>
      </div>
    </section>
  );
}

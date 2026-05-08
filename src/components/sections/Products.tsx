import { PRODUCTS, WHATSAPP_NUMBER } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

function ProductCard({ product }: { product: Product }) {
  const waMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre: ${product.name}`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
      <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-contain p-3"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {product.featured && (
            <span className="bg-blue-700 text-white text-xs font-bold px-2.5 py-1 rounded-full">
              DESTAQUE
            </span>
          )}
          <span className="bg-white/90 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
            {product.badge}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="h-0.5 w-8 bg-green-500 rounded mb-3" />
        <h3 className="font-bold text-blue-700 text-base mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.desc}</p>
        <a
          href={waLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2.5 rounded-lg text-sm transition-colors text-center flex items-center justify-center gap-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          Consultar via WhatsApp
        </a>
      </div>
    </article>
  );
}

export function Products() {
  const customMsg = encodeURIComponent("Olá! Gostaria de solicitar um produto personalizado.");

  return (
    <section id="instrumentos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Instrumentos"
          title="Nossos Instrumentos"
          subtitle="Atabaques produzidos com os melhores materiais e processos para músicos e grupos culturais."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-5">
            Não encontrou o que procura? Entre em contato para produtos personalizados.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${customMsg}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors shadow-sm"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            Solicitar Produto Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}
import Image from "next/image";
import { PRODUCTS, WHATSAPP_NUMBER } from "@/lib/constants";
import type { Product } from "@/lib/types";
import { SectionHeader } from "@/components/ui/SectionHeader";

function WAIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function ProductCard({ product }: { product: Product }) {
  const waMessage = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre: ${product.name}`
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waMessage}`;

  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col">
      <div className="relative w-full h-56 bg-gray-50 flex items-center justify-center overflow-hidden">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-contain p-3"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
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
        <div className="h-0.5 w-8 bg-green-500 rounded mb-3" aria-hidden="true" />
        <h3 className="font-bold text-blue-700 text-base mb-2">{product.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{product.desc}</p>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-2.5 rounded-lg text-sm transition-colors text-center flex items-center justify-center gap-2"
          aria-label={`Consultar ${product.name} via WhatsApp (abre em nova aba)`}
        >
          <WAIcon className="w-4 h-4 flex-shrink-0" />
          Consultar via WhatsApp
        </a>
      </div>
    </article>
  );
}

export function Products() {
  const customMsg = encodeURIComponent("Olá! Gostaria de solicitar um produto personalizado.");

  return (
    <section id="instrumentos" className="py-20 bg-gray-50" aria-labelledby="instrumentos-title">
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
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-colors shadow-sm"
            aria-label="Solicitar produto personalizado via WhatsApp (abre em nova aba)"
          >
            <WAIcon className="w-5 h-5" />
            Solicitar Produto Personalizado
          </a>
        </div>
      </div>
    </section>
  );
}

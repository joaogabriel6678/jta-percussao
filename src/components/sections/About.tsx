import Image from "next/image";
import { ABOUT_FEATURES, ABOUT_TEXT } from "@/lib/constants";
import { SectionBadge, ColorBar } from "@/components/ui/SectionHeader";

export function About() {
  return (
    <section id="sobre" className="py-20 bg-white" aria-labelledby="sobre-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-14 items-start">

        {/* Coluna da imagem */}
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div
              className="relative rounded-2xl overflow-hidden w-full"
              style={{ height: "clamp(220px, 40vw, 420px)" }}
            >
              <Image
                src="/images/hero.jpg"
                alt="JTA Percussão — atabaques artesanais produzidos em Angatuba-SP"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="absolute top-4 right-4 bg-blue-700 text-white rounded-xl px-4 py-3 text-center shadow-xl">
              <div className="text-2xl font-extrabold">10+</div>
              <div className="text-xs font-semibold uppercase tracking-wide text-blue-200">
                Anos de Tradição
              </div>
            </div>
          </div>

          <blockquote className="relative bg-white rounded-xl p-5 shadow-md border border-gray-100">
            <div className="absolute -left-1 top-4 w-1 h-8 bg-green-500 rounded-full" aria-hidden="true" />
            <p className="text-gray-700 text-sm italic leading-relaxed">
              &ldquo;Cada instrumento que produzimos carrega a alma da nossa tradição e o
              compromisso com a excelência.&rdquo;
            </p>
            <footer className="mt-2 text-blue-700 font-semibold text-sm">— Equipe JTA Percussão</footer>
          </blockquote>
        </div>

        {/* Coluna de texto */}
        <div>
          <SectionBadge text="Sobre Nós" />
          <h2 id="sobre-title" className="text-3xl md:text-4xl font-extrabold text-blue-800 mb-5">
            Sobre a JTA Percussão
          </h2>
          <p className="text-gray-600 leading-relaxed mb-8 text-base">
            {ABOUT_TEXT}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ABOUT_FEATURES.map((f) => (
              <div key={f.title} className="flex gap-3 items-start">
                <span className="text-green-500 text-xl mt-0.5 flex-shrink-0" aria-hidden="true">{f.icon}</span>
                <div>
                  <div className="font-bold text-blue-700 text-sm mb-1">{f.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <ColorBar />
        </div>
      </div>
    </section>
  );
}

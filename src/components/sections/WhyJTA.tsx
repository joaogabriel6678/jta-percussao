import { WHY_FEATURES } from "@/lib/constants";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function WhyJTA() {
  return (
    <section className="py-20 bg-white" aria-labelledby="por-que-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badge="Por Que JTA"
          title="Por que escolher a JTA Percussão?"
          subtitle="Tradição, qualidade e dedicação em cada instrumento que sai da nossa fábrica."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_FEATURES.map((f) => (
            <article
              key={f.title}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl mb-4" aria-hidden="true">
                {f.icon}
              </div>
              <h3 className="font-bold text-blue-800 text-base mb-2">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "JTA Percussão — Instrumentos de Percussão Profissionais",
    short_name: "JTA Percussão",
    description:
      "Fabricação artesanal de atabaques e instrumentos de percussão afro-brasileira desde 2015. Madeira selecionada, feito à mão em Angatuba-SP.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1e3a8a",
    orientation: "portrait",
    lang: "pt-BR",
    categories: ["music", "business", "shopping"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

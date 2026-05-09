import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JTA Percussão — Instrumentos de Percussão Profissionais",
  description:
    "Fabricação artesanal de atabaques, djembês e instrumentos de percussão afro-brasileira desde 2015. Madeira selecionada, feito à mão, 100% brasileiro. Compre pelo WhatsApp!",
  keywords: [
    "JTA Percussão",
    "atabaque",
    "djembê",
    "instrumentos de percussão",
    "percussão afro-brasileira",
    "instrumentos artesanais",
    "percussão brasileira",
    "comprar atabaque",
    "fabricante de atabaques",
  ],
  openGraph: {
    title: "JTA Percussão — Instrumentos de Percussão Profissionais",
    description:
      "Fabricação artesanal de atabaques e instrumentos de percussão afro-brasileira desde 2015. Madeira selecionada, feito à mão, 100% brasileiro.",
    url: "https://jtapercussao.com.br",
    siteName: "JTA Percussão",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://jtapercussao.com.br",
  },
  verification: {
    google: "qS8L2CJsOAxOPQezQXvKKDgdQkWdeW9yboDBmKnomLI",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
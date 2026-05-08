import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JTA Percussão — Instrumentos Artesanais",
  description:
    "Fabricação artesanal de atabaques e instrumentos de percussão afro-brasileira. Qualidade, tradição e paixão pela música.",
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
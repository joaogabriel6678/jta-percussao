import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

/* ──────────────────────────────────────────────────────────
 * Fonte — Inter via next/font (self-host, preload, sem CLS)
 * Substitui a Geist padrão por uma fonte mais legível
 * ────────────────────────────────────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const SITE_URL = "https://jtapercussao.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JTA Percussão — Instrumentos de Percussão Profissionais | Atabaques Artesanais",
    template: "%s | JTA Percussão",
  },
  description:
    "Fabricação artesanal de atabaques, instrumentos e acessórios de percussão afro-brasileira desde 2015. Madeira selecionada, feito à mão em Angatuba-SP. Atendemos músicos, grupos de candomblé, capoeira e distribuidoras de todo o Brasil.",
  applicationName: "JTA Percussão",
  authors: [{ name: "JTA Percussão", url: SITE_URL }],
  creator: "João Gabriel Xavier Teles",
  publisher: "JTA Percussão",
  keywords: [
    "JTA Percussão",
    "atabaque",
    "atabaque artesanal",
    "atabaque profissional",
    "atabaque para candomblé",
    "atabaque para capoeira",
    "atabaque rum rumpi lê",
    "trio de atabaques",
    "macaquinho percussão",
    "djembê",
    "instrumentos de percussão",
    "percussão afro-brasileira",
    "instrumentos artesanais",
    "percussão brasileira",
    "comprar atabaque",
    "fabricante de atabaques",
    "atabaque de madeira",
    "pele de boi atabaque",
    "pele de cabra atabaque",
    "tensor atabaque",
    "aro atabaque",
    "instrumentos terreiro",
    "Angatuba",
    "indústria brasileira",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "JTA Percussão",
    title: "JTA Percussão — Instrumentos de Percussão Profissionais",
    description:
      "Fabricação artesanal de atabaques e instrumentos de percussão afro-brasileira desde 2015. Madeira selecionada, feito à mão em Angatuba-SP. 100% brasileiro.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JTA Percussão — Atabaques artesanais brasileiros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JTA Percussão — Instrumentos de Percussão Profissionais",
    description:
      "Fabricação artesanal de atabaques e instrumentos de percussão afro-brasileira desde 2015.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  verification: {
    google: "qS8L2CJsOAxOPQezQXvKKDgdQkWdeW9yboDBmKnomLI",
  },
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  category: "music",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1c4a" },
  ],
  colorScheme: "light",
};

/* JSON-LD Schema.org — Organization, WebSite, LocalBusiness, ContactPoint */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#organization`,
      name: "JTA Percussão",
      legalName: "JTA Percussão",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      description:
        "Fabricação artesanal de atabaques e instrumentos de percussão afro-brasileira desde 2015. Angatuba-SP, Brasil.",
      foundingDate: "2015",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Angatuba",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+55-15-99771-9681",
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}#website`,
      url: SITE_URL,
      name: "JTA Percussão",
      description:
        "Instrumentos de Percussão Profissionais — Atabaques artesanais brasileiros",
      publisher: { "@id": `${SITE_URL}#organization` },
      inLanguage: "pt-BR",
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
      name: "JTA Percussão",
      image: `${SITE_URL}/images/hero.jpg`,
      url: SITE_URL,
      telephone: "+55-15-99771-9681",
      email: "jta_2015@outlook.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Angatuba",
        addressRegion: "SP",
        addressCountry: "BR",
      },
      areaServed: { "@type": "Country", name: "Brasil" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" dir="ltr" className={inter.variable}>
      <body className="antialiased">
        {/* Skip link para acessibilidade WCAG 2.4.1 */}
        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo
        </a>

        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/*
          ──────────── GOOGLE ANALYTICS 4 ────────────
          Substitua G-XXXXXXXXXX pelo seu ID após criar conta em analytics.google.com.
          Os dois <Script> abaixo já estão prontos — só trocar o ID nos 2 lugares.
        */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}

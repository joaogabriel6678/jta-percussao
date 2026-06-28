import type { MetadataRoute } from "next";

const SITE_URL = "https://jtapercussao.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-06-27");

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/#sobre`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#instrumentos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/#acessorios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/#contato`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}

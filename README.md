# JTA Percussão — Site Institucional

Site institucional desenvolvido para a **JTA Percussão**, fabricante brasileira de atabaques e instrumentos de percussão afro-brasileira, sediada em Angatuba–SP. Atende músicos, grupos de capoeira, candomblé e distribuidoras de todo o Brasil.

🔗 **Site no ar:** [jtapercussao.com.br](https://jtapercussao.com.br)

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)
![Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F97%2F100%2F100-brightgreen)

---

## 📋 Sobre o projeto

Site institucional single-page que passou por uma **refatoração técnica completa**, elevando o projeto ao padrão de produção profissional. O trabalho incluiu auditoria de performance, reescrita de componentes, otimização agressiva de imagens, implementação de SEO técnico e melhorias de acessibilidade.

O site apresenta a linha completa de instrumentos (atabaques de diversos tamanhos e trios) e acessórios (aros, peles, tensores e canoas), com contato direto via WhatsApp.

## 📊 Resultados (Lighthouse / PageSpeed Insights)

| Métrica | 📱 Mobile | 💻 Desktop |
|---------|-----------|------------|
| ⚡ Performance | **97** | **100** |
| ♿ Acessibilidade | **97** | **97** |
| ✅ Boas Práticas | **100** | **100** |
| 🔍 SEO | **100** | **100** |

### 🖼️ Destaque de otimização

Como parte da refatoração, o conjunto de imagens do site foi otimizado de **~11 MB para ~1,1 MB** — uma **redução de ~90%** — sem perda perceptível de qualidade, através de redimensionamento e recompressão, além da migração para `next/image` (AVIF/WebP automático).

## 🛠️ Stack e tecnologias

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS 4**
- **next/font** — fonte Inter (self-hosted, zero layout shift)
- **next/image** — otimização automática de imagens
- Deploy contínuo na **Vercel**

## ✨ Funcionalidades e diferenciais técnicos

- 🎨 **Design temático** — identidade afro-brasileira, hero editorial, cards de produtos e acessórios
- 📱 **Responsivo completo** — mobile, tablet e desktop, com menu mobile acessível
- 🔍 **SEO técnico avançado** — meta tags, Open Graph, Twitter Cards, JSON-LD (Schema.org: Organization, WebSite, LocalBusiness com horário de funcionamento), `sitemap.xml`, `robots.txt` e Web App Manifest
- ♿ **Acessibilidade (WCAG 2.1 AA)** — HTML semântico, skip-to-content, `aria-labels`, navegação por teclado, `focus-visible`, suporte a `prefers-reduced-motion`
- 🔒 **Security headers** — HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy
- ⚡ **Performance** — imagens otimizadas em ~90%, migração completa para `next/image`, fontes self-hosted, cache imutável de assets
- 📈 **Analytics** — Google Analytics 4 integrado
- 💬 **Formulário de contato** com validação e integração direta ao WhatsApp
- 🧩 **Arquitetura de componentes** reutilizáveis e tipagem forte com TypeScript

## 🔧 Trabalho de refatoração realizado

Este projeto partiu de uma versão inicial e foi reconstruído para produção. Principais melhorias:

- Migração de todas as imagens de `<img>` para `next/image`
- Otimização de imagens (~11 MB → ~1,1 MB)
- Adição de `next/font` (Inter) em substituição à fonte padrão
- Implementação completa de SEO técnico (JSON-LD, OG, Twitter Cards, sitemap, robots, manifest)
- Criação do `next.config.ts` com security headers e otimização de imagens
- Correção de acessibilidade (aria-labels, skip-link, semântica, `rel="noopener noreferrer"`)
- Configuração de Google Analytics 4 e Google Search Console
- Zero erros de TypeScript e zero warnings de ESLint

## 📁 Estrutura do projeto

```
src/
├── app/
│   ├── layout.tsx        # Metadata, SEO, JSON-LD, fontes, Analytics
│   ├── page.tsx          # Composição da página
│   ├── sitemap.ts        # Sitemap dinâmico
│   ├── robots.ts         # Robots.txt dinâmico
│   ├── manifest.ts       # Web App Manifest (PWA)
│   └── globals.css       # Estilos globais e acessibilidade
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Hero, About, Products, Accessories, WhyJTA, Contact
│   └── ui/               # SectionHeader
└── lib/
    ├── constants/        # Dados de instrumentos, acessórios, navegação
    └── types/            # Definições de tipos TypeScript
```

## 🚀 Como rodar localmente

```bash
# Clonar o repositório
git clone https://github.com/joaogabriel6678/jta-percussao.git
cd jta-percussao

# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build de produção
npm run build
```

O site estará disponível em `http://localhost:3000`.

## 👨‍💻 Autor

Desenvolvido por **João Gabriel Xavier Teles**

- GitHub: [@joaogabriel6678](https://github.com/joaogabriel6678)
- LinkedIn: [João Gabriel Xavier Teles](https://www.linkedin.com/in/jo%C3%A3o-gabriel-xavier-teles-969281369/)

---

## 📄 Licença

Este projeto está sob a licença MIT. O código é aberto para fins de estudo e portfólio. As marcas, imagens e conteúdos da JTA Percussão são propriedade da empresa.

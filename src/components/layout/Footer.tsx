import { NAV_ITEMS, SITE_CONFIG, WHATSAPP_BASE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/logo.png"
                alt="JTA Percussão"
                className="h-10 w-auto object-contain"
              />
              <span className="font-bold text-lg">
                JTA <span className="text-yellow-400">Percussão</span>
              </span>
            </div>
            <p className="text-blue-300 text-sm leading-relaxed">
              Fabricação de instrumentos e acessórios de percussão afro-brasileira.
              Qualidade, tradição e paixão pela música em cada peça produzida.
              Fabricado no Brasil.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-blue-300 mb-5">
              Navegação
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-blue-200 hover:text-white text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-500 inline-block flex-shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-widest text-blue-300 mb-5">
              Contato
            </h4>
            <ul className="space-y-3">
              {[
                { icon: "💬", val: SITE_CONFIG.whatsapp, href: WHATSAPP_BASE },
                { icon: "✉️", val: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` },
                { icon: "📍", val: SITE_CONFIG.location, href: undefined },
              ].map((c) => (
                <li key={c.val} className="flex items-center gap-3 text-blue-200 text-sm">
                  <span>{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="hover:text-white transition-colors break-all">
                      {c.val}
                    </a>
                  ) : (
                    <span>{c.val}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-blue-400 text-xs">
          <span>© {new Date().getFullYear()} JTA Percussão. Todos os direitos reservados.</span>
          <span>Fabricado no Brasil 🇧🇷</span>
        </div>
      </div>

      {/* Developer credit — destaque */}
      <div className="bg-gray-950 border-t-2 border-yellow-400/40 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <span className="text-gray-400 text-xs">
            Desenvolvido por{" "}
            <span className="text-yellow-400 font-bold tracking-wide">João Gabriel</span>
          </span>
          <span className="hidden sm:inline text-gray-700">|</span>
          <a
            href="https://github.com/joaogabriel6678"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joão-gabriel-xavier-teles-969281369/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
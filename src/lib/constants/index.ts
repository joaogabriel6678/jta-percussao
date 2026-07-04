import type { 
  NavItem,
  Feature,
  Product,
  Accessory
} from "@/lib/types";

// ─── Config ───────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = "5515997719681";
export const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

export const SITE_CONFIG = {
  name: "JTA Percussão",
  tagline: "Fabricado no Brasil",
  email: "jta_2015@outlook.com",
  phone: "(15) 99771-9681",
  whatsapp: "(15) 99771-9681",
  location: "Angatuba — SP, Brasil",
  hours: "Seg-Sex: 8h às 18h  •  Sáb: 8h às 13h",
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Instrumentos", href: "#instrumentos" },
  { label: "Acessórios", href: "#acessorios" },
  { label: "Contato", href: "#contato" },
];

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT_TEXT =
  "Localizada em Angatuba–SP, a JTA Percussão iniciou suas atividades em 2015 com a fabricação de atabaques. Com raízes na melhoria contínua e inspirada nos princípios do Lean Manufacturing, evoluiu para oferecer uma linha completa de instrumentos de percussão afro-brasileira.";

export const ABOUT_FEATURES: Feature[] = [
  {
    icon: "🔨",
    title: "Fabricado no Brasil",
    desc: "Cada peça é produzida com atenção aos detalhes, garantindo qualidade e padronização em todos os instrumentos.",
  },
  {
    icon: "🪵",
    title: "Materiais Selecionados",
    desc: "Utilizamos madeiras selecionadas e ambientalmente sustentáveis, além de couros naturais de alta qualidade, garantindo a melhor sonoridade e durabilidade.",
  },
  {
    icon: "🎯",
    title: "Melhoria Contínua",
    desc: "Desde 2022, aplicamos princípios de Lean Manufacturing para elevar a qualidade e eficiência de cada produto.",
  },
  {
    icon: "🌎",
    title: "Atuação Nacional",
    desc: "Presentes nas maiores distribuidoras de artigos religiosos e grupos culturais do Brasil.",
  },
];

// ─── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS: Product[] = [
  {
    name: "Trio Rum (110cm) Rumpi (100 cm) e Lê ( 90 cm) Guariúba",
    desc: "Conjunto completo com verniz Tom Guariúba — Rum (grave), Rumpi (médio) e Lê (agudo). Ideal para celebrações religiosas, grupos musicais e apresentações culturais.",
    badge: "Conjunto Completo",
    featured: true,
    img: "/images/instrumentos/trio-guariuba.jpg",
  },
  {
    name: "Trio Rum (110cm) Rumpi (100 cm) e Lê ( 90 cm) Natural",
    desc: "O clássico trio com acabamento natural. Madeira à vista com beleza única, produzido para grupos que valorizam estética e tradição.",
    badge: "Acabamento Natural",
    featured: true,
    img: "/images/instrumentos/trio-natural.jpg",
  },
  {
    name: "Atabaque 80cm Tom Guariúba",
    desc: "Atabaque de grande porte com verniz Tom Guariúba. Projeção sonora poderosa, ideal para terreiros, palcos e apresentações de grande público.",
    badge: "80cm",
    featured: true,
    img: "/images/instrumentos/atabaque-80cm-guariuba.jpg",
  },
  {
    name: "Atabaque 60cm Natural",
    desc: "Versão 60cm com acabamento natural. Madeira à vista, beleza única e som tradicional para grupos que valorizam estética e tradição.",
    badge: "Acabamento Natural",
    img: "/images/instrumentos/atabaque-60cm-natural.jpg",
  },
  {
    name: "Atabaque 60cm Tom Guariúba",
    desc: "Atabaque de médio porte com verniz Tom Guariúba. Equilíbrio perfeito entre tamanho e projeção sonora, ideal para uso em grupos culturais.",
    badge: "60cm",
    img: "/images/instrumentos/atabaque-60cm-guariuba.jpg",
  },
  {
    name: "Atabaque Macaquinho 50cm Claro",
    desc: "Compacto, versátil e perfeito para iniciantes e uso em espaços menores. Leve e sonoramente eficiente. O primeiro produto da JTA.",
    badge: "Compacto",
    img: "/images/instrumentos/macaquinho-50cm-claro.jpg",
  },
  {
    name: "Atabaque Macaquinho 50cm Tom Guariúba",
    desc: "Versão do Macaquinho com verniz Tom Guariúba — maior durabilidade e sonoridade aprimorada. Ideal para grupos e apresentações ao ar livre.",
    badge: "Tom Guariúba",
    img: "/images/instrumentos/macaquinho-50cm-guariuba.jpg",
  },
];

// ─── Accessories ──────────────────────────────────────────────────────────────

export const ACCESSORIES: Accessory[] = [
  {
    cat: "Aro",
    name: "Aro Especial Confort Aço",
    desc: "Design ergonômico Confort em aço, proporcionando maior facilidade de ajuste e conforto na execução.",
    img: "/images/acessorios/aro-confort.jpg",
  },
  {
    cat: "Aro",
    name: "Aro Simples Antiferrugem",
    desc: "Tratamento antiferrugem especial para maior durabilidade mesmo em ambientes úmidos e externos.",
    img: "/images/acessorios/aro-simples.jpg",
  },
  {
    cat: "Fixação",
    name: "Canoas",
    desc: "Canoas de qualidade superior para fixação da pele no atabaque. Materiais resistentes sem arestas cortantes e anti-ferrugem.",
    img: "/images/acessorios/canoas.jpg",
  },
  {
    cat: "Pele",
    name: "Pele de Boi",
    desc: "Pele de boi genuína, curtida de forma tradicional. Disponível nos tamanhos 40cm e 50cm. Ótima resposta sonora e resistência.",
    img: "/images/acessorios/pele-boi.jpg",
  },
  {
    cat: "Pele",
    name: "Pele de Cabra",
    desc: "Pele de cabra selecionada, disponível de 25cm a 50cm. Espessura uniforme, timbre tradicional e tom rico.",
    img: "/images/acessorios/pele-cabra.jpg",
  },
  {
    cat: "Tensor",
    name: "Tensor Curto 11cm - 1/4 de espessura - utiliza chave 11",
    desc: "Tensor de 110mm para atabaques menores. Design compacto com toda a resistência e eficiência de ajuste.",
    img: "/images/acessorios/tensor-11cm.jpg",
  },
  {
    cat: "Tensor",
    name: "Tensor Normal 13cm - 1/4 de espessura - utiliza chave 11",
    desc: "Tensor padrão de 130mm, o mais versátil da linha. Compatível com a maioria dos atabaques e aros.",
    img: "/images/acessorios/tensor-13cm.jpg",
  },
  {
    cat: "Tensor",
    name: "Tensor Especial 15cm - 5/16 de espessura - utiliza chave 13",
    desc: "Tensor de 150mm com acabamento premium e maior durabilidade. Ideal para uso profissional.",
    img: "/images/acessorios/tensor-15cm.jpg",
  },
  {
    cat: "Tensor",
    name: "Tensor 18cm - 1/4 de espessura - utiliza chave 11",
    desc: "Tensor de 180mm em aço galvanizado para atabaques de maior porte. Alta resistência ao torque e ajuste preciso.",
    img: "/images/acessorios/tensor-18cm.jpg",
  },
];

export const ACCESSORY_CAT_STYLES: Record<string, string> = {
  Aro: "bg-blue-100 text-blue-700",
  Fixação: "bg-green-100 text-green-700",
  Pele: "bg-amber-100 text-amber-700",
  Tensor: "bg-gray-100 text-gray-700",
};

// ─── Why JTA ──────────────────────────────────────────────────────────────────

export const WHY_FEATURES: Feature[] = [
  {
    icon: "🔨",
    title: "Qualidade Garantida",
    desc: "Cada instrumento é produzido com atenção aos detalhes, combinando técnica com processos padronizados de qualidade.",
  },
  {
    icon: "🪵",
    title: "Materiais Duráveis",
    desc: "Selecionamos apenas as melhores madeiras e utilizamos materiais de alta resistência ao esforço e intempéries.",
  },
  {
    icon: "✨",
    title: "Acabamento Profissional",
    desc: "Processo rigoroso de produção inspirado no Lean Manufacturing.",
  },
  {
    icon: "🤝",
    title: "Atendimento Direto",
    desc: "Atendimento personalizado via WhatsApp. Tiramos dúvidas, orientamos sobre modelos e cuidamos de cada pedido.",
  },
];

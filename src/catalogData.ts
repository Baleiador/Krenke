export interface CatalogItem {
  id: string;
  name: string;
  category: 'Rotomoldados' | 'Little Play' | 'Temáticos' | 'Aquáticos';
  ageRange: string;
  minArea: string;
  safetyArea: string;
  capacity: string;
  dimensions: string;
  description: string;
  highlights: string[];
  imageUrl: string;
  whatsappMessage: string;
}

export const CATALOG_CATEGORIES = [
  { id: 'all', name: 'Todos os Brinquedos', description: '' },
  { id: 'Rotomoldados', name: 'Rotomoldados (KMP)', description: 'Playgrounds robustos com certificação NBR 16071, ideais para áreas externas e alta intensidade.' },
  { id: 'Little Play', name: 'Little Play (KLP)', description: 'Especialmente projetados para creches, berçários e o desenvolvimento de bebês de 1 a 6 anos.' },
  { id: 'Temáticos', name: 'Temáticos (KMT)', description: 'Estações lúdicas completas em formatos de Trem, Avião, Trator ou Barco para imersão total.' },
  { id: 'Aquáticos', name: 'Aquáticos (KAQ)', description: 'Diversão que refresca. Linha de parques aquáticos com o icônico balde gigante e escorregadores integrados.' }
] as const;

export const CATALOG_PRODUCTS: CatalogItem[] = [
  // 1. Playgrounds Rotomoldados (KMP)
  {
    id: 'KMP-0101',
    name: 'Playground KMP 0101',
    category: 'Rotomoldados',
    ageRange: '5 a 12 anos',
    minArea: '20,71 m²',
    safetyArea: '57,10 m²',
    capacity: '8 crianças',
    dimensions: '4,92 m x 4,21 m',
    description: 'Sistema ideal para espaços compactos de alta exigência. Composto por torre de escalada, escorregador curvado de polietileno de alta densidade e conjunto integrado de dois balanços reforçados de aço galvanizado. Super resistente contra desgaste climático do Nordeste.',
    highlights: ['Poliuretano Ultra-UV', 'Balanços de alta resistência', 'Segurança ABNT NBR 16071/21'],
    imageUrl: '/brinquedo-1.jpg',
    whatsappMessage: 'Olá! Gostaria de receber mais informações e orçamento do Playground KMP 0101.'
  },
  {
    id: 'KMP-0102',
    name: 'Playground KMP 0102',
    category: 'Rotomoldados',
    ageRange: '5 a 12 anos',
    minArea: '22,67 m²',
    safetyArea: '60,26 m²',
    capacity: '8 crianças',
    dimensions: '4,94 m x 4,59 m',
    description: 'Oferece o diferencial do tubo escorregador curvado translúcido, criando uma experiência lúdica em túnel integrada a escada anti-escorregamento e balanços duplos de segurança.',
    highlights: ['Tubo translúcido', 'Certificação ABNT', 'Colunas térmicas'],
    imageUrl: '/brinquedo-2.jpg',
    whatsappMessage: 'Olá! Gostaria de um orçamento do modelo KMP 0102.'
  },
  {
    id: 'KMP-0201',
    name: 'Mega Playground KMP 0201',
    category: 'Rotomoldados',
    ageRange: '5 a 12 anos',
    minArea: '32,12 m²',
    safetyArea: '75,14 m²',
    capacity: '12 crianças',
    dimensions: '5,50 m x 5,84 m',
    description: 'Complexo de entretenimento com plataformas elevadas, tobogãs múltiplos com trajetórias curvas e retas, escaladas em cordas, ideal para grandes condomínios e escolas de alto padrão.',
    highlights: ['Multi-Towers', 'Tobogã Curvo', 'Anti-Estático'],
    imageUrl: '/brinquedo-3.jpg',
    whatsappMessage: 'Olá! Estou interessado no Mega Playground KMP 0201 para meu projeto.'
  },
  {
    id: 'KMP-0202',
    name: 'Playground KMP 0202',
    category: 'Rotomoldados',
    ageRange: '5 a 12 anos',
    minArea: '36,26 m²',
    safetyArea: '81,41 m²',
    capacity: '14 crianças',
    dimensions: '6,21 m x 5,84 m',
    description: 'Estrutura dupla com pontes suspensas protegidas, jogos de argolas interativos, rampas texturizadas que dão acessibilidade e escorregadores duplos lado-a-lado para o fomento das brincadeiras cooperativas.',
    highlights: ['Ponte Suspensa de Alta Segurança', 'Escorregador Duplo', 'Design Inclusivo'],
    imageUrl: '/brinquedo-5.jpg',
    whatsappMessage: 'Olá! Gostaria de cotar o Playground KMP 0202.'
  },
  {
    id: 'KMP-0204',
    name: 'Playground KMP 0204',
    category: 'Rotomoldados',
    ageRange: '5 a 12 anos',
    minArea: '34,84 m²',
    safetyArea: '79,54 m²',
    capacity: '13 crianças',
    dimensions: '6,70 m x 5,20 m',
    description: 'Equipamento monumental composto por torres temáticas adornadas com palmeiras, circuitos de passarela blindada de polietileno, painéis lúdicos para socialização e tobogã espiral rotatório.',
    highlights: ['Decorações de Palmeira', 'Passarelas blindadas', 'Tobogã caracol gigante'],
    imageUrl: '/brinquedo-6.jpg',
    whatsappMessage: 'Olá! Estou interessado em adquirir o modelo KMP 0204.'
  },
  {
    id: 'KMP-0205',
    name: 'Playground KMP 0205',
    category: 'Rotomoldados',
    ageRange: '5 a 12 anos',
    minArea: '37,23 m²',
    safetyArea: '85,26 m²',
    capacity: '14 crianças',
    dimensions: '8,76 m x 4,25 m',
    description: 'Este gigante combina o melhor de dois mundos: um complexo robusto de escorregadores integrados com um pátio de balanço triplo de alta estabilidade ancorado por correntes emborrachadas.',
    highlights: ['Três Balanços Simultâneos', 'Plataformas antiderrapantes', 'Ferragens galvanizadas a fogo'],
    imageUrl: '/brinquedo-2.jpg',
    whatsappMessage: 'Olá! Poderia me enviar o catálogo técnico e o preço do KMP 0205?'
  },
  {
    id: 'KMP-0502',
    name: 'Playground KMP 0502',
    category: 'Rotomoldados',
    ageRange: '5 a 12 anos',
    minArea: '88,72 m²',
    safetyArea: '154,78 m²',
    capacity: '31 crianças',
    dimensions: '8,20 m x 10,82 m',
    description: 'Mais de 88m² de puro divertimento. Um verdadeiro labirinto de estímulo motor infantil. Contém várias pontes de corda de alta resistência, rampas de madeira plástica reciclável, tobogã curvado, túnel interativo e plataformas múltiplos níveis.',
    highlights: ['Madeira Plástica Ecológica', 'Suporta 31 crianças simultaneamente', 'Área de aventuras gigante'],
    imageUrl: '/brinquedo-1.jpg',
    whatsappMessage: 'Olá, gostaria de solicitar orçamento para o playground em escala colossal KMP 0502!'
  },

  // 2. Little Play (KLP)
  {
    id: 'KLP-0101',
    name: 'Little Play KLP 0101',
    category: 'Little Play',
    ageRange: '1 a 6 anos',
    minArea: '8,50 m²',
    safetyArea: '35,20 m²',
    capacity: '7 crianças',
    dimensions: '2,50 m x 3,40 m',
    description: 'A resposta perfeita para creches e escolas infantis e áreas de berçários. Foco no desenvolvimento infantil global: coordenação motora, equilíbrio e sensações táteis. Rampas baixas com pegadores adaptados para as mãozinhas de bebês.',
    highlights: ['Cantos 100% Arredondados', 'Rampas de inclinação suave', 'Desenvolvimento pedagógico de 1 a 6 anos'],
    imageUrl: '/brinquedo-5.jpg',
    whatsappMessage: 'Olá, procuro brinquedos de creche. Gostaria de cotar o Little Play KLP 0101.'
  },
  {
    id: 'KLP-0102',
    name: 'Little Play KLP 0102',
    category: 'Little Play',
    ageRange: '1 a 6 anos',
    minArea: '5,75 m²',
    safetyArea: '29,15 m²',
    capacity: '7 crianças',
    dimensions: '2,30 m x 2,50 m',
    description: 'Playground super compacto excelente para brinquedotecas residenciais, salas de jogos de condomínios internos ou espaço de recreação climatizado. Brinquedo seguro projetado para máximo estímulo sem risco.',
    highlights: ['Ideal para Ambientes Internos', 'Piso Térmico Amigável', 'Estímulo Sensorial e Tátil'],
    imageUrl: '/brinquedo-6.jpg',
    whatsappMessage: 'Olá! Gostaria de um orçamento do Little Play KLP 0102 para espaço interno.'
  },
  {
    id: 'KLP-0202',
    name: 'Little Play KLP 0202',
    category: 'Little Play',
    ageRange: '1 a 6 anos',
    minArea: '14,28 m²',
    safetyArea: '46,08 m²',
    capacity: '13 crianças',
    dimensions: '3,40 m x 4,20 m',
    description: 'Incrível circuito de túneis de engatinhar translúcidos conectando duas torres interativas de baixa altura. Estimula a exploração visual, socialização cooperativa e a imaginação infantil.',
    highlights: ['Duas mini-torres conectadas', 'Estimula a socialização de bebês', 'Túneis transparentes de fácil supervisão'],
    imageUrl: '/brinquedo-3.jpg',
    whatsappMessage: 'Olá! Gostaria de saber valores do Little Play KLP 0202.'
  },

  // 3. Temáticos (KMT)
  {
    id: 'KMT-TREM',
    name: 'Playground Temático KMT Trem',
    category: 'Temáticos',
    ageRange: '3 a 7 anos',
    minArea: '9,60 m²',
    safetyArea: '37,80 m²',
    capacity: '7 crianças',
    dimensions: '4,00 m x 2,40 m',
    description: 'Brinquedo em formato de locomotiva de trem clássico. Composto por painéis realistas em polietileno, volante de simulação, cabine de maquinista para exploração de histórias e um escorregador lateral.',
    highlights: ['Formatos Realistas de Trem', 'Volante Giratório Interativo', 'Estímulo de Faz de Conta'],
    imageUrl: '/brinquedo-1.jpg',
    whatsappMessage: 'Olá! Adorei o modelo de Trem KMT. Gostaria de um orçamento.'
  },
  {
    id: 'KMT-TRATOR',
    name: 'Playground Temático KMT Trator',
    category: 'Temáticos',
    ageRange: '5 a 12 anos',
    minArea: '17,67 m²',
    safetyArea: '53,07 m²',
    capacity: '23 crianças',
    dimensions: '3,10 m x 5,70 m',
    description: 'Imponente trator verde e amarelo com rodas em escala real fabricadas em rotonível. Os pequenos pilotos sobem na cabine técnica do trator, acionam as alavancas lúdicas e deslizam nos múltiplos escorregadores integrados.',
    highlights: ['Ideal para Sítios e Chácaras', 'Tema focado em agricultura lúdica', 'Suporta 23 crianças'],
    imageUrl: '/brinquedo-2.jpg',
    whatsappMessage: 'Olá Silvio! Gostaria do preço do Playground Trator KMT.'
  },
  {
    id: 'KMT-AVIAO',
    name: 'Playground Gigante KMT Avião',
    category: 'Temáticos',
    ageRange: '5 a 12 anos',
    minArea: '161,13 m²',
    safetyArea: '246,33 m²',
    capacity: '50 crianças',
    dimensions: '12,10 m x 12,30 m',
    description: 'Um verdadeiro marco para qualquer condomínio, praça ou parque temático do Nordeste. Estrutura monumental de caça aviador com 12 metros de asas e cabine de voo. As crianças exploram o avião por dentro e saem através de 3 escorregadores tubulares em alturas variadas!',
    highlights: ['Atração Principal Monumental', 'Capacidade para 50 crianças simultâneas', 'Impacto Visual Garantido'],
    imageUrl: '/brinquedo-3.jpg',
    whatsappMessage: 'Olá Silvio Cavalcanti, preciso de informações comerciais sobre o grandioso Playground Avião KMT.'
  },
  {
    id: 'KMT-BARCO',
    name: 'Playground Temático KMT Barco',
    category: 'Temáticos',
    ageRange: '3 a 12 anos',
    minArea: '47,60 m²',
    safetyArea: '98,00 m²',
    capacity: '25 crianças',
    dimensions: '7,00 m x 6,80 m',
    description: 'Embarque em uma aventura pirata de tirar o fôlego nesta réplica de navio caribenho de alta resistência. Equipado com timão de comandante de navio real, escotas de corda e escorregadores nas cores das ondas do mar.',
    highlights: ['Painéis de Popa e Proa Realistas', 'Timão rotatório que gira livremente', 'Fomento da criatividade artística'],
    imageUrl: '/brinquedo-6.jpg',
    whatsappMessage: 'Olá! Desejo cotar o Navio Pirata KMT Barco para o meu empreendimento.'
  },

  // 4. Aquáticos (KAQ)
  {
    id: 'KAQ-0201',
    name: 'Splash Park KAQ 0201',
    category: 'Aquáticos',
    ageRange: '5 a 12 anos',
    minArea: '23,38 m²',
    safetyArea: '64,68 m²',
    capacity: '11 crianças',
    dimensions: '4,70 m x 5,40 m',
    description: 'Leve a diversão de parques aquáticos profissionais à sua piscina ou parque infantil molhado. Estrutura blindada contra ataques de cloro e sol. No topo, há o icônico balde gigante de tombamento automático que enche e derrama um turbilhão d’água refrescante.',
    highlights: ['Balde Splash Automático', 'Tratamento Especial Anti-Cloro', 'Escorregadores úmidos de alta velocidade'],
    imageUrl: '/brinquedo-1.jpg',
    whatsappMessage: 'Olá! Gostaria de um orçamento do Splash Park KAQ 0201 para piscina.'
  },
  {
    id: 'KAQ-0301',
    name: 'Splash Park KAQ 0301',
    category: 'Aquáticos',
    ageRange: '5 a 12 anos',
    minArea: '36,72 m²',
    safetyArea: '82,62 m²',
    capacity: '13 crianças',
    dimensions: '5,10 m x 7,20 m',
    description: 'Estação aquática estendida que une três jatos de spray de água no nível do solo com duas torres molhadas equipadas com baldes menores de recarga rápida e múltiplos escorregadores simultâneos.',
    highlights: ['Múltiplos escorregadores molhados', 'Jatos de jateamento integrados', 'Diversão refrescante com total aderência'],
    imageUrl: '/brinquedo-2.jpg',
    whatsappMessage: 'Olá! Gostaria de mais detalhes do modelo aquático KAQ 0301.'
  },
  {
    id: 'KAQ-0401',
    name: 'Splash Park KAQ 0401',
    category: 'Aquáticos',
    ageRange: '3 a 12 anos',
    minArea: '31,62 m²',
    safetyArea: '74,52 m²',
    capacity: '19 crianças',
    dimensions: '5,10 m x 6,20 m',
    description: 'Lindo e refrescante playground aquático florido com sprays d’água saindo de girassóis e palmeiras decorativas. Estrutura inclusiva e antiderrapante garantindo que a brincadeira ocorra com tranquilidade absoluta.',
    highlights: ['Sprays de Girassol e Cloro-Resistente', 'Piso Antiderrapante Integrado', 'Totalmente Seguro de Cargas Estáticas'],
    imageUrl: '/brinquedo-3.jpg',
    whatsappMessage: 'Olá! Gostaria de cotar o Splash Park KAQ 0401. Abraços.'
  }
];

import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Linkedin, MessageCircle, ChevronRight, ChevronLeft, ChevronDown, ShieldCheck, Wrench, Smile, Star, Plus, Palmtree, Search, Baby, Maximize2, Users, Check, Download, FileText } from 'lucide-react';
import { motion } from 'motion/react';
import { CATALOG_PRODUCTS, CATALOG_CATEGORIES, CatalogItem } from './catalogData';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [heroCarouselIndex, setHeroCarouselIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Catalogue states
  const [selectedCatalogCategory, setSelectedCatalogCategory] = useState<string>('all');
  const [searchCatalogQuery, setSearchCatalogQuery] = useState<string>('');
  const [selectedCatalogItem, setSelectedCatalogItem] = useState<CatalogItem | null>(null);

  const WHATSAPP_LINK = "https://wa.me/5581998312244";
  const INSTAGRAM_LINK = "https://www.instagram.com/krenkenordeste?igsh=MXM0em45azJpdGFmNA%3D%3D";

  const HERO_IMAGES = [
    "https://i.postimg.cc/t44B7x0y/imagem-1.jpg",
    "https://i.postimg.cc/133v4qxn/imagem-11.jpg",
    "https://i.postimg.cc/fRR8k943/imagem-10.jpg",
    "https://i.postimg.cc/JzzptkwB/imagem-13.jpg"
  ];

  const GALLERY_IMAGES = [
    { src: "https://i.postimg.cc/t44B7x0y/imagem-1.jpg", title: "Playground Completo", desc: "Estrutura multifuncional para todas as idades", color: "darkblue" },
    { src: "https://i.postimg.cc/6ppMTvst/imagem-2.jpg", title: "Estação de Diversão", desc: "Cores vibrantes e muita interatividade", color: "purple" },
    { src: "https://i.postimg.cc/Hkk6jyGp/imagem-4.jpg", title: "Circuito Aventura", desc: "Desafios que estimulam a coordenação", color: "orange" },
    { src: "https://i.postimg.cc/8zzZs68T/imagem-5.jpg", title: "Parque Infantil", desc: "Segurança e alegria em cada detalhe", color: "green" },
    { src: "https://i.postimg.cc/dVV5DyM3/imagem-6.jpg", title: "Estrutura Lúdica", desc: "Design moderno que encanta as crianças", color: "blue" },
    { src: "https://i.postimg.cc/K8804MX8/imagem-7.jpg", title: "Complexo de Brincadeiras", desc: "Múltiplas atividades em um só lugar", color: "pink" },
    { src: "https://i.postimg.cc/6ppMTvsQ/imagem-8.jpg", title: "Playground Premium", desc: "Acabamento impecável e alta durabilidade", color: "darkblue" },
    { src: "https://i.postimg.cc/8zzZs685/imagem-9.jpg", title: "Área de Recreação", desc: "O espaço perfeito para gastar energia", color: "purple" },
    { src: "https://i.postimg.cc/fRR8k943/imagem-10.jpg", title: "Estação Interativa", desc: "Brincadeira que desenvolve habilidades", color: "orange" },
    { src: "https://i.postimg.cc/133v4qxn/imagem-11.jpg", title: "Parque Colorido", desc: "Um mundo de fantasia e movimento", color: "green" },
    { src: "https://i.postimg.cc/YCCdjWcL/imagem-12.jpg", title: "Circuito Divertido", desc: "Escorregadores e obstáculos seguros", color: "blue" },
    { src: "https://i.postimg.cc/JzzptkwB/imagem-13.jpg", title: "Mega Playground", desc: "A atração principal de qualquer espaço", color: "pink" }
  ];

  const FAQS = [
    { 
      question: "Quais materiais são utilizados na fabricação?", 
      answer: "Trabalhamos com materiais de ponta como aço galvanizado e plásticos rotomoldados de alta resistência (polietileno), garantindo segurança, durabilidade e proteção contra raios solares UV e intempéries." 
    },
    { 
      question: "Criam e fabricam projetos sob medida para o meu espaço?", 
      answer: "Sim! Entendemos que cada espaço é único. Nossa equipe técnica projeta soluções flexíveis e personalizadas sob medida para a sua necessidade, seja em escolas, condomínios ou praças." 
    },
    { 
      question: "Como funciona a manutenção e garantia dos brinquedos?", 
      answer: "Oferecemos garantia estrutural de fábrica e possuímos uma equipe técnica especializada para prestar total suporte e manutenção preventiva ou corretiva necessária." 
    },
    { 
      question: "Atendem toda região do Nordeste?", 
      answer: "Sim! Somos pioneiros no Nordeste e temos capacidade logística montada para atender e instalar nossos projetos em qualquer estado e cidade da região com rapidez e eficiência." 
    },
    { 
      question: "Os brinquedos são seguros e seguem as normas da ABNT?", 
      answer: "Com certeza, nossa prioridade número um é a segurança. Todos os nossos produtos e pisos são fabricados rigorosamente de acordo com as normas da ABNT, com total atenção técnica infantil para minimizar qualquer risco e proporcionar apenas diversão aos pequenos." 
    }
  ];

  // Hero Carousel Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCarouselIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = ({ isDarkBg = false, isScrolled = false }: { isDarkBg?: boolean, isScrolled?: boolean }) => (
    <div className={`flex flex-col items-center justify-center transition-all duration-500 origin-left 
      ${isScrolled ? 'scale-[0.45] sm:scale-[0.55] md:scale-75' : 'scale-[0.5] sm:scale-[0.65] md:scale-90'} 
      md:origin-center lg:origin-left`}>
      <div className={`flex flex-col items-center bg-white rounded-3xl shadow-sm border border-slate-100 relative group transition-all duration-500
        ${isScrolled ? 'px-4 py-2' : 'px-8 py-5'}`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-brand-green)] via-[var(--color-brand-blue)] to-[var(--color-brand-pink)] opacity-50"></div>
        
        {/* Branding header: Stamp Effect for Krenke with Brand Colors */}
        <div className={`flex items-center justify-between w-full transition-all duration-500 ${isScrolled ? 'mb-1 gap-4' : 'mb-3 gap-8'}`}>
           <div className={`bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl shadow-inner transition-all duration-500 flex items-center justify-center
            ${isScrolled ? 'p-1.5' : 'p-2'}`}>
            <Palmtree className={`${isScrolled ? 'w-4 h-4' : 'w-8 h-8'} text-[var(--color-brand-green)]`} />
           </div>
           
            {/* Stamp: Parceiro Krenke Colorful */}
           <div className={`relative transition-all duration-700 ${isScrolled ? 'scale-75 translate-x-4 opacity-0 md:opacity-100 md:translate-x-0' : 'scale-100'}`}>
              <div className="border-2 border-[var(--color-brand-blue)]/30 border-dashed rounded-full p-2.5 -rotate-12 flex flex-col items-center justify-center shadow-sm group-hover:rotate-0 transition-all duration-500 hover:border-solid hover:scale-110 cursor-help bg-white/40 backdrop-blur-[1px]">
                <div className="flex gap-0.5 mb-0.5">
                  <Smile className="w-2.5 h-2.5 text-[var(--color-brand-green)]" />
                  <Smile className="w-2.5 h-2.5 text-[var(--color-brand-pink)]" />
                </div>
                <div className="flex items-center gap-0.5">
                  <span className="text-[7px] font-black tracking-tighter text-[var(--color-brand-green)]">K</span>
                  <span className="text-[7px] font-black tracking-tighter text-[var(--color-brand-blue)]">R</span>
                  <span className="text-[7px] font-black tracking-tighter text-[var(--color-brand-darkblue)]">E</span>
                  <span className="text-[7px] font-black tracking-tighter text-[var(--color-brand-orange)]">N</span>
                  <span className="text-[7px] font-black tracking-tighter text-[var(--color-brand-purple)]">K</span>
                  <span className="text-[7px] font-black tracking-tighter text-[var(--color-brand-pink)]">E</span>
                </div>
                <div className="h-[1px] w-6 bg-slate-200 my-0.5"></div>
                <span className="text-[5px] font-black text-slate-400 uppercase leading-none tracking-tighter">PARCEIRO BRASIL</span>
              </div>
              <div className="absolute -top-1 -right-1 bg-red-500 text-[6px] text-white font-black px-1 rounded-full rotate-12 shadow-sm border border-white">OFICIAL</div>
           </div>
        </div>

        <div className={`font-black tracking-tight flex items-center leading-none transition-all duration-500 ${isScrolled ? 'text-2xl md:text-3xl' : 'text-5xl'}`}>
          <span className="text-[var(--color-brand-green)]">P</span>
          <span className="text-[var(--color-brand-orange)]">A</span>
          <span className="text-[var(--color-brand-blue)]">L</span>
          <span className="text-[var(--color-brand-purple)]">M</span>
          <span className="text-[var(--color-brand-orange)]">A</span>
          <span className="text-[var(--color-brand-darkblue)]">R</span>
          <span className="text-[var(--color-brand-pink)]">E</span>
          <span className="text-[var(--color-brand-green)]">S</span>
        </div>
        
        <div className={`flex items-center gap-3 w-full transition-all duration-500 ${isScrolled ? 'mt-1' : 'mt-3'}`}>
          <div className="h-[2px] flex-1 bg-[var(--color-brand-green)] rounded-full"></div>
          <span className={`font-black tracking-[0.25em] text-[var(--color-brand-blue)] uppercase transition-all duration-500 ${isScrolled ? 'text-[7px] md:text-[9px]' : 'text-[12px]'}`}>Playgrounds</span>
          <div className="h-[2px] flex-1 bg-[var(--color-brand-green)] rounded-full"></div>
        </div>
        
        {!isScrolled && (
          <span className="text-[9px] font-bold text-slate-400 uppercase mt-3 text-center border-t border-slate-100 pt-2 w-full">Parques, playgrounds e soluções recreativas</span>
        )}
      </div>
    </div>
  );

  const getCategoryColorClasses = (category: string) => {
    switch (category) {
      case 'Rotomoldados':
        return {
          bg: 'bg-emerald-50',
          text: 'text-emerald-700',
          border: 'border-emerald-200',
          badge: 'bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)]',
          accent: 'bg-[var(--color-brand-green)]'
        };
      case 'Little Play':
        return {
          bg: 'bg-pink-50',
          text: 'text-pink-700',
          border: 'border-pink-200',
          badge: 'bg-[var(--color-brand-pink)]/10 text-[var(--color-brand-pink)]',
          accent: 'bg-[var(--color-brand-pink)]'
        };
      case 'Temáticos':
        return {
          bg: 'bg-orange-50',
          text: 'text-orange-700',
          border: 'border-orange-200',
          badge: 'bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)]',
          accent: 'bg-[var(--color-brand-orange)]'
        };
      case 'Aquáticos':
        return {
          bg: 'bg-sky-50',
          text: 'text-sky-700',
          border: 'border-sky-200',
          badge: 'bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)]',
          accent: 'bg-[var(--color-brand-blue)]'
        };
      default:
        return {
          bg: 'bg-slate-50',
          text: 'text-slate-700',
          border: 'border-slate-200',
          badge: 'bg-slate-100 text-slate-700',
          accent: 'bg-slate-500'
        };
    }
  };

  const filteredCatalogProducts = CATALOG_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCatalogCategory === 'all' || product.category === selectedCatalogCategory;
    const query = searchCatalogQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesName = product.name.toLowerCase().includes(query);
    const matchesId = product.id.toLowerCase().includes(query);
    const matchesDesc = product.description.toLowerCase().includes(query);
    const matchesAge = product.ageRange.toLowerCase().includes(query);
    const matchesHighlights = product.highlights.some(h => h.toLowerCase().includes(query));

    return matchesCategory && (matchesName || matchesId || matchesDesc || matchesAge || matchesHighlights);
  });

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-slate-900 font-sans selection:bg-[var(--color-brand-blue)] selection:text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-1 md:py-2' : 'bg-transparent py-4 md:py-6'}`}>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between transition-all duration-500 ${isScrolled ? 'items-center' : 'items-start md:items-center'}`}>
          <a href="#" className="block transition-transform active:scale-95">
            <Logo isDarkBg={!isScrolled} isScrolled={isScrolled} />
          </a>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 font-bold transition-colors duration-300 ${!isScrolled ? 'text-white/90 drop-shadow-md' : 'text-slate-600'}`}>
            <a href="#conheca-nos" className={`transition-colors ${!isScrolled ? 'hover:text-white' : 'hover:text-[var(--color-brand-pink)]'}`}>Conheça-nos</a>
            <a href="#produtos" className={`transition-colors ${!isScrolled ? 'hover:text-white' : 'hover:text-[var(--color-brand-blue)]'}`}>Projetos</a>
            <a href="#catalogo" className={`transition-colors ${!isScrolled ? 'hover:text-white' : 'hover:text-[var(--color-brand-green)]'}`}>Catálogo 2026</a>
            <a href="#contato" className={`transition-colors ${!isScrolled ? 'hover:text-white' : 'hover:text-[var(--color-brand-orange)]'}`}>Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-green)] hover:bg-[#008f45] text-white px-6 py-3 rounded-full shadow-lg transition-all hover:-translate-y-1 active:translate-y-0 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden text-slate-800 p-2.5 bg-white rounded-full shadow-lg border border-slate-100 transition-all active:scale-90 ${isScrolled ? 'mt-0 scale-90' : 'mt-2'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6 text-[var(--color-brand-blue)]" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-6 flex flex-col gap-6 font-bold text-slate-600 border-t border-slate-100"
          >
            <a href="#conheca-nos" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg hover:text-[var(--color-brand-pink)]">Conheça-nos</a>
            <a href="#produtos" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg hover:text-[var(--color-brand-blue)]">Projetos</a>
            <a href="#catalogo" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg hover:text-[var(--color-brand-green)]">Catálogo 2026</a>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg hover:text-[var(--color-brand-orange)]">Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-green)] text-white px-6 py-4 rounded-2xl text-center shadow-lg flex items-center justify-center gap-2 text-lg">
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-64 sm:pt-72 md:pt-56 pb-20 lg:pt-64 lg:pb-32 overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={img}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === heroCarouselIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={img} 
                alt="Background" 
                className="w-full h-full object-cover" 
                loading={idx === 0 ? "eager" : "lazy"}
                fetchPriority={idx === 0 ? "high" : "auto"}
              />
            </div>
          ))}
          {/* Dark Overlay for Text Readability - slightly stronger at top for logo/header */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80 backdrop-blur-[2px]"></div>
        </div>

        {/* Decorative background blobs - tuned down to look good over dark bg */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-50 mix-blend-screen hidden md:block">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-blue)]/30 blur-[100px]"></div>
          <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[var(--color-brand-pink)]/30 blur-[100px]"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-orange)]/30 blur-[100px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-[var(--color-brand-green)]/30 blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md shadow-md border border-white/20 text-white font-bold text-sm mb-8"
          >
            <Star className="w-4 h-4 text-[var(--color-brand-orange)] fill-[var(--color-brand-orange)] drop-shadow-sm" />
            <span className="drop-shadow-md">Fabricando Sonhos em Escala Gigante</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mb-6 drop-shadow-lg"
          >
            A diversão não tem limites quando o tamanho é <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4db8ff] via-[#b366ff] to-[#ff4d94]">gigante</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/90 max-w-2xl mb-10 font-medium leading-relaxed drop-shadow-md"
          >
            Criamos estruturas lúdicas monumentais que transformam qualquer espaço em uma aventura inesquecível, com total segurança e qualidade.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-pink)] hover:bg-[#d0007b] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[0_0_20px_rgba(236,0,140,0.4)] transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Falar com Sílvio Cavalcanti <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#produtos" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all hover:-translate-y-1 flex items-center justify-center">
              Ver Projetos
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="conheca-nos" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[var(--color-brand-green)] via-[var(--color-brand-blue)] to-[var(--color-brand-pink)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
                Expertise em criar <span className="text-[var(--color-brand-orange)]">estruturas gigantes</span> e seguras.
              </h2>
              <p className="text-lg text-slate-600 mb-8 font-medium leading-relaxed">
                Na Palmares Playgrounds, não construímos apenas brinquedos; nós projetamos experiências imersivas. Nossa equipe trabalha em conjunto para garantir que cada projeto gigante seja visualmente deslumbrante e estruturalmente impecável.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-green)]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <ShieldCheck className="w-7 h-7 text-[var(--color-brand-green)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Segurança em Primeiro Lugar</h3>
                    <p className="text-slate-600 text-lg">Todos os nossos brinquedos passam por rigorosos testes de carga e seguem as normas mais estritas de segurança infantil.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-brand-blue)]/10 flex items-center justify-center shrink-0 shadow-inner">
                    <Wrench className="w-7 h-7 text-[var(--color-brand-blue)]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">Materiais Premium</h3>
                    <p className="text-slate-600 text-lg">Utilizamos apenas materiais de alta durabilidade, resistentes ao clima e ao uso intenso, garantindo longevidade.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 relative shadow-2xl border-8 border-white flex items-center justify-center">
                <iframe 
                  src="https://www.instagram.com/p/DCMqOlqpOpz/embed" 
                  className="absolute inset-0 w-full h-full border-0"
                  scrolling="no"
                  allowtransparency="true"
                  allow="encrypted-media"
                  loading="lazy"
                ></iframe>
                <div className="absolute inset-0 border-4 border-[var(--color-brand-blue)]/20 rounded-[2.5rem] pointer-events-none"></div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border-2 border-[var(--color-brand-pink)]/20 transform -rotate-3 z-10">
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-black text-[var(--color-brand-pink)]">+30</div>
                  <div className="text-base font-bold text-slate-700 leading-tight">Anos de<br/>Experiência</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="produtos" className="py-24 bg-[#F4F7FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-brand-darkblue)] mb-6">Nossos Projetos</h2>
            <p className="text-xl text-slate-600 font-medium">
              Explore nossa galeria de brinquedos gigantes. Cada peça é desenhada para encantar e construída para durar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
            {GALLERY_IMAGES.map((item, index) => (
              <div key={index} onClick={() => setLightboxIndex(index)} className={`group relative aspect-[4/5] rounded-3xl overflow-hidden bg-slate-200 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border-4 border-white ${index % 3 === 1 ? 'lg:translate-y-8' : ''}`}>
                <img 
                  src={item.src} 
                  alt={item.title} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-[var(--color-brand-${item.color})]/90 via-[var(--color-brand-${item.color})]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8`}>
                  <h3 className="text-white text-3xl font-black mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{item.title}</h3>
                  <p className="text-white/90 font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogue Section */}
      <section id="catalogo" className="py-24 bg-[#FAFBFD] relative overflow-hidden border-y border-slate-100">
        {/* Dynamic header brand banner element */}
        <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[var(--color-brand-green)] via-[var(--color-brand-blue)] to-[var(--color-brand-pink)]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)] text-xs font-black uppercase tracking-wider mb-4 border border-[var(--color-brand-orange)]/20 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[var(--color-brand-orange)]" /> Catálogo Oficial Krenke 2026
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-brand-darkblue)] mb-6">
              Brincando No Mundo Real
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium">
              Consulte todas as especificações técnicas, áreas de segurança exigidas pelas normas da ABNT e capacidades de cada equipamento Krenke. Clique no brinquedo para cotar no WhatsApp.
            </p>

            {/* Premium Download Catalogue Action Area */}
            <div className="mt-8 flex items-center justify-center">
              <a
                href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Olá Sílvio Cavalcanti! Gostaria de receber o PDF completo em alta definição do Catálogo Oficial Krenke Playgrounds 2026 para analisar as opções!")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[var(--color-brand-green)] hover:bg-[#008f45] text-white text-sm font-black uppercase tracking-wider rounded-2xl shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 shrink-0 animate-bounce" /> Solicitar PDF do Catálogo Completo (WhatsApp)
              </a>
            </div>
          </div>

          {/* Search & Categories Combo Box */}
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-5xl mx-auto mb-12 flex flex-col gap-6">
            {/* Search Input field */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400" />
              </span>
              <input
                type="text"
                value={searchCatalogQuery}
                onChange={(e) => setSearchCatalogQuery(e.target.value)}
                placeholder="Busque por código (ex: KMP 0101, KLP), faixa etária, ou palavra-chave..."
                className="block w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-50 border-2 border-slate-100 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[var(--color-brand-blue)] focus:bg-white text-lg font-medium transition-all"
              />
              {searchCatalogQuery && (
                <button
                  type="button"
                  onClick={() => setSearchCatalogQuery('')}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-red-500 font-bold"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Category selections */}
            <div>
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest block mb-3">
                Filtrar por Linha de Equipamento:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {CATALOG_CATEGORIES.map((cat) => {
                  const isActive = selectedCatalogCategory === cat.id;
                  let ColorStyle = '';

                  switch (cat.id) {
                    case 'all':
                      ColorStyle = isActive 
                        ? 'bg-slate-800 text-white shadow-md' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100';
                      break;
                    case 'Rotomoldados':
                      ColorStyle = isActive 
                        ? 'bg-[var(--color-brand-green)] text-white shadow-[0_4px_12px_rgba(0,186,104,0.3)]' 
                        : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100';
                      break;
                    case 'Little Play':
                      ColorStyle = isActive 
                        ? 'bg-[var(--color-brand-pink)] text-white shadow-[0_4px_12px_rgba(236,0,140,0.3)]' 
                        : 'bg-pink-50 text-pink-700 hover:bg-pink-100';
                      break;
                    case 'Temáticos':
                      ColorStyle = isActive 
                        ? 'bg-[var(--color-brand-orange)] text-white shadow-[0_4px_12px_rgba(242,101,34,0.3)]' 
                        : 'bg-orange-50 text-orange-700 hover:bg-orange-100';
                      break;
                    case 'Aquáticos':
                      ColorStyle = isActive 
                        ? 'bg-[var(--color-brand-blue)] text-white shadow-[0_4px_12px_rgba(0,174,239,0.3)]' 
                        : 'bg-sky-50 text-sky-700 hover:bg-sky-100';
                      break;
                  }

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCatalogCategory(cat.id)}
                      className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all active:scale-95 duration-200 border border-transparent whitespace-nowrap ${ColorStyle}`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Category description explanation banner */}
          {selectedCatalogCategory !== 'all' && (
            <div className="max-w-5xl mx-auto mb-8 p-5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 font-medium text-sm flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full shrink-0 bg-[var(--color-brand-orange)]"></span>
              <span>
                {CATALOG_CATEGORIES.find(c => c.id === selectedCatalogCategory)?.description}
              </span>
            </div>
          )}

          {/* Grid products display */}
          {filteredCatalogProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8 max-w-xl mx-auto shadow-md">
              <Search className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-black text-slate-700 mb-2">Nenhum brinquedo encontrado</h3>
              <p className="text-slate-500 font-medium">Tente ajustar a sua busca ou limpar os filtros para visualizar outras opções sofisticadas.</p>
              <button
                type="button"
                onClick={() => { setSearchCatalogQuery(''); setSelectedCatalogCategory('all'); }}
                className="mt-6 font-bold text-sm bg-slate-800 text-white px-5 py-2.5 rounded-xl transition hover:bg-slate-700"
              >
                Resetar Filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredCatalogProducts.map((product) => {
                const colors = getCategoryColorClasses(product.category);
                return (
                  <div
                    key={product.id}
                    className="bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1.5"
                  >
                    {/* Upper illustration segment */}
                    <div className="relative aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-3 overflow-hidden">
                      {/* Accent colors on frame */}
                      <div className={`absolute top-0 left-0 w-full h-[5px] ${colors.accent}`}></div>
                      
                      {/* Line Tag Badge */}
                      <span className={`absolute top-4 left-4 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full ${colors.badge} border border-current/10 z-10 shadow-sm`}>
                        {product.category}
                      </span>

                      {/* Display image fallback nicely in referrers */}
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-all duration-500 shadow-sm"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop";
                        }}
                      />
                    </div>

                    {/* Metadata attributes section */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-[10px] font-black text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">
                            {product.id}
                          </span>
                        </div>
                        <h3 className="text-lg font-black text-slate-800 group-hover:text-[var(--color-brand-blue)] transition-colors line-clamp-1 mb-2">
                          {product.name}
                        </h3>
                        <p className="text-slate-500 text-xs font-medium line-clamp-2 leading-relaxed mb-4">
                          {product.description}
                        </p>
                      </div>

                      {/* Mini spec table block */}
                      <div className="space-y-2 border-t border-slate-100 pt-4">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                          <span className="flex items-center gap-1.5 text-slate-400"><Baby className="w-3.5 h-3.5" /> Faixa Etária</span>
                          <span>{product.ageRange}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                          <span className="flex items-center gap-1.5 text-slate-400"><Users className="w-3.5 h-3.5" /> Capacidade</span>
                          <span>{product.capacity}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
                          <span className="flex items-center gap-1.5 text-slate-400"><ShieldCheck className="w-3.5 h-3.5" /> Área Mínima</span>
                          <span className="font-mono text-[10px] font-black text-slate-700 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">{product.minArea}</span>
                        </div>
                      </div>

                      {/* Detail action */}
                      <div className="mt-5">
                        <button
                          type="button"
                          onClick={() => setSelectedCatalogItem(product)}
                          className="w-full bg-slate-50 hover:bg-slate-100 text-slate-700 py-3 rounded-2xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm group/btn border border-slate-100"
                        >
                          Ver Ficha Técnica
                          <Maximize2 className="w-3 h-3 text-slate-400 group-hover/btn:scale-110 transition-transform" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal Overlay Dialog */}
      {selectedCatalogItem !== null && (
        <div 
          className="fixed inset-0 z-[110] bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedCatalogItem(null)}
        >
          <div 
            className="relative bg-white rounded-[2.5rem] w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-100 my-8 scale-100 transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header decorator line */}
            <div className={`h-2.5 w-full ${getCategoryColorClasses(selectedCatalogItem.category).accent}`}></div>

            {/* Close trigger button */}
            <button 
              type="button"
              onClick={() => setSelectedCatalogItem(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-red-500 transition-all bg-slate-100 hover:bg-slate-200 p-2 rounded-full z-10"
              aria-label="Minimizar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-5 gap-8 items-start">
                
                {/* Left image and identification code tags */}
                <div className="md:col-span-2 space-y-4">
                  <div className="aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center p-2 relative overflow-hidden shadow-sm">
                    <img 
                      src={selectedCatalogItem.imageUrl} 
                      alt={selectedCatalogItem.name} 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-xl shadow-sm"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop";
                      }}
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1 text-center bg-slate-50 rounded-xl p-3 border border-slate-100 shadow-sm">
                    <span className="text-[9px] font-black tracking-widest text-slate-400 uppercase">
                      Modelo Oficial Krenke
                    </span>
                    <span className="font-mono font-extrabold text-slate-800 text-sm">
                      Ref: {selectedCatalogItem.id}
                    </span>
                  </div>
                </div>

                {/* Right detailed table and spec definitions */}
                <div className="md:col-span-3 space-y-5">
                  <div>
                    <span className={`inline-block text-[9px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full mb-2 ${getCategoryColorClasses(selectedCatalogItem.category).badge}`}>
                      Linha {selectedCatalogItem.category}
                    </span>
                    <h3 className="text-2xl font-black text-slate-800">
                      {selectedCatalogItem.name}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed font-semibold">
                    {selectedCatalogItem.description}
                  </p>

                  {/* Complete specifications table card context */}
                  <div className="bg-slate-50 rounded-2xl border border-slate-100 p-4 space-y-3 shadow-inner">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Especificações de Segurança (ABNT):
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold text-slate-600">
                      <div className="p-2.5 bg-white rounded-xl border border-slate-100 flex flex-col gap-0.5">
                        <span className="text-[9px] text-slate-400 uppercase">Faixa Etária</span>
                        <span className="font-extrabold text-slate-800 flex items-center gap-1"><Baby className="w-3.5 h-3.5 text-amber-500" /> {selectedCatalogItem.ageRange}</span>
                      </div>
                      
                      <div className="p-2.5 bg-white rounded-xl border border-slate-100 flex flex-col gap-0.5">
                        <span className="text-[9px] text-slate-400 uppercase">Capacidade</span>
                        <span className="font-extrabold text-slate-800 flex items-center gap-1"><Users className="w-3.5 h-3.5 text-blue-500" /> {selectedCatalogItem.capacity}</span>
                      </div>

                      <div className="p-2.5 bg-white rounded-xl border border-slate-100 flex flex-col gap-0.5">
                        <span className="text-[9px] text-slate-400 uppercase">Área do Piso</span>
                        <span className="font-mono font-extrabold text-slate-800 text-[10px] bg-slate-50 px-1.5 py-0.5 rounded self-start mt-0.5 border border-slate-100">{selectedCatalogItem.minArea}</span>
                      </div>

                      <div className="p-2.5 bg-white rounded-xl border border-slate-100 flex flex-col gap-0.5">
                        <span className="text-[9px] text-slate-400 uppercase">Área de Segurança</span>
                        <span className="font-mono font-extrabold text-slate-800 text-[10px] bg-slate-50 px-1.5 py-0.5 rounded self-start mt-0.5 border border-slate-100">{selectedCatalogItem.safetyArea}</span>
                      </div>
                    </div>
                    
                    <div className="p-2.5 bg-white rounded-xl border border-slate-100 flex items-center justify-between text-xs font-semibold">
                      <span className="text-slate-400 uppercase text-[9px]">Dimensões Gerais</span>
                      <span className="font-mono font-extrabold text-slate-800 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">{selectedCatalogItem.dimensions}</span>
                    </div>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-1.5">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      Diferenciais Técnicos:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-bold text-slate-600">
                      {selectedCatalogItem.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 bg-emerald-50 border border-emerald-100 rounded-full p-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact Button dispatch info */}
                  <div className="pt-2 flex flex-col gap-2">
                    <a 
                      href={`${WHATSAPP_LINK}?text=${encodeURIComponent(selectedCatalogItem.whatsappMessage)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full bg-[var(--color-brand-green)] hover:bg-[#008f45] text-white py-4 px-6 rounded-2xl font-black text-sm flex items-center justify-center gap-2 shadow-lg transition-all text-center hover:scale-[1.02]"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Solicitar Orçamento no WhatsApp
                    </a>
                    
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider block text-center mt-1">
                      Falar diretamente com Sílvio Cavalcanti
                    </span>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      {/* FAQ Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-brand-darkblue)] mb-6">Perguntas Frequentes</h2>
            <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
              Tire suas principais dúvidas sobre nossos playgrounds, qualidade, entrega e segurança.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index} 
                className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === index ? 'border-[var(--color-brand-pink)] bg-slate-50' : 'border-slate-100 bg-white hover:border-slate-200'}`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className={`font-bold text-lg md:text-xl pr-8 ${activeFaq === index ? 'text-[var(--color-brand-pink)]' : 'text-slate-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${activeFaq === index ? 'bg-[var(--color-brand-pink)]/10 text-[var(--color-brand-pink)] rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 text-slate-600 text-lg">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[var(--color-brand-darkblue)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[var(--color-brand-blue)] via-transparent to-transparent"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[var(--color-brand-pink)] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[var(--color-brand-orange)] rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Pronto para construir algo incrível?</h2>
          <p className="text-2xl text-[var(--color-brand-blue)] mb-10 font-medium">Nossa equipe está pronta para transformar seu espaço em uma atração inesquecível.</p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[var(--color-brand-green)] text-white px-10 py-5 rounded-2xl font-black text-2xl shadow-2xl transition-all hover:scale-105 hover:bg-[#008f45]">
            <MessageCircle className="w-8 h-8" />
            Solicitar Orçamento Agora
          </a>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-brand-darkblue)] mb-6">Onde Estamos</h2>
            <p className="text-xl text-slate-600 font-medium">
              Venha nos fazer uma visita e conhecer de perto a qualidade da Palmares Playgrounds.
            </p>
          </div>
          <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl border-8 border-slate-100">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1461.138988095373!2d-35.58405776134175!3d-8.686025122563732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700a1007be4d5bd%3A0xa91a68d1ab9d6ba6!2sKrenke%20Brinquedos%20-%20Playgrounds%20Infantil%20em%20Palmares!5e1!3m2!1spt-BR!2sbr!4v1773272978858!5m2!1spt-BR!2sbr" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Trust & Leadership Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Authorized Partner Card */}
            <div className="flex flex-col items-center text-center max-w-xs p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-[var(--color-brand-blue)]/10 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                <ShieldCheck className="w-10 h-10 text-[var(--color-brand-blue)]" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-tight">Parceria de Confiança</h3>
              <p className="text-slate-500 font-medium text-sm mb-4 leading-relaxed">
                Somos revendedores oficiais com certificação de excelência técnica.
              </p>
              <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">Revenda Autorizada Krenke</span>
              </div>
            </div>

            {/* Divider for Desktop */}
            <div className="hidden md:block w-px h-32 bg-slate-200"></div>

            {/* Executive Direction Card */}
            <div className="flex flex-col items-center text-center max-w-xs p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 bg-[var(--color-brand-pink)]/10 rounded-3xl flex items-center justify-center mb-6 shadow-inner">
                <Plus className="w-10 h-10 text-[var(--color-brand-pink)]" />
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-2 uppercase tracking-tight">Sílvio Romero Cavalcanti</h3>
              <p className="text-slate-500 font-medium text-sm mb-4 leading-relaxed">
                Mais de 30 anos transformando espaços em ambientes lúdicos de alto padrão.
              </p>
              <div className="px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">Direção Executiva</span>
              </div>
            </div>
          </div>
          
          <div className="mt-12 opacity-40 grayscale flex items-center gap-4">
             <div className="flex gap-0.5 scale-75">
                <Smile className="w-4 h-4 text-slate-800" />
                <Smile className="w-4 h-4 text-slate-800" />
              </div>
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-slate-900 leading-none">Krenke Playgrounds</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-slate-900 text-slate-400 py-16 border-t-8 border-[var(--color-brand-pink)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-white p-4 rounded-2xl mb-6 inline-block">
                <Logo isDarkBg={false} />
              </div>
              <p className="text-base text-center md:text-left max-w-xs font-medium">
                Fabricando sonhos em escala gigante com segurança, qualidade e muita diversão.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h4 className="text-white font-bold text-xl mb-6">Links Rápidos</h4>
              <nav className="flex flex-col gap-4 text-center">
                <a href="#conheca-nos" className="hover:text-[var(--color-brand-pink)] transition-colors text-lg">Conheça-nos</a>
                <a href="#produtos" className="hover:text-[var(--color-brand-blue)] transition-colors text-lg">Produtos</a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-orange)] transition-colors text-lg">Orçamento</a>
              </nav>
            </div>

            <div className="flex flex-col items-center md:items-end">
              <h4 className="text-white font-bold text-xl mb-6">Siga-nos</h4>
              <div className="flex gap-4">
                <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[var(--color-brand-pink)] hover:text-white transition-all shadow-lg">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[var(--color-brand-green)] hover:text-white transition-all shadow-lg">
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>

          </div>
          
          <div className="border-t border-slate-800 mt-16 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Palmares Playgrounds. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group border-4 border-white"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        {/* Tooltip */}
        <span className="absolute right-full mr-4 bg-white text-slate-800 font-bold px-4 py-2 rounded-xl text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          Fale conosco!
        </span>
      </a>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightboxIndex(null)}>
          <button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 p-2 rounded-full" onClick={() => setLightboxIndex(null)}>
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full" 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length : null));
            }}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={GALLERY_IMAGES[lightboxIndex].src} 
              alt={GALLERY_IMAGES[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="text-center mt-6">
              <h3 className="text-3xl font-black text-white mb-2">{GALLERY_IMAGES[lightboxIndex].title}</h3>
              <p className="text-white/80 text-xl">{GALLERY_IMAGES[lightboxIndex].desc}</p>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-50 bg-white/10 hover:bg-white/20 p-3 rounded-full" 
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_IMAGES.length : null));
            }}
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}
    </div>
  );
}

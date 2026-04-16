import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Linkedin, MessageCircle, ChevronRight, ChevronLeft, ShieldCheck, Wrench, Smile, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const WHATSAPP_LINK = "https://wa.me/5581998312244";
  const INSTAGRAM_LINK = "https://www.instagram.com/krenkenordeste?igsh=MXM0em45azJpdGFmNA%3D%3D";

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

  const Logo = () => (
    <div className="flex flex-col items-center justify-center scale-90 origin-left">
      <div className="flex gap-1 mb-1">
        <Smile className="w-6 h-6 text-black" strokeWidth={2.5} />
        <Smile className="w-6 h-6 text-black" strokeWidth={2.5} />
      </div>
      <div className="flex flex-col items-center bg-white px-4 py-2 rounded-2xl shadow-sm border-2 border-slate-100">
        <div className="font-black text-4xl tracking-tighter flex items-center">
          <span className="text-[var(--color-brand-green)] drop-shadow-sm">K</span>
          <span className="text-[var(--color-brand-blue)] drop-shadow-sm">R</span>
          <span className="text-[var(--color-brand-darkblue)] drop-shadow-sm">E</span>
          <span className="text-[var(--color-brand-orange)] drop-shadow-sm">N</span>
          <span className="text-[var(--color-brand-purple)] drop-shadow-sm">K</span>
          <span className="text-[var(--color-brand-pink)] drop-shadow-sm">E</span>
        </div>
        <span className="text-[11px] font-black tracking-[0.35em] text-slate-500 uppercase mt-1 pl-1">Nordeste Oficial®</span>
      </div>
      <span className="font-handwriting text-xl text-black mt-1 tracking-wide">o melhor jeito de brincar</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F4F7FB] text-slate-900 font-sans selection:bg-[var(--color-brand-blue)] selection:text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="block">
            <Logo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-slate-600">
            <a href="#conheca-nos" className="hover:text-[var(--color-brand-pink)] transition-colors">Conheça-nos</a>
            <a href="#produtos" className="hover:text-[var(--color-brand-blue)] transition-colors">Produtos</a>
            <a href="#contato" className="hover:text-[var(--color-brand-orange)] transition-colors">Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-green)] hover:bg-[#008f45] text-white px-6 py-3 rounded-full shadow-lg transition-all hover:-translate-y-1 active:translate-y-0 flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Solicitar Orçamento
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-800 p-2 bg-white rounded-full shadow-sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
            <a href="#produtos" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg hover:text-[var(--color-brand-blue)]">Produtos</a>
            <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="block text-lg hover:text-[var(--color-brand-orange)]">Contato</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-green)] text-white px-6 py-4 rounded-2xl text-center shadow-lg flex items-center justify-center gap-2 text-lg">
              <MessageCircle className="w-6 h-6" />
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
        {/* Decorative background blobs using brand colors */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-60">
          <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-[var(--color-brand-blue)]/20 blur-3xl"></div>
          <div className="absolute top-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-[var(--color-brand-pink)]/20 blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-[var(--color-brand-orange)]/20 blur-3xl"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-[var(--color-brand-green)]/20 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md border border-slate-100 text-[var(--color-brand-darkblue)] font-bold text-sm mb-8"
          >
            <Star className="w-4 h-4 text-[var(--color-brand-orange)] fill-[var(--color-brand-orange)]" />
            Fabricando Sonhos em Escala Gigante
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-slate-800 tracking-tight leading-[1.1] max-w-4xl mb-6"
          >
            A diversão não tem limites quando o tamanho é <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-blue)] via-[var(--color-brand-purple)] to-[var(--color-brand-pink)]">gigante</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-600 max-w-2xl mb-10 font-medium leading-relaxed"
          >
            Criamos estruturas lúdicas monumentais que transformam qualquer espaço em uma aventura inesquecível, com total segurança e qualidade.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-[var(--color-brand-pink)] hover:bg-[#d0007b] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
              Falar com Sílvio Cavalcanti <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#produtos" className="bg-white hover:bg-slate-50 text-[var(--color-brand-darkblue)] border-2 border-[var(--color-brand-blue)]/20 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-slate-200/50 transition-all hover:-translate-y-1 flex items-center justify-center">
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
                Na Krenke Nordeste, não construímos apenas brinquedos; nós projetamos experiências imersivas. Nossa equipe trabalha em conjunto para garantir que cada projeto gigante seja visualmente deslumbrante e estruturalmente impecável.
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
              Venha nos fazer uma visita e conhecer de perto a qualidade da Krenke Nordeste.
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

      {/* Footer */}
      <footer id="contato" className="bg-slate-900 text-slate-400 py-16 border-t-8 border-[var(--color-brand-pink)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            
            <div className="flex flex-col items-center md:items-start">
              <div className="bg-white p-4 rounded-2xl mb-6 inline-block">
                <Logo />
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
            <p>&copy; {new Date().getFullYear()} Krenke Nordeste. Todos os direitos reservados.</p>
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

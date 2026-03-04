import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Instagram, Facebook, MessageCircle, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../types';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Sobre Nós', path: '/sobre' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Announcement Bar */}
      <div className="bg-brand-green text-white py-2 text-center text-xs md:text-sm font-bold tracking-widest uppercase flex items-center justify-center gap-2 px-4 shadow-sm">
        <Globe size={14} className="animate-pulse" />
        <span>Envio para todo o Brasil e Internacional 🌍</span>
      </div>
      
      <nav className={cn(
        "transition-all duration-300",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-black p-1.5 rounded-xl group-hover:rotate-12 transition-transform shadow-lg">
              <Leaf className="text-brand-green w-6 h-6" />
            </div>
            <span className={cn(
              "font-serif text-2xl font-black tracking-tighter",
              scrolled ? "text-brand-black" : "text-brand-black"
            )}>
              Epíscias <span className="text-brand-pink">SP</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-bold transition-all hover:text-brand-pink relative group",
                  location.pathname === link.path ? "text-brand-pink" : "text-brand-black"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-pink transition-all duration-300 group-hover:w-full",
                  location.pathname === link.path ? "w-full" : ""
                )}></span>
              </Link>
            ))}
            <a
              href="https://wa.me/5511948570371"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-pink text-white px-6 py-2.5 rounded-full text-sm font-black hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-lg shadow-brand-pink/20"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-stone-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-stone-700 hover:text-episcia-red hover:bg-stone-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex gap-4 px-3">
                <a href="https://www.instagram.com/episciassaopaulobrasil/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-episcia-red"><Instagram size={24} /></a>
                <a href="https://www.facebook.com/valeria.roca.777" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-episcia-red"><Facebook size={24} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  </header>
);
}

export function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <Leaf className="text-brand-green w-10 h-10" />
              <span className="font-serif text-3xl font-black text-white tracking-tighter">
                Epíscias <span className="text-brand-pink">SP</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-8 text-stone-400">
              Especialistas em sementes de Episcias e plantas ornamentais tropicais. Levando a genética da beleza para sua casa em qualquer lugar do mundo.
            </p>
            <div className="flex gap-5">
              <a href="https://www.instagram.com/episciassaopaulobrasil/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center hover:bg-brand-pink transition-all hover:-translate-y-1 shadow-lg">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/valeria.roca.777" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-stone-800 flex items-center justify-center hover:bg-brand-blue transition-all hover:-translate-y-1 shadow-lg">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl font-black mb-8 tracking-tight">Navegação</h4>
            <ul className="space-y-5 text-sm font-medium">
              <li><Link to="/" className="text-stone-400 hover:text-brand-pink transition-colors">Início</Link></li>
              <li><Link to="/sobre" className="text-stone-400 hover:text-brand-pink transition-colors">Sobre Nós</Link></li>
              <li><Link to="/galeria" className="text-stone-400 hover:text-brand-pink transition-colors">Galeria</Link></li>
              <li><Link to="/blog" className="text-stone-400 hover:text-brand-pink transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-stone-400 hover:text-brand-pink transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl font-black mb-8 tracking-tight">Contato</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <span className="text-brand-pink font-black uppercase text-[10px] tracking-widest mt-1">Sede</span>
                <span className="text-stone-400">São Paulo – Brasil <br/> (Envio Global)</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-blue font-black uppercase text-[10px] tracking-widest mt-1">WhatsApp</span>
                <span className="text-stone-400 font-bold">(11) 94857-0371</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-brand-green font-black uppercase text-[10px] tracking-widest mt-1">Email</span>
                <span className="text-stone-400 break-all">Conversecomepisciasaopaulobrasil@hotmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-serif text-xl font-black mb-8 tracking-tight">Pagamento & Envio</h4>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                {['PIX', 'Crédito', 'Débito'].map((method) => (
                  <span key={method} className="px-3 py-1 bg-stone-800 text-stone-300 text-[10px] font-black uppercase tracking-widest rounded-lg border border-stone-700">
                    {method}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-brand-green font-black uppercase text-[10px] tracking-widest">
                <Globe size={16} />
                <span>Envio para o Exterior</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-stone-600">
          <p>© 2024 Epíscias São Paulo Brasil. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511948570371"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-brand-pink text-white p-5 rounded-[24px] shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={36} fill="currentColor" />
      <span className="absolute right-full mr-5 bg-brand-black text-white px-4 py-2 rounded-xl text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
        Fale Conosco!
      </span>
    </a>
  );
}

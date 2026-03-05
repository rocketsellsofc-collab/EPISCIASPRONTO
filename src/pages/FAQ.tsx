import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { FAQ_ITEMS } from '../constants';
import { WhatsAppIcon } from '../components/Layout';

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="pt-40 pb-32 bg-white">
      <Helmet>
        <title>Dúvidas Frequentes | Epíscias São Paulo Brasil</title>
        <meta name="description" content="Tire suas dúvidas sobre germinação, cuidados, pagamentos e envios internacionais de sementes de Episcias." />
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-brand-pink/10 rounded-[32px] mb-8 shadow-inner">
            <HelpCircle className="text-brand-pink" size={48} />
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-brand-black mb-8 tracking-tighter">FAQ</h1>
          <p className="text-xl text-brand-black/60 font-medium">
            Tire suas dúvidas sobre cuidados, entregas e nossa forma de trabalho.
          </p>
          <div className="w-32 h-2 bg-brand-blue mx-auto mt-12 rounded-full"></div>
        </div>

        <div className="space-y-6">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-[32px] border border-brand-blue/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                className="w-full px-10 py-8 flex items-center justify-between text-left hover:bg-white transition-colors"
              >
                <span className="text-xl font-black text-brand-black tracking-tight">{item.question}</span>
                <ChevronDown
                  className={`text-brand-pink transition-transform duration-500 ${activeIndex === i ? 'rotate-180' : ''}`}
                  size={28}
                />
              </button>
              <AnimatePresence>
                {activeIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-10 pb-10 text-brand-black/70 leading-relaxed font-medium text-lg">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-24 p-16 bg-brand-black rounded-[60px] text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-pink rounded-full blur-[100px]"></div>
          </div>
          <h3 className="text-3xl md:text-5xl font-serif font-black mb-6 tracking-tighter relative z-10">Ainda tem dúvidas?</h3>
          <p className="mb-12 text-xl text-stone-400 font-medium relative z-10">Nossa equipe está pronta para te ajudar pessoalmente via WhatsApp.</p>
          <a
            href="https://wa.me/5511948570371"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-pink text-white px-12 py-6 rounded-2xl font-black hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 shadow-2xl shadow-brand-pink/20 relative z-10"
          >
            <WhatsAppIcon size={24} />
            Falar com Especialista
          </a>
        </div>
      </div>
    </div>
  );
}

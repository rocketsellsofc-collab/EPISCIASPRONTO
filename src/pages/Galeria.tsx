import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { Helmet } from 'react-helmet-async';
import { WhatsAppIcon } from '../components/Layout';

export function Galeria() {
  return (
    <div className="pt-40 pb-32 bg-white">
      <Helmet>
        <title>Galeria de Episcias | Epíscias São Paulo Brasil</title>
        <meta name="description" content="Veja nossa coleção de Episcias raras. Fotos reais do nosso cultivo em São Paulo." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-8xl font-serif font-black text-brand-black mb-8 tracking-tighter">Nossa Galeria</h1>
          <p className="text-xl text-brand-black/60 max-w-2xl mx-auto font-medium">
            Explore a diversidade de cores e padrões que você pode cultivar a partir de nossas sementes selecionadas. Cada imagem representa o potencial de beleza que entregamos em cada envelope.
          </p>
          <div className="w-32 h-2 bg-brand-pink mx-auto mt-12 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1 }}
              className="group relative aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                <span className="text-white font-black text-sm md:text-base bg-brand-pink px-6 py-3 rounded-2xl shadow-xl">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <p className="text-2xl font-black mb-10 tracking-tight">Gostou de alguma variedade específica?</p>
          <a
            href="https://wa.me/5511948570371"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-pink text-white px-8 py-4 md:px-12 md:py-6 rounded-2xl text-lg md:text-xl font-black hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-3 shadow-2xl shadow-brand-pink/20"
          >
            <WhatsAppIcon size={24} />
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </div>
  );
}

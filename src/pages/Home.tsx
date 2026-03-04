import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star, Image as ImageIcon, MessageCircle, Globe, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TESTIMONIALS, BLOG_POSTS, GALLERY_IMAGES } from '../constants';

export function Home() {
  return (
    <div className="overflow-hidden">
      <Helmet>
        <title>Epíscias São Paulo Brasil | Sementes de Episcias Raras</title>
        <meta name="description" content="A maior variedade de sementes de Episcias do Brasil. Genética selecionada, envio nacional e internacional. Cultive a beleza tropical." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1592150621344-82841b6f9302?auto=format&fit=crop&q=80&w=2000"
            alt="Episcia Background"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-6 py-2 bg-brand-green text-white rounded-full text-base font-black mb-8 tracking-widest uppercase shadow-xl shadow-brand-green/20 animate-bounce-subtle">
              <Globe size={18} /> Envio Nacional e Internacional
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-black text-brand-black leading-[0.9] mb-8 tracking-tighter">
              Cultive a <span className="text-brand-pink">Beleza</span> em Qualquer Lugar
            </h1>
            <p className="text-xl text-brand-black/70 mb-12 leading-relaxed max-w-lg font-medium">
              Descubra a maior variedade de sementes de Episcias. Genética selecionada e enviada com segurança para colecionadores em todo o mundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <a
                href="https://wa.me/5511948570371"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-pink text-white px-10 py-5 rounded-2xl text-xl font-black hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-pink/30"
              >
                Pedir agora <MessageCircle size={24} />
              </a>
              <Link
                to="/galeria"
                className="bg-white text-brand-black border-2 border-brand-black px-10 py-5 rounded-2xl text-xl font-black hover:bg-brand-black hover:text-white transition-all flex items-center justify-center gap-3"
              >
                Ver Galeria <ArrowRight size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-black text-brand-black mb-6 tracking-tighter">Por que escolher nossas Epíscias?</h2>
            <div className="w-32 h-2 bg-brand-pink mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Produção Própria',
                desc: 'Cultivamos nossas próprias matrizes com dedicação total, garantindo o controle completo da qualidade desde a polinização.',
                icon: <LeafIcon />
              },
              {
                title: 'Seleção Criteriosa',
                desc: 'Cada semente passa por uma inspeção rigorosa. Enviamos apenas sementes frescas e com alto potencial de germinação.',
                icon: <CheckCircle2 className="text-brand-pink" size={48} />
              },
              {
                title: 'Cultivo Profissional',
                desc: 'Anos de experiência técnica aplicados em cada etapa, resultando em plantas saudáveis e genética superior.',
                icon: <AwardIcon />
              },
              {
                title: 'Autenticidade Garantida',
                desc: 'Compromisso real com a variedade prometida. Você recebe exatamente a genética que escolheu para sua coleção.',
                icon: <ShieldIcon />
              },
              {
                title: 'Atendimento Especializado',
                desc: 'Suporte direto de quem entende do assunto. Tiramos suas dúvidas e auxiliamos no sucesso do seu cultivo.',
                icon: <MessageCircle className="text-brand-blue" size={48} />
              },
              {
                title: 'Envio Global Seguro',
                desc: 'Logística aprimorada para entregas nacionais e internacionais, com embalagens que protegem a vida das sementes.',
                icon: <TruckIcon />
              }
            ].map((benefit, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="p-12 rounded-[40px] bg-white border border-brand-blue/10 text-center shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="mb-8 flex justify-center">{benefit.icon}</div>
                <h3 className="text-2xl font-black mb-6 tracking-tight">{benefit.title}</h3>
                <p className="text-brand-black/60 leading-relaxed font-medium">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <img
                src="https://media-gig4-2.cdn.whatsapp.net/v/t61.24694-24/485527889_998869255205402_1100689210935307089_n.jpg?ccb=11-4&oh=01_Q5Aa3wEVwSLJhBqKavmIeU9iIqU1ztRU6tengLmH4n4-xSepTA&oe=69B5505E&_nc_sid=5e03e0&_nc_cat=104"
                alt="Nossa Estufa"
                className="rounded-[60px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 -right-12 bg-brand-pink p-10 rounded-[40px] shadow-2xl text-white">
                <span className="text-6xl font-serif font-black block leading-none">10+</span>
                <span className="text-xs font-black uppercase tracking-[0.2em]">Anos de Paixão</span>
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-brand-black mb-8 tracking-tighter">Epíscias São Paulo Brasil</h2>
              <p className="text-xl text-brand-black/70 mb-8 leading-relaxed font-medium">
                Nascemos da paixão pelas cores e texturas únicas das Episcias. Localizados em São Paulo, nos tornamos referência global na comercialização de sementes de alta qualidade dessas joias tropicais.
              </p>
              <p className="text-xl text-brand-black/70 mb-12 leading-relaxed font-medium">
                Nossa missão é democratizar o acesso a variedades raras, permitindo que colecionadores de todos os países experimentem o prazer de ver sua própria planta crescer desde a semente.
              </p>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-3 text-brand-pink text-xl font-black hover:gap-6 transition-all group"
              >
                Conheça nossa história <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Highlight */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-brand-black mb-6 tracking-tighter">Nossa Coleção</h2>
            <p className="text-xl text-brand-black/60 font-medium">Um vislumbre da diversidade que cultivamos.</p>
          </div>
          <Link to="/galeria" className="hidden md:flex items-center gap-3 text-brand-pink text-xl font-black group">
            Ver todas <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="flex gap-8 animate-marquee">
          {GALLERY_IMAGES.slice(0, 10).map((img, i) => (
            <div key={i} className="min-w-[350px] h-[450px] rounded-[40px] overflow-hidden shadow-2xl group relative">
              <img src={img.url} alt={img.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-white font-black text-lg">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-serif font-black mb-6 tracking-tighter">O que dizem nossos clientes</h2>
            <div className="w-32 h-2 bg-brand-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-stone-900 p-12 rounded-[40px] border border-stone-800 shadow-2xl">
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={20} className="fill-brand-pink text-brand-pink" />
                  ))}
                </div>
                <p className="text-xl italic mb-8 text-stone-300 leading-relaxed">"{t.text}"</p>
                <div className="font-black text-brand-pink uppercase tracking-widest text-xs">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-pink relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue rounded-full blur-[100px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-serif font-black text-white mb-10 tracking-tighter leading-none">Pronto para começar seu próprio cultivo?</h2>
          <p className="text-2xl text-white/90 mb-12 font-medium">
            Fale conosco agora pelo WhatsApp e conheça nosso catálogo de sementes disponíveis!
          </p>
          <a
            href="https://wa.me/5511948570371"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-black text-white px-12 py-6 rounded-2xl text-2xl font-black hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-4 shadow-2xl"
          >
            Chamar no WhatsApp <MessageCircle size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}

function AwardIcon() {
  return (
    <div className="w-20 h-20 bg-brand-pink/10 rounded-[24px] flex items-center justify-center shadow-inner">
      <Award className="text-brand-pink" size={40} />
    </div>
  );
}

function ShieldIcon() {
  return (
    <div className="w-20 h-20 bg-brand-green/10 rounded-[24px] flex items-center justify-center shadow-inner">
      <CheckCircle2 className="text-brand-green" size={40} />
    </div>
  );
}

function LeafIcon() {
  return (
    <div className="w-20 h-20 bg-brand-green/10 rounded-[24px] flex items-center justify-center shadow-inner">
      <svg className="w-12 h-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    </div>
  );
}

function TruckIcon() {
  return (
    <div className="w-20 h-20 bg-brand-green/10 rounded-[24px] flex items-center justify-center shadow-inner">
      <svg className="w-12 h-12 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a1 1 0 001 1h1m-1-4h1m5 0h1" />
      </svg>
    </div>
  );
}

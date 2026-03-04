import { motion } from 'motion/react';
import { Target, Eye, Heart, Award, Leaf } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export function Sobre() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Helmet>
        <title>Nossa História | Epíscias São Paulo Brasil</title>
        <meta name="description" content="Conheça a história da Epíscias São Paulo Brasil. Da soleira da vovó para o mundo, nossa paixão pelo cultivo de Episcias raras." />
      </Helmet>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-serif font-black text-brand-black mb-10 leading-none tracking-tighter">
              Nossa História: <br />
              <span className="text-brand-pink">Do Brasil para o Mundo</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif font-black text-brand-pink mb-6 tracking-tight">
              Da soleira da minha avó para o Brasil inteiro
            </h2>
            <div className="space-y-6 text-xl text-brand-black/70 mb-10 leading-relaxed font-medium">
              <p>Desde a infância, uma planta me encantava profundamente. Ela vivia na soleira da casa da minha avó — vibrante, aveludada e inesquecível.</p>
              <p>Anos depois, já atuando na produção e venda de mudas e ervas aromáticas no atacado, decidi reencontrar essa planta para cultivá-la em meu sítio.</p>
              <p>A busca foi difícil. Não encontrei com facilidade no Brasil. Infelizmente, fui enganada por alguns vendedores e percebi a escassez real dessa espécie no mercado nacional.</p>
              <p>Foi somente no exterior que reencontrei a planta que marcou minha infância. Diante dessa dificuldade, tomei uma decisão: Iniciar o cultivo e a produção especializada no Brasil.</p>
            </div>
          </motion.div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1000"
              alt="Nossa História"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="bg-brand-blue/5 py-32 mb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-brand-blue/10 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-brand-pink" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-black mb-6 tracking-tight">Missão</h3>
              <p className="text-brand-black/60 font-medium leading-relaxed">Proporcionar beleza e bem-estar através da comercialização de sementes de Episcias raras e viáveis, oferecendo suporte especializado para o sucesso do seu cultivo.</p>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-brand-blue/10 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-black mb-6 tracking-tight">Visão</h3>
              <p className="text-brand-black/60 font-medium leading-relaxed">Ser a maior autoridade e o principal destino global para colecionadores e amantes de Episcias em todo o mundo.</p>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-brand-blue/10 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="text-brand-green" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-black mb-6 tracking-tight">Valores</h3>
              <p className="text-brand-black/60 font-medium leading-relaxed">Ética no cultivo, respeito à natureza, transparência com o cliente e paixão inabalável pela botânica tropical.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-brand-black mb-6 tracking-tighter">Nossos Diferenciais</h2>
          <div className="w-32 h-2 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { title: 'Produção Própria', icon: <Leaf className="text-brand-green" size={48} /> },
            { title: 'Seleção Criteriosa', icon: <Award className="text-brand-pink" size={48} /> },
            { title: 'Cultivo Profissional', icon: <Target className="text-brand-blue" size={48} /> },
            { title: 'Autenticidade', icon: <Award className="text-brand-pink" size={48} /> },
            { title: 'Atendimento Especializado', icon: <MessageCircleIcon /> },
            { title: 'Envio Internacional', icon: <BoxIcon /> },
          ].map((item, i) => (
            <div key={i} className="text-center p-10 rounded-[40px] bg-white border border-brand-blue/10 hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-center mb-8">{item.icon}</div>
              <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function MessageCircleIcon() {
  return <div className="w-20 h-20 bg-brand-blue/10 rounded-[24px] flex items-center justify-center shadow-inner"><Target className="text-brand-blue" size={32} /></div>;
}

function BoxIcon() {
  return <div className="w-20 h-20 bg-brand-pink/10 rounded-[24px] flex items-center justify-center shadow-inner"><Award className="text-brand-pink" size={32} /></div>;
}

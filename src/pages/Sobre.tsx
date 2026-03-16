import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Leaf } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { WhatsAppIcon } from '../components/Layout';

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
              Nossa História
            </h1>
            <div className="space-y-6 text-xl text-brand-black/70 mb-10 leading-relaxed font-medium">
              <p>Desde a minha infância, uma planta sempre chamava minha atenção. Era o Tapete de Rainha, nome popularmente conhecido para a EPÍSCIA, uma planta de beleza única e inesquecível. Essa imagem ficou guardada na minha memória como uma lembrança maravilhosa da casa da Vó.</p>
              <p>Anos depois, deixando de lado mesas e papéis de escritórios, no centro popular mais importante da Capital Paulista, fui morar em um pequenos paraíso, comecei minha coleção, decidi encontrar novamente essa planta no Brasil. Porém, essa busca não foi fácil. Tive muitas dificuldades e, infelizmente, fui enganada algumas vezes em meios e vendas populares pela internet.</p>
              <p>Determinada a encontrá-la, ampliei minha busca para fora do país. Foi assim que comecei minha coleção com sementes e mudas vinda do exterior.</p>
              <p>A partir daí iniciei o cultivo e, em pouco tempo, já possuía uma coleção crescente. Como já atuava na área agrícola e sou produtora rural, comecei naturalmente a abrir caminhos também com as sementes.</p>
              <p>Logo percebi que havia um grande interesse no mercado. Amigos e colecionadores do exterior começaram a solicitar sementes também. Após realizar diversos testes de germinação e produzir centenas de mudas, iniciei o comércio atacadista no Brasil.</p>
              <p>Hoje nossas sementes chegam a 57 países, levando a beleza dessas plantas para colecionadores e apaixonados por flores ao redor do mundo.</p>
              <p>É uma grande felicidade saber que estamos levando alegria através das plantas para o outro lado do mundo.</p>
              <p>Esse amor e carinho pelas plantas cresceu e deu frutos. Atualmente também trabalhamos com outras sementes de flores, sempre destinadas ao público do exterior, ampliando ainda mais essa conexão global através da natureza.</p>
              <p className="text-brand-pink font-black uppercase tracking-widest">MINHA FAMILIA TRABALHANDO PARA SUA FAMÍLIA.</p>
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
              <p className="text-brand-black/60 font-medium leading-relaxed">Conectar pessoas ao redor do mundo através da beleza e da diversidade das plantas, oferecendo sementes selecionadas com qualidade, autenticidade e responsabilidade.</p>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-brand-blue/10 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center mb-8">
                <Eye className="text-brand-blue" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-black mb-6 tracking-tight">Visão</h3>
              <p className="text-brand-black/60 font-medium leading-relaxed">Ser uma referência global na produção e distribuição de sementes de flores, ampliando o acesso a variedades especiais e conectando colecionadores em todo o mundo.</p>
            </div>
            <div className="bg-white p-12 rounded-[40px] shadow-xl border border-brand-blue/10 hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 bg-brand-green/10 rounded-2xl flex items-center justify-center mb-8">
                <Heart className="text-brand-green" size={32} />
              </div>
              <h3 className="text-3xl font-serif font-black mb-6 tracking-tight">Valores</h3>
              <div className="text-brand-black/60 font-medium leading-relaxed space-y-2">
                <p>• Amor pelas plantas e natureza</p>
                <p>• Qualidade e Comprometimento</p>
                <p>• Autenticidade e Responsabilidade</p>
                <p>• Respeito ao cliente e valores cristãos</p>
              </div>
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
            { title: 'Matrizes Selecionadas', icon: <Leaf className="text-brand-green" size={48} /> },
            { title: 'Polinização Controlada', icon: <Award className="text-brand-pink" size={48} /> },
            { title: 'Autenticidade das Espécies', icon: <ShieldIcon /> },
            { title: 'Experiência Técnica', icon: <Target className="text-brand-blue" size={48} /> },
            { title: 'Controle de Qualidade', icon: <Award className="text-brand-pink" size={48} /> },
            { title: 'Atendimento Pessoal e Humano', icon: <MessageCircleIcon /> },
            { title: 'Conexão Global', icon: <GlobeIcon /> },
          ].map((item, i) => (
            <div key={i} className="text-center p-10 rounded-[40px] bg-white border border-brand-blue/10 hover:shadow-2xl transition-all duration-500">
              <div className="flex justify-center mb-8">{item.icon}</div>
              <h4 className="text-2xl font-black tracking-tight">{item.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="bg-brand-black text-white p-16 rounded-[60px] shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 tracking-tighter">Contatos</h2>
              <div className="space-y-8 text-xl font-medium text-stone-300">
                <p>
                  <span className="block text-brand-pink font-black uppercase tracking-widest text-xs mb-2">Endereço</span>
                  Estrada da Várzea, s/n. <br />
                  Bairro Várzea de cima <br />
                  Sarapuí - SP. CEP 18225-970
                </p>
                <p>
                  <span className="block text-brand-pink font-black uppercase tracking-widest text-xs mb-2">E-mail</span>
                  conversecomvaleria@hotmail.com
                </p>
                <p>
                  <span className="block text-brand-pink font-black uppercase tracking-widest text-xs mb-2">Telefone</span>
                  +55 11 94857-0371
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a
                href="https://wa.me/5511948570371"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-pink text-white px-12 py-6 rounded-3xl text-2xl font-black hover:scale-105 active:scale-95 transition-all flex items-center gap-4 shadow-2xl shadow-brand-pink/30"
              >
                <WhatsAppIcon size={32} />
                Chamar Agora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function MessageCircleIcon() {
  return <div className="w-20 h-20 bg-brand-blue/10 rounded-[24px] flex items-center justify-center shadow-inner"><WhatsAppIcon className="text-brand-blue" size={32} /></div>;
}

function GlobeIcon() {
  return <div className="w-20 h-20 bg-brand-pink/10 rounded-[24px] flex items-center justify-center shadow-inner"><Award className="text-brand-pink" size={32} /></div>;
}

function ShieldIcon() {
  return <div className="w-20 h-20 bg-brand-green/10 rounded-[24px] flex items-center justify-center shadow-inner"><Award className="text-brand-green" size={32} /></div>;
}

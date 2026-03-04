import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight, Instagram, Facebook } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Markdown from 'react-markdown';

export function Blog() {
  return (
    <div className="pt-40 pb-32 bg-white">
      <Helmet>
        <title>Blog & Dicas de Cultivo | Epíscias São Paulo Brasil</title>
        <meta name="description" content="Aprenda a cuidar das suas Episcias. Dicas de germinação, iluminação e rega para colecionadores." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-8xl font-serif font-black text-brand-black mb-8 tracking-tighter">Blog & Dicas</h1>
          <p className="text-xl text-brand-black/60 max-w-2xl mx-auto font-medium">
            Aprenda tudo sobre como cuidar, propagar e decorar seu ambiente com as maravilhosas Episcias.
          </p>
          <div className="w-32 h-2 bg-brand-blue mx-auto mt-12 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[40px] overflow-hidden shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-stone-100 group"
            >
              <Link to={`/blog/${post.slug}`} className="block aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <div className="p-10">
                <div className="flex items-center gap-4 text-[10px] text-stone-400 mb-6 uppercase tracking-[0.2em] font-black">
                  <span className="text-brand-pink">{post.category}</span>
                  <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                </div>
                <h2 className="text-3xl font-serif font-black text-brand-black mb-6 group-hover:text-brand-pink transition-colors tracking-tight leading-tight">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-brand-black/60 mb-8 line-clamp-3 font-medium leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-3 text-brand-black font-black hover:text-brand-pink transition-colors group/btn"
                >
                  Ler Artigo <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogPost() {
  const { slug } = useParams();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) return <div className="pt-40 text-center">Artigo não encontrado.</div>;

  return (
    <div className="pt-40 pb-32 bg-white">
      <Helmet>
        <title>{post.title} | Blog Epíscias SP</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="inline-flex items-center gap-3 text-stone-400 hover:text-brand-pink mb-12 transition-all font-black uppercase text-xs tracking-widest group">
          <ArrowRight size={20} className="rotate-180 group-hover:-translate-x-2 transition-transform" /> Voltar ao Blog
        </Link>
        
        <div className="mb-16">
          <div className="flex items-center gap-6 text-[10px] text-stone-400 mb-8 uppercase tracking-[0.3em] font-black">
            <span className="text-brand-pink bg-brand-pink/10 px-4 py-1 rounded-full">{post.category}</span>
            <span>{post.date}</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-serif font-black text-brand-black mb-12 leading-none tracking-tighter">
            {post.title}
          </h1>
          <div className="aspect-[21/9] rounded-[60px] overflow-hidden shadow-2xl mb-16">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="markdown-body prose prose-stone lg:prose-2xl max-w-none font-medium text-brand-black/80">
          <Markdown>{post.content}</Markdown>
        </div>

        <div className="mt-24 pt-24 border-t border-stone-100">
          <div className="bg-stone-50 p-12 rounded-[50px] flex flex-col md:flex-row items-center gap-12 shadow-inner">
            <div className="w-32 h-32 rounded-[40px] bg-brand-black flex items-center justify-center text-white shadow-2xl">
              <User size={64} className="text-brand-green" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-serif font-black mb-4 tracking-tight">Equipe Epíscias SP</h3>
              <p className="text-xl text-brand-black/60 mb-8 leading-relaxed font-medium">Especialistas em botânica e apaixonados por plantas tropicais. Nossa missão é compartilhar conhecimento para que colecionadores de todo o mundo possam cultivar com sucesso.</p>
              <div className="flex justify-center md:justify-start gap-6">
                <a href="https://www.instagram.com/episciassaopaulobrasil/" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-pink transition-all hover:-translate-y-1"><Instagram size={28} /></a>
                <a href="https://www.facebook.com/valeria.roca.777" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-blue transition-all hover:-translate-y-1"><Facebook size={28} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

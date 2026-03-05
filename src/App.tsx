import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer, WhatsAppButton } from './components/Layout';

// Lazy load pages for better performance and to isolate potential errors
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Sobre = lazy(() => import('./pages/Sobre').then(m => ({ default: m.Sobre })));
const Galeria = lazy(() => import('./pages/Galeria').then(m => ({ default: m.Galeria })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/Blog').then(m => ({ default: m.BlogPost })));
const FAQ = lazy(() => import('./pages/FAQ').then(m => ({ default: m.FAQ })));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-brand-pink border-t-transparent rounded-full animate-spin"></div></div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacidade" element={<div className="pt-40 px-4 max-w-4xl mx-auto pb-20"><h1>Política de Privacidade</h1><p className="mt-8">Sua privacidade é importante para nós. Coletamos apenas os dados necessários para processar seus pedidos e melhorar sua experiência.</p></div>} />
                <Route path="/termos" element={<div className="pt-40 px-4 max-w-4xl mx-auto pb-20"><h1>Termos de Uso</h1><p className="mt-8">Ao utilizar nosso site, você concorda com nossos termos de serviço e políticas de entrega.</p></div>} />
                <Route path="*" element={<div className="pt-40 px-4 text-center pb-20"><h1 className="text-6xl font-serif font-black mb-8">404</h1><p className="text-xl mb-12">Página não encontrada.</p><a href="/" className="bg-brand-pink text-white px-10 py-4 rounded-2xl font-black">Voltar ao Início</a></div>} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

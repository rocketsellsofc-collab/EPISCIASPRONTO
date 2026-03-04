import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, Footer, WhatsAppButton } from './components/Layout';
import { Home } from './pages/Home';
import { Sobre } from './pages/Sobre';
import { Galeria } from './pages/Galeria';
import { Blog, BlogPost } from './pages/Blog';
import { FAQ } from './pages/FAQ';

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
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacidade" element={<div className="pt-40 px-4 max-w-4xl mx-auto pb-20"><h1>Política de Privacidade</h1><p className="mt-8">Sua privacidade é importante para nós. Coletamos apenas os dados necessários para processar seus pedidos e melhorar sua experiência.</p></div>} />
              <Route path="/termos" element={<div className="pt-40 px-4 max-w-4xl mx-auto pb-20"><h1>Termos de Uso</h1><p className="mt-8">Ao utilizar nosso site, você concorda com nossos termos de serviço e políticas de entrega.</p></div>} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

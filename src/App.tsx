import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Services from './pages/Services';
import SaasService from './pages/services/SaasService';
import WebDesignService from './pages/services/WebDesignService';
import ChatbotService from './pages/services/ChatbotService';
import AIAgentsService from './pages/services/AIAgentsService';
import LogoDesignService from './pages/services/LogoDesignService';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import { 
  initializeSmoothScroll, 
  addScrollOffsets, 
  initializeScrollAnimations 
} from './utils/smoothScroll';

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Simulate loading (replace with actual loading logic if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5 seconds

    // Initialize smooth scroll functionality
    initializeSmoothScroll();
    addScrollOffsets();
    initializeScrollAnimations();

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-screen"
        style={{ background: '#446FE0' }}
      >
        <img src="/loading.gif" alt="Loading..." className="w-[20%]" />
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-theme-primary transition-colors duration-300">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/saas-applications" element={<SaasService />} />
            <Route path="/services/web-design" element={<WebDesignService />} />
            <Route path="/services/chatbots" element={<ChatbotService />} />
            <Route path="/services/ai-agents" element={<AIAgentsService />} />
            <Route path="/services/logo-design" element={<LogoDesignService />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
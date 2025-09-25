import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { scrollToTop } from '../utils/smoothScroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-tertiary text-theme-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div 
              className="flex items-center space-x-2 mb-4 cursor-pointer" 
              onClick={() => scrollToTop()}
            >
              <div className="flex items-center justify-center  transition-all duration-300 transform hover:scale-105">
                <img src="/mdaz-icon.png" alt="MDAZ Logo" className="w-11 h-11" />
              </div>
              <span className="text-xl font-bold uppercase">MDAZ Solution</span>
            </div>
            <p className="text-theme-secondary mb-6 max-w-md">
              Empowering small and medium businesses with cutting-edge technology solutions. 
              Over 13+ years of experience in transforming business operations through custom software, 
              web design, and AI automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-theme-muted hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-theme-muted hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-theme-muted hover:text-blue-400 transition-all duration-300 transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-primary">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/saas-applications" className="text-theme-secondary hover:text-theme-primary transition-all duration-300 hover:translate-x-1">Custom SaaS Applications</Link></li>
              <li><Link to="/services/web-design" className="text-theme-secondary hover:text-theme-primary transition-all duration-300 hover:translate-x-1">Web Design & Development</Link></li>
              <li><Link to="/services/ai-agents" className="text-theme-secondary hover:text-theme-primary transition-all duration-300 hover:translate-x-1">AI Agents</Link></li>
              <li><Link to="/services/chatbots" className="text-theme-secondary hover:text-theme-primary transition-all duration-300 hover:translate-x-1">Chatbots</Link></li>
              <li><Link to="/services/logo-design" className="text-theme-secondary hover:text-theme-primary transition-all duration-300 hover:translate-x-1">Logo & Brand Design</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-theme-primary">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-theme-secondary">+91 9912 304 304</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-theme-secondary">info@mdazsolution.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-theme-secondary">Service Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-theme-secondary mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-theme-muted text-sm mb-4 md:mb-0">
            © {currentYear} MDAZ Solution. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="text-theme-muted hover:text-theme-primary transition-colors duration-300">Privacy Policy</Link>
            <Link to="/terms" className="text-theme-muted hover:text-theme-primary transition-colors duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
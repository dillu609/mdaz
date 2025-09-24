import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../hooks/useTheme';
import { scrollToTop } from '../utils/smoothScroll';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  
  // Check if current page is homepage
  const isHomepage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Custom SaaS Applications', href: '/services/saas-applications' },
        { name: 'Web Design & Development', href: '/services/web-design' },
        { name: 'AI Agents', href: '/services/ai-agents' },
        { name: 'Chatbots', href: '/services/chatbots' },
        { name: 'Logo & Brand Design', href: '/services/logo-design' },
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isHomepage
        ? isScrolled 
          ? 'bg-theme-primary shadow-theme-lg backdrop-blur-md' 
          : 'bg-transparent'
        : 'bg-theme-primary shadow-theme-lg backdrop-blur-md'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 gradient-blue rounded-lg flex items-center justify-center shadow-theme-md hover:shadow-theme-lg transition-all duration-300 transform hover:scale-105">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span 
              className={`text-xl font-bold transition-colors duration-300 cursor-pointer ${
                isHomepage
                  ? isScrolled ? 'text-theme-primary' : 'text-white'
                  : 'text-theme-primary'
              }`}
              onClick={() => scrollToTop()}
            >
              MDAZ Solution
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <>
                    <button 
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isHomepage
                          ? isScrolled 
                            ? 'text-theme-secondary hover:text-blue-600 hover:bg-theme-secondary' 
                            : 'text-white hover:text-blue-200 hover:bg-white/10'
                          : 'text-theme-secondary hover:text-blue-600 hover:bg-theme-secondary'
                      }`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div 
                      className={`absolute top-full left-0 mt-2 w-64 bg-theme-primary rounded-xl shadow-theme-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-theme-primary`}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-3 text-theme-secondary hover:bg-theme-secondary hover:text-blue-600 transition-all duration-200 rounded-lg mx-2"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 header-nav-link ${
                      location.pathname === item.href
                        ? isHomepage
                          ? isScrolled
                            ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 active'
                            : 'text-blue-200 bg-white/10 active'
                          : 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 active'
                        : isHomepage
                          ? isScrolled 
                            ? 'text-theme-secondary hover:text-blue-600 hover:bg-theme-secondary' 
                            : 'text-white hover:text-blue-200 hover:bg-white/10'
                          : 'text-theme-secondary hover:text-blue-600 hover:bg-theme-secondary'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Theme Toggle */}
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 mobile-menu-button ${
              isHomepage
                ? isScrolled 
                  ? 'text-theme-primary hover:bg-theme-secondary' 
                  : 'text-white hover:bg-white/10'
                : 'text-theme-primary hover:bg-theme-secondary'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-theme-primary border-t border-theme-primary shadow-theme-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-theme-secondary font-medium">Theme</span>
                <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
              </div>
              
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-3 rounded-lg transition-all duration-200 ${
                      location.pathname === item.href
                        ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-theme-secondary hover:text-blue-600 hover:bg-theme-secondary'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-3 py-2 text-sm text-theme-tertiary hover:text-blue-600 hover:bg-theme-secondary rounded-lg transition-all duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="btn-primary block w-full text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
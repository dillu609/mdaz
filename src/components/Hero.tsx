import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animate-fade-in">
      {/* Background */}
      <div className="absolute inset-0 gradient-blue"></div>
      <div className="absolute inset-0 bg-black opacity-30 dark:opacity-50"></div>
      <div className="absolute inset-0 pattern-bg"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Stop Wasting Time on
            <span className="text-blue-300"> Manual Tasks</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            We help small and medium businesses save 20+ hours per week through custom automation, 
            modern websites, and AI-powered solutions. No more outdated systems holding you back.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link
              to="/contact"
              className="btn-primary text-lg inline-flex items-center space-x-2"
            >
              <span>Get Your Free Business Assessment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#services-overview"
              className="btn-secondary border-2 border-blue-300 text-blue-100 hover:bg-blue-600 hover:border-blue-600 hover:text-white text-lg inline-flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Explore Services</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span>13+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span>30-Day Support Included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-purple-400 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
    </section>
  );
};

export default Hero;
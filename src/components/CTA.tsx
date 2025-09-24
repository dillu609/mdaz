import { Link } from 'react-router-dom';
import { ArrowRight, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 gradient-blue text-white relative overflow-hidden">
      <div className="absolute inset-0 pattern-bg"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up dark:text-white">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 text-blue-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Join 150+ successful businesses that have automated their operations, 
          increased efficiency, and boosted revenue with our proven solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-theme-lg hover:shadow-theme-xl inline-flex items-center space-x-2"
          >
            <span>Get Your Free Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/portfolio"
            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-flex items-center space-x-2"
          >
            <span>View Portfolio</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex items-center justify-center space-x-2 text-blue-200 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Shield className="w-5 h-5" />
          <span>100% Satisfaction Guarantee • 30-Day Support Included • No Long-Term Contracts</span>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
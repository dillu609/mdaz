import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Custom SaaS Applications",
      subtitle: "Automate Your Business Processes",
      description: "Save 20+ hours per week with custom software solutions tailored to your unique business needs.",
      image: "/mdaz_slider_1.jpg",
      cta: "Learn More",
      link: "/services/saas-applications",
      stats: { value: "25", label: "Hours Saved Weekly" }
    },
    {
      title: "Professional Web Design",
      subtitle: "Websites That Convert Visitors to Customers",
      description: "Modern, mobile-responsive websites that generate leads and grow your business 24/7.",
      image: "/mdaz_slider_2.jpg",
      cta: "View Portfolio",
      link: "/portfolio",
      stats: { value: "300%", label: "Lead Increase" }
    },
    {
      title: "AI-Powered Chatbots",
      subtitle: "Never Miss a Customer Inquiry",
      description: "24/7 customer service that captures leads, answers questions, and schedules appointments automatically.",
      image: "/mdaz_slider_3.jpg",
      cta: "Get Started",
      link: "/services/chatbots",
      stats: { value: "24/7", label: "Customer Support" }
    },
    {
      title: "Client Success Stories",
      subtitle: "Real Results from Real Businesses",
      description: "See how we've helped businesses like yours achieve measurable growth and efficiency improvements.",
      image: "/mdaz_slider_4.jpg",
      cta: "Read Case Studies",
      link: "/portfolio",
      stats: { value: "98%", label: "Client Satisfaction" }
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-theme-primary">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div className="mb-4">
                    <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      {slide.subtitle}
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h2>
                  
                  <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <a
                      href={slide.link}
                      className="bg-blue-600 text-white px-8 py-9 rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 hover:text-white"
                    >
                      <span>{slide.cta}</span>
                    </a>

                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
                      <div className="text-3xl font-bold text-white mb-1">
                        {slide.stats.value}
                      </div>
                      <div className="text-gray-200 text-sm">
                        {slide.stats.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-blue-600 transition-all duration-300 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  );
};

export default Slider;
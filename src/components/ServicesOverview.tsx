import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Globe, 
  Bot, 
  Brain, 
  Palette, 
  ArrowRight 
} from 'lucide-react';

const ServicesOverview = () => {
  const services = [
    {
      icon: Code,
      title: "Custom SaaS Applications",
      description: "Tailored software solutions that automate your unique business processes and eliminate manual work.",
      benefits: ["Save 20+ hours/week", "Reduce human errors", "Scale efficiently"],
      href: "/services/saas-applications",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      description: "Modern, mobile-responsive websites that convert visitors into customers and grow your business.",
      benefits: ["Professional image", "Lead generation", "Mobile-optimized"],
      href: "/services/web-design",
      color: "indigo"
    },
    {
      icon: Brain,
      title: "AI Agents",
      description: "Intelligent automation that handles complex tasks, customer service, and business processes.",
      benefits: ["24/7 availability", "Consistent service", "Cost-effective"],
      href: "/services/ai-agents",
      color: "purple"
    },
    {
      icon: Bot,
      title: "Chatbots",
      description: "Smart customer service bots that capture leads, answer questions, and never sleep.",
      benefits: ["Instant responses", "Lead capture", "Reduce support costs"],
      href: "/services/chatbots",
      color: "green"
    },
    {
      icon: Palette,
      title: "Logo & Brand Design",
      description: "Professional branding that makes your business memorable and builds customer trust.",
      benefits: ["Professional image", "Brand recognition", "Customer trust"],
      href: "/services/logo-design",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      indigo: "bg-indigo-50 text-indigo-600 border-indigo-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      green: "bg-green-50 text-green-600 border-green-200",
      orange: "bg-orange-50 text-orange-600 border-orange-200"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section className="py-20 bg-theme-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-theme-primary mb-4">
            Complete Technology Solutions for Growing Businesses
          </h2>
          <p className="text-xl text-theme-secondary max-w-3xl mx-auto">
            From custom software to stunning websites, we provide everything you need to 
            automate operations, attract customers, and scale efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${getColorClasses(service.color)}`}>
                  <service.icon className="w-8 h-8 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-theme-primary mb-4 whitespace-nowrap">
                  {service.title}
                </h3>
                
                <p className="text-theme-secondary mb-6 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-theme-primary mb-3 uppercase tracking-wide">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: `${benefitIndex * 0.2}s` }}></div>
                        <span className="text-theme-tertiary">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium group transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="btn-primary inline-flex items-center space-x-2 dark:hover:text-white"
          >
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Globe, 
  Bot, 
  Brain, 
  Palette, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom SaaS Applications",
      shortDesc: "Automate your unique business processes with tailored software solutions",
      features: [
        "Custom business automation",
        "Data management systems",
        "Workflow optimization",
        "Integration with existing tools",
        "Scalable architecture"
      ],
      priceRange: "Starting at $5,000",
      href: "/services/saas-applications",
      color: "blue"
    },
    {
      icon: Globe,
      title: "Web Design & Development",
      shortDesc: "Modern, conversion-focused websites that grow your business",
      features: [
        "Mobile-responsive design",
        "SEO optimization",
        "Lead generation focus",
        "Fast loading speeds",
        "Content management system"
      ],
      priceRange: "Starting at $ 500",
      href: "/services/web-design",
      color: "indigo"
    },
    {
      icon: Brain,
      title: "AI Agents",
      shortDesc: "Intelligent automation for complex business processes",
      features: [
        "Custom AI workflows",
        "Document processing",
        "Data analysis automation",
        "Customer service AI",
        "Process optimization"
      ],
      priceRange: "Starting at $3,500",
      href: "/services/ai-agents",
      color: "purple"
    },
    {
      icon: Bot,
      title: "Chatbots",
      shortDesc: "24/7 customer service that never sleeps",
      features: [
        "Lead capture automation",
        "FAQ automation",
        "Appointment scheduling",
        "Multi-platform integration",
        "Analytics and reporting"
      ],
      priceRange: "Starting at $1,500",
      href: "/services/chatbots",
      color: "green"
    },
    {
      icon: Palette,
      title: "Logo & Brand Design",
      shortDesc: "Professional branding that builds trust and recognition",
      features: [
        "Custom logo design",
        "Brand identity package",
        "Marketing materials",
        "Style guide creation",
        "Multiple format delivery"
      ],
      priceRange: "Starting at $800",
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
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 ">
            Complete Technology Solutions for Growing Businesses
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            From custom software to stunning websites, we provide everything you need to 
            automate operations, attract customers, and scale efficiently.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-theme-primary mb-4">
              Choose the Right Solution for Your Business
            </h2>
            <p className="text-xl text-gray-600">
              All our services come with a 100% satisfaction guarantee and 30-day support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.shortDesc}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{service.priceRange}</p>
                      <p className="text-sm text-gray-500">Custom quotes available</p>
                    </div>
                    <Link
                      to={service.href}
                      className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600">Transparent, efficient, and results-driven</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { 
                step: "01", 
                title: "Discovery", 
                desc: "We dive deep into your business to understand your specific challenges and goals" 
              },
              { 
                step: "02", 
                title: "Strategy", 
                desc: "Custom solution design with clear timelines, features, and expected outcomes" 
              },
              { 
                step: "03", 
                title: "Development", 
                desc: "Agile development with regular updates and opportunities for feedback" 
              },
              { 
                step: "04", 
                title: "Testing", 
                desc: "Comprehensive testing to ensure reliability, security, and optimal performance" 
              },
              { 
                step: "05", 
                title: "Support", 
                desc: "30-day included support plus ongoing maintenance and feature updates" 
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-lg">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's talk about how we can solve your specific business challenges with the right technology solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            <span>Get Your Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
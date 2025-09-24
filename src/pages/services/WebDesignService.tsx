import React from 'react';
import { Link } from 'react-router-dom';
import { 
  // Globe, 
  Smartphone, 
  Search, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Users,
  Target
} from 'lucide-react';

const WebDesignService = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices where 60% of your customers browse"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Built to rank higher in Google and attract organic traffic"
    },
    {
      icon: TrendingUp,
      title: "Conversion Focus",
      description: "Designed specifically to turn visitors into paying customers"
    },
    {
      icon: Eye,
      title: "Professional Image",
      description: "Modern design that builds trust and credibility with potential customers"
    }
  ];

  // const benefits = [
  //   "Professional online presence that builds trust",
  //   "Mobile-responsive design for all devices",
  //   "SEO optimization to attract customers",
  //   "Lead capture forms and contact systems",
  //   "Fast loading speeds (under 3 seconds)",
  //   "Content management system for easy updates",
  //   "Analytics setup to track performance",
  //   "30-day support and training included"
  // ];

  const packages = [
    {
      name: "Starter Website",
      price: "$2,500",
      description: "Perfect for new businesses",
      features: [
        "5-page responsive website",
        "Mobile optimization",
        "Basic SEO setup",
        "Contact forms",
        "Google Analytics",
        "30-day support"
      ],
      recommended: false
    },
    {
      name: "Business Pro",
      price: "$4,500",
      description: "Most popular for SMBs",
      features: [
        "10-page responsive website",
        "Advanced SEO optimization",
        "Lead capture system",
        "Blog/news section",
        "Social media integration",
        "Chatbot integration",
        "Google Analytics + heatmaps",
        "60-day support"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Custom Quote",
      description: "For complex requirements",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "E-commerce integration",
        "User accounts/portals",
        "Advanced integrations",
        "Custom reporting",
        "Priority support",
        "Ongoing maintenance"
      ],
      recommended: false
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Websites That Actually Generate Business
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Your website should be your best salesperson, working 24/7 to attract customers and 
            grow your business. We design conversion-focused sites that deliver real results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
          >
            <span>Get Website Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Is Your Current Website Hurting Your Business?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <Users className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Driving Customers Away</h3>
              <p className="text-gray-600">Outdated design makes your business look unprofessional and untrustworthy</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <Search className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Invisible on Google</h3>
              <p className="text-gray-600">Poor SEO means potential customers can't find you when they search</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <Target className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Missing Opportunities</h3>
              <p className="text-gray-600">No clear way for visitors to contact you or request your services</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Websites Different
            </h2>
            <p className="text-xl text-gray-600">
              We don't just build websites - we build lead generation machines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Auto repair shop"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Lead Generation</p>
                <p className="text-3xl font-bold text-green-600">+300%</p>
              </div>
            </div>
            
            <div>
              <div className="mb-4">
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Success Story
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Chen Auto Repair: From 2 Leads to 30+ Per Month
              </h2>
              
              <div className="space-y-6">
                <blockquote className="bg-white border-l-4 border-indigo-600 p-6">
                  <p className="text-gray-700 italic mb-3">
                    "The website they built for us generates 3x more leads than our old one. 
                    The chatbot answers customer questions 24/7, and we've captured dozens of 
                    after-hours inquiries we would have missed."
                  </p>
                  <footer className="text-gray-600">— Michael Chen, Owner</footer>
                </blockquote>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">300%</div>
                    <p className="text-gray-600">Lead Increase</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">50+</div>
                    <p className="text-gray-600">After-Hours Captures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Website Packages</h2>
            <p className="text-xl text-gray-600">Choose the perfect solution for your business size and needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                pkg.recommended ? 'ring-2 ring-blue-600 transform scale-105' : ''
              }`}>
                {pkg.recommended && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-6">{pkg.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full text-center px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center space-x-2 ${
                      pkg.recommended 
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Online Presence?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your website goals and create a solution that generates real business results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            <span>Start Your Website Project</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDesignService;
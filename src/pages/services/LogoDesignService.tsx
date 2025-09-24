import React from 'react';
import { Link } from 'react-router-dom';
import { 
  // Palette, 
  Eye, 
  Heart, 
  Award, 
  CheckCircle, 
  ArrowRight,
  FileImage,
  Smartphone,
  Monitor
} from 'lucide-react';

const LogoDesignService = () => {
  const features = [
    {
      icon: Eye,
      title: "Memorable Brand Identity",
      description: "Distinctive designs that make your business unforgettable"
    },
    {
      icon: Heart,
      title: "Customer Trust Building",
      description: "Professional branding that instantly builds credibility"
    },
    {
      icon: FileImage,
      title: "Complete Brand Package",
      description: "Logo variations, style guide, and marketing materials"
    },
    {
      icon: Award,
      title: "Industry-Specific Design",
      description: "Designs tailored to your industry and target audience"
    }
  ];

  const packages = [
    {
      name: "Logo Essentials",
      price: "$800",
      description: "Perfect for startups",
      features: [
        "Custom logo design",
        "3 design concepts",
        "2 rounds of revisions",
        "High-resolution files",
        "Black & white versions",
        "Basic style guide"
      ],
      deliverables: "5-7 business days"
    },
    {
      name: "Brand Identity Pro",
      price: "$1,500",
      description: "Complete brand solution",
      features: [
        "Everything in Essentials",
        "5 design concepts",
        "Unlimited revisions",
        "Business card design",
        "Letterhead template",
        "Social media kit",
        "Comprehensive style guide",
        "Brand usage guidelines"
      ],
      deliverables: "7-10 business days",
      recommended: true
    },
    {
      name: "Marketing Suite",
      price: "$2,500",
      description: "Full marketing materials",
      features: [
        "Everything in Brand Pro",
        "Website banner designs",
        "Marketing brochure",
        "Email signature template",
        "Vehicle wrap design",
        "Signage templates",
        "Brand implementation guide",
        "6 months brand support"
      ],
      deliverables: "10-14 business days"
    }
  ];

  const portfolio = [
    {
      title: "Tech Startup",
      industry: "Technology",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Restaurant Chain",
      industry: "Food & Beverage",
      image: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Legal Firm",
      industry: "Professional Services",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-900 to-red-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Professional Logo & Brand Design That Builds Trust
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Your logo is often the first impression customers have of your business. 
            Make it count with professional design that instantly communicates quality and reliability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-700 transition-colors text-lg"
          >
            <span>Start Your Brand</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Is Your Current Branding Holding You Back?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <Eye className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Unprofessional Image</h3>
              <p className="text-gray-600">DIY or outdated logos make your business appear amateur or unreliable</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <Heart className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Lost Customer Trust</h3>
              <p className="text-gray-600">Poor branding fails to communicate quality and expertise to potential customers</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <Award className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Forgettable Brand</h3>
              <p className="text-gray-600">Generic design makes it impossible to stand out from competitors</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Professional Branding That Drives Results
            </h2>
            <p className="text-xl text-gray-600">
              Strategic design that builds trust, recognition, and customer loyalty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Design Portfolio</h2>
            <p className="text-xl text-gray-600">Professional logos across various industries</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.industry}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <span>View Complete Portfolio</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Logo & Brand Design Packages</h2>
            <p className="text-xl text-gray-600">Professional branding solutions for every budget</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                pkg.recommended ? 'ring-2 ring-orange-600 transform scale-105' : ''
              }`}>
                {pkg.recommended && (
                  <div className="bg-orange-600 text-white text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{pkg.price}</div>
                  <p className="text-sm text-gray-500 mb-6">Delivered in {pkg.deliverables}</p>
                  
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
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <span>Choose This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* File Formats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Complete File Package for All Your Needs
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Monitor className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Digital Use</h3>
              <p className="text-gray-600">PNG, JPG, SVG files for websites, social media, and digital marketing</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <FileImage className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Print Ready</h3>
              <p className="text-gray-600">High-resolution files for business cards, signage, and marketing materials</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Smartphone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Media</h3>
              <p className="text-gray-600">Optimized versions for all social media platforms and profile images</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Build a Brand That Customers Trust
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Professional logo design starting at just $800. Transform your business image in just one week.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            <span>Start Your Brand Design</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LogoDesignService;
import React from 'react';
import { ExternalLink, TrendingUp, Clock, DollarSign } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      bg:'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: "Bakery Chain Automation System",
      client: "Johnson's Bakery Chain",
      industry: "Food & Beverage",
      image: "/Bakery_Chain_Automation_System.jpg",
      challenge: "Manual inventory tracking across 5 locations was consuming 25+ hours weekly and causing frequent stockouts, leading to lost sales and frustrated customers.",
      solution: "Custom SaaS application with real-time inventory tracking, automated reorder points, supplier integration, and mobile access for store managers.",
      results: [
        { metric: "25 hours", label: "Weekly time savings", icon: Clock },
        { metric: "95%", label: "Error reduction", icon: TrendingUp },
        { metric: "40%", label: "Revenue increase", icon: DollarSign },
        { metric: "Zero", label: "Stockouts in 6 months", icon: TrendingUp }
      ],
      testimonial: "This system completely changed how we operate. We went from constantly being behind to having complete control of our inventory. The ROI was incredible.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      bg:'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: "Auto Repair Lead Generation Website",
      client: "Chen Auto Repair",
      industry: "Automotive Services",
      image: "/Auto_Repair_Lead_Generation.jpg",
      challenge: "Outdated website generating only 2-3 leads per month. Competitors were capturing most online traffic and potential customers couldn't easily find or contact them.",
      solution: "Complete website redesign with SEO optimization, integrated booking system, customer review showcase, and 24/7 chatbot for instant customer support.",
      results: [
        { metric: "300%", label: "Lead increase", icon: TrendingUp },
        { metric: "85%", label: "Mobile traffic increase", icon: TrendingUp },
        { metric: "24/7", label: "Customer availability", icon: Clock },
        { metric: "50+", label: "After-hours inquiries captured", icon: DollarSign }
      ],
      testimonial: "Our phone hasn't stopped ringing since the new website went live. The chatbot alone has captured over 50 leads after hours that we would have lost before.",
      technologies: ["React", "Tailwind CSS", "Chatbot AI", "Google Analytics"]
    },
    {
      bg:'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: "Marketing Agency Client Portal",
      client: "Rodriguez Marketing Agency",
      industry: "Marketing & Advertising",
      image: "/Marketing_Agency_Client_Portal.jpg",
      challenge: "Client onboarding was taking 3+ weeks with manual document collection, contract signing, and project setup. This delayed revenue and frustrated new clients.",
      solution: "AI-powered client portal with automated onboarding, document collection, e-signature integration, project tracking, and automated progress reporting.",
      results: [
        { metric: "80%", label: "Faster onboarding", icon: Clock },
        { metric: "100%", label: "Document accuracy", icon: TrendingUp },
        { metric: "$50K", label: "Additional annual revenue", icon: DollarSign },
        { metric: "Zero", label: "Lost clients due to delays", icon: TrendingUp }
      ],
      testimonial: "The AI agent handles our entire onboarding process flawlessly. What used to take weeks now happens in days, and clients love the professional experience.",
      technologies: ["AI Automation", "Document Processing", "E-signature API", "CRM Integration"]
    },
    {
      bg:'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: "Construction Project Management Platform",
      client: "Park Construction LLC",
      industry: "Construction",
      image: "/Construction_Project_Management_Platform.jpg",
      challenge: "Managing multiple construction projects with spreadsheets and email was causing missed deadlines, budget overruns, and communication breakdowns with clients.",
      solution: "Comprehensive project management platform with timeline tracking, budget monitoring, client communication portal, document management, and mobile field updates.",
      results: [
        { metric: "30%", label: "Faster project completion", icon: Clock },
        { metric: "25%", label: "Cost savings", icon: DollarSign },
        { metric: "90%", label: "Client satisfaction increase", icon: TrendingUp },
        { metric: "Zero", label: "Missed deadlines", icon: TrendingUp }
      ],
      testimonial: "This platform transformed our business. We're completing projects faster, staying under budget, and our clients are happier than ever with the transparency.",
      technologies: ["Custom Dashboard", "Mobile App", "Cloud Storage", "Real-time Updates"]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-black mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            See how we've helped small and medium businesses like yours achieve measurable growth 
            through custom technology solutions.
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2M+</div>
              <p className="text-gray-600">Client Revenue Generated</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      
      <section>
        
          <div>
          {caseStudies.map((study, index) => (
            <div key={index} className="scroll-offset" style={{ backgroundImage: `url(${study.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div style={{ backdropFilter: `blur(10px)`}}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`} >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={study.image}
                    alt={study.title}
                    className="rounded-2xl shadow-xl w-full object-cover"
                  />
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">The Challenge:</h4>
                    <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Solution:</h4>
                    <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Measurable Results:</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center space-x-3 mb-2">
                            <result.icon className="w-5 h-5 text-blue-600" />
                            <span className="text-2xl font-bold text-gray-900">{result.metric}</span>
                          </div>
                          <p className="text-sm text-gray-600">{result.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
                    <p className="text-gray-700 italic">"{study.testimonial}"</p>
                    <footer className="text-gray-600 mt-3">— {study.client}</footer>
                  </blockquote>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
            ))}
          </div>
       
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to See Similar Results for Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can solve your specific challenges and deliver measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Schedule Free Consultation</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="tel:555-123-4567"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
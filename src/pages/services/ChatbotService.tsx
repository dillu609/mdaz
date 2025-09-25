import React from 'react';
import { Link } from 'react-router-dom';
import { 
  // Bot, 
  Clock, 
  MessageCircle, 
  Users, 
  // CheckCircle, 
  ArrowRight,
  Phone,
  Calendar,
  HelpCircle
} from 'lucide-react';

const ChatbotService = () => {
  const features = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry, even after business hours"
    },
    {
      icon: Users,
      title: "Lead Capture",
      description: "Automatically collect contact information from interested visitors"
    },
    {
      icon: HelpCircle,
      title: "FAQ Automation",
      description: "Answer common questions instantly, reducing support workload"
    },
    {
      icon: Calendar,
      title: "Appointment Scheduling",
      description: "Let customers book appointments directly through the chat"
    }
  ];

  const useCases = [
    {
      colour: 'blue',
      industry: "Restaurants",
      example: "Take reservations, answer menu questions, and collect catering inquiries"
    },
    {
      colour: 'orange',
      industry: "Professional Services",
      example: "Qualify leads, schedule consultations, and provide service information"
    },
    {
      colour: 'green',
      industry: "Retail",
      example: "Help customers find products, check availability, and process orders"
    },
    {
      
      colour: 'indigo',
      industry: "Healthcare",
      example: "Schedule appointments, answer common questions, and collect patient information"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            24/7 Customer Service That Never Sleeps
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Capture leads, answer questions, and provide instant support around the clock. 
            Our smart chatbots handle customer interactions so you can focus on running your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-green-600 text-white hover:text-white px-8 py-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-lg"
          >
            <span>Get Chatbot Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How Many Customers Are You Losing After Hours?
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Hidden Cost of Being Unavailable</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Customers call after hours and hang up when no one answers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Website visitors have questions but no way to get immediate answers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Competitors with better availability capture your potential customers</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-600 p-6 rounded-xl text-center">
                <p className="text-3xl font-bold text-white mb-2">67%</p>
                <p className="text-white">of customers expect immediate responses to their questions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white-900 mb-4">
              Smart Chatbots That Work While You Sleep
            </h2>
            <p className="text-xl text-gray-600">
              Capture every opportunity with intelligent customer service automation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Chatbots Customized for Your Industry
            </h2>
            <p className="text-xl text-gray-600">
              Every business is different. Here's how chatbots help specific industries:
            </p>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className={`p-6 shadow-sm bg-${useCase.colour}-600 rounded-tr-3xl rounded-bl-3xl`}>
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.industry}</h3>
                <p className="text-white/70">{useCase.example}</p>
              </div>
            ))}
            </div>
            </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-whote-900 mb-12">
            Real Results from Our Chatbot Clients
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">85%</div>
              <p className="text-gray-600">of questions answered automatically</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <p className="text-gray-600">after-hours leads captured monthly</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">15 Sec</div>
              <p className="text-gray-600">average response time</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Start Capturing Every Customer Opportunity
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Custom chatbots starting at $1,500. Typically pays for itself within the first month.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-green-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            <span>Get Your Chatbot Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ChatbotService;
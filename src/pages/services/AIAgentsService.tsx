import React from 'react';
import { Link } from 'react-router-dom';
import { 
  // Brain, 
  FileText, 
  BarChart, 
  Users, 
  CheckCircle, 
  ArrowRight,
  Cpu,
  // Clock,
  Target
} from 'lucide-react';

const AIAgentsService = () => {
  const features = [
    {
      icon: FileText,
      title: "Document Processing",
      description: "Automatically extract, organize, and process business documents"
    },
    {
      icon: BarChart,
      title: "Data Analysis",
      description: "AI-powered insights and automated reporting from your business data"
    },
    {
      icon: Users,
      title: "Customer Service",
      description: "Intelligent customer support that handles complex inquiries"
    },
    {
      icon: Cpu,
      title: "Process Automation",
      description: "Smart automation that adapts to complex business rules and scenarios"
    }
  ];

  const capabilities = [
    "Document analysis and data extraction",
    "Intelligent customer service responses",
    "Automated report generation",
    "Complex decision-making workflows",
    "Integration with existing systems",
    "Learning and adaptation over time",
    "Multi-language support",
    "Custom business rule implementation"
  ];

  const useCases = [
    {
      title: "Legal Firm Document Review",
      description: "AI agent reviews contracts and legal documents, flagging important clauses and potential issues",
      timesSaved: "15 hours/week",
      icon: FileText
    },
    {
      title: "Insurance Claims Processing",
      description: "Automated review and processing of insurance claims with fraud detection capabilities",
      timesSaved: "30 hours/week",
      icon: Target
    },
    {
      title: "Customer Onboarding",
      description: "Intelligent onboarding agent that guides new customers through setup processes",
      timesSaved: "12 hours/week",
      icon: Users
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">
            AI Agents That Handle Complex Business Tasks
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Go beyond simple automation with intelligent AI agents that can understand context, 
            make decisions, and handle complex workflows just like your best employee would.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-purple-700 transition-colors text-lg"
          >
            <span>Explore AI Solutions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              When Simple Automation Isn't Enough
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Some business processes require intelligence, context understanding, and decision-making. 
              That's where AI agents excel.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Complex Tasks That Need AI Intelligence:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Analyzing documents for key information</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Complex customer service scenarios</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Multi-step approval processes</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Data analysis and insight generation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Personalized customer interactions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Quality control and compliance checking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AI Agent Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Intelligent automation that understands your business context and makes smart decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-World AI Agent Applications
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses like yours are using AI agents to save time and improve operations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Time Savings:</p>
                  <p className="text-2xl font-bold text-green-600">{useCase.timesSaved}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured Case Study
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Rodriguez Marketing: AI-Powered Client Onboarding
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge:</h3>
                  <p className="text-gray-600">
                    Client onboarding was taking 3+ weeks with manual document collection, 
                    contract review, and project setup processes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Agent Solution:</h3>
                  <p className="text-gray-600">
                    Intelligent onboarding agent that guides clients through document upload, 
                    automatically reviews contracts for completeness, and sets up projects based on service type.
                  </p>
                </div>

                <blockquote className="bg-purple-50 border-l-4 border-purple-600 p-6">
                  <p className="text-gray-700 italic">
                    "The AI agent handles our entire onboarding process flawlessly. What used to 
                    take weeks now happens in days, and clients love the professional experience."
                  </p>
                  <footer className="text-gray-600 mt-3">— Lisa Rodriguez, Agency Owner</footer>
                </blockquote>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Marketing team collaboration"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Time Reduction</p>
                <p className="text-3xl font-bold text-green-600">80%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What You'll Achieve with AI Agents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg text-gray-700">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Implement Intelligent Automation?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            AI agents starting at $3,500. Let's discuss how AI can solve your specific business challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors text-lg"
          >
            <span>Discuss AI Solutions</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIAgentsService;
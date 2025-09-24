import React from 'react';
import { Link } from 'react-router-dom';
import { 
  // Code, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle, 
  ArrowRight, 
  Clock,
  DollarSign,
  TrendingUp
} from 'lucide-react';

const SaasService = () => {
  const features = [
    {
      icon: Database,
      title: "Custom Data Management",
      description: "Tailored databases that organize your business data exactly how you need it"
    },
    {
      icon: Zap,
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks and streamline your business processes"
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with the ability to grow as your business expands"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Reporting",
      description: "Real-time insights and custom reports to drive better business decisions"
    }
  ];

  const benefits = [
    "Save 20+ hours per week on manual tasks",
    "Reduce human errors by up to 95%",
    "Scale operations without adding staff",
    "Real-time data and reporting",
    "Custom workflows for your business",
    "Mobile-friendly access anywhere"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Business Analysis",
      description: "We analyze your current processes to identify automation opportunities"
    },
    {
      step: 2,
      title: "Custom Design",
      description: "Design a solution that fits your exact workflow and requirements"
    },
    {
      step: 3,
      title: "Development",
      description: "Build your custom application with regular progress updates"
    },
    {
      step: 4,
      title: "Training & Launch",
      description: "Train your team and ensure smooth deployment to your business"
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-indigo-900 text-white ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 dark:text-white">
            Custom SaaS Applications That Automate Your Business
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Stop wasting time on repetitive manual tasks. Our custom software solutions automate 
            your unique business processes, saving you hours every week while reducing errors.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-lg"
          >
            <span>Get Custom Quote</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Are You Tired of These Daily Frustrations?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <Clock className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Wasting Hours Daily</h3>
              <p className="text-gray-600">Manual data entry, tracking spreadsheets, and repetitive administrative tasks</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <Shield className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Error-Prone Processes</h3>
              <p className="text-gray-600">Human mistakes in data entry leading to inventory errors, billing issues, and customer problems</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
              <DollarSign className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Limited Growth</h3>
              <p className="text-gray-600">Can't scale operations without hiring more staff to handle manual work</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Custom Software Built for Your Exact Needs
            </h2>
            <p className="text-xl text-gray-600">
              No one-size-fits-all solutions. We build software that matches your unique business processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Case Study
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How We Saved Johnson's Bakery 25 Hours Per Week
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge:</h3>
                  <p className="text-gray-600">
                    Managing inventory across 5 bakery locations with spreadsheets was consuming 25+ hours 
                    weekly and causing frequent stockouts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution:</h3>
                  <p className="text-gray-600">
                    Custom inventory management system with real-time tracking, automated reorder points, 
                    supplier integration, and mobile access for managers.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">25 Hours</div>
                    <div className="text-sm text-gray-600">Weekly Time Savings</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
                    <div className="text-sm text-gray-600">Error Reduction</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bakery operations"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Revenue Impact</p>
                <p className="text-3xl font-bold text-green-600">+40%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            What You'll Achieve with Custom SaaS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Build Your Custom Solution</h2>
            <p className="text-xl text-gray-600">A proven process that ensures your software solves real problems</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 dark:text-white">
            Transform Your Business Operations
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Custom SaaS applications starting at $5,000. Most projects pay for themselves within 3-6 months.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Custom Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SaasService;
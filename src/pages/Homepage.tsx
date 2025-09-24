import { Link } from 'react-router-dom';
import { ArrowRight, Clock, DollarSign, TrendingUp,  CheckCircle } from 'lucide-react';
// import { ArrowRight, Clock, DollarSign, TrendingUp, Star, CheckCircle } from 'lucide-react';
import Slider from '../components/Slider';
import ServicesOverview from '../components/ServicesOverview';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Homepage = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Wasting Time on Manual Tasks",
      description: "Stop losing hours on repetitive data entry and manual processes that could be automated."
    },
    {
      icon: DollarSign,
      title: "Outdated Website Losing Customers",
      description: "Your website should be bringing in new business, not driving potential customers away."
    },
    {
      icon: TrendingUp,
      title: "Missing Growth Opportunities",
      description: "Without proper systems, you're missing inquiries and losing revenue after hours."
    }
  ];

  const benefits = [
    "Save 20+ hours per week through automation",
    "Increase lead generation by up to 300%",
    "Professional image that builds trust",
    "24/7 customer support with AI chatbots",
    "Scalable solutions that grow with your business"
  ];

  return (
    <div>
      <Slider />
      
      {/* Pain Points Section */}
      <section id="pain-points" className="py-20 bg-gray-50 scroll-offset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Are These Business Challenges Holding You Back?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the daily struggles of running a growing business. Here's how we can solve them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800">
                  <point.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 transition-all duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 transition-colors duration-300">{point.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section id="solutions" className="py-20 scroll-offset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-theme-primary mb-4">
              Transform Your Business with Proven Solutions
            </h2>
            <p className="text-xl text-theme-secondary">
              Over 13 years of experience helping SMBs achieve measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-theme-primary mb-6">
                What You'll Achieve
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-theme-secondary">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <span>See Real Results from Our Clients</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                <h4 className="text-xl font-semibold text-theme-primary  dark:text-blue-900 mb-2">Case Study Highlight</h4>
                <p className="text-theme-secondary dark:text-gray-900 mb-4">
                  "MDAZ Solution automated our inventory management system, saving us 25 hours per week 
                  and reducing errors by 95%. Our revenue increased 40% in just 6 months."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-medium text-theme-primary dark:text-blue-900">Sarah Johnson</p>
                    <p className="text-sm text-theme-secondary dark:text-gray-900">CEO, Local Bakery Chain</p>
                  </div>
                </div>
              </div>
              <Link
                to="/portfolio"
                className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-2"
              >
                <span>Read Full Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div id="services-overview">
        <ServicesOverview />
      </div>
      <Testimonials />
      
      {/* Trust Indicators */}
      <section id="trust-indicators" className="py-20 bg-theme-tertiary text-white scroll-offset">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-theme-primary  dark:text-blue-400 mb-2">13+</div>
              <p className="text-xl text-blue-400">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">150+</div>
              <p className="text-xl text-blue-400">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <p className="text-xl text-blue-400">Client Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default Homepage;
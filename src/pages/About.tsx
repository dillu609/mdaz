import { CheckCircle, Award, Users, Clock } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Client-First Approach",
      description: "Your success is our success. We don't just deliver projects - we deliver results that transform your business."
    },
    {
      icon: Award,
      title: "13+ Years of Expertise",
      description: "Over a decade of experience helping SMBs leverage technology to grow faster and operate more efficiently."
    },
    {
      icon: Users,
      title: "Dedicated Partnership",
      description: "We become an extension of your team, providing ongoing support and guidance beyond project completion."
    },
    {
      icon: Clock,
      title: "Fast, Reliable Delivery",
      description: "We understand that time is money. Our streamlined processes ensure quick turnaround without compromising quality."
    }
  ];

  const teamStats = [
    { number: "13+", label: "Years of Experience" },
    { number: "150+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Empowering Small Businesses Through
                <span className="text-blue-600"> Smart Technology</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Founded in 2011, MDAZ Solution has been the trusted technology partner for over 150 
                small and medium businesses. We understand your challenges because we've been solving 
                them for over 13 years.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {teamStats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="/pexels-photo-3184360.jpg"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <p className="text-sm text-gray-600 mb-2">Client Success Rate</p>
                <p className="text-3xl font-bold text-green-600">98%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-theme-primary mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe every small business deserves access to the same powerful technology that 
            large corporations use. Our mission is to level the playing field by providing 
            affordable, custom solutions that help you compete, grow, and thrive in today's 
            digital marketplace.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose MDAZ Solution?</h2>
            <p className="text-xl text-gray-600">
              We're not just another development company. We're your strategic technology partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-theme-primary mb-4">Our Proven Process</h2>
            <p className="text-xl text-gray-600">
              A transparent, step-by-step approach that ensures your project succeeds
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We analyze your business needs and challenges" },
              { step: "02", title: "Strategy", desc: "Custom solution design tailored to your goals" },
              { step: "03", title: "Development", desc: "Build with regular updates and feedback loops" },
              { step: "04", title: "Testing", desc: "Thorough testing to ensure everything works perfectly" },
              { step: "05", title: "Support", desc: "30-day support plus ongoing maintenance options" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600  text-white  rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold  text-theme-primary text-white mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
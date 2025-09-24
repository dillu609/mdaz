import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson's Bakery Chain",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "MDAZ Solution completely transformed our operations. Their custom inventory system saved us 25 hours per week and reduced errors by 95%. Our revenue increased 40% in just 6 months!",
      result: "40% Revenue Increase"
    },
    {
      name: "Michael Chen",
      company: "Chen Auto Repair",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The website they built for us generates 3x more leads than our old one. The chatbot answers customer questions 24/7, and we've captured dozens of after-hours inquiries.",
      result: "3x More Leads Generated"
    },
    {
      name: "Lisa Rodriguez",
      company: "Rodriguez Marketing Agency",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "Professional, responsive, and delivered exactly what we needed. The AI agent they created handles our client onboarding process flawlessly. Couldn't recommend them more highly.",
      result: "Streamlined Onboarding"
    },
    {
      name: "David Park",
      company: "Park Construction LLC",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "They took our outdated website and transformed it into a lead-generating machine. The project management system they built helps us stay organized and profitable.",
      result: "Better Project Management"
    }
  ];

  return (
    <section className="py-20 bg-theme-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-theme-primary mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-theme-secondary">
            See how we've helped SMBs like yours achieve measurable growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-110" 
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 opacity-50" />
                <p className="text-theme-secondary text-lg leading-relaxed pl-6">
                  {testimonial.text}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-theme-md transition-transform duration-300 group-hover:scale-110"
                  />
                  <div>
                    <p className="font-semibold text-theme-primary">{testimonial.name}</p>
                    <p className="text-theme-tertiary">{testimonial.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-theme-muted">Result:</p>
                  <p className="font-semibold text-green-600">{testimonial.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
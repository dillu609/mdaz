import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search,  BookOpen, TrendingUp } from 'lucide-react';
// import { Calendar, Clock, ArrowRight, Search, Tag, BookOpen, TrendingUp } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "5 Signs Your Business Is Wasting Money on Manual Processes",
      excerpt: "Discover the hidden costs of manual work and learn how automation can save your business thousands of dollars annually.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Business Automation",
      slug: "business-wasting-money-manual-processes",
      featured: true
    },
    {
      id: 2,
      title: "How a Modern Website Generates Leads for Your Business",
      excerpt: "Learn the key elements that transform your website from a digital brochure into a powerful lead generation machine.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "December 10, 2024",
      readTime: "6 min read",
      category: "Web Design",
      slug: "website-generates-leads",
      featured: false
    },
    {
      id: 3,
      title: "A Complete Guide to Chatbots for Small Businesses",
      excerpt: "Everything you need to know about implementing chatbots to improve customer service and capture more leads.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "December 5, 2024",
      readTime: "10 min read",
      category: "AI & Automation",
      slug: "chatbots-small-businesses-guide",
      featured: true
    },
    {
      id: 4,
      title: "ROI of Custom Software: Real Numbers from Real Businesses",
      excerpt: "See actual case studies and ROI calculations from businesses that invested in custom automation solutions.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "November 28, 2024",
      readTime: "12 min read",
      category: "Case Studies",
      slug: "roi-custom-software-real-numbers",
      featured: false
    },
    {
      id: 5,
      title: "Why Your Business Needs Professional Branding (Beyond Just Looking Good)",
      excerpt: "The psychology behind professional branding and how it directly impacts customer trust and purchasing decisions.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "November 20, 2024",
      readTime: "7 min read",
      category: "Branding",
      slug: "business-needs-professional-branding",
      featured: false
    },
    {
      id: 6,
      title: "Digital Transformation for SMBs: Where to Start",
      excerpt: "A step-by-step guide for small businesses beginning their digital transformation journey without breaking the bank.",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      date: "November 15, 2024",
      readTime: "9 min read",
      category: "Digital Strategy",
      slug: "digital-transformation-smbs-where-start",
      featured: false
    }
  ];

  const categories = ['All', 'Business Automation', 'Web Design', 'AI & Automation', 'Case Studies', 'Branding', 'Digital Strategy'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Business Growth Insights & Technology Tips
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Practical advice, case studies, and strategies to help your business leverage technology 
            for growth, efficiency, and competitive advantage.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {searchTerm === '' && selectedCategory === 'All' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 mb-12">
              <TrendingUp className="w-6 h-6 text-blue-600" />
              <h2 className="text-3xl font-bold text-theme-primary">Featured Articles</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-2 group"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-12">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Articles'}
            </h2>
            {filteredPosts.length > 0 && (
              <span className="text-gray-500">({filteredPosts.length} articles)</span>
            )}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or selecting a different category.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(searchTerm === '' && selectedCategory === 'All' ? regularPosts : filteredPosts).map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center space-x-2 group"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Stay Updated with Business Technology Insights
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get weekly tips, case studies, and strategies delivered to your inbox. 
            No spam, just valuable insights to help your business grow.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-blue-200 mt-4">
            Join 500+ business owners who get our weekly insights
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
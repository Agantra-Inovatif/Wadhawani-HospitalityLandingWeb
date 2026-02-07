import { Sparkles, Clock, Globe, MessageSquare, Mail, Phone, CheckCircle2, ArrowRight, Zap, Shield, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              TravelAI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all hover:scale-105 transform">
              Get Started
            </a>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-block">
                  <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                    AI-Powered Travel Assistant
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Travel Smarter,
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Save Time</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Experience hospitality reimagined with AI. Get personalized recommendations, instant bookings, and 24/7 support for unforgettable travel experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 transform flex items-center justify-center space-x-2 shadow-lg">
                    <span>Start Your Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a href="#how-it-works" className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all flex items-center justify-center space-x-2">
                    <span>See How It Works</span>
                  </a>
                </div>
                <div className="flex items-center space-x-8 pt-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-600">No credit card required</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-gray-600">24/7 Support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                  <img
                    src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                    alt="Traveler with AI assistance"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Zap className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">10x Faster</p>
                      <p className="text-gray-600">Planning Time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Choose TravelAI?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Powered by advanced AI technology to make your travel planning effortless and enjoyable
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 transform duration-300">
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Save Valuable Time</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI assistant processes your preferences instantly, delivering personalized travel plans in seconds instead of hours of research.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 transform duration-300">
                <div className="bg-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Experiences</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get tailored recommendations based on your interests, budget, and travel style for truly unique experiences.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 transform duration-300">
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 AI Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Never travel alone. Get instant answers to your questions anytime, anywhere with our intelligent chatbot assistant.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 transform duration-300">
                <div className="bg-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure & Reliable</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is protected with enterprise-grade security. Book with confidence knowing your information is safe.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 transform duration-300">
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Bookings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Book hotels, flights, and activities in one place with lightning-fast processing and instant confirmations.
                </p>
              </div>

              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 transform duration-300">
                <div className="bg-cyan-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Access insider tips and hidden gems that only locals know, curated by AI and verified by travel experts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Three simple steps to your perfect travel experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                    1
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Preferences</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tell our AI about your dream destination, budget, interests, and travel dates. The more details you share, the better your recommendations.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                    2
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get AI Recommendations</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Receive personalized itineraries, hotel suggestions, and activity recommendations tailored specifically to your preferences in seconds.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Book & Travel</h3>
                <p className="text-gray-600 leading-relaxed">
                  Review your personalized plan, make instant bookings, and enjoy your trip with 24/7 AI support throughout your journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3769120/pexels-photo-3769120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="AI Travel Assistant"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Your Personal Travel Expert, Powered by AI
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our advanced AI technology learns from millions of travel experiences to provide you with the most accurate and helpful recommendations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Smart budget optimization for maximum value</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Real-time updates on weather, events, and attractions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Seamless integration with major booking platforms</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Multi-language support for global travelers</span>
                  </li>
                </ul>
                <a href="#contact" className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all hover:scale-105 transform shadow-lg">
                  <span>Experience the Future</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Travel Experience?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join thousands of travelers who are already saving time and creating unforgettable memories with TravelAI
            </p>
            <a href="#contact" className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 transform shadow-lg">
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Get In Touch
                </h2>
                <p className="text-xl text-gray-600">
                  Have questions? We're here to help you start your journey
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-green-100 p-4 rounded-full">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">Chat with us instantly</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/37253194019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center space-x-2 group"
                  >
                    <span>+62 817-5151-219</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-blue-100 p-4 rounded-full">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Email</h3>
                      <p className="text-gray-600">Send us a message</p>
                    </div>
                  </div>
                  <a
                    href="mailto:info@ningenproject.org"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg flex items-center space-x-2 group"
                  >
                    <span>nickotech2000@gmail.com</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-br from-blue-600 to-cyan-600 p-8 rounded-2xl text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Planning?</h3>
                <p className="mb-6 opacity-90">
                  Contact us today for a personalized demo and see how AI can revolutionize your travel experience
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/37253194019"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 transform"
                  >
                    Message on WhatsApp
                  </a>
                  <a
                    href="mailto:info@ningenproject.org"
                    className="bg-blue-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-all hover:scale-105 transform"
                  >
                    Send an Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Sparkles className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold">TravelAI</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>© 2024 TravelAI. All rights reserved.</p>
              <p className="mt-2">Transforming travel experiences with artificial intelligence</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

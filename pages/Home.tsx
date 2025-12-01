import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { PROJECTS, SERVICES, NEWS } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const { Link } = ReactRouterDOM;

const SLIDES = [
  {
    image: 'https://picsum.photos/id/16/1920/1080',
    title: 'Transforming Waste to Wealth',
    subtitle: 'Advanced pyrolysis and gasification technologies for a cleaner planet.',
    cta: 'Explore Technologies',
    link: '/technologies'
  },
  {
    image: 'https://picsum.photos/id/24/1920/1080',
    title: 'Engineering Sustainable Futures',
    subtitle: 'Turnkey EPC solutions for the renewable energy sector.',
    cta: 'Our Services',
    link: '/services'
  },
  {
    image: 'https://picsum.photos/id/56/1920/1080',
    title: 'Global Project Portfolio',
    subtitle: 'Over 50 successful installations worldwide.',
    cta: 'View Projects',
    link: '/projects'
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden bg-gray-900">
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 transform ${index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 tracking-tight drop-shadow-lg">{slide.title}</h2>
                <p className="text-xl md:text-2xl font-light mb-10 text-gray-200 drop-shadow-md">{slide.subtitle}</p>
                <Link to={slide.link} className="inline-block bg-green-600 hover:bg-green-500 text-white font-bold py-4 px-10 rounded-sm uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-xl">
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Slide Indicators */}
        <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-3">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white scale-125' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-2">Industries</h2>
            <h3 className="text-3xl font-display font-bold text-gray-900">Sectors We Serve</h3>
            <div className="w-20 h-1 bg-green-800 mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
             {['Automotive Waste', 'Municipalities', 'Chemical Manufacturing', 'Agriculture'].map((ind, i) => (
               <div key={i} className="group p-8 border border-gray-100 hover:border-green-200 hover:shadow-xl transition rounded text-center">
                 <div className="w-16 h-16 bg-green-50 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-green-900 transition-colors">
                   <CheckCircle2 className="text-green-800 group-hover:text-white" />
                 </div>
                 <h4 className="font-bold text-lg text-gray-800">{ind}</h4>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* About Brief */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img src="https://picsum.photos/id/60/800/600" alt="Engineer at plant" className="rounded-lg shadow-2xl" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-2">Who We Are</h2>
              <h3 className="text-4xl font-display font-bold text-gray-900 mb-6">Pioneers in Clean Energy Technology</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                GreenCrude Energy is a global leader in the development and commercialization of waste-to-energy solutions. 
                We specialize in advanced thermal conversion technologies that transform liabilities into assets, ensuring a sustainable energy future.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                With over two decades of engineering excellence, we provide comprehensive solutions ranging from technology licensing to full turnkey plant construction.
              </p>
              <Link to="/company/about" className="text-green-800 font-bold uppercase tracking-wide flex items-center hover:text-green-600 transition">
                Read More About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-green-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-sm font-bold text-green-300 uppercase tracking-widest mb-2">Our Expertise</h2>
              <h3 className="text-3xl font-display font-bold">Comprehensive Services</h3>
            </div>
            <Link to="/services" className="hidden md:inline-block border border-green-400 text-green-100 px-6 py-2 rounded hover:bg-green-800 transition">View All Services</Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:bg-white/10 transition duration-300 group">
                <div className="bg-white p-3 rounded-full w-fit mb-6">
                  {React.cloneElement(service.icon as React.ReactElement<any>, { className: "text-green-900" })}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 opacity-80 group-hover:opacity-100">
                  {service.description.substring(0, 100)}...
                </p>
                <Link to="/services" className="text-green-300 text-sm font-bold flex items-center group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-2">Portfolio</h2>
            <h3 className="text-3xl font-display font-bold text-gray-900">Featured Projects</h3>
            <div className="w-20 h-1 bg-green-800 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden shadow-lg cursor-pointer">
                <img src={project.image} alt={project.title} className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <span className="text-green-400 text-xs font-bold uppercase mb-2">{project.category}</span>
                  <h4 className="text-white text-xl font-bold mb-1">{project.title}</h4>
                  <p className="text-gray-300 text-sm mb-4">{project.location}</p>
                  <Link to="/projects" className="text-white text-sm font-bold opacity-0 group-hover:opacity-100 transition duration-500 flex items-center">
                    View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="inline-block bg-gray-900 text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-gray-800 transition">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-display font-bold text-gray-900 mb-10 border-l-4 border-green-800 pl-4">Latest News & Insights</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {NEWS.map((item) => (
              <div key={item.id} className="bg-white shadow-sm hover:shadow-md transition p-0 flex flex-col">
                <div className="h-48 overflow-hidden">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-green-700 text-xs font-bold mb-2 block">{item.date}</span>
                  <h4 className="text-lg font-bold text-gray-900 mb-3 hover:text-green-800 transition leading-tight">
                    <Link to="/resources/news">{item.title}</Link>
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {item.summary}
                  </p>
                  <Link to="/resources/news" className="text-green-800 font-bold text-sm uppercase hover:underline">Read Article</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-green-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-display font-bold mb-6">Ready to Power the Future?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">Contact our engineering team to discuss how GreenCrude technologies can transform your waste streams into value.</p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="bg-white text-green-900 px-8 py-3 font-bold uppercase rounded shadow hover:bg-gray-100 transition">Contact Us</Link>
            <Link to="/contact/quote" className="bg-transparent border-2 border-white px-8 py-3 font-bold uppercase rounded hover:bg-white hover:text-green-900 transition">Request Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
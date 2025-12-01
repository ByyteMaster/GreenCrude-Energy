import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { PAGE_CONTENT } from '../data/pageContent';
import { Check, ArrowRight, Phone, Leaf, Activity } from 'lucide-react';

const { useParams, Link, Navigate } = ReactRouterDOM;

const ContentPage = () => {
  const { id } = useParams();
  
  if (!id || !PAGE_CONTENT[id]) {
    // Fallback or 404 handling if content doesn't exist
    return <Navigate to="/" replace />;
  }

  const content = PAGE_CONTENT[id];

  return (
    <div className="animate-fade-in font-sans text-gray-800">
      
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
           <img src={content.heroImage} alt={content.title} className="w-full h-full object-cover opacity-50" />
           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-end pb-20">
          <div className="max-w-4xl">
             <div className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-bold uppercase tracking-widest mb-4 rounded">
               GreenCrude Technology
             </div>
             <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
               {content.title}
             </h1>
             <p className="text-xl text-gray-200 font-light max-w-2xl drop-shadow-md">
               {content.subtitle}
             </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-2">Overview</h2>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-8">Engineering the Future</h3>
                <div className="prose prose-lg text-gray-600 whitespace-pre-line">
                  {content.overview}
                </div>
                {content.globalContext && (
                  <div className="mt-8 p-6 bg-green-50 border-l-4 border-green-700 rounded-r-lg">
                    <p className="text-green-900 font-medium italic">
                       "{content.globalContext}"
                    </p>
                  </div>
                )}
             </div>
             <div className="bg-gray-50 p-10 rounded-xl shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Activity className="text-green-600 mr-2" /> Key Benefits
                </h4>
                <ul className="space-y-4">
                  {content.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                       <div className="mt-1 mr-3 bg-green-100 rounded-full p-1">
                          <Check size={14} className="text-green-800" />
                       </div>
                       <span className="text-gray-700 font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </section>

      {/* Technical Specs & Applications */}
      <section className="py-24 bg-gray-900 text-white relative">
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid md:grid-cols-2 gap-16">
              
              {/* Technical Specifications (if available) */}
              {content.technicalSpecs && (
                <div>
                  <h3 className="text-2xl font-display font-bold mb-8 border-b border-gray-700 pb-4">Technical Specifications</h3>
                  <div className="grid grid-cols-1 gap-6">
                     {Object.entries(content.technicalSpecs).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center bg-white/5 p-4 rounded hover:bg-white/10 transition">
                           <span className="text-gray-400 font-bold uppercase text-sm">{key}</span>
                           <span className="text-green-400 font-mono font-bold text-right">{(value as string)}</span>
                        </div>
                     ))}
                  </div>
                </div>
              )}

              {/* Applications */}
              <div>
                 <h3 className="text-2xl font-display font-bold mb-8 border-b border-gray-700 pb-4">Industry Applications</h3>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {content.applications.map((app: string, idx: number) => (
                       <div key={idx} className="bg-green-900/50 border border-green-800 p-6 rounded flex items-center shadow-lg">
                          <Leaf className="text-green-500 mr-3 w-5 h-5" />
                          <span className="font-bold">{app}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-display font-bold mb-6">Ready to Implement This Solution?</h2>
          <p className="text-xl text-green-100 mb-10 max-w-2xl mx-auto">
            Contact our engineering team today to discuss feasibility, capacity, and customization for your specific project needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white text-green-900 px-8 py-4 font-bold uppercase rounded shadow-lg hover:bg-gray-100 transition flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" /> {content.cta || 'Contact Us'}
            </Link>
            <Link to="/contact/quote" className="bg-transparent border-2 border-white px-8 py-4 font-bold uppercase rounded hover:bg-white hover:text-green-900 transition flex items-center justify-center">
              Request Project Quote <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContentPage;

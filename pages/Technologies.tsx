import React from 'react';
import { TECHNOLOGIES } from '../constants';
import { Check } from 'lucide-react';

const Technologies = () => {
  return (
    <div className="animate-fade-in pb-20">
      <div className="bg-green-900 py-24 relative overflow-hidden">
         <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(45deg, #000 25%, transparent 25%, transparent 50%, #000 50%, #000 75%, transparent 75%, transparent)', backgroundSize: '40px 40px'}}></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-display font-bold text-white mb-6">Proprietary Technologies</h1>
            <p className="text-xl text-green-100 leading-relaxed">
              At the core of GreenCrude Energy lies our portfolio of patented thermal conversion and chemical engineering processes. 
              We don't just build plants; we engineer the chemistry of the future.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 space-y-32">
        {TECHNOLOGIES.map((tech, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16`}>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full -z-10"></div>
                <img src={tech.image} alt={tech.title} className="rounded-lg shadow-2xl w-full" />
                <div className="absolute -bottom-6 -right-6 bg-green-900 text-white p-6 rounded-lg shadow-xl hidden lg:block">
                  <div className="text-3xl font-bold">98%</div>
                  <div className="text-sm uppercase tracking-wide opacity-80">Efficiency Rating</div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">{tech.title}</h2>
              <div className="w-20 h-1 bg-green-600 mb-8"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {tech.description}
              </p>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wide text-sm">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tech.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-green-200 rounded-full p-1 mr-3 mt-1">
                        <Check size={12} className="text-green-900" />
                      </div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;

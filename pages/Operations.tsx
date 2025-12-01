import React from 'react';
import { Globe, MapPin, Factory, Award, Users, TrendingUp } from 'lucide-react';
import * as ReactRouterDOM from 'react-router-dom';

const { Link } = ReactRouterDOM;

const Operations = () => {
  return (
    <div className="animate-fade-in font-sans text-gray-800">
      {/* Header */}
      <div className="bg-gray-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/map/1920/1080')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Global Operations</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From our headquarters in New Delhi to project sites across Africa and Southeast Asia, GreenCrude Energy is powering the world.
          </p>
        </div>
      </div>

      {/* Global Presence Map / Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div>
                <h2 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-2">Our Footprint</h2>
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-8">Strategic Locations</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  GreenCrude Energy operates with a centralized command center in India, supported by regional manufacturing hubs and R&D facilities. Our decentralized project execution model allows us to deploy teams rapidly to remote locations in Vietnam, Rwanda, and the Middle East.
                </p>
                <div className="space-y-6">
                   <div className="flex items-start">
                      <div className="bg-green-100 p-2 rounded mr-4 mt-1">
                        <MapPin className="text-green-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Global Headquarters</h4>
                        <p className="text-gray-600">New Delhi, India</p>
                        <p className="text-sm text-gray-500">Corporate Strategy, Finance, & Engineering Design Center</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="bg-blue-100 p-2 rounded mr-4 mt-1">
                        <Factory className="text-blue-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">Manufacturing Units</h4>
                        <p className="text-gray-600">Gujarat & Maharashtra, India</p>
                        <p className="text-sm text-gray-500">Reactor Fabrication, Assembly, & QC Testing</p>
                      </div>
                   </div>
                   <div className="flex items-start">
                      <div className="bg-purple-100 p-2 rounded mr-4 mt-1">
                        <Globe className="text-purple-800" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">International Hubs</h4>
                        <p className="text-gray-600">Dubai (UAE) & Ho Chi Minh City (Vietnam)</p>
                        <p className="text-sm text-gray-500">Sales, Service, & Spare Parts Distribution</p>
                      </div>
                   </div>
                </div>
             </div>
             <div className="relative">
                <img src="https://picsum.photos/seed/worldmap/800/600" alt="World Map" className="rounded-lg shadow-2xl opacity-90" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 p-6 rounded shadow-lg text-center backdrop-blur-sm">
                   <p className="text-4xl font-bold text-green-900">12+</p>
                   <p className="text-sm font-bold uppercase text-gray-600">Countries Served</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-900 py-16 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div className="p-6">
               <Users className="w-10 h-10 mx-auto mb-4 text-green-400" />
               <div className="text-4xl font-bold mb-1">450+</div>
               <div className="text-sm opacity-80">Global Workforce</div>
             </div>
             <div className="p-6">
               <Factory className="w-10 h-10 mx-auto mb-4 text-green-400" />
               <div className="text-4xl font-bold mb-1">50+</div>
               <div className="text-sm opacity-80">Plants Commissioned</div>
             </div>
             <div className="p-6">
               <TrendingUp className="w-10 h-10 mx-auto mb-4 text-green-400" />
               <div className="text-4xl font-bold mb-1">₹3000 Cr</div>
               <div className="text-sm opacity-80">Project Pipeline</div>
             </div>
             <div className="p-6">
               <Award className="w-10 h-10 mx-auto mb-4 text-green-400" />
               <div className="text-4xl font-bold mb-1">ISO</div>
               <div className="text-sm opacity-80">9001, 14001, 45001 Certified</div>
             </div>
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8">Expansion Plan 2025–2030</h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12">
            GreenCrude Energy is embarking on an aggressive expansion strategy to triple our operational capacity by 2030. 
            Focusing on the burgeoning markets of the Global South, we are scaling our manufacturing capabilities and establishing new partnership networks.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded shadow border-t-4 border-green-600">
              <h4 className="font-bold text-lg mb-4">Africa</h4>
              <p className="text-sm text-gray-600">Targeting Kenya, Nigeria, and Ghana for decentralized biomass and tire recycling units.</p>
            </div>
            <div className="bg-white p-8 rounded shadow border-t-4 border-blue-600">
              <h4 className="font-bold text-lg mb-4">Middle East</h4>
              <p className="text-sm text-gray-600">Establishing a regional HQ in Saudi Arabia to support Vision 2030 sustainability goals.</p>
            </div>
            <div className="bg-white p-8 rounded shadow border-t-4 border-purple-600">
              <h4 className="font-bold text-lg mb-4">South America</h4>
              <p className="text-sm text-gray-600">Entering Brazil and Chile with advanced forestry waste-to-energy solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6">
           <Link to="/contact" className="bg-green-900 text-white px-10 py-4 font-bold uppercase rounded hover:bg-green-800 transition shadow-xl">
             Partner With Us
           </Link>
        </div>
      </section>
    </div>
  );
};

export default Operations;

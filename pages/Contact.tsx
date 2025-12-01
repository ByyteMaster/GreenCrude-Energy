import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const { useLocation } = ReactRouterDOM;

const Contact = () => {
  const location = useLocation();
  const isQuote = location.pathname.includes('quote');

  return (
    <div className="animate-fade-in bg-gray-50 min-h-screen">
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-display font-bold text-white mb-2">
            {isQuote ? 'Request a Project Quote' : 'Contact Us'}
          </h1>
          <p className="text-gray-400">
            {isQuote 
              ? 'Tell us about your feedstock and energy goals.' 
              : 'Get in touch with our corporate team.'}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <div className="bg-green-900 text-white p-10 rounded shadow-xl h-fit lg:col-span-1">
            <h3 className="text-xl font-bold mb-8 border-b border-green-700 pb-4">Corporate Headquarters</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="mt-1 mr-4 text-green-400" />
                <div>
                  <p className="font-bold text-lg">GreenCrude Energy Inc.</p>
                  <p className="text-green-100 opacity-80">100 Energy Way, Suite 500<br />Tech Park, CA 94025<br />United States</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="mr-4 text-green-400" />
                <div>
                  <p className="font-bold">Phone</p>
                  <p className="text-green-100 opacity-80">+1 (888) 555-0199</p>
                </div>
              </div>

              <div className="flex items-center">
                <Mail className="mr-4 text-green-400" />
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-green-100 opacity-80">info@greencrude.energy</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="mr-4 text-green-400" />
                <div>
                  <p className="font-bold">Business Hours</p>
                  <p className="text-green-100 opacity-80">Mon-Fri: 9:00 AM - 6:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="bg-white p-10 rounded shadow-lg lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {isQuote ? 'Project Details Inquiry' : 'Send us a Message'}
            </h2>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input type="email" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Company / Organization</label>
                <input type="text" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600" />
              </div>

              {isQuote && (
                <div className="grid md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Feedstock Type</label>
                      <select className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600">
                        <option>End-of-Life Tires</option>
                        <option>Municipal Solid Waste</option>
                        <option>Plastics (Mixed)</option>
                        <option>Biomass</option>
                        <option>Other</option>
                      </select>
                   </div>
                   <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Volume (TPD)</label>
                      <input type="number" className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600" placeholder="e.g. 50" />
                   </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message / Project Brief</label>
                <textarea rows={5} className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:border-green-600"></textarea>
              </div>

              <div className="flex items-center">
                 <input type="checkbox" className="mr-2" id="consent" />
                 <label htmlFor="consent" className="text-sm text-gray-500">I agree to the processing of my personal data for the purpose of handling this request.</label>
              </div>

              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded uppercase tracking-wide transition shadow-md w-full md:w-auto">
                {isQuote ? 'Submit Quote Request' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
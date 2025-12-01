import React from 'react';
import { Download, TrendingUp, Wallet, PieChart, Users, Leaf, Globe, Factory, ArrowRight, Quote } from 'lucide-react';

const FinancialCard = ({ title, value, subtext, icon, color }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition">
    <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity ${color}`}>
      {icon}
    </div>
    <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">{title}</p>
    <h3 className="text-3xl font-display font-bold text-gray-900 mb-1">{value}</h3>
    {subtext && <p className={`text-sm font-semibold ${color.replace('bg-', 'text-')}`}>{subtext}</p>}
  </div>
);

const AnnualReport = () => {
  return (
    <div className="animate-fade-in font-sans text-gray-800 bg-gray-50 pb-24">
      
      {/* Hero Header */}
      <div className="bg-gray-900 text-white pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/report/1920/1080')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-end">
          <div>
            <div className="inline-block px-3 py-1 bg-green-600 text-white text-xs font-bold uppercase rounded mb-4">Financial Year 2024–25</div>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-2">Annual Report</h1>
            <p className="text-xl text-gray-400">GreenCrude Energy Integrated Report</p>
          </div>
          <button className="mt-6 md:mt-0 flex items-center bg-white text-gray-900 px-6 py-3 rounded font-bold hover:bg-green-50 transition shadow-lg">
            <Download className="w-4 h-4 mr-2" /> Download PDF (12MB)
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-8 relative z-20">
        
        {/* Navigation Tabs (Visual only) */}
        <div className="flex overflow-x-auto bg-white rounded-t-lg shadow-sm border-b border-gray-200 hide-scrollbar">
          {['Chairman’s Message', 'Financial Highlights', 'Business Overview', 'Sustainability', 'Leadership', 'Outlook'].map((tab, i) => (
            <button key={i} className={`px-6 py-4 text-sm font-bold uppercase whitespace-nowrap border-b-2 transition ${i === 0 ? 'border-green-600 text-green-800' : 'border-transparent text-gray-500 hover:text-gray-800'}`}>
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white shadow-xl rounded-b-lg p-8 md:p-12">
          
          {/* Chairman's Message */}
          <section className="mb-20 border-b border-gray-100 pb-16">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <div className="relative">
                   <img src="https://picsum.photos/seed/anil/500/600" alt="Mr. Anil Kumar Yadav" className="w-full rounded-lg shadow-lg" />
                   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
                      <p className="font-bold text-lg">Mr. Anil Kumar Yadav</p>
                      <p className="text-sm text-gray-300 uppercase">Chairman & Managing Director</p>
                   </div>
                </div>
              </div>
              <div className="md:w-2/3">
                <Quote className="w-12 h-12 text-green-100 mb-6" />
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Chairman's Message</h2>
                <div className="prose prose-lg text-gray-600">
                  <p className="mb-4">
                    It is my honor to present the GreenCrude Energy Annual Report for FY 2024–25. Coming from a humble village in Uttar Pradesh and building this company from the ground up, I am proud of the remarkable achievements we have delivered this year.
                  </p>
                  <p className="mb-4">
                    The world is rapidly transitioning toward sustainable energy, and GreenCrude Energy stands at the forefront of this movement. Our focus on waste-to-fuel technology, advanced pyrolysis, and next-generation gasification systems continues to position us as a leader in clean energy innovation.
                  </p>
                  <p className="mb-4">
                    This year, we achieved record-breaking financial growth, expanded our global footprint, and commissioned several new high-efficiency facilities. Our team’s dedication and our customers’ unwavering trust remain the driving forces behind our success.
                  </p>
                  <p className="font-bold text-gray-900 italic">
                    "We are building not only technologies — but a greener future for the next generation."
                  </p>
                </div>
                <div className="mt-8 flex items-center">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" alt="Signature" className="h-12 opacity-60" />
                </div>
              </div>
            </div>
          </section>

          {/* Financial Highlights */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <PieChart className="mr-3 text-green-600" /> Financial Highlights (FY 2024–25)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              <FinancialCard 
                title="Total Revenue" 
                value="₹2,040 Cr" 
                subtext="+18% YoY Growth"
                icon={<TrendingUp size={48} />} 
                color="text-green-600"
              />
              <FinancialCard 
                title="EBITDA" 
                value="₹1,448 Cr" 
                subtext="Strong operational efficiency"
                icon={<Wallet size={48} />} 
                color="text-blue-600"
              />
              <FinancialCard 
                title="Net Profit (NPAT)" 
                value="₹1,322 Cr" 
                subtext="Highest ever recorded"
                icon={<DollarSignIcon size={48} />} 
                color="text-green-700"
              />
               <FinancialCard 
                title="Profit Margin" 
                value="64.8%" 
                subtext="Industry leading"
                icon={<PieChart size={48} />} 
                color="text-purple-600"
              />
               <FinancialCard 
                title="Cash Reserves" 
                value="₹402 Cr" 
                subtext="Strong liquidity"
                icon={<Wallet size={48} />} 
                color="text-gray-600"
              />
            </div>
            
            <div className="mt-8 grid md:grid-cols-2 gap-6">
               <div className="bg-gray-50 p-6 rounded border border-gray-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-gray-500 uppercase">Operational Plants</p>
                    <p className="text-3xl font-bold text-gray-900">11 Global Sites</p>
                  </div>
                  <Factory className="w-10 h-10 text-gray-300" />
               </div>
               <div className="bg-green-50 p-6 rounded border border-green-100 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-green-800 uppercase">Emission Reduction</p>
                    <p className="text-3xl font-bold text-green-900">1.9 Million Tons <span className="text-base font-normal">CO₂e</span></p>
                  </div>
                  <Leaf className="w-10 h-10 text-green-300" />
               </div>
            </div>
          </section>

          {/* Business Overview & Major Projects */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Globe className="mr-3 text-green-600" /> Business Overview & Projects
            </h2>
            <div className="bg-gray-50 rounded-lg p-8 mb-8 border border-gray-100">
               <p className="text-gray-700 mb-0 leading-relaxed">
                 GreenCrude Energy specializes in advanced pyrolysis systems, industrial gasification facilities, and comprehensive waste-to-energy solutions. Our energy systems now operate across India, Southeast Asia, Africa, and Eastern Europe, serving industries in tires, plastics, biomass, municipal waste, and synthetic fuels.
               </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               {[
                 { title: '300 TPD Tire Pyrolysis Facility', loc: 'Gujarat, India', desc: 'Output: 108 TPD recovered fuel oil. Status: Successfully commercialized.' },
                 { title: '200 TPD Plastic-to-Fuel Plant', loc: 'Vietnam', desc: 'Joint venture with regional waste-management consortium. Status: Operationalized within 11 months.' },
                 { title: '150 TPD Biomass Gasification', loc: 'Rwanda', desc: 'Output: 42 MW renewable power. Status: Commissioned & handed over.' },
                 { title: 'MSW-to-Syngas Complex', loc: 'Uttar Pradesh, India', desc: '500 TPD municipal waste processing. Status: Under final testing.' }
               ].map((proj, i) => (
                 <div key={i} className="border-l-4 border-green-600 pl-6 py-2">
                    <h4 className="text-lg font-bold text-gray-900">{proj.title}</h4>
                    <p className="text-sm font-bold text-green-700 mb-2 uppercase">{proj.loc}</p>
                    <p className="text-gray-600 text-sm">{proj.desc}</p>
                 </div>
               ))}
            </div>
          </section>

           {/* Sustainability */}
           <section className="mb-20 bg-green-900 text-white p-10 rounded-xl shadow-inner relative overflow-hidden">
             <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <Leaf className="mr-3 text-green-400" /> Sustainability & ESG Performance
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                   <div>
                      <div className="text-3xl font-bold text-green-400 mb-1">1.9M</div>
                      <div className="text-sm opacity-80">Tons CO₂ Avoided</div>
                   </div>
                   <div>
                      <div className="text-3xl font-bold text-green-400 mb-1">3.4 Lakh</div>
                      <div className="text-sm opacity-80">Tons Waste Diverted</div>
                   </div>
                   <div>
                      <div className="text-3xl font-bold text-green-400 mb-1">62%</div>
                      <div className="text-sm opacity-80">Increase in Renewable Fuel</div>
                   </div>
                   <div>
                      <div className="text-3xl font-bold text-green-400 mb-1">28%</div>
                      <div className="text-sm opacity-80">Women Workforce Participation</div>
                   </div>
                </div>
                <p className="text-center mt-8 text-green-100 italic">
                  "Sustainability is not a division of our company — it is the foundation."
                </p>
             </div>
          </section>

          {/* Leadership Overview */}
          <section className="mb-20">
             <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Users className="mr-3 text-green-600" /> Leadership Team
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
               <div className="p-6 bg-white border rounded shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">Mr. Anil Kumar Yadav</h3>
                  <p className="text-green-700 text-sm font-bold uppercase mb-2">Chairman & Managing Director</p>
                  <p className="text-gray-600 text-sm">Built the company from rural Uttar Pradesh to a global clean-tech brand through determination, discipline, and strategic vision.</p>
               </div>
               <div className="p-6 bg-white border rounded shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900">Abhishek Yadav</h3>
                  <p className="text-green-700 text-sm font-bold uppercase mb-2">Executive Director</p>
                  <p className="text-gray-600 text-sm">Harvard MBA & UC Berkeley PhD graduate leading technology innovation and global project strategy.</p>
               </div>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
               <div className="p-4 bg-gray-50 rounded">
                  <strong>Bhaskar Aggarwal</strong>
                  <p className="text-gray-500">Director, Accounts & Finance</p>
               </div>
               <div className="p-4 bg-gray-50 rounded">
                  <strong>Shiv Kumar Sai</strong>
                  <p className="text-gray-500">Director, Sales & Markets</p>
               </div>
               <div className="p-4 bg-gray-50 rounded">
                  <strong>Ishita Kapoor</strong>
                  <p className="text-gray-500">Director, Human Resources</p>
               </div>
            </div>
          </section>

          {/* Outlook */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <TrendingUp className="mr-3 text-green-600" /> Outlook for FY 2025–26
            </h2>
            <div className="bg-gradient-to-r from-gray-50 to-white border-l-4 border-green-800 p-8 rounded-r-lg">
               <ul className="space-y-4">
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1 w-4 h-4" />
                    <span className="text-gray-700"><strong>Target Revenue:</strong> ₹2,700–3,000 crore</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1 w-4 h-4" />
                    <span className="text-gray-700"><strong>Expected Margin:</strong> 60–65%</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1 w-4 h-4" />
                    <span className="text-gray-700"><strong>Expansion:</strong> 9 new large-scale plants in pipeline; entry into Middle East & South America.</span>
                  </li>
                  <li className="flex items-start">
                    <ArrowRight className="text-green-600 mr-2 mt-1 w-4 h-4" />
                    <span className="text-gray-700"><strong>Innovation:</strong> Launch of proprietary GreenFuel™ synthetic fuel technology.</span>
                  </li>
               </ul>
               <p className="mt-6 text-gray-600">
                 GreenCrude Energy continues to accelerate innovation, expand global presence, and deliver exceptional financial performance. With strong leadership, advanced technology, and an unwavering commitment to sustainability, the company is ready for a decade of transformative growth.
               </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

// Helper Icon for Financials
const DollarSignIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23"></line>
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
  </svg>
);

export default AnnualReport;

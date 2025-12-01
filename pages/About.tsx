import React, { useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { Target, Lightbulb, Users, Globe, TrendingUp, Award, Quote } from 'lucide-react';

const { useLocation } = ReactRouterDOM;

const TEAM = [
  {
    name: 'Mr. Anil Kumar Yadav',
    role: 'Chairman & Managing Director',
    image: 'https://picsum.photos/seed/anil/400/400',
    bio: 'A visionary self-made entrepreneur, Mr. Yadav’s journey is one of extraordinary resilience. Rising from humble beginnings in a small village in Uttar Pradesh with a formal education up to Class 12, he built GreenCrude Energy from the ground up through sheer determination and practical insight. His foundational leadership drives the company’s commitment to sustainable growth and operational excellence.',
    highlight: 'Founder & Visionary'
  },
  {
    name: 'Mr. Abhishek Yadav',
    role: 'Executive Director (Operations, Strategy & Technology)',
    image: 'https://picsum.photos/seed/abhi/400/400',
    bio: 'Serving as the strategic architect of GreenCrude, Mr. Abhishek Yadav brings world-class academic rigor to the renewable sector. Holding an MBA from Harvard Business School and a PhD in Energy Systems from UC Berkeley, he leads technology development and global operations. He bridges the gap between traditional industrial execution and cutting-edge innovation.',
    highlight: 'Harvard MBA & UC Berkeley PhD'
  },
  {
    name: 'Mr. Bhaskar Aggarwal',
    role: 'Director, Accounts & Finance',
    image: 'https://picsum.photos/seed/bhas/400/400',
    bio: 'A Chartered Accountant with deep expertise in corporate finance, Mr. Aggarwal oversees the financial health of the organization. His strategic foresight in capital planning, cost modeling, and investment strategy ensures GreenCrude maintains a robust balance sheet while funding aggressive expansion projects.',
    highlight: 'Chartered Accountant'
  },
  {
    name: 'Mr. Shiv Kumar Sai',
    role: 'Director, Sales & Market Development',
    image: 'https://picsum.photos/seed/shiv/400/400',
    bio: 'With over a decade of specialized industrial sales experience, Mr. Sai spearheads GreenCrude’s global partnerships and licensing agreements. His understanding of international energy markets drives the company’s expansion into new territories across Europe, Asia, and the Americas.',
    highlight: '10+ Years Industrial Sales'
  },
  {
    name: 'Ms. Ishita Kapoor',
    role: 'Director, Human Resources',
    image: 'https://picsum.photos/seed/ishita/400/400',
    bio: 'As the custodian of GreenCrude’s culture, Ms. Kapoor focuses on talent acquisition and organizational development. Her leadership ensures that the company attracts top-tier engineering talent while fostering a workplace environment grounded in innovation, safety, and inclusivity.',
    highlight: 'Organizational Culture Expert'
  }
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes('leadership')) {
      const el = document.getElementById('leadership');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname.includes('mission')) {
      const el = document.getElementById('mission');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="animate-fade-in font-sans text-gray-800">
      
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/seed/factory/1920/1080')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 tracking-tight">
            Pioneering the <span className="text-green-500">Circular Economy</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
            Bridging the gap between waste generation and sustainable energy through advanced engineering and visionary leadership.
          </p>
        </div>
      </div>

      {/* Company Introduction & Why We Exist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-3">Who We Are</h2>
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-8">Engineering a Cleaner Tomorrow</h3>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              GreenCrude Energy is not just a renewable energy company; we are a technology integrator solving two of the world’s most pressing problems: the accumulation of non-recyclable waste and the growing demand for sustainable power.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded on the principles of engineering excellence and environmental stewardship, we specialize in the design, construction, and operation of advanced pyrolysis and gasification facilities. Our proprietary systems convert complex feedstocks—from End-of-Life Tires (ELT) to municipal solid waste—into high-grade synthetic fuels, recovered carbon black, and clean electricity.
            </p>
          </div>
          <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-green-700 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6 flex items-center">
              <Target className="text-green-700 mr-3" /> Why We Exist
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We exist to challenge the status quo of the linear "take-make-dispose" economy. The world generates millions of tons of waste daily that ends up in landfills or oceans. Simultaneously, the energy sector seeks to decarbonize.
            </p>
            <p className="text-gray-700 leading-relaxed">
              GreenCrude Energy exists to close this loop. We view waste not as a liability, but as a misplaced resource. By unlocking the chemical potential stored in waste materials, we provide a commercially viable, environmentally sound alternative to fossil fuel extraction.
            </p>
          </div>
        </div>
      </section>

      {/* The Leadership Story */}
      <section className="py-24 bg-gray-100 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="text-center mb-16">
               <Quote className="w-12 h-12 text-green-300 mx-auto mb-4" />
               <h2 className="text-4xl font-display font-bold text-gray-900 mb-6">Our Journey</h2>
               <p className="text-xl text-gray-600">From humble roots to global innovation.</p>
             </div>

             <div className="prose prose-lg text-gray-600 mx-auto">
               <p className="mb-6">
                 The GreenCrude Energy story is a unique tapestry woven from raw ambition and academic excellence. It began with the singular vision of our Chairman, <strong>Mr. Anil Kumar Yadav</strong>. Hailing from a small village in Uttar Pradesh, Mr. Yadav’s path was not paved with privilege. With a formal education completing at Class 12, he relied on an innate business acumen and an unshakeable work ethic to rise from the grassroots level.
               </p>
               <p className="mb-6">
                 Mr. Yadav built his business empire brick by brick, learning the intricacies of industry through direct experience. He envisioned a company that could transform the industrial landscape of India and the world—a company that prioritized sustainability alongside profitability.
               </p>
               <p>
                 This foundational grit was later fortified by the entry of <strong>Mr. Abhishek Yadav</strong>. Bringing a transformative perspective with an MBA from Harvard and a PhD in Energy Systems from UC Berkeley, Abhishek bridged the gap between his father’s practical wisdom and cutting-edge technological innovation. Together, they represent the dual soul of GreenCrude: deeply rooted values powered by world-class expertise.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="mission" className="py-24 bg-green-900 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/10 p-10 rounded-lg backdrop-blur-sm border border-white/20">
              <Lightbulb className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-3xl font-display font-bold mb-4">Our Vision</h3>
              <p className="text-green-100 leading-relaxed text-lg">
                To be the global benchmark in waste-to-energy solutions, creating a planet where zero waste goes to landfill and every community is powered by clean, locally generated resources.
              </p>
            </div>
            <div className="bg-white/10 p-10 rounded-lg backdrop-blur-sm border border-white/20">
              <TrendingUp className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
              <ul className="space-y-4 text-green-100 text-lg">
                <li className="flex items-start"><span className="mr-3 text-green-400">•</span> To deploy advanced thermal conversion technologies that are safe, efficient, and scalable.</li>
                <li className="flex items-start"><span className="mr-3 text-green-400">•</span> To deliver superior financial returns for our stakeholders while maximizing environmental impact.</li>
                <li className="flex items-start"><span className="mr-3 text-green-400">•</span> To foster a culture of innovation that continuously improves the efficiency of renewable energy systems.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profiles */}
      <section id="leadership" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-green-800 uppercase tracking-widest mb-2">Executive Team</h2>
            <h3 className="text-4xl font-display font-bold text-gray-900">Leadership</h3>
            <div className="w-20 h-1 bg-green-800 mx-auto mt-6"></div>
          </div>

          <div className="grid gap-12 max-w-6xl mx-auto">
            {/* Chairman & Executive Director - Featured Rows */}
            {TEAM.slice(0, 2).map((leader, index) => (
              <div key={index} className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 transform hover:-translate-y-1 transition duration-300">
                <div className="md:w-1/3 relative">
                   <img src={leader.image} alt={leader.name} className="w-full h-full object-cover min-h-[300px]" />
                   <div className="absolute bottom-0 left-0 right-0 bg-green-900/90 text-white p-4 text-center md:hidden">
                      <p className="font-bold">{leader.highlight}</p>
                   </div>
                </div>
                <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900">{leader.name}</h4>
                      <p className="text-green-700 font-bold uppercase tracking-wide text-sm">{leader.role}</p>
                    </div>
                    <span className="hidden md:block px-3 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full uppercase">
                      {leader.highlight}
                    </span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}

            {/* Other Directors - Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              {TEAM.slice(2).map((leader, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition text-center">
                   <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-green-200 shadow-sm">
                     <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                   </div>
                   <h4 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h4>
                   <p className="text-green-700 text-xs font-bold uppercase mb-4 h-8">{leader.role}</p>
                   <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                   <span className="inline-block px-2 py-1 bg-white border border-gray-200 text-gray-500 text-[10px] font-bold uppercase rounded">
                      {leader.highlight}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-6">
          <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-bold mb-4">Commitment to Excellence</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Our leadership team is dedicated to maintaining the highest standards of corporate governance, transparency, and ethical business practices across all our global operations.
          </p>
          <div className="flex justify-center gap-4">
             <button className="px-6 py-3 border border-white rounded hover:bg-white hover:text-gray-900 transition font-bold uppercase text-sm">Download Annual Report</button>
             <button className="px-6 py-3 bg-green-700 rounded hover:bg-green-600 transition font-bold uppercase text-sm">Contact Investor Relations</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { MapPin, Activity, Calendar } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Tires', 'Plastics', 'Biomass', 'MSW', 'Industrial'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="animate-fade-in pb-20">
      {/* Header */}
      <div className="bg-gray-900 py-20 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/projbg/1920/1080')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
           <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Global Project Portfolio</h1>
           <p className="text-xl text-gray-400 max-w-2xl mx-auto">Delivering world-class renewable energy infrastructure across five continents.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border-b sticky top-20 z-40 shadow-sm">
        <div className="container mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-8 py-4 min-w-max">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm font-bold uppercase tracking-wider px-3 py-2 rounded transition ${
                  filter === cat 
                    ? 'bg-green-900 text-white' 
                    : 'text-gray-500 hover:text-green-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300 flex flex-col h-full group">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded text-xs font-bold uppercase text-white shadow-sm ${
                    project.status === 'Operational' ? 'bg-green-600' : 
                    project.status === 'Under Construction' ? 'bg-yellow-600' : 'bg-blue-600'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="text-xs font-bold text-green-800 mb-2 uppercase tracking-wide">{project.category}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight min-h-[56px]">{project.title}</h3>
                
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin size={16} className="mr-2 text-green-600" />
                  {project.location}
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                  <Activity size={16} className="mr-2 text-green-600" />
                  Capacity: {project.capacity}
                </div>
                
                <p className="text-gray-600 mb-6 flex-1 text-sm leading-relaxed">{project.description}</p>
                
                <button className="text-left font-bold text-green-900 hover:text-green-700 uppercase text-xs tracking-wide mt-auto flex items-center">
                  View Case Study <span className="ml-2">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

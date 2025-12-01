import React from 'react';
import { NavItem, Project, Service, Technology, NewsItem } from './types';
import { Cpu, Settings, PenTool, BarChart3, Recycle, Globe, Zap, Factory } from 'lucide-react';

export const NAVIGATION: NavItem[] = [
  {
    label: 'Company',
    path: '/company',
    children: [
      { label: 'About Us', path: '/company/about', description: 'Who we are and our journey.' },
      { label: 'Mission & Vision', path: '/company/mission', description: 'Our guiding principles.' },
      { label: 'Leadership', path: '/company/leadership', description: 'Meet our executive team.' },
      { label: 'Global Operations', path: '/company/operations', description: 'Our worldwide presence and facilities.' },
      { label: 'Sustainability', path: '/company/sustainability', description: 'Our environmental commitment.' },
      { label: 'Careers', path: '/company/careers', description: 'Join the GreenCrude team.' },
    ]
  },
  {
    label: 'Technologies',
    path: '/technologies',
    children: [
      { label: 'Pyrolysis Systems', path: '/technologies/pyrolysis', description: 'Thermal decomposition in inert atmospheres.' },
      { label: 'Gasification Systems', path: '/technologies/gasification', description: 'Converting organic material into Syngas.' },
      { label: 'Plastic-to-Fuel', path: '/technologies/plastic-to-fuel', description: 'Turning waste plastic into premium fuels.' },
      { label: 'Biomass Conversion', path: '/technologies/biomass', description: 'Sustainable energy from organic matter.' },
      { label: 'Emission Control', path: '/technologies/emissions', description: 'Advanced scrubbing and filtration.' },
      { label: 'E-Fuel & Synthetic', path: '/technologies/efuel', description: 'Next-generation synthetic fuel production.' },
    ]
  },
  {
    label: 'Solutions',
    path: '/solutions',
    children: [
      { label: 'Tire Recycling', path: '/solutions/tires', description: 'End-of-Life Tire (ELT) processing.' },
      { label: 'Plastic Recycling', path: '/solutions/plastics', description: 'Circular economy for polymers.' },
      { label: 'Biomass-to-Energy', path: '/solutions/biomass-sol', description: 'Renewable baseload power.' },
      { label: 'Municipal Waste', path: '/solutions/msw', description: 'Sustainable MSW management.' },
      { label: 'Industrial Recovery', path: '/solutions/industrial', description: 'Waste heat and byproduct recovery.' },
    ]
  },
  {
    label: 'Services',
    path: '/services',
    children: [
      { label: 'Engineering & Design', path: '/services/engineering', description: 'Front-end and detailed engineering.' },
      { label: 'Feasibility Studies', path: '/services/feasibility', description: 'Project viability assessment.' },
      { label: 'Turnkey Construction', path: '/services/construction', description: 'EPC services for energy plants.' },
      { label: 'Operations & Main.', path: '/services/om', description: 'Plant lifecycle management.' },
      { label: 'Technical Consulting', path: '/services/consulting', description: 'Expert guidance on energy systems.' },
    ]
  },
  {
    label: 'Projects',
    path: '/projects',
    description: 'Our global portfolio of installations.'
  },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'News & Insights', path: '/resources/news' },
      { label: 'Case Studies', path: '/resources/cases' },
      { label: 'Whitepapers', path: '/resources/whitepapers' },
      { label: 'FAQ', path: '/resources/faq' },
    ]
  },
  {
    label: 'Investors',
    path: '/investors',
    children: [
        { label: 'Overview', path: '/investors/overview' },
        { label: 'Financial Reports', path: '/investors/reports' },
    ]
  },
  {
    label: 'Contact',
    path: '/contact'
  }
];

// Updated to 12 Specific Global Projects
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Delhi NCR Waste-to-Energy Complex',
    location: 'New Delhi, India',
    capacity: '500 TPD MSW',
    description: 'A flagship municipal solid waste gasification facility designed to alleviate pressure on the Ghazipur landfill. Generates 12 MW of power for the local grid.',
    category: 'MSW',
    status: 'Operational',
    image: 'https://picsum.photos/seed/delhi/800/600'
  },
  {
    id: '2',
    title: 'Gujarat Tire Pyrolysis Park',
    location: 'Gujarat, India',
    capacity: '300 TPD Tires',
    description: 'India’s largest continuous tire pyrolysis plant. Produces high-grade TDF oil and recovered carbon black for the domestic rubber industry.',
    category: 'Tires',
    status: 'Operational',
    image: 'https://picsum.photos/seed/gujarat/800/600'
  },
  {
    id: '3',
    title: 'Mekong Delta Plastic Recovery',
    location: 'Can Tho, Vietnam',
    capacity: '200 TPD Plastics',
    description: 'Joint venture plastic-to-fuel facility addressing agricultural plastic waste. Commissioned in record 11 months.',
    category: 'Plastics',
    status: 'Operational',
    image: 'https://picsum.photos/seed/vietnam/800/600'
  },
  {
    id: '4',
    title: 'Kigali Biomass Power Station',
    location: 'Kigali, Rwanda',
    capacity: '150 TPD Biomass',
    description: 'Utilizing coffee husks and agricultural residue to generate 5 MW of clean, decentralized power for rural electrification.',
    category: 'Biomass',
    status: 'Operational',
    image: 'https://picsum.photos/seed/rwanda/800/600'
  },
  {
    id: '5',
    title: 'Sharjah Industrial Waste Unit',
    location: 'Sharjah, UAE',
    capacity: '100 TPD Industrial',
    description: 'Specialized hazardous waste gasification unit for an industrial park, focusing on zero liquid discharge and heat recovery.',
    category: 'Industrial',
    status: 'Operational',
    image: 'https://picsum.photos/seed/uae/800/600'
  },
  {
    id: '6',
    title: 'Dhaka Textile Sludge Project',
    location: 'Dhaka, Bangladesh',
    capacity: '80 TPD Sludge',
    description: 'Thermal recovery system processing textile ETP sludge, reducing landfill disposal costs and generating process steam.',
    category: 'Industrial',
    status: 'Operational',
    image: 'https://picsum.photos/seed/dhaka/800/600'
  },
  {
    id: '7',
    title: 'Nairobi Urban Waste Pilot',
    location: 'Nairobi, Kenya',
    capacity: '50 TPD MSW',
    description: 'Compact urban gasifier pilot project demonstrating decentralized waste management in high-density African cities.',
    category: 'MSW',
    status: 'Under Construction',
    image: 'https://picsum.photos/seed/kenya/800/600'
  },
  {
    id: '8',
    title: 'Java Palm Waste Valorization',
    location: 'Surabaya, Indonesia',
    capacity: '120 TPD Biomass',
    description: 'Converting Empty Fruit Bunches (EFB) from palm oil mills into high-calorific bio-pellets and bio-oil.',
    category: 'Biomass',
    status: 'Operational',
    image: 'https://picsum.photos/seed/indonesia/800/600'
  },
  {
    id: '9',
    title: 'Maharashtra Agro-Power Plant',
    location: 'Maharashtra, India',
    capacity: '10 MW',
    description: 'Biomass-based captive power plant for a large sugar cooperative, utilizing bagasse and cane trash.',
    category: 'Biomass',
    status: 'Operational',
    image: 'https://picsum.photos/seed/maha/800/600'
  },
  {
    id: '10',
    title: 'Uttar Pradesh Plastic-to-Diesel',
    location: 'Uttar Pradesh, India',
    capacity: '50 TPD',
    description: 'Distributed plastic recycling units turning MLP (Multi-Layered Plastic) into diesel-grade fuel for agricultural pumps.',
    category: 'Plastics',
    status: 'Operational',
    image: 'https://picsum.photos/seed/up/800/600'
  },
  {
    id: '11',
    title: 'Tamil Nadu Auto-Shredder Residue',
    location: 'Chennai, India',
    capacity: '75 TPD',
    description: 'Advanced pyrolysis of ASR (Auto Shredder Residue) from the automotive recycling hub in Chennai.',
    category: 'Industrial',
    status: 'Development',
    image: 'https://picsum.photos/seed/chennai/800/600'
  },
  {
    id: '12',
    title: 'Da Nang Marine Plastic Initiative',
    location: 'Da Nang, Vietnam',
    capacity: '30 TPD',
    description: 'Coastal plastic recovery project converting ocean waste into marine fuel for fishing fleets.',
    category: 'Plastics',
    status: 'Development',
    image: 'https://picsum.photos/seed/danang/800/600'
  }
];

export const SERVICES: Service[] = [
  {
    title: 'Engineering & Design',
    description: 'Our multi-disciplinary team provides full-spectrum engineering, from initial concept and FEED (Front-End Engineering Design) to detailed mechanical, electrical, and civil design.',
    icon: <Cpu className="w-8 h-8 text-green-900" />
  },
  {
    title: 'Feasibility Studies',
    description: 'We conduct rigorous technical and economic analysis to validate project viability, including feedstock characterization, yield prediction, and financial modeling.',
    icon: <BarChart3 className="w-8 h-8 text-green-900" />
  },
  {
    title: 'Turnkey Construction',
    description: 'End-to-end EPC (Engineering, Procurement, Construction) services ensuring your facility is delivered on time, on budget, and to the highest safety standards.',
    icon: <Factory className="w-8 h-8 text-green-900" />
  },
  {
    title: 'Operations & Maintenance',
    description: 'Comprehensive O&M packages to optimize plant performance, minimize downtime, and extend the lifespan of critical assets through predictive maintenance.',
    icon: <Settings className="w-8 h-8 text-green-900" />
  },
  {
    title: 'Technical Consulting',
    description: 'Strategic advice on technology selection, regulatory compliance, and process optimization for waste-to-energy and renewable fuel projects.',
    icon: <PenTool className="w-8 h-8 text-green-900" />
  }
];

export const TECHNOLOGIES: Technology[] = [
  {
    title: 'Advanced Pyrolysis',
    description: 'Our proprietary continuous pyrolysis reactors operate in an oxygen-free environment to thermally decompose organic materials. This process maximizes the yield of high-value liquid fuels and recovered carbon black while minimizing char production.',
    image: 'https://picsum.photos/seed/tech1/600/400',
    details: ['Continuous feed system', 'Precise temperature control (400-600°C)', 'High oil yield efficiency', 'Automated char removal']
  },
  {
    title: 'Fluidized Bed Gasification',
    description: 'GreenCrude’s gasification technology converts carbonaceous materials into Syngas (CO + H2). This versatile gas can be used for power generation, hydrogen production, or chemical synthesis.',
    image: 'https://picsum.photos/seed/tech2/600/400',
    details: ['Feedstock flexibility (MSW, Biomass)', 'Low tar production', 'High thermal efficiency', 'Integrated ash handling']
  },
  {
    title: 'SynGas Reforming',
    description: 'We employ advanced catalytic reforming to upgrade raw syngas into ultra-clean synthetic fuels or chemical-grade hydrogen, enabling hard-to-abate sectors to decarbonize.',
    image: 'https://picsum.photos/seed/tech3/600/400',
    details: ['Fischer-Tropsch synthesis', 'Methanol synthesis', 'Sulfur removal < 1ppm', 'Custom catalyst formulation']
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'n1',
    title: 'GreenCrude Secures $50M for European Expansion',
    date: 'October 12, 2023',
    summary: 'The funding will accelerate the deployment of our flagship plastic-to-fuel technology across three new sites in Germany and France.',
    image: 'https://picsum.photos/seed/news1/400/300'
  },
  {
    id: 'n2',
    title: 'New Partnership with Global Tire Manufacturer',
    date: 'September 28, 2023',
    summary: 'A strategic alliance to close the loop on tire manufacturing by integrating our recovered Carbon Black (rCB) into new tire production.',
    image: 'https://picsum.photos/seed/news2/400/300'
  },
  {
    id: 'n3',
    title: 'Breakthrough in Hydrogen Yield Efficiency',
    date: 'August 15, 2023',
    summary: 'R&D division announces a 15% increase in hydrogen output from mixed plastic waste using our Generation-4 Gasifiers.',
    image: 'https://picsum.photos/seed/news3/400/300'
  }
];

import { CheckCircle2, Globe, ShieldCheck, Zap, BarChart3, Factory } from 'lucide-react';

export const PAGE_CONTENT: Record<string, any> = {
  // --- TECHNOLOGIES ---
  'pyrolysis': {
    title: 'Advanced Pyrolysis Systems',
    subtitle: 'Turning Waste into Value with Precision Thermal Engineering',
    heroImage: 'https://picsum.photos/id/195/1920/1080',
    overview: `GreenCrude Energy, headquartered in New Delhi, leads the industry with our proprietary Advanced Pyrolysis Technology (APT). Pyrolysis is the thermal decomposition of carbonaceous material in an oxygen-starved atmosphere. Unlike incineration, which burns waste, pyrolysis breaks down molecular chains to recover high-value resources.

Our systems are engineered to process End-of-Life Tires (ELT), mixed plastics, and biomass into varying grades of fuel oil, recovered Carbon Black (rCB), and combustible gas. Designed for the rugged operating conditions of India, Southeast Asia, and Africa, our reactors ensure continuous operation with minimal downtime.`,
    benefits: [
      'High Oil Yield: Up to 45-50% recovery from premium tire feedstock.',
      'Energy Self-Sufficiency: Non-condensable gases power the reactor heating system.',
      'Modular Capacity: Standard units range from 50 TPD to 300 TPD.',
      'Low Emission Profile: Fully enclosed system with negligible particulate release.',
    ],
    applications: [
      'Tire Recycling Facilities',
      'Plastic Waste Management Centers',
      'Industrial Waste Recovery Zones',
      'Circular Economy Hubs'
    ],
    technicalSpecs: {
      'Reactor Type': 'Continuous Rotary / Fixed Bed',
      'Operating Temp': '400°C – 600°C',
      'Pressure': 'Negative Pressure (-0.02 bar)',
      'Feedstock': 'Tires, Plastics (PP, PE, PS), Rubber',
    },
    cta: 'Discuss a 50-300 TPD Plant Setup',
    globalContext: 'With the growing demand for alternative fuels in India and export markets like Vietnam and the UAE, our pyrolysis units offer a payback period of 24-36 months depending on local oil prices.'
  },
  'gasification': {
    title: 'Industrial Gasification Systems',
    subtitle: 'Clean Syngas Production for Power and Thermal Applications',
    heroImage: 'https://picsum.photos/id/142/1920/1080',
    overview: `Gasification is the cornerstone of GreenCrude Energy’s waste-to-power strategy. By reacting organic or fossil-based carbonaceous materials with a controlled amount of oxygen and/or steam at high temperatures (>700°C), we produce Syngas (Synthesis Gas)—a mixture of Carbon Monoxide (CO) and Hydrogen (H₂).

Our technology supports both Oxygen-blown and Steam-blown gasification, allowing for higher calorific value syngas suitable for high-efficiency gas engines or turbines. This is a critical solution for processing biomass, Municipal Solid Waste (MSW), and Refuse Derived Fuel (RDF).`,
    benefits: [
      'Versatile Output: Produces heat, electricity, or chemical feedstocks.',
      'Waste Reduction: Reduces waste volume by up to 90%.',
      'Cleaner than Combustion: Significantly lower SOx and NOx emissions.',
      'Scalable Power: Systems range from 5 MW to 50 MW output.',
    ],
    applications: [
      'Captive Power Plants for Industries',
      'Rural Electrification Projects',
      'District Heating Systems',
      'Chemical Synthesis (Methanol/Ammonia)'
    ],
    technicalSpecs: {
      'Agent': 'Air / Oxygen / Steam',
      'Temp Range': '800°C – 1200°C',
      'Syngas CV': '1200 - 3500 kcal/Nm3',
      'Byproducts': 'Inert Slag / Biochar',
    },
    cta: 'Explore Gasification Power Plants',
    globalContext: 'Successfully deployed in power plants across Maharashtra and sugar mills in Uttar Pradesh, our gasifiers meet strict Indian CPCB norms and international safety standards.'
  },
  'plastic-to-fuel': {
    title: 'Plastic-to-Fuel (PTF) Technology',
    subtitle: 'Solving the Global Plastic Crisis with Chemical Recycling',
    heroImage: 'https://picsum.photos/id/203/1920/1080',
    overview: `India generates over 3.4 million tonnes of plastic waste annually, with a fraction being recycled. GreenCrude Energy’s Plastic-to-Fuel (PTF) technology addresses this crisis by converting non-recyclable plastics (LDPE, HDPE, PP, PS) into high-grade liquid fuels.

Our catalytic depolymerization process breaks down long-chain polymers into shorter hydrocarbon chains, resulting in outputs like Pyro-Oil, Naphtha, and Diesel-like fractions. These fuels are critical for industrial boilers, furnaces, and, after further refining, transportation fleets.`,
    benefits: [
      'Accepts Mixed Plastics: Tolerates up to 15% contamination.',
      'High Conversion Rate: 70-80% liquid fuel yield.',
      'Sulfur-Free Output: Produces cleaner burning fuel than traditional furnace oil.',
      'Circular Solution: Creating value from landfill-bound waste.',
    ],
    applications: [
      'Municipal Recovery Facilities (MRFs)',
      'Petrochemical Refineries',
      'Shipping & Marine Fuel Blending',
      'Industrial Heating Applications'
    ],
    technicalSpecs: {
      'Feedstock': 'MLP, Polyolefins',
      'Catalyst': 'Zeolite-based Proprietary Blend',
      'Fuel Quality': 'Low Sulfur, High Cetane Potential',
      'Capacity': '20 - 100 TPD Modules',
    },
    cta: 'Request Fuel Specifications',
    globalContext: 'High demand in the UAE, Malaysia, and Indian industrial clusters makes PTF a lucrative investment. Our plants comply with all local environmental regulations.'
  },
  'biomass': {
    title: 'Biomass Conversion Systems',
    subtitle: 'Renewable Baselaod Power from Agricultural Residue',
    heroImage: 'https://picsum.photos/id/222/1920/1080',
    overview: `In agrarian economies like India, agricultural residue (paddy straw, sugarcane bagasse, cotton stalks) is often burned, causing severe pollution. GreenCrude Energy’s Biomass Conversion Systems monetize this waste.

We utilize advanced torrefaction and gasification to convert loose biomass into high-density energy carriers or direct electricity. This decentralized approach is ideal for rural electrification and industrial captive power, reducing reliance on the grid and coal.`,
    benefits: [
      'Carbon Neutral: Cycles surface carbon rather than digging up fossil carbon.',
      'Solves Stubble Burning: Direct market incentive for farmers.',
      'Byproduct Revenue: Produces Biochar, a high-value soil amendment.',
      'Grid Stability: Provides reliable baseload renewable energy.',
    ],
    applications: [
      'Rural Microgrids',
      'Rice Mills & Sugar Factories',
      'Bio-Coal Pellet Manufacturing',
      'Process Heat for Textile Industry'
    ],
    technicalSpecs: {
      'Feedstock': 'Paddy Straw, Bagasse, Wood Chips',
      'Moisture Tolerance': 'Up to 25%',
      'Efficiency': '> 28% Electrical Efficiency',
      'Output': 'Power + Biochar',
    },
    cta: 'Plan a Biomass Power Unit',
    globalContext: 'Our modular systems are export-ready for Africa and Southeast Asia, bringing energy independence to off-grid communities.'
  },
  'emissions': {
    title: 'Emission Control Systems',
    subtitle: 'Exceeding Global Environmental Safety Standards',
    heroImage: 'https://picsum.photos/id/352/1920/1080',
    overview: `Environmental safety is non-negotiable. GreenCrude Energy integrates world-class emission control systems into every plant we build, ensuring compliance with Indian CPCB guidelines and stringent EU standards.

Our multi-stage filtration approach targets Particulate Matter (PM), SOx, NOx, and Volatile Organic Compounds (VOCs). We view emission control not just as compliance, but as corporate responsibility.`,
    benefits: [
      'Deep Scrubbing: Wet alkali scrubbers for acid gas neutralization.',
      'Particulate Capture: Electrostatic Precipitators (ESP) with 99.9% efficiency.',
      'Odor Control: Activated carbon filtration systems.',
      'Real-time Monitoring: Integrated Continuous Emission Monitoring Systems (CEMS).',
    ],
    applications: [
      'Pyrolysis & Gasification Plants',
      'Chemical Manufacturing Units',
      'Thermal Power Stations',
      'Waste Incinerators'
    ],
    technicalSpecs: {
      'SOx/NOx Removal': '> 95%',
      'PM Limit': '< 50 mg/Nm3',
      'Dioxin Control': 'Activated Carbon Injection',
      'Standards': 'CPCB, EPA, EU-IED',
    },
    cta: 'Upgrade Your Emission Systems',
    globalContext: 'Mandatory for all new industrial setups. We also provide retrofit services for older plants facing regulatory shutdowns.'
  },
  'efuel': {
    title: 'E-Fuel & Synthetic Fuels',
    subtitle: 'The Future of Aviation and Heavy Transport',
    heroImage: 'https://picsum.photos/id/403/1920/1080',
    overview: `E-Fuels (Electro-fuels) represent the frontier of clean energy. By combining Green Hydrogen (produced via electrolysis) with captured CO₂, GreenCrude Energy is developing pathways to produce liquid hydrocarbons—synthetic kerosene, methanol, and diesel—that are chemically identical to fossil fuels but carbon-neutral.

Our R&D division is actively working on "Power-to-Liquid" (PtL) pilot projects, targeting the hard-to-abate sectors of aviation and long-haul shipping.`,
    benefits: [
      'Drop-in Solution: Requires no modification to existing engines.',
      'Energy Storage: Stores renewable energy in liquid form.',
      'Carbon Recycling: Utilizes captured CO₂ as a feedstock.',
      'Strategic Independence: Reduces reliance on imported crude oil.',
    ],
    applications: [
      'Sustainable Aviation Fuel (SAF)',
      'Green Methanol for Shipping',
      'Synthetic Diesel for Trucks',
      'Chemical Feedstocks'
    ],
    technicalSpecs: {
      'Process': 'Fischer-Tropsch Synthesis',
      'Input': 'Green H2 + Captured CO2',
      'Target Carbon Intensity': 'Near Zero',
      'Status': 'Pilot / R&D',
    },
    cta: 'Partner on Future Fuels',
    globalContext: 'With India’s Green Hydrogen Mission, we are positioned to be early movers in the E-Fuel space, partnering with leading technical universities.'
  },

  // --- SOLUTIONS ---
  'tires': {
    title: 'Tire Recycling Solutions',
    subtitle: 'Closing the Loop on End-of-Life Tires',
    heroImage: 'https://picsum.photos/id/274/1920/1080',
    overview: `India is one of the world's largest tire markets, generating massive volumes of waste tires. Landfilling them is hazardous; GreenCrude Energy offers a profitable, sustainable alternative.

Our turnkey Tire Recycling Solutions encompass the entire value chain: from shredding and steel separation to pyrolysis and carbon black refinement. We turn a disposal liability into three revenue streams: Fuel Oil, Recovered Carbon Black (rCB), and High-Tensile Steel.`,
    benefits: [
      'Zero Waste Process: Every component of the tire is recovered.',
      'High Calorie Oil: Substitute for LDO/Furnace oil.',
      'Green Steel: Scrap steel recycled into new manufacturing.',
      'rCB Application: Used in rubber mats, conveyor belts, and pigments.',
    ],
    applications: [
      'Waste Management Companies',
      'Cement Kilns (TDF)',
      'Rubber Product Manufacturers',
      'Automotive Supply Chain'
    ],
    cta: 'Start a Tire Recycling Business',
    globalContext: 'We facilitate export-grade rCB production, opening markets in Europe and Australia for Indian recyclers.'
  },
  'plastics': {
    title: 'Plastic Recycling Solutions',
    subtitle: 'Comprehensive Mechanical and Chemical Recovery',
    heroImage: 'https://picsum.photos/id/445/1920/1080',
    overview: `Under the Swachh Bharat Mission and new Extended Producer Responsibility (EPR) rules, plastic recycling is no longer optional—it is a mandate. GreenCrude Energy provides integrated solutions for both mechanical recycling (for PET/HDPE) and chemical recycling (for multi-layered plastics).

We help municipalities and private aggregators set up Material Recovery Facilities (MRFs) that feed directly into our Plastic-to-Fuel or granulation lines, creating manufacturing-grade recycled pellets.`,
    benefits: [
      'Regulatory Compliance: Meet strict EPR targets.',
      'Virgin Plastic Reduction: High-quality rPET and rHDPE.',
      'Landfill Diversion: Processing low-value, dirty plastics.',
      'Revenue Generation: Sale of pellets and pyrolysis oil.',
    ],
    applications: [
      'FMCG Packaging',
      'Textile Industry (Polyester)',
      'Construction Materials',
      'Urban Waste Centers'
    ],
    cta: 'Consult on EPR Compliance',
    globalContext: 'From Delhi NCR to Mumbai, our solutions are helping cities manage the plastic deluge while creating green jobs.'
  },
  'biomass-sol': {
    title: 'Biomass-to-Energy Solutions',
    subtitle: 'Empowering Rural India with Green Power',
    heroImage: 'https://picsum.photos/id/521/1920/1080',
    overview: `Rural India faces a dual challenge: energy access and agricultural waste management. GreenCrude Energy’s Biomass-to-Energy solutions address both. By setting up decentralized power plants fueled by locally sourced biomass, we create a circular rural economy.

Our solutions range from small-scale thermal gasifiers (500 kW) for village clusters to large-scale boilers (20 MW) for grid export. We monetize crop residues like mustard husk, paddy straw, and bamboo.`,
    benefits: [
      'Local Job Creation: Collection and logistics supply chain.',
      'Soil Health: Biochar byproduct returns nutrients to the soil.',
      'Reliable Power: 24/7 generation unlike solar/wind.',
      'Air Quality: Eliminates smoke from open field burning.',
    ],
    applications: [
      'Independent Power Producers (IPPs)',
      'Agro-Processing Industries',
      'Cold Storage Facilities',
      'Village Microgrids'
    ],
    cta: 'Invest in Biomass Energy',
    globalContext: 'Our technology is adaptable to various global feedstocks, including palm waste in Indonesia and rice husks in Vietnam.'
  },
  'msw': {
    title: 'Municipal Waste Solutions',
    subtitle: 'Sustainable Urban Waste Management',
    heroImage: 'https://picsum.photos/id/668/1920/1080',
    overview: `Cities like Delhi, Mumbai, and Bangalore are struggling with overflowing landfills. GreenCrude Energy offers integrated Municipal Solid Waste (MSW) processing solutions. We don't just burn waste; we segregate, recover, and convert.

Our model involves mechanical segregation to recover recyclables, followed by RDF (Refuse Derived Fuel) production for cement plants, and gasification of the organic fraction for power generation.`,
    benefits: [
      'Volume Reduction: Reduces landfill load by up to 90%.',
      'Odor Control: Enclosed processing facilities.',
      'Sanitation: Eliminates leachate and methane emissions.',
      'Energy Recovery: 500 TPD waste can generate ~8-10 MW power.',
    ],
    applications: [
      'Municipal Corporations',
      'Smart City Projects',
      'Landfill Reclamation (Legacy Waste)',
      'Urban Power Distribution'
    ],
    cta: 'Partner with Us for Clean Cities',
    globalContext: 'We work closely with municipal bodies to design Public-Private Partnership (PPP) models for sustainable city cleaning.'
  },
  'industrial': {
    title: 'Industrial Energy Recovery',
    subtitle: 'Turning Hazardous Byproducts into Assets',
    heroImage: 'https://picsum.photos/id/883/1920/1080',
    overview: `Industries such as chemical manufacturing, pharmaceuticals, and textiles generate complex, often hazardous, solid and liquid wastes. Disposal costs are high, and regulations are tight.

GreenCrude Energy provides on-site Energy Recovery solutions. We design specialized captive thermal units that safely dispose of industrial sludge and spent solvents while recovering process steam and heat, drastically cutting the factory's fuel bill.`,
    benefits: [
      'Cost Savings: Offsets purchase of coal/diesel.',
      'Liability Reduction: On-site disposal eliminates transport risks.',
      'Compliance: Meets strict hazardous waste disposal norms.',
      'Process Integration: Steam fed directly back into manufacturing.',
    ],
    applications: [
      'Pharmaceutical Parks',
      'Textile Dyeing Units',
      'Chemical Refineries',
      'Automotive Paint Shops'
    ],
    cta: 'Audit Your Industrial Waste',
    globalContext: 'Helping industries in Gujarat and Tamil Nadu transition to Zero Liquid Discharge (ZLD) and waste-to-steam systems.'
  },

  // --- SERVICES ---
  'engineering': {
    title: 'Engineering & Design',
    subtitle: 'Precision Engineering from Concept to Commissioning',
    heroImage: 'https://picsum.photos/id/314/1920/1080',
    overview: `A successful energy plant starts with flawless design. GreenCrude Energy’s in-house engineering team employs state-of-the-art software (AutoCAD, chemical simulation tools) to deliver comprehensive layouts.

We cover the full spectrum: Process Flow Diagrams (PFD), Piping and Instrumentation Diagrams (P&ID), civil foundation layouts, and 3D plant modeling. Our designs prioritize safety, operability, and space optimization.`,
    benefits: [
      'Custom Layouts: Optimized for your specific land geometry.',
      'Safety First: HAZOP studies integrated into design.',
      'Efficiency: Heat and mass balance optimization.',
      'Compliance: Drawings ready for statutory approvals.',
    ],
    applications: [
      'Greenfield Project Setup',
      'Brownfield Expansions',
      'Technology Upgrades',
      'Safety Audits'
    ],
    cta: 'Start Your Plant Design',
    globalContext: 'Serving clients across India and overseas, ensuring international standards of engineering documentation.'
  },
  'feasibility': {
    title: 'Feasibility Studies',
    subtitle: 'Data-Driven Investment Decisions',
    heroImage: 'https://picsum.photos/id/453/1920/1080',
    overview: `Before a single brick is laid, the economic and technical viability of a project must be assured. GreenCrude Energy provides Bankable Feasibility Studies and Detailed Project Reports (DPR).

Our analysts assess local feedstock availability, logistics costs, technology fit, output market pricing, and regulatory landscape to build a robust financial model. We calculate IRR, ROI, and Payback Periods to help you secure debt or equity funding.`,
    benefits: [
      'Risk Mitigation: Identify technical and market risks early.',
      'Financial Clarity: Detailed CAPEX and OPEX modeling.',
      'Bank Ready: Reports formatted for loan applications.',
      'Market Insight: Price trends for fuel oil, carbon black, and power.',
    ],
    applications: [
      'Project Financing',
      'Investment Due Diligence',
      'Government Grants',
      'Strategic Planning'
    ],
    cta: 'Request a Feasibility Study',
    globalContext: 'Our DPRs have facilitated funding for projects in Rwanda, Vietnam, and India.'
  },
  'construction': {
    title: 'Turnkey Construction (EPC)',
    subtitle: 'End-to-End Execution with Guaranteed Timelines',
    heroImage: 'https://picsum.photos/id/534/1920/1080',
    overview: `GreenCrude Energy offers full Engineering, Procurement, and Construction (EPC) services. We take single-point responsibility for the entire project lifecycle, minimizing risk for the developer.

From civil works and structural fabrication to reactor installation and piping, our project management teams ensure on-site coordination and strict adherence to timelines. We recently commissioned a 200 TPD plant in Vietnam in a record 11 months.`,
    benefits: [
      'Single Accountability: No coordination hassles between vendors.',
      'Cost Control: Fixed-price contracts prevent budget overruns.',
      'Quality Assurance: Strict QA/QC on all materials and welds.',
      'Speed: Parallel processing of civil, mechanical, and electrical works.',
    ],
    applications: [
      'Complete Plant Setup',
      'Capacity Expansion',
      'Utility Block Integration',
      'Infrastructure Development'
    ],
    cta: 'Discuss Your EPC Needs',
    globalContext: 'Delivering projects on time in challenging geographies, from remote Indian villages to international industrial zones.'
  },
  'om': {
    title: 'Operations & Maintenance',
    subtitle: 'Maximizing Plant Uptime and Profitability',
    heroImage: 'https://picsum.photos/id/609/1920/1080',
    overview: `Building a plant is half the battle; running it efficiently is the other. GreenCrude Energy offers comprehensive Operations & Maintenance (O&M) contracts. We deploy skilled engineers, operators, and safety officers to manage your facility 24/7.

Our O&M services focus on preventative maintenance, yield optimization, and safety compliance, ensuring your asset performs at its peak design capacity for years.`,
    benefits: [
      'Skilled Manpower: Trained specifically on our technology.',
      'Inventory Management: Spare parts planning to avoid downtime.',
      'Performance Guarantees: Linked to production targets.',
      'Remote Monitoring: IoT-enabled tracking of plant parameters.',
    ],
    applications: [
      'Annual Maintenance Contracts (AMC)',
      'Total Plant Management',
      'Shutdown/Turnaround Services',
      'Technical Staffing'
    ],
    cta: 'Outsource Your Operations',
    globalContext: 'We currently manage operations for over 150 MW of thermal capacity and 800 TPD of waste processing globally.'
  },
  'consulting': {
    title: 'Technical Consulting',
    subtitle: 'Expert Advice for the Energy Transition',
    heroImage: 'https://picsum.photos/id/2/1920/1080',
    overview: `The energy landscape is evolving rapidly. GreenCrude Energy serves as a strategic advisor to industries and governments looking to navigate the transition to sustainability.

Our technical consulting covers technology audits, process debottlenecking, emission upgrades, and modernization of aging plants. We also provide specialized training programs for plant personnel.`,
    benefits: [
      'Process Optimization: Increase yield and reduce fuel consumption.',
      'Regulatory Guidance: Navigate complex environmental norms.',
      'Technology Selection: Unbiased assessment of vendor technologies.',
      'Sustainability Strategy: Roadmap to Net-Zero emissions.',
    ],
    applications: [
      'Plant Audits',
      'Process Improvement',
      'Staff Training',
      'Policy Advisory'
    ],
    cta: 'Hire a Technical Consultant',
    globalContext: 'Trusted by cement majors and chemical conglomerates for high-level technical advisory.'
  }
};

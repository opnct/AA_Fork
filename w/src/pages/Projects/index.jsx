import React, { useEffect } from 'react';
import { 
  ArrowRight, ArrowUpRight, Code2, Globe, 
  Shield, Terminal, Layers, BarChart 
} from 'lucide-react';

const Projects = ({ navigate, openProject }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      id: 'proj1',
      title: 'Vanguard Admin Panel',
      category: 'Enterprise Dashboard',
      client: 'Vanguard Cyber Systems',
      desc: 'The Vanguard Admin Panel streamlines security management, enabling efficient updates to threat vectors and event monitoring. A highly secure, user-friendly tool built with React and Node.js to keep enterprise site dynamics stable.',
      features: ['Real-time Monitoring', 'RBAC Authentication', 'Data Visualization'],
      svg: (
        <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-2xl">
          <rect width="600" height="400" fill="#141414" rx="8" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          {/* Sidebar */}
          <rect x="0" y="0" width="120" height="400" fill="rgba(255,255,255,0.02)" borderRight="1px solid rgba(255,255,255,0.1)"/>
          <circle cx="60" cy="40" r="16" fill="rgba(255,255,255,0.1)"/>
          <rect x="20" y="80" width="80" height="8" fill="rgba(255,255,255,0.1)" rx="2"/>
          <rect x="20" y="110" width="60" height="8" fill="rgba(255,255,255,0.05)" rx="2"/>
          <rect x="20" y="140" width="70" height="8" fill="rgba(255,255,255,0.05)" rx="2"/>
          <rect x="20" y="170" width="50" height="8" fill="rgba(255,255,255,0.05)" rx="2"/>
          {/* Header */}
          <rect x="120" y="0" width="480" height="60" fill="rgba(255,255,255,0.01)" borderBottom="1px solid rgba(255,255,255,0.1)"/>
          <rect x="150" y="26" width="100" height="8" fill="rgba(255,255,255,0.1)" rx="2"/>
          <circle cx="560" cy="30" r="12" fill="rgba(255,255,255,0.1)"/>
          {/* KPI Cards */}
          <rect x="150" y="90" width="130" height="80" fill="rgba(255,255,255,0.03)" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <rect x="170" y="110" width="40" height="6" fill="rgba(255,255,255,0.2)" rx="2"/>
          <rect x="170" y="130" width="80" height="16" fill="rgba(255,255,255,0.4)" rx="2"/>
          
          <rect x="300" y="90" width="130" height="80" fill="rgba(255,255,255,0.03)" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <rect x="320" y="110" width="40" height="6" fill="rgba(255,255,255,0.2)" rx="2"/>
          <rect x="320" y="130" width="60" height="16" fill="rgba(255,255,255,0.4)" rx="2"/>

          <rect x="450" y="90" width="120" height="80" fill="rgba(255,255,255,0.03)" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <rect x="470" y="110" width="40" height="6" fill="rgba(255,255,255,0.2)" rx="2"/>
          <rect x="470" y="130" width="70" height="16" fill="rgba(255,255,255,0.4)" rx="2"/>
          {/* Main Chart Area */}
          <rect x="150" y="200" width="420" height="170" fill="rgba(255,255,255,0.02)" rx="4" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          <path d="M150 320 Q250 250 350 300 T570 230" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6"/>
          <path d="M150 320 Q250 250 350 300 T570 230 L570 370 L150 370 Z" fill="rgba(255,255,255,0.05)" opacity="0.5"/>
          <circle cx="350" cy="300" r="4" fill="#ffffff" className="animate-pulse"/>
        </svg>
      )
    },
    {
      id: 'proj2',
      title: 'Astro Secure Checkout',
      category: 'FinTech Interface',
      client: 'Astro Mart Global',
      desc: 'Checkout page designed for frictionless product purchasing. A high-quality e-commerce platform integration delivering fresh, secure, and PCI-DSS compliant payment processing for enterprise retailers.',
      features: ['PCI-DSS Compliance', 'Microsecond Latency', 'Fluid Animations'],
      svg: (
        <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-2xl">
          <rect width="600" height="400" fill="#141414" rx="8" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          {/* Credit Card Graphic */}
          <rect x="100" y="80" width="220" height="140" fill="rgba(255,255,255,0.05)" rx="12" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <rect x="120" y="110" width="30" height="20" fill="rgba(255,255,255,0.2)" rx="4"/>
          <rect x="120" y="160" width="160" height="12" fill="rgba(255,255,255,0.4)" rx="2"/>
          <rect x="120" y="185" width="60" height="8" fill="rgba(255,255,255,0.2)" rx="2"/>
          <rect x="250" y="185" width="40" height="8" fill="rgba(255,255,255,0.2)" rx="2"/>
          <circle cx="280" cy="120" r="12" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
          <circle cx="295" cy="120" r="12" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
          {/* Form Fields */}
          <rect x="360" y="80" width="160" height="16" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="360" y="120" width="160" height="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="4"/>
          <rect x="360" y="170" width="70" height="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="4"/>
          <rect x="450" y="170" width="70" height="30" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="4"/>
          <rect x="360" y="230" width="160" height="40" fill="#ffffff" rx="4"/>
          <rect x="400" y="246" width="80" height="8" fill="#141414" rx="2"/>
          {/* Decorative Elements */}
          <circle cx="120" cy="300" r="40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="20"/>
        </svg>
      )
    },
    {
      id: 'proj3',
      title: 'Weather Compass Analytics',
      category: 'Data Visualization',
      client: 'Meteorological Inst.',
      desc: 'A high-performance data visualization engine capable of processing millions of data points in real-time. Features custom WebGL charting components and strict data sovereignty architecture.',
      features: ['WebGL Rendering', 'WebSocket Streaming', 'Predictive Modeling'],
      svg: (
        <svg viewBox="0 0 600 400" className="w-full h-full drop-shadow-2xl">
          <rect width="600" height="400" fill="#141414" rx="8" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          {/* Grid */}
          <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
             <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>
          </pattern>
          <rect width="600" height="400" fill="url(#gridPattern)" />
          {/* Donut Chart */}
          <circle cx="160" cy="200" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="30"/>
          <circle cx="160" cy="200" r="80" fill="none" stroke="#ffffff" strokeWidth="30" strokeDasharray="300 600" transform="rotate(-90 160 200)" className="animate-[spin_10s_linear_infinite]"/>
          {/* Bar Charts */}
          <rect x="320" y="220" width="30" height="80" fill="rgba(255,255,255,0.2)" rx="2"/>
          <rect x="370" y="150" width="30" height="150" fill="rgba(255,255,255,0.4)" rx="2"/>
          <rect x="420" y="100" width="30" height="200" fill="#ffffff" rx="2" opacity="0.8"/>
          <rect x="470" y="180" width="30" height="120" fill="rgba(255,255,255,0.3)" rx="2"/>
          <rect x="520" y="240" width="30" height="60" fill="rgba(255,255,255,0.1)" rx="2"/>
          {/* Overlay Text */}
          <rect x="130" y="180" width="60" height="10" fill="rgba(255,255,255,0.8)" rx="2"/>
          <rect x="140" y="200" width="40" height="6" fill="rgba(255,255,255,0.4)" rx="2"/>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Background Graphics */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg viewBox="0 0 1000 400" className="w-full h-full">
            <rect x="10%" y="20%" width="80%" height="60%" fill="none" stroke="#ffffff" strokeWidth="0.25" strokeDasharray="4 12"/>
            <circle cx="500" cy="200" r="300" fill="none" stroke="#ffffff" strokeWidth="0.25" className="animate-[spin_60s_linear_infinite]"/>
            <circle cx="500" cy="200" r="200" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="10 30" className="animate-[spin_40s_linear_infinite_reverse]"/>
          </svg>
        </div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Projects I've<br/>Created for<br/>
            <span className="text-gray-500">My Clients.</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            A curated showcase of recent work emphasizing high-performance engineering, scalable architecture, and elegant user interfaces.
          </p>
        </div>
      </section>

      {/* 2. Minimalist Project Index */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
             <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-500 uppercase mb-6">Index</h3>
             <p className="text-gray-400 font-light text-sm leading-relaxed pr-8">
               Select a project below to view its architectural overview and high-fidelity interface wireframes.
             </p>
          </div>
          <div className="md:w-2/3 flex flex-col">
            {featuredProjects.map((proj, idx) => (
              <div key={proj.id} className="group border-b border-white/10 py-6 last:border-0 flex justify-between items-center cursor-default">
                <div>
                  <h4 className="text-2xl font-medium text-white mb-2 tracking-tight group-hover:text-gray-300 transition-colors">{proj.title}</h4>
                  <p className="text-sm font-light text-gray-500">{proj.category}</p>
                </div>
                <span className="text-gray-600 font-mono text-sm group-hover:text-white transition-colors">0{idx + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3, 4, 5. Featured Projects (Split Layout with Massive SVGs) */}
      {featuredProjects.map((project, index) => (
        <section key={project.id} className="py-32 border-b border-white/10 bg-[#141414]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
            
            {/* Text Content */}
            <div className={`xl:col-span-5 ${index % 2 !== 0 ? 'xl:order-2' : ''}`}>
              <div className="mb-8">
                <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase border border-white/20 px-3 py-1 rounded-full">
                  {project.client}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
                {project.title}
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-10">
                {project.desc}
              </p>
              
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-widest">Key Features</h4>
              <ul className="space-y-3 mb-10 border-l border-white/10 pl-6">
                {project.features.map((feat, i) => (
                  <li key={i} className="text-sm font-light text-gray-400">{feat}</li>
                ))}
              </ul>
              
              <button onClick={() => openProject(project)} className="text-sm font-medium text-white flex items-center gap-2 group transition-all duration-300 hover:text-gray-300">
                Read Full Case Study <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
            
            {/* SVG Illustration */}
            <div className={`xl:col-span-7 ${index % 2 !== 0 ? 'xl:order-1' : ''} flex justify-center`}>
              <div className="w-full max-w-2xl transition-transform duration-700 hover:scale-[1.02]">
                {project.svg}
              </div>
            </div>

          </div>
        </section>
      ))}

      {/* 6. Facts and Figures (Project Metrics) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">Project<br/>Metrics</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">40+</div>
              <p className="text-gray-400 text-sm font-light">End-to-end web applications successfully delivered to production.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">15</div>
              <p className="text-gray-400 text-sm font-light">Enterprise-level organizations partnered with globally.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">0</div>
              <p className="text-gray-400 text-sm font-light">Security breaches reported across all audited and deployed applications.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">10M</div>
              <p className="text-gray-400 text-sm font-light">API requests handled daily by backend systems I've architected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Development Lifecycle */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <h2 className="text-3xl font-medium text-white tracking-tight">Development Lifecycle</h2>
            <p className="text-gray-400 font-light text-sm max-w-sm">
              A transparent, predictable process ensuring projects are delivered on time and within scope.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Globe size={24} />, title: '1. Discovery', desc: 'Requirements gathering, market research, and architecture mapping.' },
              { icon: <Code2 size={24} />, title: '2. Engineering', desc: 'Writing clean, scalable code utilizing modern frameworks.' },
              { icon: <Shield size={24} />, title: '3. Security', desc: 'Rigorous penetration testing and vulnerability patching.' },
              { icon: <Terminal size={24} />, title: '4. Deployment', desc: 'CI/CD pipeline integration and production rollout.' }
            ].map((step, i) => (
              <div key={i} className="p-8 border border-white/10 hover:bg-[#0d0d0d] transition-colors duration-500 group">
                <div className="text-white/30 mb-8 group-hover:text-white transition-colors">{step.icon}</div>
                <h4 className="text-lg font-medium text-white mb-3 tracking-tight">{step.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Security Integration Focus */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-semibold text-white mb-6 tracking-tight">Secure by Design</h2>
          <p className="text-gray-400 font-light text-lg leading-relaxed mb-6">
            Every project showcased is built with a "Security First" philosophy. I implement rigorous defense mechanisms directly into the application architecture.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-gray-300 font-light">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div> OWASP Top 10 Threat Mitigation
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300 font-light">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div> Advanced JWT & OAuth2 Auth Flows
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300 font-light">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div> Automated Vulnerability Scanning
            </li>
          </ul>
        </div>
        <div className="flex justify-center md:justify-end opacity-50">
          <Shield size={160} strokeWidth={0.5} className="text-white" />
        </div>
      </section>

      {/* 9. Client Philosophy / Testimonial */}
      <section className="py-32 bg-[#141414] border-b border-white/10 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <Layers size={32} className="mx-auto mb-10 text-white/20" strokeWidth={1} />
          <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight tracking-tighter mb-10">
            "The projects delivered were not only visually stunning but architecturally bulletproof. The attention to detail in both frontend design and backend security is unmatched."
          </h3>
          <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">Director of Engineering, FinTech Group</p>
        </div>
      </section>

      {/* 10. Archival / Domain List */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
         <h2 className="text-2xl font-medium text-white mb-12 tracking-tight">Industry Expertise</h2>
         <div className="flex flex-wrap gap-4">
           {['Financial Technology', 'E-Commerce Platforms', 'Healthcare Portals', 'Cybersecurity Dashboards', 'SaaS Products', 'Logistics & Supply Chain'].map(domain => (
             <span key={domain} className="px-6 py-3 border border-white/10 text-gray-400 text-sm font-light hover:text-white hover:border-white/30 transition-all cursor-default">
               {domain}
             </span>
           ))}
         </div>
      </section>

      {/* 11. Final Minimalist CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Have a project<br />
            in mind?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            Let's collaborate to build a scalable, secure, and beautiful digital experience for your brand.
          </p>
        </div>
        <button onClick={() => navigate('contact')} className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shrink-0 flex items-center gap-3">
          Start Your Project <ArrowUpRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default Projects;
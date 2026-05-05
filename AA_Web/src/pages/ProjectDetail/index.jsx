import React, { useEffect } from 'react';
import { 
  ArrowLeft, ArrowRight, ExternalLink, Layers, 
  Server, ShieldCheck, Activity, Code2, 
  Database, Cpu, CheckCircle, BarChart
} from 'lucide-react';

const ProjectDetail = ({ activeProject, navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!activeProject) return null;

  // Rich fallback data to ensure the 10+ sections remain robust even if the props are basic
  const client = activeProject.client || 'Enterprise Client';
  const year = activeProject.year || '2026';
  const role = 'Lead Architect & Engineer';
  const industry = activeProject.category || 'Technology';
  const techStack = activeProject.techStack || ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'];
  
  const metrics = [
    { label: 'Performance Increase', value: '240%' },
    { label: 'API Latency', value: '<50ms' },
    { label: 'Security Score', value: 'A+' },
    { label: 'Infrastructure Uptime', value: '99.99%' }
  ];

  const features = [
    'Zero-Trust Authentication Framework',
    'Real-time WebSocket Data Streaming',
    'High-Availability Microservices Architecture',
    'Custom WebGL Data Visualization',
    'Automated CI/CD Deployment Pipeline',
    'PCI-DSS Compliant Payment Processing'
  ];

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Data-Flow SVG Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-center items-center">
          <svg viewBox="0 0 1000 600" className="w-[120%] h-[120%] animate-[pulse_8s_ease-in-out_infinite]">
            <path d="M0 300 Q 250 100 500 300 T 1000 300" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 8" />
            <path d="M0 400 Q 250 200 500 400 T 1000 400" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
            <path d="M0 200 Q 250 0 500 200 T 1000 200" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="10 20" />
            <circle cx="500" cy="300" r="150" fill="none" stroke="#ffffff" strokeWidth="0.5" className="animate-[spin_40s_linear_infinite]" />
          </svg>
        </div>

        <div className="relative z-10">
          <button 
            onClick={() => navigate('projects')} 
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors mb-16 group w-max"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Selected Works
          </button>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase border border-white/20 px-3 py-1 rounded-sm">
              {industry}
            </span>
            <span className="text-gray-500 font-mono text-xs">{year}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            {activeProject.title}
          </h1>
        </div>
      </section>

      {/* 2. High-Level Executive Summary */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-b border-white/10 text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-light text-gray-300 leading-snug tracking-tight">
          {activeProject.description}
        </h3>
      </section>

      {/* 3. Project Metadata Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-[#141414] border border-white/10 p-6 md:p-8 hover:border-white/30 transition-colors">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Client</p>
            <h4 className="text-white text-lg font-medium">{client}</h4>
          </div>
          <div className="bg-[#141414] border border-white/10 p-6 md:p-8 hover:border-white/30 transition-colors">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Timeline</p>
            <h4 className="text-white text-lg font-medium">{year}</h4>
          </div>
          <div className="bg-[#141414] border border-white/10 p-6 md:p-8 hover:border-white/30 transition-colors">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Role</p>
            <h4 className="text-white text-lg font-medium">{role}</h4>
          </div>
          <div className="bg-[#141414] border border-white/10 p-6 md:p-8 hover:border-white/30 transition-colors">
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Sector</p>
            <h4 className="text-white text-lg font-medium">{industry}</h4>
          </div>
        </div>
      </section>

      {/* 4. Custom Architectural Diagram (SVG) */}
      <section className="py-32 bg-[#141414] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl font-semibold text-white tracking-tight">System Architecture</h2>
            <button className="px-6 py-2 border border-white/10 text-white text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-colors flex items-center gap-2">
              Launch Live Instance <ExternalLink size={14} />
            </button>
          </div>
          
          <div className="w-full aspect-[21/9] min-h-[400px] bg-[#0d0d0d] border border-white/10 rounded-sm relative flex items-center justify-center p-8 group">
            {/* Massive Abstract Architecture SVG */}
            <svg viewBox="0 0 1000 400" className="w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-700">
              {/* User/Client Node */}
              <circle cx="100" cy="200" r="40" fill="rgba(255,255,255,0.05)" stroke="#ffffff" strokeWidth="1" />
              <circle cx="100" cy="200" r="10" fill="#ffffff" />
              <text x="100" y="260" fill="#888888" fontSize="12" textAnchor="middle" fontFamily="monospace" letterSpacing="2">CLIENT</text>
              
              {/* Gateway/WAF */}
              <rect x="250" y="100" width="40" height="200" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" rx="4" />
              <path d="M140 200 L250 200" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" className="animate-[pulse_1.5s_linear_infinite]" />
              <text x="270" y="330" fill="#888888" fontSize="12" textAnchor="middle" fontFamily="monospace" letterSpacing="2">WAF / API GATEWAY</text>

              {/* Core Services */}
              <rect x="400" y="50" width="200" height="80" fill="rgba(255,255,255,0.02)" stroke="#ffffff" strokeWidth="0.5" rx="2" />
              <rect x="400" y="160" width="200" height="80" fill="rgba(255,255,255,0.02)" stroke="#ffffff" strokeWidth="0.5" rx="2" />
              <rect x="400" y="270" width="200" height="80" fill="rgba(255,255,255,0.02)" stroke="#ffffff" strokeWidth="0.5" rx="2" />
              
              <path d="M290 200 L345 200 L345 90 L400 90" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <path d="M290 200 L400 200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <path d="M290 200 L345 200 L345 310 L400 310" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

              <text x="500" y="95" fill="#ffffff" fontSize="14" textAnchor="middle" fontFamily="sans-serif">Auth Service</text>
              <text x="500" y="205" fill="#ffffff" fontSize="14" textAnchor="middle" fontFamily="sans-serif">Main Engine</text>
              <text x="500" y="315" fill="#ffffff" fontSize="14" textAnchor="middle" fontFamily="sans-serif">Worker Queue</text>

              {/* Database Cluster */}
              <ellipse cx="800" cy="180" rx="60" ry="20" fill="none" stroke="#ffffff" strokeWidth="1" />
              <path d="M740 180 L740 240 A60 20 0 0 0 860 240 L860 180" fill="rgba(255,255,255,0.05)" stroke="#ffffff" strokeWidth="1" />
              <ellipse cx="800" cy="240" rx="60" ry="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <text x="800" y="300" fill="#888888" fontSize="12" textAnchor="middle" fontFamily="monospace" letterSpacing="2">CLUSTER</text>

              <path d="M600 90 L700 90 L700 200 L740 200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M600 200 L740 200" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 4" />
              <path d="M600 310 L700 310 L700 220 L740 220" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 4" />

              {/* Active Pulses */}
              <circle cx="345" cy="200" r="3" fill="#ffffff" className="animate-ping" style={{animationDuration: '2s'}}/>
              <circle cx="700" cy="200" r="3" fill="#ffffff" className="animate-ping" style={{animationDuration: '3s'}}/>
            </svg>
          </div>
        </div>
      </section>

      {/* 5. The Core Challenge & 6. Engineering Solution */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Activity size={24} className="text-gray-500" strokeWidth={1.5} />
              <h3 className="text-3xl font-semibold text-white tracking-tight">The Challenge</h3>
            </div>
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-6">
              The client was operating on a monolithic legacy architecture that suffered from severe latency degradation under concurrent user load. 
            </p>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              Additionally, their existing infrastructure lacked automated security testing, leaving them exposed to critical OWASP vulnerabilities and compliance violations.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Code2 size={24} className="text-gray-500" strokeWidth={1.5} />
              <h3 className="text-3xl font-semibold text-white tracking-tight">The Engineering Solution</h3>
            </div>
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-6">
              I architected a decoupled microservices environment utilizing Node.js for high-throughput data streaming, fronted by a lightning-fast React application.
            </p>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              A comprehensive CI/CD pipeline was implemented with integrated SAST (Static Application Security Testing) to enforce strict zero-trust security perimeters globally.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Technical Stack Matrix */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <h2 className="text-3xl font-medium text-white tracking-tight">Technical Matrix</h2>
            <p className="text-gray-400 font-light text-sm max-w-sm">
              The precise combination of frameworks, languages, and infrastructure tools utilized to execute the build.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {techStack.map((tech, idx) => (
              <div key={idx} className="border border-white/10 bg-[#0d0d0d] p-6 text-center hover:border-white/30 hover:bg-white/5 transition-all">
                <span className="text-sm font-medium text-white tracking-tight">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Key Features & Deliverables */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <h2 className="text-3xl font-medium text-white tracking-tight mb-16">Core Deliverables</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="p-8 border border-white/10 bg-[#141414] hover:bg-[#1a1a1a] transition-colors group">
              <CheckCircle size={20} className="text-gray-600 mb-6 group-hover:text-white transition-colors" strokeWidth={1.5} />
              <h4 className="text-lg font-medium text-white tracking-tight">{feature}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Performance Impact (Facts & Figures) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight flex items-center gap-3">
              <BarChart size={24} className="text-gray-500" strokeWidth={1.5} /> Business<br/>Impact
            </h3>
            <p className="text-gray-400 font-light mt-4 text-sm max-w-xs">Quantifiable metrics established post-deployment via real-user monitoring (RUM).</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            {metrics.map((metric, idx) => (
              <div key={idx}>
                <div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">{metric.value}</div>
                <p className="text-gray-400 text-sm font-light">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Infrastructure & Deployment Map (SVG) */}
      <section className="py-32 bg-[#141414] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-3xl font-semibold text-white tracking-tight leading-tight">Continuous<br/>Deployment Pipeline</h2>
            <p className="text-gray-400 font-light text-base leading-relaxed">
              To ensure 99.99% uptime during iterative updates, a fully automated CI/CD pipeline was established using GitHub Actions, Docker containers, and AWS Elastic Container Service (ECS).
            </p>
            <ul className="space-y-4 border-l border-white/10 pl-6">
              <li>
                <p className="text-white text-sm font-medium">Automated Testing</p>
                <p className="text-gray-500 text-xs font-light mt-1">Jest & Cypress execution pre-merge.</p>
              </li>
              <li>
                <p className="text-white text-sm font-medium">Containerization</p>
                <p className="text-gray-500 text-xs font-light mt-1">Docker image builds and registry pushes.</p>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-8 flex justify-center">
             {/* CI/CD Pipeline SVG */}
             <div className="w-full max-w-3xl aspect-[2/1] border border-white/10 bg-[#0d0d0d] relative p-8 flex items-center justify-center">
                <svg viewBox="0 0 800 400" className="w-full h-full opacity-70">
                  {/* Git Node */}
                  <rect x="50" y="150" width="100" height="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="8" />
                  <path d="M100 170 L100 230 M80 200 L100 170 L120 200" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="100" y="275" fill="#888888" fontSize="12" textAnchor="middle" fontFamily="monospace">COMMIT</text>

                  {/* Build/Test Node */}
                  <rect x="250" y="150" width="100" height="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="8" />
                  <circle cx="300" cy="200" r="20" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_4s_linear_infinite]" />
                  <text x="300" y="275" fill="#888888" fontSize="12" textAnchor="middle" fontFamily="monospace">BUILD / TEST</text>

                  {/* Registry Node */}
                  <rect x="450" y="150" width="100" height="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="8" />
                  <rect x="480" y="180" width="40" height="40" fill="rgba(255,255,255,0.1)" stroke="#ffffff" strokeWidth="1" rx="2" />
                  <text x="500" y="275" fill="#888888" fontSize="12" textAnchor="middle" fontFamily="monospace">REGISTRY</text>

                  {/* Production Node */}
                  <rect x="650" y="150" width="100" height="100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" rx="8" />
                  <path d="M680 200 L695 215 L720 180" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <text x="700" y="275" fill="#888888" fontSize="12" textAnchor="middle" fontFamily="monospace">PRODUCTION</text>

                  {/* Connections */}
                  <path d="M150 200 L250 200" fill="none" stroke="#ffffff" strokeWidth="1" />
                  <path d="M350 200 L450 200" fill="none" stroke="#ffffff" strokeWidth="1" />
                  <path d="M550 200 L650 200" fill="none" stroke="#ffffff" strokeWidth="1" />

                  {/* Animated Data Packets */}
                  <circle cx="150" cy="200" r="3" fill="#ffffff">
                    <animate attributeName="cx" values="150;250;150" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="350" cy="200" r="3" fill="#ffffff">
                    <animate attributeName="cx" values="350;450;350" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="550" cy="200" r="3" fill="#ffffff">
                    <animate attributeName="cx" values="550;650;550" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
             </div>
          </div>
        </div>
      </section>

      {/* 11. Final Call to Action */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Require similar<br />
            infrastructure?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            Let's discuss how we can engineer a custom solution tailored to your enterprise constraints.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 flex-wrap">
          <button onClick={() => navigate('contact')} className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors flex items-center gap-3">
            Start a Dialogue <ArrowRight size={16} />
          </button>
          <button onClick={() => navigate('projects')} className="px-10 py-4 bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center gap-3">
            View Next Case Study
          </button>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
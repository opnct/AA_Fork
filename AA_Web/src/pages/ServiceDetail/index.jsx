import React, { useEffect } from 'react';
import { 
  ArrowLeft, CheckCircle, ArrowRight, 
  Cpu, ShieldCheck, Zap, Layers, BarChart
} from 'lucide-react';

const ServiceDetail = ({ activeService, navigate }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!activeService) return null;

  // Generate a high-end custom SVG based on the service title
  const renderServiceGraphic = (title) => {
    const t = title.toLowerCase();
    if (t.includes('front') || t.includes('ui')) {
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-60">
          <rect x="50" y="50" width="300" height="200" fill="none" stroke="#ffffff" strokeWidth="0.5" rx="4"/>
          <line x1="50" y1="80" x2="350" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          <circle cx="70" cy="65" r="3" fill="#ffffff" opacity="0.3"/>
          <circle cx="85" cy="65" r="3" fill="#ffffff" opacity="0.3"/>
          <circle cx="100" cy="65" r="3" fill="#ffffff" opacity="0.3"/>
          <rect x="70" y="110" width="120" height="110" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" rx="2"/>
          <rect x="210" y="110" width="120" height="30" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" rx="2"/>
          <rect x="210" y="150" width="120" height="30" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" rx="2"/>
          <rect x="210" y="190" width="120" height="30" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" rx="2"/>
          <path d="M70 165 L190 165" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="2 4"/>
        </svg>
      );
    } else if (t.includes('back') || t.includes('api')) {
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-60">
          <ellipse cx="200" cy="80" rx="60" ry="15" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
          <path d="M140 80 L140 140 A60 15 0 0 0 260 140 L260 80" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <ellipse cx="200" cy="140" rx="60" ry="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <path d="M140 140 L140 200 A60 15 0 0 0 260 200 L260 140" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <ellipse cx="200" cy="200" rx="60" ry="15" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <path d="M140 200 L140 260 A60 15 0 0 0 260 260 L260 200" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          <circle cx="200" cy="140" r="2" fill="#ffffff" className="animate-pulse"/>
          <path d="M280 140 L340 140 M340 140 L340 80" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="4 4" fill="none"/>
        </svg>
      );
    } else {
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-60">
          <circle cx="200" cy="150" r="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          <circle cx="200" cy="150" r="70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" strokeDasharray="5 5"/>
          <circle cx="200" cy="150" r="40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
          <path d="M200 30 L200 270 M80 150 L320 150" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          <path d="M200 150 L270 80" stroke="#ffffff" strokeWidth="1" className="origin-[200px_150px] animate-[spin_8s_linear_infinite]"/>
          <circle cx="200" cy="150" r="3" fill="#ffffff"/>
        </svg>
      );
    }
  };

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Abstract Background SVG */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 1000 400" className="w-full h-full animate-[pulse_10s_ease-in-out_infinite]">
             <line x1="0" y1="200" x2="1000" y2="200" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
             <line x1="500" y1="0" x2="500" y2="400" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
             <circle cx="500" cy="200" r="150" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
          </svg>
        </div>

        <div className="relative z-10">
          <button 
            onClick={() => navigate('services')} 
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-colors mb-16 group w-max"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Directory
          </button>
          
          <div className="flex items-center gap-4 mb-8 text-white/40">
            {activeService.icon}
            <span className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">Service Configuration</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            {activeService.title}
          </h1>
        </div>
      </section>

      {/* 2. High-Level Overview */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-b border-white/10 text-center md:text-left">
        <h3 className="text-2xl md:text-4xl font-light text-gray-300 leading-snug tracking-tight">
          {activeService.fullDesc}
        </h3>
      </section>

      {/* 3. Custom SVG Illustration & 4. Core Deliverables */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-white/10">
        <div className="lg:col-span-5">
           {/* Geometric Art */}
           <div className="w-full aspect-[4/3] bg-[#141414] border border-white/10 p-8 flex items-center justify-center rounded-sm overflow-hidden group">
             <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
               {renderServiceGraphic(activeService.title)}
             </div>
           </div>
        </div>
        <div className="lg:col-span-7">
           <h2 className="text-3xl font-semibold text-white mb-12 tracking-tight">Core Deliverables</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {activeService.features.map((feature, idx) => (
               <div key={idx} className="bg-[#141414] border border-white/10 p-6 hover:border-white/30 transition-colors duration-300 flex items-start gap-4">
                 <CheckCircle size={18} className="text-white/30 shrink-0 mt-0.5" strokeWidth={1.5} />
                 <span className="text-gray-300 text-sm font-light leading-relaxed">{feature}</span>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. Strategic Methodology */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Methodology</h2>
            <p className="text-gray-400 font-light text-lg">A systematic approach to ensuring flawless execution.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { id: '01', title: 'Scope & Audit', desc: 'Deep architectural review and requirement mapping.' },
              { id: '02', title: 'Architecture', desc: 'Designing the structural blueprint and data flows.' },
              { id: '03', title: 'Engineering', desc: 'Rigorous, secure, and performant code development.' },
              { id: '04', title: 'Deployment', desc: 'Zero-downtime launch and post-deployment monitoring.' }
            ].map((step) => (
              <div key={step.id} className="relative">
                <div className="text-3xl font-light text-white/20 mb-4 block border-b border-white/10 pb-4">{step.id}</div>
                <h4 className="text-lg font-medium text-white mb-2 tracking-tight">{step.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Performance Impact (Metrics) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight flex items-center gap-3">
              <BarChart size={24} className="text-white/40" strokeWidth={1.5} /> Expected Impact
            </h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">Optimal</div>
              <p className="text-gray-400 text-sm font-light">Performance baselines are established using Lighthouse and real user metrics.</p>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">Secure</div>
              <p className="text-gray-400 text-sm font-light">Adherence to rigorous security standards mitigates critical vulnerabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Technical Infrastructure & 8. Competitive Advantage */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-white/10">
        <div>
           <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
             <Cpu size={20} className="text-white/40" strokeWidth={1.5} /> Infrastructure Specs
           </h3>
           <ul className="space-y-4 border-l border-white/10 pl-6">
             <li className="text-gray-300 text-sm font-light">Enterprise-grade cloud deployment</li>
             <li className="text-gray-300 text-sm font-light">Automated CI/CD pipelines</li>
             <li className="text-gray-300 text-sm font-light">Scalable microservice architecture capabilities</li>
             <li className="text-gray-300 text-sm font-light">Military-grade encryption standards</li>
           </ul>
        </div>
        <div>
           <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
             <ShieldCheck size={20} className="text-white/40" strokeWidth={1.5} /> Strategic Advantage
           </h3>
           <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
             By engaging my services, you bypass the overhead of traditional agencies while retaining enterprise-grade quality. My code is rigorously clean, my security audits are exhaustive, and my strategies are fundamentally data-driven.
           </p>
           <p className="text-gray-400 font-light text-sm leading-relaxed">
             There is no outsourcing. You receive direct, high-level communication and engineering execution straight from the architect.
           </p>
        </div>
      </section>

      {/* 9. Investment / Pricing Tiers */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Investment Structuring</h2>
            <p className="text-gray-400 font-light text-lg">Standard rates (INR). Prices are indicative based on baseline scopes.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {activeService.pricing.map((tier, idx) => (
              <div key={idx} className="bg-[#0d0d0d] border border-white/10 p-10 flex flex-col hover:border-white/30 transition-all duration-300">
                <h4 className="text-gray-500 text-xs font-medium uppercase tracking-[0.2em] mb-4">{tier.title}</h4>
                <p className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tighter">{tier.price}</p>
                <div className="w-full h-px bg-white/10 mb-6"></div>
                <p className="text-gray-400 text-sm font-light leading-relaxed flex-grow">
                  {tier.detail}
                </p>
                <button onClick={() => navigate('estimator')} className="mt-10 w-full py-3 border border-white/20 text-white text-xs font-medium hover:bg-white hover:text-black transition-colors">
                  Estimate Exact Scope
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Final Call to Action */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Initiate Project
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            Secure your architecture and build for scale.
          </p>
        </div>
        <button onClick={() => navigate('contact')} className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shrink-0 flex items-center gap-3">
          Hire Me <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default ServiceDetail;
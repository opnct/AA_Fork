import React, { useState, useEffect } from 'react';
import { 
  Calculator, Shield, Layers, Server, 
  Activity, ArrowRight, Zap, CheckCircle, 
  HelpCircle, Briefcase, Plus, Minus
} from 'lucide-react';

const PricingEstimator = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Complex Pricing State Logic
  const [baseTier, setBaseTier] = useState(1); // 0: Landing, 1: CMS, 2: WebApp, 3: Enterprise
  const [securityTier, setSecurityTier] = useState(0); // 0: Standard, 1: VAPT, 2: Zero-Trust
  const [uiTier, setUiTier] = useState(0); // 0: Standard, 1: Custom, 2: Advanced WebGL
  const [slaTier, setSlaTier] = useState(false); // High Availability CDN
  const [retainer, setRetainer] = useState(false); // Monthly maintenance

  const [breakdown, setBreakdown] = useState({
    base: 0,
    security: 0,
    ui: 0,
    infra: 0,
    total: 0,
    monthly: 0
  });

  // Pricing Matrix (INR)
  const PRICING = {
    base: [25000, 60000, 150000, 350000],
    security: [0, 45000, 120000],
    ui: [0, 50000, 150000],
    sla: 35000,
    retainer: 25000
  };

  useEffect(() => {
    const base = PRICING.base[baseTier];
    const security = PRICING.security[securityTier];
    const ui = PRICING.ui[uiTier];
    const infra = slaTier ? PRICING.sla : 0;
    const total = base + security + ui + infra;
    const monthly = retainer ? PRICING.retainer : 0;

    setBreakdown({ base, security, ui, infra, total, monthly });
  }, [baseTier, securityTier, uiTier, slaTier, retainer]);

  const formatINR = (num) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  // Dynamic SVG Chart calculation
  const maxPossible = PRICING.base[3] + PRICING.security[2] + PRICING.ui[2] + PRICING.sla;
  const currentHeight = (breakdown.total / maxPossible) * 100;

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-20">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Geometry SVG Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-end items-center">
          <svg viewBox="0 0 1000 600" className="w-[1000px] h-[600px] translate-x-1/4">
            <line x1="0" y1="300" x2="1000" y2="300" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 8" />
            <line x1="500" y1="0" x2="500" y2="600" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 8" />
            {/* Dynamic expanding circle based on total */}
            <circle cx="500" cy="300" r={50 + (breakdown.total / maxPossible) * 200} fill="none" stroke="#ffffff" strokeWidth="1" className="transition-all duration-1000 ease-out" />
            <circle cx="500" cy="300" r="300" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" className="animate-[spin_60s_linear_infinite]" />
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Financial Modeling</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Investment<br />
            <span className="text-gray-500">Structuring.</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Transparent, zero-guesswork scoping. Configure your architectural, design, and security requirements to instantly generate an enterprise investment estimate.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Left Column: Interactive Configuration Modules */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-16">
          
          {/* 2. Architectural Foundation */}
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Layers size={20} className="text-gray-500" />
              <h2 className="text-2xl font-medium text-white tracking-tight">1. Base Architecture</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { level: 0, title: 'Static Landing Portfolio', desc: 'High-speed, SEO-optimized static site without backend logic.' },
                { level: 1, title: 'Dynamic CMS Platform', desc: 'Content-driven site with database integration (Headless CMS).' },
                { level: 2, title: 'Full-Stack Web App', desc: 'Complex user auth, dashboards, and API integrations.' },
                { level: 3, title: 'Enterprise Microservices', desc: 'Highly concurrent, scalable distributed systems for large orgs.' }
              ].map((tier) => (
                <button 
                  key={tier.level}
                  onClick={() => setBaseTier(tier.level)}
                  className={`text-left p-6 border transition-all duration-300 flex flex-col justify-between min-h-[140px]
                    ${baseTier === tier.level ? 'bg-white border-white text-black' : 'bg-[#141414] border-white/10 text-white hover:border-white/30'}`}
                >
                  <h3 className="text-lg font-medium mb-2">{tier.title}</h3>
                  <p className={`text-xs font-light leading-relaxed ${baseTier === tier.level ? 'text-gray-800' : 'text-gray-400'}`}>
                    {tier.desc}
                  </p>
                  {baseTier === tier.level && <CheckCircle size={16} className="mt-4 text-black" />}
                </button>
              ))}
            </div>
          </section>

          {/* 3. Security & Compliance */}
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Shield size={20} className="text-gray-500" />
              <h2 className="text-2xl font-medium text-white tracking-tight">2. Security Integrations</h2>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { level: 0, title: 'Standard Perimeter (Included)', desc: 'Basic HTTPS, standard OWASP protections, and parameterized queries.' },
                { level: 1, title: 'VAPT & Hardening (+₹45k)', desc: 'Thorough Vulnerability Assessment and Penetration Testing prior to launch.' },
                { level: 2, title: 'Zero-Trust Framework (+₹1.2L)', desc: 'Military-grade encryption, strict RBAC, network isolation, and deep audits.' }
              ].map((tier) => (
                <button 
                  key={tier.level}
                  onClick={() => setSecurityTier(tier.level)}
                  className={`text-left p-6 border transition-all duration-300 flex items-center justify-between
                    ${securityTier === tier.level ? 'bg-[#1a1a1a] border-white text-white' : 'bg-[#141414] border-white/10 text-gray-400 hover:border-white/30 hover:text-gray-200'}`}
                >
                  <div>
                    <h3 className={`text-base font-medium mb-1 ${securityTier === tier.level ? 'text-white' : ''}`}>{tier.title}</h3>
                    <p className="text-xs font-light max-w-xl">{tier.desc}</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ml-4
                    ${securityTier === tier.level ? 'border-white' : 'border-gray-600'}`}>
                    {securityTier === tier.level && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </div>
                </button>
              ))}
            </div>
          </section>

          {/* 4. Interface Engineering */}
          <section>
            <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
              <Zap size={20} className="text-gray-500" />
              <h2 className="text-2xl font-medium text-white tracking-tight">3. UI/UX Engineering</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { level: 0, title: 'Standard System', desc: 'Clean, accessible interface utilizing existing minimalist design frameworks.' },
                { level: 1, title: 'Custom Identity', desc: 'Bespoke UI design, wireframing, and highly specific brand integration.' },
                { level: 2, title: 'WebGL / Advanced', desc: 'Complex 3D rendering, fluid Framer Motion animations, and extreme interactivity.' }
              ].map((tier) => (
                <button 
                  key={tier.level}
                  onClick={() => setUiTier(tier.level)}
                  className={`text-left p-6 border transition-all duration-300 flex flex-col justify-between min-h-[160px]
                    ${uiTier === tier.level ? 'bg-white border-white text-black' : 'bg-[#141414] border-white/10 text-white hover:border-white/30'}`}
                >
                  <h3 className="text-base font-medium mb-2">{tier.title}</h3>
                  <p className={`text-xs font-light leading-relaxed ${uiTier === tier.level ? 'text-gray-800' : 'text-gray-400'}`}>
                    {tier.desc}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* 5. Deployments & 6. Retainer */}
          <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
               <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Server size={20} className="text-gray-500" />
                <h2 className="text-xl font-medium text-white tracking-tight">4. Edge SLA</h2>
              </div>
              <button 
                onClick={() => setSlaTier(!slaTier)}
                className={`w-full text-left p-6 border transition-all duration-300 flex items-start justify-between
                  ${slaTier ? 'bg-[#1a1a1a] border-white text-white' : 'bg-[#141414] border-white/10 text-gray-400 hover:border-white/30'}`}
              >
                <div>
                  <h3 className={`text-sm font-medium mb-1 ${slaTier ? 'text-white' : ''}`}>Global Edge CDN & High-Availability (+₹35k)</h3>
                  <p className="text-[10px] font-light">Deployment on distributed nodes with 99.99% uptime guarantee.</p>
                </div>
                {slaTier ? <Minus size={16} className="text-white shrink-0"/> : <Plus size={16} className="text-gray-500 shrink-0"/>}
              </button>
            </div>

            <div>
               <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
                <Briefcase size={20} className="text-gray-500" />
                <h2 className="text-xl font-medium text-white tracking-tight">5. Retainer</h2>
              </div>
              <button 
                onClick={() => setRetainer(!retainer)}
                className={`w-full text-left p-6 border transition-all duration-300 flex items-start justify-between
                  ${retainer ? 'bg-[#1a1a1a] border-white text-white' : 'bg-[#141414] border-white/10 text-gray-400 hover:border-white/30'}`}
              >
                <div>
                  <h3 className={`text-sm font-medium mb-1 ${retainer ? 'text-white' : ''}`}>Monthly Support Retainer (+₹25k/mo)</h3>
                  <p className="text-[10px] font-light">Ongoing code maintenance, security patches, and priority support.</p>
                </div>
                {retainer ? <Minus size={16} className="text-white shrink-0"/> : <Plus size={16} className="text-gray-500 shrink-0"/>}
              </button>
            </div>
          </section>

        </div>

        {/* Right Column: 7. Dynamic Financial Ledger & 8. SVG Chart (Sticky) */}
        <div className="lg:col-span-5 xl:col-span-4 relative">
          <div className="sticky top-24 bg-[#141414] border border-white/10 p-8 shadow-2xl flex flex-col min-h-[600px]">
            
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8">Financial Projection</h3>
            
            <div className="space-y-4 mb-8 flex-grow">
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-gray-400 font-light">Base Architecture</span>
                <span className="text-base text-white font-medium">{formatINR(breakdown.base)}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-gray-400 font-light">Security Posture</span>
                <span className="text-base text-white font-medium">{formatINR(breakdown.security)}</span>
              </div>
              <div className="flex justify-between items-end border-b border-white/5 pb-2">
                <span className="text-sm text-gray-400 font-light">UI/UX Scope</span>
                <span className="text-base text-white font-medium">{formatINR(breakdown.ui)}</span>
              </div>
              {breakdown.infra > 0 && (
                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                  <span className="text-sm text-gray-400 font-light">Edge Infrastructure</span>
                  <span className="text-base text-white font-medium">{formatINR(breakdown.infra)}</span>
                </div>
              )}
            </div>

            {/* Real-time Dynamic SVG Cost Chart */}
            <div className="w-full h-24 mb-8 flex items-end justify-start gap-1">
               <div className="w-1/4 bg-white/20 transition-all duration-700 ease-out" style={{height: `${(breakdown.base/maxPossible)*100}%`}}></div>
               <div className="w-1/4 bg-white/40 transition-all duration-700 ease-out" style={{height: `${(breakdown.security/maxPossible)*100}%`}}></div>
               <div className="w-1/4 bg-white/60 transition-all duration-700 ease-out" style={{height: `${(breakdown.ui/maxPossible)*100}%`}}></div>
               <div className="w-1/4 bg-white/80 transition-all duration-700 ease-out" style={{height: `${(breakdown.infra/maxPossible)*100}%`}}></div>
            </div>

            <div className="border-t border-white/20 pt-6 mb-8">
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2">Estimated CapEx (Total)</p>
              <div className="text-5xl font-light tracking-tighter text-white transition-all duration-300">
                {formatINR(breakdown.total)}
              </div>
              {breakdown.monthly > 0 && (
                <div className="mt-4 pt-4 border-t border-white/5">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Estimated OpEx (Monthly)</p>
                  <div className="text-xl font-medium text-gray-300">
                    + {formatINR(breakdown.monthly)}<span className="text-xs font-light text-gray-500">/mo</span>
                  </div>
                </div>
              )}
            </div>

            <button onClick={() => navigate('contact')} className="w-full py-4 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors flex justify-center items-center gap-3">
              Request Formal SOW <ArrowRight size={16} />
            </button>
            <p className="text-[10px] text-gray-600 font-mono text-center mt-4 uppercase">
              *Estimates are non-binding & subject to final audit.
            </p>
          </div>
        </div>

      </div>

      {/* 9. Value & Transparency Metrics */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-y border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">The Value<br/>Proposition</h3>
            <p className="text-gray-400 font-light mt-4 text-sm max-w-xs">Premium engineering yields a massive reduction in technical debt.</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">100%</div>
              <p className="text-gray-400 text-sm font-light">In-house development. Absolutely zero offshore outsourcing or agency white-labeling.</p>
            </div>
            <div>
              <div className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tighter">0</div>
              <p className="text-gray-400 text-sm font-light">Hidden fees. The architectural scope dictates the cost. What you build is what you pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Procurement Process Timeline */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-medium text-white tracking-tight">Procurement Protocol</h2>
            <Activity size={24} className="text-gray-500" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Estimation', desc: 'Utilize this engine to define rough budgetary constraints.' },
              { num: '02', title: 'Consultation', desc: 'Schedule a call to refine the architecture and validate the scope.' },
              { num: '03', title: 'Formal SOW', desc: 'Execution of a binding Statement of Work and Non-Disclosure Agreement.' },
              { num: '04', title: 'Mobilization', desc: 'Payment of the 50% retainer to commence active development sprints.' }
            ].map((step) => (
              <div key={step.num} className="border-t border-white/10 pt-6 group">
                <span className="text-2xl font-light text-gray-600 mb-4 block group-hover:text-white transition-colors">{step.num}</span>
                <h4 className="text-lg font-medium text-white mb-2 tracking-tight">{step.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Final Minimalist CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Proceed to SOW<br />
            generation?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            If your budget aligns with the estimate, let's schedule an executive briefing to formalize the architecture.
          </p>
        </div>
        <button onClick={() => navigate('book-call')} className="px-10 py-4 bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-black transition-colors shrink-0 flex items-center gap-3">
          Schedule Briefing <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default PricingEstimator;
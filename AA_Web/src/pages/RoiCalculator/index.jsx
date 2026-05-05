import React, { useState, useEffect } from 'react';
import { 
  Activity, TrendingUp, Zap, Layers, 
  ShieldCheck, ArrowRight, BarChart3, 
  Clock, AlertCircle, DollarSign
} from 'lucide-react';

const RoiCalculator = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Complex Financial State Logic
  const [traffic, setTraffic] = useState(50000);
  const [convRate, setConvRate] = useState(2.5);
  const [leadValue, setLeadValue] = useState(250);
  const [targetUplift, setTargetUplift] = useState(1.5);

  const [metrics, setMetrics] = useState({
    currentMonthly: 0,
    newMonthly: 0,
    monthlyUplift: 0,
    annualUplift: 0,
    costOfInaction: 0
  });

  useEffect(() => {
    const current = traffic * (convRate / 100) * leadValue;
    const improvedConv = convRate + targetUplift;
    const projected = traffic * (improvedConv / 100) * leadValue;
    const uplift = projected - current;
    
    setMetrics({
      currentMonthly: current,
      newMonthly: projected,
      monthlyUplift: uplift,
      annualUplift: uplift * 12,
      costOfInaction: uplift * 6 // 6 months delay
    });
  }, [traffic, convRate, leadValue, targetUplift]);

  const formatCurrency = (num) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(num);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // Dynamic SVG Chart calculations
  const maxChartValue = metrics.newMonthly * 1.2 || 1; // 20% headroom
  const currentHeight = (metrics.currentMonthly / maxChartValue) * 100;
  const projectedHeight = (metrics.newMonthly / maxChartValue) * 100;

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-20">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Growth SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-end items-center">
          <svg viewBox="0 0 1000 600" className="w-[100%] h-[100%] translate-x-1/4">
            {/* Grid lines */}
            <path d="M0 500 L1000 500 M0 400 L1000 400 M0 300 L1000 300 M0 200 L1000 200 M0 100 L1000 100" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
            {/* Exponential Curve */}
            <path d="M0 500 Q 400 500 700 200 T 1000 0" fill="none" stroke="#ffffff" strokeWidth="2" className="animate-[pulse_4s_ease-in-out_infinite]" />
            <path d="M0 500 Q 400 500 700 200 T 1000 0" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" className="animate-[pulse_4s_ease-in-out_infinite]" />
            <circle cx="700" cy="200" r="6" fill="#ffffff" />
            <circle cx="400" cy="430" r="4" fill="rgba(255,255,255,0.5)" />
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Yield Projection Engine</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Conversion<br />
            <span className="text-gray-500">Economics.</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Quantify the financial impact of high-performance architecture. Calculate how micro-optimizations in UI/UX and load speeds translate directly to bottom-line revenue.
          </p>
        </div>
      </section>

      {/* 2. Engineering Philosophy */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center border-b border-white/10">
        <h3 className="text-2xl md:text-4xl font-light text-white leading-snug tracking-tight">
          "A 100-millisecond delay in latency can cost up to 1% in sales. Engineering is not just about writing code; it is about maximizing financial throughput."
        </h3>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 relative">
        
        {/* Left Column: 3. High-End Input Console */}
        <div className="lg:col-span-6 space-y-12">
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <Activity size={20} className="text-gray-500" />
            <h2 className="text-2xl font-medium text-white tracking-tight">Input Parameters</h2>
          </div>

          <div className="bg-[#141414] border border-white/10 p-8 space-y-10">
            {/* Traffic Input */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Monthly Traffic (Visitors)</label>
                <span className="text-white font-mono text-sm">{formatNumber(traffic)}</span>
              </div>
              <input 
                type="range" 
                min="1000" 
                max="500000" 
                step="1000"
                value={traffic} 
                onChange={(e) => setTraffic(Number(e.target.value))} 
                className="w-full h-1 bg-white/10 appearance-none rounded-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white cursor-pointer"
              />
            </div>

            {/* Current Conv Rate Input */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Current Conversion Rate (%)</label>
                <span className="text-white font-mono text-sm">{convRate.toFixed(1)}%</span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="10" 
                step="0.1"
                value={convRate} 
                onChange={(e) => setConvRate(Number(e.target.value))} 
                className="w-full h-1 bg-white/10 appearance-none rounded-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white cursor-pointer"
              />
            </div>

            {/* Avg Lead Value Input */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-semibold uppercase tracking-widest text-gray-400">Average Customer Value (LTV)</label>
                <span className="text-white font-mono text-sm">{formatCurrency(leadValue)}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="5000" 
                step="10"
                value={leadValue} 
                onChange={(e) => setLeadValue(Number(e.target.value))} 
                className="w-full h-1 bg-white/10 appearance-none rounded-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-white cursor-pointer"
              />
            </div>

            {/* Target Uplift Input */}
            <div className="pt-6 border-t border-white/10">
              <div className="flex justify-between items-end mb-4">
                <label className="text-xs font-semibold uppercase tracking-widest text-white">Target Arch. Uplift (+%)</label>
                <span className="text-green-400 font-mono text-sm">+{targetUplift.toFixed(1)}%</span>
              </div>
              <input 
                type="range" 
                min="0.1" 
                max="5" 
                step="0.1"
                value={targetUplift} 
                onChange={(e) => setTargetUplift(Number(e.target.value))} 
                className="w-full h-1 bg-white/10 appearance-none rounded-none outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-green-500 cursor-pointer"
              />
              <p className="text-[10px] text-gray-500 mt-4 leading-relaxed font-light">
                Target uplift represents the absolute percentage point increase in conversion achieved through reduced latency, frictionless UI, and enhanced trust vectors.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Data Visualization & Metrics */}
        <div className="lg:col-span-6 space-y-12">
          
          {/* 4. Custom React-Driven SVG Chart */}
          <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-4">
            <BarChart3 size={20} className="text-gray-500" />
            <h2 className="text-2xl font-medium text-white tracking-tight">Yield Visualization</h2>
          </div>

          <div className="w-full aspect-[4/3] bg-[#0d0d0d] border border-white/10 p-8 relative flex items-end justify-around pb-16">
            {/* Chart Grid */}
            <div className="absolute inset-0 pointer-events-none p-8 pb-16 flex flex-col justify-between">
              <div className="w-full h-px bg-white/5"></div>
              <div className="w-full h-px bg-white/5"></div>
              <div className="w-full h-px bg-white/5"></div>
              <div className="w-full h-px bg-white/20"></div>
            </div>

            {/* Current Baseline Bar */}
            <div className="relative w-1/3 flex flex-col items-center justify-end h-full z-10 group">
              <div className="w-full bg-white/20 border border-white/10 transition-all duration-1000 ease-out" style={{ height: `${currentHeight}%` }}></div>
              <div className="absolute -bottom-8 text-center w-full">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">Baseline</span>
              </div>
              {/* Hover Tooltip */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-black text-xs font-bold px-3 py-1 pointer-events-none">
                {formatCurrency(metrics.currentMonthly)}
              </div>
            </div>

            {/* Projected Architecture Bar */}
            <div className="relative w-1/3 flex flex-col items-center justify-end h-full z-10 group">
              <div className="w-full bg-white border border-white/50 transition-all duration-1000 ease-out relative shadow-[0_0_20px_rgba(255,255,255,0.1)]" style={{ height: `${projectedHeight}%` }}>
                {/* Uplift Highlight Area */}
                <div className="absolute top-0 left-0 w-full bg-green-500/20 transition-all duration-1000 ease-out border-b border-green-500" style={{ height: `${((projectedHeight - currentHeight) / projectedHeight) * 100}%` }}></div>
              </div>
              <div className="absolute -bottom-8 text-center w-full">
                <span className="text-[10px] uppercase tracking-widest text-white">Projected</span>
              </div>
              {/* Hover Tooltip */}
              <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-green-500 text-white text-xs font-bold px-3 py-1 pointer-events-none">
                {formatCurrency(metrics.newMonthly)}
              </div>
            </div>
          </div>

          {/* 5. Projected Yield Metrics */}
          <div className="bg-[#141414] border border-white/10 p-8 flex justify-between items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Monthly Revenue Delta</p>
              <div className="text-5xl font-light tracking-tighter text-green-400 transition-all duration-300">
                +{formatCurrency(metrics.monthlyUplift)}
              </div>
            </div>
            <TrendingUp size={48} className="text-white/10" strokeWidth={1} />
          </div>
        </div>

      </div>

      {/* 6. Compounded Annual Impact */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <h3 className="text-3xl text-white font-medium tracking-tight">Annualized<br/>Impact</h3>
            <p className="text-gray-400 font-light mt-4 text-sm max-w-sm leading-relaxed">
              When micro-optimizations are scaled across an entire fiscal year, the ROI of professional digital architecture becomes irrefutable.
            </p>
          </div>
          <div className="md:col-span-7 bg-white text-black p-12 flex flex-col justify-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Projected 12-Month Yield</p>
            <div className="text-6xl md:text-[6rem] font-semibold tracking-tighter leading-none mb-6">
              +{formatCurrency(metrics.annualUplift)}
            </div>
            <p className="text-sm font-medium text-gray-600 border-t border-gray-200 pt-6">
              Calculated based on sustained traffic of {formatNumber(traffic)} and a {targetUplift.toFixed(1)}% absolute conversion increase.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Core Optimization Vectors */}
      <section className="py-32 bg-[#141414] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
            <h2 className="text-3xl font-medium text-white tracking-tight">Optimization Vectors</h2>
            <p className="text-gray-400 font-light text-sm max-w-md">
              How do we actually achieve a {targetUplift.toFixed(1)}% increase? By addressing the three foundational pillars of digital architecture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 border border-white/10 hover:border-white/30 hover:bg-[#1a1a1a] transition-all duration-300">
              <Zap size={32} className="text-white/40 mb-8" strokeWidth={1} />
              <h4 className="text-xl font-medium text-white mb-4">Latency Reduction</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Migrating to edge-compute frameworks (Next.js) and optimizing database queries reduces Time to Interactive (TTI), directly preventing user bounce.</p>
            </div>
            <div className="p-10 border border-white/10 hover:border-white/30 hover:bg-[#1a1a1a] transition-all duration-300">
              <Layers size={32} className="text-white/40 mb-8" strokeWidth={1} />
              <h4 className="text-xl font-medium text-white mb-4">Frictionless UI/UX</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Re-engineering checkout flows and lead-capture forms to remove cognitive load. Fewer clicks and clear visual hierarchy equal higher completion rates.</p>
            </div>
            <div className="p-10 border border-white/10 hover:border-white/30 hover:bg-[#1a1a1a] transition-all duration-300">
              <ShieldCheck size={32} className="text-white/40 mb-8" strokeWidth={1} />
              <h4 className="text-xl font-medium text-white mb-4">Zero-Trust Integrity</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">Implementing strict CSP headers, visible SSL integrity, and secure authentication flows instills subconscious trust in high-value enterprise buyers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. The Cost of Inaction */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6 text-gray-500">
              <AlertCircle size={24} strokeWidth={1.5} />
              <h2 className="text-3xl font-semibold text-white tracking-tight">The Cost of Inaction</h2>
            </div>
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
              Delaying architectural upgrades doesn't save money; it continuously hemorrhages potential revenue to faster, more secure competitors.
            </p>
          </div>
          <div className="md:col-span-7 bg-[#0d0d0d] border border-white/10 p-10 flex flex-col justify-center items-center text-center">
             <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500 mb-4">Revenue Lost (6 Month Delay)</p>
             <div className="text-5xl md:text-7xl font-light tracking-tighter text-white transition-all duration-300">
                -{formatCurrency(metrics.costOfInaction)}
             </div>
          </div>
        </div>
      </section>

      {/* 9. Performance vs. Security & 10. Enterprise Use Case */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-white/10">
        <div>
           <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
             <Clock size={20} className="text-white/40" strokeWidth={1.5} /> Performance vs. Security
           </h3>
           <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
             Historically, adding security (WAFs, deep cryptography) slowed systems down. Modern architecture solves this via edge-networking.
           </p>
           <ul className="space-y-4 border-l border-white/10 pl-6">
             <li className="text-gray-300 text-sm font-light">Authentication executed at the edge (Zero-latency).</li>
             <li className="text-gray-300 text-sm font-light">Static assets cached globally via Anycast routing.</li>
             <li className="text-gray-300 text-sm font-light">Database read-replicas distributed geographically.</li>
           </ul>
        </div>
        <div>
           <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
             <DollarSign size={20} className="text-white/40" strokeWidth={1.5} /> Enterprise Execution
           </h3>
           <div className="border border-white/10 p-8 bg-[#141414]">
             <h4 className="text-lg font-medium text-white mb-2">Vanguard Portal Refactor</h4>
             <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-6">Case Study Reference</p>
             <p className="text-sm font-light text-gray-400 leading-relaxed mb-6">
               By migrating a legacy dashboard to React/Next.js and optimizing payload delivery, we reduced TTI by 2.1 seconds, resulting in a 14% uplift in user retention.
             </p>
             <button onClick={() => navigate('projects')} className="text-xs font-semibold uppercase tracking-widest text-white hover:text-gray-300 transition-colors flex items-center gap-2">
               View Case Study <ArrowRight size={14} />
             </button>
           </div>
        </div>
      </section>

      {/* 11. Final Minimalist CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Ready to capture<br />
            this revenue?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            Stop losing conversions to slow infrastructure. Let's engineer a solution that maximizes your digital yield.
          </p>
        </div>
        <button onClick={() => navigate('book-call')} className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shrink-0 flex items-center gap-3">
          Book Architectural Briefing <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default RoiCalculator;
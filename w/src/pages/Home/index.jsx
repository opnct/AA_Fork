import React from 'react';
import { 
  ArrowRight, Globe, Shield, Check, Zap, 
  Terminal, Activity, Maximize, Smartphone, 
  Code2, Briefcase, MessageSquare
} from 'lucide-react';

const Home = ({ navigate }) => {
  return (
    <div className="animate-in fade-in duration-700 pt-20 min-h-screen bg-black text-white font-sans selection:bg-uber-blue selection:text-white overflow-hidden">
      
      {/* 1. Hero Section: Display Typography + Topo BG */}
      <div className="relative w-full py-12 lg:py-24 border-b border-white/5 bg-topo">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-uber-blue/10 border border-uber-blue/20 rounded-sm mb-8">
            <div className="w-2 h-2 bg-uber-blue rounded-full animate-pulse"></div>
            <span className="text-uber-blue text-[10px] font-bold uppercase tracking-[0.2em]">System Online: Pune, IN</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter leading-[0.85] mb-8">
            BUILD.<br />SECURE.<br /><span className="text-uber-blue">GROW.</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium leading-relaxed mb-12">
            Multi-disciplinary digital infrastructure. High-quality development without delay. Transform your vision into a scalable reality.
          </p>
          <div className="flex flex-wrap gap-4">
            <button onClick={() => navigate('contact')} className="group px-8 py-4 bg-uber-blue text-white font-bold uppercase text-sm tracking-widest flex items-center gap-3 hover:bg-white hover:text-black transition-all">
              Initiate Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => navigate('projects')} className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase text-sm tracking-widest hover:bg-zinc-800 transition-all">
              View Directory
            </button>
          </div>
        </div>
      </div>

      {/* 2. Bento Box Metrics Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
        
        {/* Metric 1 */}
        <div className="md:col-span-2 bento-card p-8 flex flex-col justify-between h-64">
          <Globe className="text-uber-blue mb-4" size={32} />
          <div>
            <h3 className="text-5xl font-extrabold mb-1">50+</h3>
            <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Global Web Deployments</p>
          </div>
        </div>

        {/* Metric 2 */}
        <div className="md:col-span-2 bento-card p-8 flex flex-col justify-between h-64 bg-zinc-900/50">
          <Shield className="text-red-500 mb-4" size={32} />
          <div>
            <h3 className="text-5xl font-extrabold mb-1">200+</h3>
            <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Vulnerabilities Patched</p>
          </div>
        </div>

        {/* Metric 3 (Growth) */}
        <div className="md:col-span-2 lg:col-span-2 bento-card p-8 flex flex-col justify-between h-64 border-uber-blue/30">
          <Zap className="text-yellow-400 mb-4" size={32} />
          <div>
            <h3 className="text-5xl font-extrabold mb-1">10X</h3>
            <p className="text-zinc-500 font-bold uppercase text-xs tracking-widest">Business Growth Metrics</p>
          </div>
        </div>

        {/* 3. Tech Stack Panel */}
        <div className="md:col-span-4 lg:col-span-3 bento-card p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
            <Code2 size={120} />
          </div>
          <h4 className="text-uber-blue font-bold uppercase text-xs tracking-[0.3em] mb-6">Core Stack</h4>
          <div className="grid grid-cols-3 gap-y-8 gap-x-4">
            {['React', 'Node.js', 'Firebase', 'PostgreSQL', 'Tailwind', 'Python'].map(tech => (
              <div key={tech} className="text-sm font-bold border-l-2 border-zinc-800 pl-3 py-1">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* 4. Interactive Call Status Card */}
        <div className="md:col-span-2 lg:col-span-3 bento-card p-8 bg-zinc-900 flex flex-col justify-center items-center text-center">
          <Activity className="text-uber-blue mb-4 animate-pulse" size={48} />
          <h3 className="text-2xl font-extrabold mb-2 uppercase tracking-tighter">Availability</h3>
          <p className="text-zinc-400 mb-6 text-sm">Open for high-priority contract roles and digital growth consulting.</p>
          <button onClick={() => navigate('book-call')} className="w-full py-3 border border-white/20 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Schedule Briefing
          </button>
        </div>

        {/* 5. Pricing / DM Bento Card (Safety Blue Accent) */}
        <div className="md:col-span-4 lg:col-span-4 bento-card p-8 bg-uber-blue text-white overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-4xl font-extrabold tracking-tighter mb-4 uppercase">Affordable pricing available</h3>
            <p className="text-lg font-bold mb-8 opacity-90 uppercase">DM karo Ya WhatsApp karo</p>
            <div className="flex gap-4">
              <a href="https://wa.me/918329000424" target="_blank" rel="noreferrer" className="px-6 py-3 bg-black text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
                WhatsApp <ArrowRight size={14}/>
              </a>
              <button onClick={() => navigate('pricing')} className="px-6 py-3 border border-white text-white text-xs font-black uppercase tracking-widest">
                Check Packages
              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 opacity-20 rotate-12">
            <MessageSquare size={200} />
          </div>
        </div>

        {/* 6. Security & Audit Card */}
        <div className="md:col-span-2 lg:col-span-2 bento-card p-8 border-red-900/50 bg-zinc-950">
          <Shield className="text-red-600 mb-4" size={24} />
          <h4 className="font-bold uppercase text-[10px] tracking-widest text-zinc-500 mb-2">Audit Status</h4>
          <p className="text-lg font-bold leading-tight">Vulnerability assessment available for Enterprise apps.</p>
          <div className="mt-6 flex items-center gap-2 text-red-500 font-black text-[10px] uppercase">
             <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping"></div> Active Scanning
          </div>
        </div>

        {/* 7. Connectivity Map Section */}
        <div className="md:col-span-3 lg:col-span-3 bento-card p-8 h-80 relative overflow-hidden bg-topo">
          <h4 className="font-bold uppercase text-[10px] tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
            <Maximize size={12}/> Global Network
          </h4>
          <div className="absolute inset-0 flex items-center justify-center opacity-40">
             {/* Simple visual map lines */}
             <div className="w-full h-px bg-uber-blue absolute rotate-45"></div>
             <div className="w-full h-px bg-uber-blue absolute -rotate-45"></div>
             <div className="w-32 h-32 border border-uber-blue/30 rounded-full absolute"></div>
          </div>
          <p className="absolute bottom-8 left-8 text-xs font-bold uppercase tracking-widest text-zinc-300">
            India → UAE → USA → UK
          </p>
        </div>

        {/* 8. Mobile First Development */}
        <div className="md:col-span-3 lg:col-span-3 bento-card p-8 h-80 bg-zinc-900 flex flex-col justify-end">
          <Smartphone className="text-uber-blue mb-4" size={32} />
          <h3 className="text-3xl font-extrabold uppercase tracking-tighter mb-2">Apps.</h3>
          <p className="text-zinc-500 text-sm font-medium">Native & Hybrid mobile solutions optimized for high retention.</p>
        </div>

        {/* 9. Final Terminal Section */}
        <div className="col-span-full bento-card p-6 bg-black border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex items-center gap-4">
              <Terminal className="text-uber-blue" size={20} />
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                root@ammisetty:~# <span className="text-white">transform --vision --reality</span>
              </p>
           </div>
           <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-zinc-500">
              <span className="flex items-center gap-2"><Check size={12} className="text-uber-blue"/> Reliable</span>
              <span className="flex items-center gap-2"><Check size={12} className="text-uber-blue"/> Scalable</span>
              <span className="flex items-center gap-2"><Check size={12} className="text-uber-blue"/> Bug-free</span>
           </div>
        </div>

      </div>

      {/* Quick WhatsApp Footer Bar */}
      <div className="fixed bottom-0 left-0 w-full py-3 bg-uber-blue text-white text-center text-[10px] font-black uppercase tracking-[0.4em] z-[60]">
        Call / WhatsApp: +91 83290 00424
      </div>

    </div>
  );
};

export default Home;
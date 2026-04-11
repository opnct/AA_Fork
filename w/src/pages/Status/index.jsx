import React, { useState, useEffect } from 'react';
import { 
  Server, Activity, ShieldCheck, Globe, 
  Clock, AlertCircle, CheckCircle2, Bell, 
  Wifi, Database, Lock, ArrowRight 
} from 'lucide-react';

const Status = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Real-time telemetry states
  const [latency, setLatency] = useState(42);
  const [currentTime, setCurrentTime] = useState('');
  const [trafficData, setTrafficData] = useState(Array.from({length: 20}, () => Math.floor(Math.random() * 40) + 20));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' }) + ' UTC');
    }, 1000);

    const telemetryInterval = setInterval(() => {
      // Simulate live network jitter
      setLatency(Math.floor(Math.random() * (65 - 35 + 1) + 35));
      // Simulate live traffic graph movement
      setTrafficData(prev => {
        const next = [...prev.slice(1), Math.floor(Math.random() * 60) + 15];
        return next;
      });
    }, 2000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(telemetryInterval);
    };
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
      e.target.reset();
    }, 1500);
  };

  const endpoints = [
    { name: 'Core REST API (v4)', region: 'eu-central-1', status: 'Operational', ping: latency - 5 },
    { name: 'Authentication (OAuth)', region: 'global-edge', status: 'Operational', ping: latency + 12 },
    { name: 'PostgreSQL Clusters', region: 'us-east-1', status: 'Operational', ping: latency + 40 },
    { name: 'Storage / CDN', region: 'global-edge', status: 'Operational', ping: 12 },
    { name: 'WebSocket Telemetry', region: 'ap-south-1', status: 'Operational', ping: latency }
  ];

  const incidents = [
    { date: 'Oct 02, 2026', title: 'Degraded API Performance', status: 'Resolved', duration: '45m', desc: 'Identified a memory leak in the core analytics processing container. Hotfix deployed and memory limits scaled.' },
    { date: 'Sep 14, 2026', title: 'Edge Routing Latency', status: 'Resolved', duration: '1h 20m', desc: 'Upstream CDN provider experienced routing anomalies affecting EU endpoints. Traffic successfully rerouted.' },
    { date: 'Aug 28, 2026', title: 'Database Failover Protocol', status: 'Resolved', duration: '12m', desc: 'Automated failover triggered due to primary instance hardware fault. Zero data loss confirmed.' }
  ];

  // Convert traffic data array to SVG polyline points (Scale: X=0-800, Y=0-200)
  const maxDataPts = 20;
  const xStep = 800 / (maxDataPts - 1);
  const polylinePoints = trafficData.map((val, idx) => `${idx * xStep},${200 - val * 2}`).join(' ');

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-20">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Abstract Infrastructure SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
          <svg viewBox="0 0 1000 500" className="w-[120%] h-[120%] animate-[pulse_6s_ease-in-out_infinite]">
            <rect x="200" y="100" width="600" height="300" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 8"/>
            <line x1="200" y1="250" x2="800" y2="250" stroke="#ffffff" strokeWidth="0.25"/>
            <line x1="500" y1="100" x2="500" y2="400" stroke="#ffffff" strokeWidth="0.25"/>
            <circle cx="500" cy="250" r="100" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.4" className="animate-[spin_20s_linear_infinite]"/>
            <circle cx="500" cy="250" r="150" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="10 20" className="animate-[spin_40s_linear_infinite_reverse]"/>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Real-Time Telemetry</p>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
              System<br />
              <span className="text-gray-500">Status.</span>
            </h1>
            <p className="max-w-lg text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Live observability and historical uptime metrics for all active infrastructure layers.
            </p>
          </div>
          <div className="text-left lg:text-right">
             <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2 font-medium">System Time</p>
             <p className="text-xl md:text-3xl font-light text-white font-mono">{currentTime || 'Syncing...'}</p>
          </div>
        </div>
      </section>

      {/* 2. Global System Status Banner */}
      <section className="border-b border-white/10 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-6">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-20"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
            </div>
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white">All Systems Operational</h2>
          </div>
          <div className="px-4 py-2 border border-white/10 rounded-full text-xs font-medium text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <CheckCircle2 size={14} className="text-green-500" /> Inspected 2 mins ago
          </div>
        </div>
      </section>

      {/* 3. Core Telemetry (Facts & Figures) */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">Core<br/>Telemetry</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl md:text-7xl font-light text-white mb-2 tracking-tighter flex items-end">
                {latency}<span className="text-2xl text-gray-500 mb-2 ml-1">ms</span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">Global Avg Latency</p>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-light text-white mb-2 tracking-tighter flex items-end">
                99.99<span className="text-2xl text-gray-500 mb-2 ml-1">%</span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">90-Day Uptime SLA</p>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-light text-white mb-2 tracking-tighter flex items-end">
                24<span className="text-2xl text-gray-500 mb-2 ml-1">k</span>
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">Req / Minute</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Real-Time Traffic Visualization */}
      <section className="py-24 bg-[#141414] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Network Throughput</h3>
              <p className="text-sm font-light text-gray-400">Live requests per second across all origin edges.</p>
            </div>
            <Activity size={24} className="text-gray-500" strokeWidth={1.5} />
          </div>
          
          {/* Custom React-State Driven SVG Line Chart */}
          <div className="w-full aspect-[21/9] max-h-[300px] border border-white/10 bg-[#0d0d0d] relative p-0 overflow-hidden">
             {/* Chart Grid */}
             <div className="absolute inset-0">
               <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full opacity-20">
                 <line x1="0" y1="50" x2="800" y2="50" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 4" />
                 <line x1="0" y1="100" x2="800" y2="100" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 4" />
                 <line x1="0" y1="150" x2="800" y2="150" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 4" />
               </svg>
             </div>
             
             {/* Dynamic Line & Area */}
             <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="w-full h-full relative z-10 overflow-visible">
               <defs>
                 <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                   <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
                   <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                 </linearGradient>
               </defs>
               {/* Area Fill */}
               <polygon 
                 points={`0,200 ${polylinePoints} 800,200`} 
                 fill="url(#chartGradient)" 
                 className="transition-all duration-1000 ease-linear"
               />
               {/* Line */}
               <polyline 
                 points={polylinePoints} 
                 fill="none" 
                 stroke="#ffffff" 
                 strokeWidth="2" 
                 className="transition-all duration-1000 ease-linear"
               />
               {/* Current Pulse Dot at end of line */}
               <circle 
                 cx="800" 
                 cy={200 - trafficData[trafficData.length - 1] * 2} 
                 r="4" 
                 fill="#ffffff" 
                 className="transition-all duration-1000 ease-linear shadow-[0_0_10px_#fff]"
               />
             </svg>
          </div>
        </div>
      </section>

      {/* 5. Network Endpoints Matrix */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="flex items-center gap-3 mb-12">
          <Server size={20} className="text-gray-500" strokeWidth={1.5} />
          <h2 className="text-2xl font-semibold text-white tracking-tight">Active Endpoints</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {endpoints.map((ep, idx) => (
            <div key={idx} className="p-6 border border-white/10 bg-[#141414] flex flex-col sm:flex-row justify-between sm:items-center gap-6 hover:border-white/30 transition-colors">
              <div>
                <h4 className="text-lg font-medium text-white mb-1 tracking-tight">{ep.name}</h4>
                <p className="text-xs font-mono text-gray-500">{ep.region}</p>
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-8 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-light text-gray-300">{ep.status}</span>
                </div>
                <span className="text-sm font-mono text-white text-right w-16">{ep.ping}ms</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Global Edge Nodes & 7. Security Status */}
      <section className="py-24 bg-[#141414] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 xl:grid-cols-12 gap-16 items-center">
          
          <div className="xl:col-span-5 space-y-16">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight flex items-center gap-3">
                <Globe size={20} className="text-gray-500" strokeWidth={1.5} /> Edge Routing
              </h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Traffic is currently being served via optimal edge nodes globally. Anycast routing is active and bypassing regional ISP degradation.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight flex items-center gap-3">
                <ShieldCheck size={20} className="text-gray-500" strokeWidth={1.5} /> Security Integrity
              </h3>
              <div className="space-y-4 border-l border-white/10 pl-6">
                <div>
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <Lock size={14} className="text-green-500" /> TLS v1.3 Certificates
                  </p>
                  <p className="text-gray-500 text-xs font-light mt-1">Valid. Auto-renew enabled.</p>
                </div>
                <div>
                  <p className="text-white text-sm font-medium flex items-center gap-2">
                    <ShieldCheck size={14} className="text-green-500" /> Web Application Firewall (WAF)
                  </p>
                  <p className="text-gray-500 text-xs font-light mt-1">Active. 0 threats blocked in last hour.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-7 flex justify-center">
            {/* Custom Geometric World Map SVG */}
            <div className="w-full max-w-2xl aspect-[2/1] relative flex items-center justify-center bg-[#0d0d0d] border border-white/10 p-6">
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-60">
                {/* Abstract Continents Map */}
                <path d="M150 150 Q200 50 400 120 T600 100 T750 200 M200 250 Q400 350 500 250 T700 300" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="2 6"/>
                {/* Network Arcs */}
                <path d="M600 120 Q400 50 200 150" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                <path d="M600 120 Q500 150 400 120" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                
                {/* Active Ping Nodes */}
                <circle cx="600" cy="120" r="4" fill="#ffffff" />
                <circle cx="600" cy="120" r="16" fill="none" stroke="#ffffff" strokeWidth="0.5" className="animate-ping" style={{animationDuration: '2s'}}/>
                
                <circle cx="200" cy="150" r="4" fill="#ffffff" opacity="0.8"/>
                <circle cx="200" cy="150" r="12" fill="none" stroke="#ffffff" strokeWidth="0.5" className="animate-ping" style={{animationDuration: '3s'}}/>
                
                <circle cx="400" cy="120" r="4" fill="#ffffff" opacity="0.8"/>
                
                <circle cx="700" cy="300" r="2" fill="rgba(255,255,255,0.4)" />
                <circle cx="150" cy="150" r="2" fill="rgba(255,255,255,0.4)" />
              </svg>
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <Wifi size={14} className="text-green-500" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Global Anycast</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Incident History Timeline */}
      <section className="py-24 max-w-4xl mx-auto px-6 border-b border-white/10">
        <div className="flex items-center gap-3 mb-16 justify-center">
          <AlertCircle size={24} className="text-gray-500" strokeWidth={1.5} />
          <h2 className="text-3xl font-semibold text-white tracking-tight">Incident History</h2>
        </div>
        <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[11px] md:before:ml-[15px] before:h-full before:w-px before:bg-white/10">
          {incidents.map((inc, i) => (
            <div key={i} className="relative flex items-start pl-10 md:pl-12 pb-12 last:pb-0 group">
              <div className="absolute left-0 top-1.5 flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-[#0d0d0d] bg-gray-700"></div>
              <div className="w-full">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h4 className="text-lg font-medium text-white tracking-tight">{inc.title}</h4>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] px-3 py-1 bg-white/5 text-gray-400 rounded-full border border-white/10 shrink-0">
                    {inc.status}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-4 text-xs font-mono text-gray-500">
                  <span>{inc.date}</span>
                  <span>•</span>
                  <span>Duration: {inc.duration}</span>
                </div>
                <p className="text-sm font-light text-gray-400 leading-relaxed max-w-2xl">{inc.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Scheduled Maintenance */}
      <section className="py-24 bg-[#141414] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-medium text-white tracking-tight">Scheduled Maintenance</h3>
            <Clock size={20} className="text-gray-500" strokeWidth={1.5} />
          </div>
          <div className="border border-white/10 p-8 flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-yellow-500 uppercase mb-3">Upcoming Window</p>
              <h4 className="text-lg font-medium text-white mb-2">Database Cluster Scaling</h4>
              <p className="text-sm font-light text-gray-400 mb-4 md:mb-0 max-w-md">Routine vertical scaling of primary read-replicas. Up to 5 minutes of read-only state expected.</p>
            </div>
            <div className="text-left md:text-right shrink-0 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8">
              <p className="text-xs text-gray-500 mb-1">Scheduled For</p>
              <p className="text-sm font-mono text-white mb-2">Nov 14, 02:00 UTC</p>
              <p className="text-xs text-gray-500 mb-1">Expected Duration</p>
              <p className="text-sm font-mono text-white">45 Minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Status Subscription CTA */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center">
        <Bell size={40} className="mx-auto mb-8 text-white/30" strokeWidth={1} />
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">Stay Informed</h2>
        <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg max-w-2xl mx-auto">
          Subscribe to receive real-time notifications via email whenever an incident is created, updated, or resolved.
        </p>
        
        <div className="max-w-xl mx-auto">
          {subscribed ? (
            <div className="p-6 border border-white/10 bg-[#141414] animate-in zoom-in duration-500">
              <CheckCircle2 size={32} className="mx-auto mb-4 text-white" strokeWidth={1} />
              <p className="text-white font-medium">Subscription Confirmed</p>
              <p className="text-gray-400 text-sm mt-2">You will now receive updates on infrastructure status.</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow relative">
                <input 
                  type="email" 
                  required 
                  disabled={isSubmitting}
                  className="w-full bg-[#141414] border border-white/20 py-4 px-6 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600 disabled:opacity-50" 
                  placeholder="Enter corporate email..." 
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="px-8 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-2 shrink-0"
              >
                {isSubmitting ? <><Activity size={16} className="animate-spin"/> Processing</> : 'Subscribe to Updates'}
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};

export default Status;
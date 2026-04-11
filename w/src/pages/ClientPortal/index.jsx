import React, { useState, useEffect } from 'react';
import { 
  Users, CheckCircle, ArrowUpRight, Lock, 
  Terminal, ShieldCheck, Activity, Cloud, 
  CreditCard, Clock, FileText, Plus, ExternalLink
} from 'lucide-react';

const ClientPortal = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [auth, setAuth] = useState(false);
  const [pass, setPass] = useState('');
  const [authError, setAuthError] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' }) + ' UTC');
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticating(true);
    setAuthError(false);

    // High-end simulated delay for authentication UX
    setTimeout(() => {
      if (pass === 'client2026') {
        setAuth(true);
      } else {
        setAuthError(true);
      }
      setIsAuthenticating(false);
    }, 1200);
  };

  // --- 1. Minimalist Authentication View ---
  if (!auth) {
    return (
      <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black flex items-center justify-center relative overflow-hidden">
        {/* Animated Background SVG */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
          <svg viewBox="0 0 1000 1000" className="w-[150%] h-[150%] animate-[spin_120s_linear_infinite]">
            <circle cx="500" cy="500" r="400" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 10" />
            <circle cx="500" cy="500" r="300" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.3" />
            <circle cx="500" cy="500" r="200" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="10 30" />
            <rect x="499" y="100" width="2" height="800" fill="#ffffff" opacity="0.1" />
            <rect x="100" y="499" width="800" height="2" fill="#ffffff" opacity="0.1" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-md p-8 md:p-12 bg-[#141414]/90 backdrop-blur-md border border-white/10 rounded-sm animate-in zoom-in-95 duration-700">
          <div className="text-center mb-10">
            <Lock size={32} className="mx-auto mb-6 text-white/40" strokeWidth={1} />
            <h2 className="text-2xl font-medium tracking-tight text-white mb-2">Secure Portal</h2>
            <p className="text-xs text-gray-500 uppercase tracking-[0.2em]">Authorized Access Only</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-8">
            <div className="flex flex-col relative group">
              <input 
                type="password" 
                required 
                id="accessCode" 
                value={pass}
                onChange={e => { setPass(e.target.value); setAuthError(false); }}
                className={`w-full bg-transparent border-b pb-3 text-center text-lg text-white focus:outline-none transition-colors peer placeholder-transparent tracking-[0.5em] font-mono
                  ${authError ? 'border-red-500/50 focus:border-red-500' : 'border-white/20 focus:border-white'}`} 
                placeholder="Access Code" 
                disabled={isAuthenticating}
              />
              <label htmlFor="accessCode" className={`absolute left-1/2 -translate-x-1/2 -top-5 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs font-medium cursor-text
                ${authError ? 'text-red-500' : 'text-gray-500 peer-focus:text-white'}`}>
                {authError ? 'Invalid Credentials' : 'Enter Access Code'}
              </label>
            </div>

            <button 
              type="submit" 
              disabled={isAuthenticating || !pass}
              className="w-full py-4 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
            >
              {isAuthenticating ? <><Activity size={16} className="animate-spin"/> Decrypting...</> : 'Authenticate'}
            </button>
          </form>
          
          <p className="mt-8 text-center text-[10px] text-gray-600 uppercase tracking-widest">
            Astro FinTech Enterprise Hub
          </p>
        </div>
      </div>
    );
  }

  // --- Authenticated Dashboard View ---
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 2. Executive Dashboard Header */}
        <section className="border-b border-white/10 pb-12 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <p className="text-gray-500 text-xs mb-3 tracking-[0.3em] uppercase font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> Encrypted Session
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white leading-tight">
                Astro FinTech<br/>Operations Hub.
              </h1>
            </div>
            <div className="text-left md:text-right">
              <p className="text-sm font-light text-gray-400 mb-1">Project ID: <span className="text-white font-mono">AST-2026-V4</span></p>
              <p className="text-sm font-light text-gray-400">System Time: <span className="text-white font-mono">{currentTime}</span></p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* 3. Project Health Visualization (Col-span-8) */}
          <section className="md:col-span-8 bg-[#141414] border border-white/10 p-8 flex flex-col md:flex-row items-center gap-12 group hover:border-white/30 transition-colors">
            <div className="relative w-48 h-48 shrink-0">
              {/* High-End SVG Donut Chart */}
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6" />
                <circle cx="50" cy="50" r="45" fill="none" stroke="#ffffff" strokeWidth="6" strokeDasharray="283" strokeDashoffset="113" className="transition-all duration-1000 ease-out" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center rotate-90">
                <span className="text-4xl font-light tracking-tighter text-white">60<span className="text-xl">%</span></span>
                <span className="text-[8px] uppercase tracking-widest text-gray-500">Complete</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-3 tracking-tight">Phase 02: Core Engineering</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                Database schema deployed. API endpoints for user authentication and transaction processing are currently undergoing stress testing. Next milestone is payment gateway integration.
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Estimated Delivery</p>
                  <p className="text-sm font-medium text-white">Oct 14, 2026</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Overall Status</p>
                  <p className="text-sm font-medium text-green-400">On Schedule</p>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Facts & Figures / Telemetry (Col-span-4) */}
          <section className="md:col-span-4 grid grid-cols-1 gap-8">
            <div className="bg-[#141414] border border-white/10 p-8 flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-light tracking-tighter text-white mb-2">14</div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Days Active</p>
            </div>
            <div className="bg-[#141414] border border-white/10 p-8 flex flex-col justify-center items-center text-center">
              <div className="text-5xl font-light tracking-tighter text-white mb-2">284</div>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest">Git Commits</p>
            </div>
          </section>

          {/* 5. Strategic Milestones Timeline (Col-span-6) */}
          <section className="md:col-span-6 bg-[#141414] border border-white/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-medium text-white tracking-tight">Architectural Roadmap</h3>
              <Clock size={16} className="text-gray-500" />
            </div>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[9px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-white/10">
              {[
                { status: 'done', title: 'Discovery & UI/UX', date: 'Sep 10' },
                { status: 'active', title: 'Backend Engineering', date: 'Current' },
                { status: 'pending', title: 'Frontend Integration', date: 'Oct 05' },
                { status: 'pending', title: 'Security Audit & Launch', date: 'Oct 14' }
              ].map((phase, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-5 h-5 rounded-full border-4 border-[#141414] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow
                    ${phase.status === 'done' ? 'bg-white' : phase.status === 'active' ? 'bg-blue-500 animate-pulse' : 'bg-gray-700'}`}>
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-sm border border-white/5 bg-[#0d0d0d] shadow">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`text-sm font-medium ${phase.status === 'pending' ? 'text-gray-500' : 'text-white'}`}>{phase.title}</h4>
                    </div>
                    <time className="text-[10px] uppercase tracking-widest text-gray-500">{phase.date}</time>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. Active Engineering Sprint (Col-span-6) */}
          <section className="md:col-span-6 bg-[#141414] border border-white/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-medium text-white tracking-tight">Sprint Backlog</h3>
              <Terminal size={16} className="text-gray-500" />
            </div>
            <ul className="space-y-4">
              {[
                { task: 'Implement JWT Auth flow', state: 'done' },
                { task: 'Design PostgreSQL schemas', state: 'done' },
                { task: 'Stripe Payment Gateway Integration', state: 'active' },
                { task: 'WebRTC real-time data streaming', state: 'pending' },
                { task: 'End-to-End Cypress Testing', state: 'pending' }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                  {item.state === 'done' && <CheckCircle size={16} className="text-white shrink-0" />}
                  {item.state === 'active' && <div className="w-4 h-4 rounded-full border border-blue-500 flex items-center justify-center shrink-0"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div></div>}
                  {item.state === 'pending' && <div className="w-4 h-4 rounded-full border border-gray-600 shrink-0"></div>}
                  
                  <span className={`text-sm font-light ${item.state === 'pending' ? 'text-gray-600' : 'text-gray-300'}`}>
                    {item.task}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* 7. Infrastructure Security Logs (Col-span-12) */}
          <section className="md:col-span-12 bg-[#0d0d0d] border border-white/10 p-8 font-mono">
            <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
              <h3 className="text-sm font-medium text-white tracking-widest uppercase">Infrastructure Telemetry</h3>
              <ShieldCheck size={16} className="text-gray-500" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-3 space-y-2 text-xs text-gray-500">
                {/* Fixed JSX Syntax Here */}
                <p>{'>'}<span className="text-gray-400"> [OK]</span> Server provisioning complete on AWS eu-central-1.</p>
                <p>{'>'}<span className="text-gray-400"> [OK]</span> SSL/TLS v1.3 certificates generated and attached.</p>
                <p>{'>'}<span className="text-white"> [ACTIVE]</span> Continuous CI/CD pipeline monitoring branch 'main'.</p>
                <p>{'>'}<span className="text-gray-400"> [OK]</span> Nightly vulnerability scan: 0 critical issues found.</p>
                <p className="animate-pulse">_</p>
              </div>
              <div className="md:col-span-1 border-l border-white/10 pl-8 flex flex-col justify-center">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-1">Environment</p>
                <p className="text-sm text-white mb-4">Staging (v0.8.4)</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-600 mb-1">Uptime</p>
                <p className="text-sm text-green-400">99.99%</p>
              </div>
            </div>
          </section>

          {/* 8. Financial Ledger (Col-span-7) */}
          <section className="md:col-span-7 bg-[#141414] border border-white/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-medium text-white tracking-tight">Financial Ledger</h3>
              <CreditCard size={16} className="text-gray-500" />
            </div>
            <div className="space-y-4">
              {[
                { id: 'INV-2026-001', date: 'Sep 01, 2026', amount: '₹1,50,000', status: 'Paid', note: 'Project Advance (50%)' },
                { id: 'INV-2026-002', date: 'Oct 15, 2026', amount: '₹1,50,000', status: 'Pending', note: 'Final Delivery (50%)' }
              ].map((inv) => (
                <div key={inv.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-[#0d0d0d] border border-white/5">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-sm font-medium text-white mb-1">{inv.note}</p>
                    <p className="text-xs font-light text-gray-500">{inv.id} • {inv.date}</p>
                  </div>
                  <div className="flex items-center justify-between sm:justify-end gap-6 sm:w-1/3">
                    <p className="text-lg font-light text-white">{inv.amount}</p>
                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${inv.status === 'Paid' ? 'bg-white text-black' : 'bg-gray-800 text-gray-400'}`}>
                      {inv.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Secure Asset Vault (Col-span-5) */}
          <section className="md:col-span-5 bg-[#141414] border border-white/10 p-8 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-medium text-white tracking-tight">Asset Vault</h3>
              <Cloud size={16} className="text-gray-500" />
            </div>
            <div className="flex-grow border border-dashed border-white/20 bg-[#0d0d0d] rounded-sm flex flex-col items-center justify-center p-8 hover:border-white/50 hover:bg-white/5 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Plus size={20} className="text-white" />
              </div>
              <p className="text-sm font-medium text-white mb-2">Upload Encrypted Assets</p>
              <p className="text-xs text-gray-500 font-light text-center">Drag and drop logos, copy, or SSH keys here. Max 50MB.</p>
            </div>
          </section>

          {/* 10. Executive Communications (Col-span-8) */}
          <section className="md:col-span-8 bg-[#141414] border border-white/10 p-8">
             <div className="flex items-center justify-between mb-8">
              <h3 className="text-lg font-medium text-white tracking-tight">Agency Communications</h3>
              <FileText size={16} className="text-gray-500" />
            </div>
            <div className="border-l border-white/10 pl-6 space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Sep 24, 2026 • Arun A.</p>
                <h4 className="text-sm font-medium text-white mb-2">Backend Architecture Finalized</h4>
                <p className="text-sm font-light text-gray-400 leading-relaxed">
                  The initial database clusters have been deployed successfully. We are moving forward with the Stripe integration module earlier than expected. Please review the updated staging environment when you have a moment.
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Sep 10, 2026 • Arun A.</p>
                <h4 className="text-sm font-medium text-white mb-2">Project Kickoff & Discovery</h4>
                <p className="text-sm font-light text-gray-400 leading-relaxed">
                  Welcome to your secure portal. All UI/UX wireframes have been approved. Engineering sprint 01 begins tomorrow.
                </p>
              </div>
            </div>
          </section>

          {/* 11. Logistics & Deployment (Col-span-4) */}
          <section className="md:col-span-4 grid grid-cols-1 gap-6">
             <a href="#" className="bg-[#141414] border border-white/10 p-8 hover:bg-white/5 transition-colors group flex flex-col justify-between h-full min-h-[160px]">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Live Environment</p>
                  <h4 className="text-lg font-medium text-white">Staging Server</h4>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-400 font-light group-hover:text-white transition-colors">astro.staging.aa.dev</span>
                  <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
             </a>
             <a href="#" className="bg-[#141414] border border-white/10 p-8 hover:bg-white/5 transition-colors group flex flex-col justify-between h-full min-h-[160px]">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Design Assets</p>
                  <h4 className="text-lg font-medium text-white">Figma Workspace</h4>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-400 font-light group-hover:text-white transition-colors">View Wireframes</span>
                  <ExternalLink size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>
             </a>
          </section>

          {/* 12. Priority Support Closure */}
          <section className="md:col-span-12 p-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 mt-8">
            <p className="text-xs font-light text-gray-500">Need immediate assistance or scope adjustments?</p>
            <button onClick={() => navigate('contact')} className="px-6 py-3 bg-white text-black text-xs font-medium uppercase tracking-widest hover:bg-gray-200 transition-colors">
              Contact Architect
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ClientPortal;
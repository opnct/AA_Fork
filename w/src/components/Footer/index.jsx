import React from 'react';
import { 
  Shield, Linkedin, Github, MessageCircle, 
  ArrowUpRight, Globe, Zap, Briefcase, 
  Target, Mail, Phone, ExternalLink
} from 'lucide-react';

const Footer = ({ navigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Full Stack Development', id: 'services' },
      { name: 'Cybersecurity Audits', id: 'services' },
      { name: 'Digital Growth Strategy', id: 'services' },
      { name: 'UI/UX Engineering', id: 'services' },
      { name: 'Cloud Infrastructure', id: 'services' },
    ],
    solutions: [
      { name: 'ROI Analysis', id: 'roi' },
      { name: 'Performance Metrics', id: 'scanner' },
      { name: 'Strategic Consulting', id: 'estimator' },
      { name: 'Client Case Studies', id: 'case-studies' },
      { name: 'Official FAQ', id: 'faq' },
    ]
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 px-6 lg:px-12 font-sans relative overflow-hidden print:hidden">
      
      {/* Background Topographic Decorative Pattern */}
      <div className="absolute inset-0 bg-topo opacity-25 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Main Business Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Column 1: Agency Brand & Mission */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h4 className="text-2xl font-extrabold text-white tracking-tighter uppercase mb-6">
                Arun <span className="text-uber-blue">/</span> Ammisetty
              </h4>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-medium">
                Premier digital agency specializing in high-performance web ecosystems and enterprise-grade security. We transform complex visions into scalable, market-ready realities.
              </p>
            </div>
            
            <div className="space-y-4">
              <a href="mailto:contact.aa@tuta.io" className="flex items-center gap-3 text-zinc-300 hover:text-uber-blue transition-colors group text-sm font-bold">
                <Mail size={16} className="text-uber-blue" /> contact.aa@tuta.io
              </a>
              <a href="tel:+918329000424" className="flex items-center gap-3 text-zinc-300 hover:text-uber-blue transition-colors group text-sm font-bold">
                <Phone size={16} className="text-uber-blue" /> +91 83290 00424
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-8 flex items-center gap-2">
              <Zap size={14} className="text-uber-blue" /> Services
            </h5>
            <ul className="space-y-4">
              {footerLinks.services.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => navigate(link.id)}
                    className="text-sm font-bold text-zinc-400 hover:text-white transition-colors flex items-center group text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Strategic Solutions */}
          <div className="lg:col-span-2">
            <h5 className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-8 flex items-center gap-2">
              <Target size={14} className="text-uber-blue" /> Solutions
            </h5>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => navigate(link.id)}
                    className="text-sm font-bold text-zinc-400 hover:text-white transition-colors flex items-center group text-left"
                  >
                    {link.name} <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Engagement */}
          <div className="lg:col-span-4 space-y-10">
            <div>
              <h5 className="text-[11px] font-black uppercase tracking-[0.25em] text-zinc-500 mb-6 flex items-center gap-2">
                <Globe size={14} className="text-uber-blue" /> Global Insights
              </h5>
              <p className="text-xs text-zinc-500 mb-4 font-bold">Subscribe to our executive digest for industry trends.</p>
              <div className="flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="business@company.com" 
                  className="bg-zinc-900 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-uber-blue transition-colors text-white font-bold"
                />
                <button className="bg-white text-black font-black uppercase text-[10px] tracking-widest py-3.5 hover:bg-uber-blue hover:text-white transition-all">
                  Join The Network
                </button>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-uber-blue hover:border-uber-blue transition-all bg-zinc-900/50">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-uber-blue hover:border-uber-blue transition-all bg-zinc-900/50">
                <Github size={20} />
              </a>
              <button onClick={() => navigate('guestbook')} className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-uber-blue hover:border-uber-blue transition-all bg-zinc-900/50">
                <MessageCircle size={20} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Corporate Disclosure & Compliance */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
            <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-zinc-400">
              <Shield size={14} className="text-uber-blue" /> Secured by Vanguard / Cyber
            </div>
            <button onClick={() => navigate('status')} className="text-[11px] font-black uppercase tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors flex items-center gap-2">
              <Briefcase size={14} /> Network Status: Operational
            </button>
            <button onClick={() => navigate('legal')} className="text-[11px] font-black uppercase tracking-widest text-zinc-600 hover:text-zinc-300 transition-colors">
              Legal & Compliance
            </button>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-[11px] font-black uppercase tracking-widest text-zinc-500">
              © {currentYear} Arun Ammisetty. Professional Digital Services.
            </p>
          </div>
        </div>

      </div>

      {/* Quick WhatsApp Footer Bar */}
      <div className="fixed bottom-0 left-0 w-full py-3 bg-uber-blue text-white text-center text-[10px] font-black uppercase tracking-[0.4em] z-[60]">
        Call / WhatsApp: +91 83290 00424
      </div>

    </footer>
  );
};

export default Footer;
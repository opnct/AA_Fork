import React from 'react';
import { 
  Github, Linkedin, Twitter, Mail, ArrowUpRight, 
  MapPin, Phone, ShieldCheck 
} from 'lucide-react';

const Footer = ({ navigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id) => {
    navigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0d0d0d] pt-32 pb-12 border-t border-white/10 font-sans text-[#f3f4f6] selection:bg-white selection:text-black print:hidden overflow-hidden">
      
      {/* 1. High-End SVG Background Illustration (Animated) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-[150%] h-[150%] max-w-none animate-[spin_180s_linear_infinite]">
          <circle cx="500" cy="500" r="450" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 12" />
          <circle cx="500" cy="500" r="350" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="100 20" />
          <circle cx="500" cy="500" r="250" fill="none" stroke="#ffffff" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="150" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 6" />
          <path d="M 500 50 L 500 950 M 50 500 L 950 500" stroke="#ffffff" strokeWidth="0.5" opacity="0.5" />
          <path d="M 181 181 L 819 819 M 181 819 L 819 181" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Section 2: Brand Identity & Direct Contact */}
          <div className="lg:col-span-4 pr-0 lg:pr-8 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-semibold text-white mb-6 tracking-tight">Arun Ammisetty</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light mb-10 max-w-sm">
                A full-stack web developer and security researcher crafting digital experiences that perform and protect. Based in Pune, serving enterprise clients globally.
              </p>
              
              <div className="space-y-4 mb-10">
                <a href="mailto:contact.aa@tuta.io" className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors text-sm font-light group">
                  <Mail size={16} className="text-gray-600 group-hover:text-white transition-colors" /> contact.aa@tuta.io
                </a>
                <p className="flex items-center gap-4 text-gray-400 text-sm font-light group cursor-default">
                  <Phone size={16} className="text-gray-600 group-hover:text-white transition-colors" /> +91 83290 00424
                </p>
                <p className="flex items-center gap-4 text-gray-400 text-sm font-light group cursor-default">
                  <MapPin size={16} className="text-gray-600 group-hover:text-white transition-colors" /> Tech Park Hub, Pune, India
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-6 text-gray-500">
              <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="Twitter"><Twitter size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="GitHub"><Github size={20} strokeWidth={1.5} /></a>
              <a href="#" className="hover:text-white hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn"><Linkedin size={20} strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Section 3: Capabilities Sitemap */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold mb-8 uppercase tracking-[0.2em]">Capabilities</h4>
            <ul className="space-y-4 flex flex-col">
              {['Front-End Dev', 'Back-End Arch', 'UI/UX Design', 'Security Audits', 'Performance SEO'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleNavClick('services')}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm font-light text-left"
                  >
                    {item} 
                    <ArrowUpRight size={12} className="ml-2 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Company Sitemap */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold mb-8 uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 flex flex-col">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Me', id: 'about' },
                { label: 'Projects', id: 'projects' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'Contact', id: 'contact' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 5: Resources Sitemap */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold mb-8 uppercase tracking-[0.2em]">Resources</h4>
            <ul className="space-y-4 flex flex-col">
              {[
                { label: 'Blog & Articles', id: 'blog' },
                { label: 'Pricing Estimator', id: 'estimator' },
                { label: 'Security Scanner', id: 'scanner' },
                { label: 'ROI Calculator', id: 'roi' },
                { label: 'System Status', id: 'status' }
              ].map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => handleNavClick(item.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm font-light text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 6: Ecosystem / High-End Animated SVG Graphic */}
          <div className="lg:col-span-2 flex flex-col justify-start items-start lg:items-end">
            <h4 className="text-white text-xs font-semibold mb-8 uppercase tracking-[0.2em] text-left lg:text-right w-full">Ecosystem</h4>
            <div className="w-24 h-24 relative mb-6 opacity-60 hover:opacity-100 transition-opacity duration-500 cursor-default">
              {/* Rotating Hexagonal Node Graphic */}
              <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_30s_linear_infinite]">
                <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" fill="none" stroke="#ffffff" strokeWidth="0.5" />
                <polygon points="50,15 75,30 75,70 50,85 25,70 25,30" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                <circle cx="50" cy="5" r="2" fill="#ffffff" />
                <circle cx="90" cy="25" r="2" fill="#ffffff" />
                <circle cx="90" cy="75" r="2" fill="#ffffff" />
                <circle cx="50" cy="95" r="2" fill="#ffffff" />
                <circle cx="10" cy="75" r="2" fill="#ffffff" />
                <circle cx="10" cy="25" r="2" fill="#ffffff" />
                <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="10" y1="25" x2="90" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <line x1="10" y1="75" x2="90" y2="25" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              </svg>
              {/* Pulsing Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping opacity-80"></div>
                <div className="w-1.5 h-1.5 bg-white rounded-full absolute"></div>
              </div>
            </div>
            <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium text-left lg:text-right">
              Infrastructure<br/>v4.0.0 Online
            </p>
          </div>

        </div>

        {/* Section 7: Deep Divider & Legal Bar */}
        <div className="w-full h-px bg-white/10 mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-gray-500" />
            <p className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
              Copyright © {currentYear} Arun Ammisetty. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            <button onClick={() => handleNavClick('legal')} className="text-gray-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium">Privacy Policy</button>
            <button onClick={() => handleNavClick('legal')} className="text-gray-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium">Terms of Service</button>
            <button onClick={() => handleNavClick('sitemap')} className="text-gray-500 hover:text-white transition-colors text-[10px] uppercase tracking-widest font-medium">Full Sitemap</button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
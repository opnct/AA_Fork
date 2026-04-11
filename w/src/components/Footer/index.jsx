import React from 'react';
import { Shield, FileText, Linkedin, Github, MessageCircle, ArrowRight } from 'lucide-react';

const Footer = ({ navigate, isHighContrast }) => (
  <footer className={`border-t-2 border-black print:hidden ${isHighContrast ? 'bg-black text-white' : 'bg-white'}`}>
    <div className="grid grid-cols-1 md:grid-cols-4">
      <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black bg-black text-white flex flex-col justify-between">
        <div>
            <h4 className="font-bold text-2xl uppercase mb-4 tracking-tighter">Arun / Ammisetty</h4>
            <p className="text-gray-400 leading-relaxed mb-6">Building robust digital ecosystems. Securing the future of web technologies.</p>
            <a href="https://go.ly/vc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-bold uppercase text-xs tracking-widest border border-white hover:bg-white hover:text-black transition-colors">
                <Shield size={14} /> Verified by Vanguard / Cyber
            </a>
        </div>
        <div className="mt-8">
            <p className="text-sm text-gray-500">© 2026 All Rights Reserved.</p>
            <p className="text-xs text-gray-600 mt-2">Designed with Neubrutalism.</p>
        </div>
      </div>
      <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black">
        <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500 flex items-center gap-2">
            <FileText size={14}/> Explore
        </h5>
        <div className="flex flex-col gap-3 font-bold text-sm">
          <button onClick={() => navigate('estimator')} className="text-left hover:text-blue-600 transition-colors">Pricing Estimator</button>
          <button onClick={() => navigate('scanner')} className="text-left hover:text-blue-600 transition-colors">Security Scanner</button>
          <button onClick={() => navigate('roi')} className="text-left hover:text-blue-600 transition-colors">ROI Calculator</button>
          <button onClick={() => navigate('case-studies')} className="text-left hover:text-blue-600 transition-colors">Case Studies</button>
          <button onClick={() => navigate('testimonials')} className="text-left hover:text-blue-600 transition-colors">Testimonials</button>
          <button onClick={() => navigate('faq')} className="text-left hover:text-blue-600 transition-colors">FAQ</button>
          <button onClick={() => navigate('sitemap')} className="text-left hover:text-blue-600 transition-colors">Site Map</button>
        </div>
      </div>
      <div className="p-8 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col">
        <h5 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Contact & Info</h5>
        <div className="space-y-4">
            <div>
                <a href="mailto:contact.aa@tuta.io" className="font-bold text-lg hover:text-blue-600 hover:underline">contact.aa@tuta.io</a>
            </div>
            <div><p className="font-bold text-lg">+91 83290 00442</p></div>
            <div><button onClick={() => navigate('status')} className="text-left hover:text-blue-600 font-bold transition-colors">System Status</button></div>
            <div><button onClick={() => navigate('accessibility')} className="text-left hover:text-blue-600 font-bold transition-colors">Accessibility</button></div>
        </div>
        <div className="mt-auto pt-8">
            <p className="text-xs font-bold uppercase tracking-widest mb-4">Socials</p>
            <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"><Github size={18} /></a>
                <button onClick={()=>navigate('guestbook')} className="w-10 h-10 border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"><MessageCircle size={18} /></button>
            </div>
        </div>
      </div>
      <div className={`p-8 flex flex-col justify-between ${isHighContrast ? 'bg-black' : 'bg-gray-50'}`}>
        <div>
            <h5 className="font-bold uppercase tracking-widest text-xs mb-4 text-gray-500">Stay Updated</h5>
            <p className="text-sm mb-4">Join 2,000+ developers receiving my monthly digest.</p>
            <div className="flex flex-col gap-2">
                <input type="email" placeholder="Enter your email" className="p-3 border-2 border-black focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-shadow text-sm text-black" />
                <button className="p-3 bg-black text-white font-bold uppercase text-xs tracking-widest border-2 border-black hover:bg-blue-600 hover:border-black transition-colors">Subscribe</button>
            </div>
        </div>
        <button onClick={() => navigate('contact')} className="mt-8 text-blue-600 font-black uppercase text-2xl hover:scale-105 transition-transform flex items-center gap-2 origin-left">
          Let's Talk <ArrowRight size={32} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;

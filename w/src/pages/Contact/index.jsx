import React, { useState, useEffect } from 'react';
import { 
  Mail, Phone, Linkedin, Globe, MessageCircle, 
  ArrowRight, ShieldCheck, Clock, CheckCircle, 
  Plus, Lock, Server, FileText
} from 'lucide-react';

const Contact = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    
    const text = `*Strategic Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Target Service:* ${service}\n*Objective:* ${message}`;
    const encodedText = encodeURIComponent(text);
    
    // High-end UX: Simulated processing delay before redirect
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(`https://wa.me/918329000424?text=${encodedText}`, '_blank');
      e.target.reset();
    }, 1500);
  };

  const faqs = [
    { id: 'f1', q: "What is the typical response time?", a: "For new strategic inquiries, expect a detailed response within 12-24 hours. Critical security incidents for existing clients are handled within 1 hour." },
    { id: 'f2', q: "Do you sign Non-Disclosure Agreements (NDAs)?", a: "Absolutely. Standard enterprise protocol dictates that NDAs and mutual confidentiality agreements are executed prior to any deep architectural discussions." },
    { id: 'f3', q: "What should I prepare for our first call?", a: "A general overview of your business objectives, current technical stack (if applicable), and any specific pain points or security concerns you wish to address." },
    { id: 'f4', q: "Do you work with international clients?", a: "Yes. Our infrastructure and operational processes are designed to support asynchronous workflows across North America, Europe, and the Middle East." }
  ];

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Grid SVG Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-center items-start">
          <svg viewBox="0 0 1000 400" className="w-full h-full">
            <defs>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" className="animate-[pulse_4s_ease-in-out_infinite]" />
            <circle cx="500" cy="200" r="150" fill="none" stroke="#ffffff" strokeWidth="1"/>
            <circle cx="500" cy="200" r="100" fill="none" stroke="#ffffff" strokeWidth="2"/>
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Client Engagement</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Initiate a<br />
            <span className="text-gray-500">Dialogue.</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Whether you require a comprehensive security audit or a ground-up architectural build, start the conversation here.
          </p>
        </div>
      </section>

      {/* 2. High-End Engagement Form & 3. Direct Contact Architecture */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col">
            <h2 className="text-3xl font-semibold text-white mb-12 tracking-tight">Direct Channels</h2>
            <div className="space-y-10 flex-grow">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2 font-medium">Encrypted Email</p>
                <a href="mailto:contact.aa@tuta.io" className="text-xl md:text-2xl font-light text-white hover:text-gray-300 transition-colors flex items-center gap-4">
                  contact.aa@tuta.io <ArrowRight size={18} className="text-gray-600" />
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2 font-medium">Direct Line / Signal</p>
                <p className="text-xl md:text-2xl font-light text-white flex items-center gap-4">
                  +91 83290 00424
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2 font-medium">Professional Network</p>
                <a href="https://linkedin.com/in/arun-ammisetty" target="_blank" rel="noreferrer" className="text-xl md:text-2xl font-light text-white hover:text-gray-300 transition-colors flex items-center gap-4">
                  /in/arun-ammisetty <ArrowRight size={18} className="text-gray-600" />
                </a>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-2 font-medium">Primary Hub</p>
                <p className="text-xl md:text-2xl font-light text-gray-400">
                  Tech Park, Baner,<br/>Pune, India
                </p>
              </div>
            </div>
          </div>

          {/* Engagement Form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-white mb-10 tracking-tight">Project Inquiry</h3>
            <form onSubmit={handleWhatsAppSubmit} className="space-y-10">
              <div className="flex flex-col relative group">
                <input name="name" type="text" required id="name" className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Full name" />
                <label htmlFor="name" className="absolute left-0 -top-5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white font-medium cursor-text">Authorized Representative Name</label>
              </div>
              
              <div className="flex flex-col relative group">
                <input name="email" type="email" required id="email" className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Corporate Email" />
                <label htmlFor="email" className="absolute left-0 -top-5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white font-medium cursor-text">Corporate Email</label>
              </div>

              <div className="flex flex-col relative group">
                <select name="service" required id="service" className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer">
                  <option value="" className="bg-[#141414] text-gray-500">Select Area of Expertise...</option>
                  <option value="Enterprise Architecture" className="bg-[#141414]">Enterprise Architecture</option>
                  <option value="Security Penetration Test" className="bg-[#141414]">Security Penetration Test</option>
                  <option value="UI/UX System Design" className="bg-[#141414]">UI/UX System Design</option>
                  <option value="Infrastructure Audit" className="bg-[#141414]">Infrastructure Audit</option>
                  <option value="General Consultation" className="bg-[#141414]">General Consultation</option>
                </select>
                <label htmlFor="service" className="absolute left-0 -top-5 text-xs text-gray-500 font-medium">Target Service</label>
              </div>

              <div className="flex flex-col relative group">
                <textarea name="message" id="message" required rows="3" className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none" placeholder="Executive Summary"></textarea>
                <label htmlFor="message" className="absolute left-0 -top-5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white font-medium cursor-text">Executive Summary & Objectives</label>
              </div>

              <div className="pt-4">
                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto px-10 py-4 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 flex items-center justify-center gap-3">
                  {isSubmitting ? 'Establishing Secure Link...' : <><MessageCircle size={16}/> Initialize via WhatsApp</>}
                </button>
                <p className="mt-4 text-xs text-gray-600 font-light">Submitting this form redirects to an encrypted WhatsApp session for immediate correspondence.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 4. Global Operations Map */}
      <section className="py-32 bg-[#141414] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-semibold text-white tracking-tight mb-6 leading-tight">Global<br/>Operations</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
              Strategically positioned to manage asynchronous development cycles and incident responses for global partners across major time zones.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-gray-300 font-light">Pune (IST)</span>
                <span className="text-xs font-mono text-gray-500">Primary Hub</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-gray-300 font-light">Dubai (GST)</span>
                <span className="text-xs font-mono text-gray-500">Client Node</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-gray-300 font-light">New York (EST)</span>
                <span className="text-xs font-mono text-gray-500">Client Node</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            {/* Custom Geometric World Map SVG */}
            <div className="w-full max-w-2xl aspect-[2/1] relative flex items-center justify-center opacity-80">
              <svg viewBox="0 0 800 400" className="w-full h-full">
                {/* Abstract Continents (Dotted lines) */}
                <path d="M100 100 Q150 50 300 100 T500 80 T700 150 M150 200 Q300 300 400 200 T650 250" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2" strokeDasharray="4 8"/>
                {/* Connection Arcs */}
                <path d="M550 180 Q350 50 150 150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <path d="M550 180 Q450 100 400 160" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                {/* Nodes */}
                <circle cx="550" cy="180" r="6" fill="#ffffff" />
                <circle cx="550" cy="180" r="20" fill="none" stroke="#ffffff" strokeWidth="1" className="animate-ping" style={{animationDuration: '3s'}}/>
                <circle cx="150" cy="150" r="4" fill="rgba(255,255,255,0.5)" />
                <circle cx="400" cy="160" r="4" fill="rgba(255,255,255,0.5)" />
                <circle cx="650" cy="250" r="3" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Strategic Onboarding Timeline */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-4">Onboarding Protocol</h2>
          <p className="text-gray-400 font-light text-lg">A frictionless transition from initial contact to project mobilization.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Initial Briefing', desc: 'A 30-minute discovery call to map overarching goals and technical constraints.' },
            { step: '02', title: 'NDA & Legal', desc: 'Execution of confidentiality agreements to secure proprietary information.' },
            { step: '03', title: 'Architecture Proposal', desc: 'Delivery of a comprehensive technical roadmap, timeline, and investment structure.' },
            { step: '04', title: 'Mobilization', desc: 'Provisioning of repositories, staging environments, and commencement of engineering.' }
          ].map((item, i) => (
            <div key={i} className="border-t border-white/10 pt-6 group">
              <span className="text-2xl font-light text-gray-600 mb-4 block group-hover:text-white transition-colors">{item.step}</span>
              <h4 className="text-lg font-medium text-white mb-2 tracking-tight">{item.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Enterprise Service Level Agreements (SLAs) & 7. Secure Comms */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* SLAs */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
              <Clock size={20} className="text-white/40" /> Enterprise SLAs
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Response Time', desc: 'Under 12 hours for standard queries; <1 hour for severity-1 incidents.' },
                { title: 'Code Quality Guarantee', desc: 'All deliverables pass strict automated testing and manual peer-review standards.' },
                { title: 'Uptime Maintenance', desc: '99.9% uptime SLA for hosted infrastructures during active maintenance contracts.' },
                { title: 'Security Patching', desc: 'Critical zero-day vulnerabilities patched within 24 hours of disclosure.' }
              ].map((sla, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <CheckCircle size={16} className="text-gray-600 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white text-sm font-medium mb-1">{sla.title}</h4>
                    <p className="text-gray-400 text-sm font-light">{sla.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secure Comms */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
              <Lock size={20} className="text-white/40" /> Secure Communications
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
              Protecting client intellectual property is paramount. All sensitive communications and document transfers are handled via cryptographic protocols.
            </p>
            <div className="space-y-4 border-l border-white/10 pl-6">
              <div className="pb-4 border-b border-white/5">
                <h4 className="text-white text-sm font-medium mb-1">PGP Encryption</h4>
                <p className="text-gray-500 text-xs font-light">Public keys available upon request for secure email transmission.</p>
              </div>
              <div className="pb-4 border-b border-white/5">
                <h4 className="text-white text-sm font-medium mb-1">E2EE Messaging</h4>
                <p className="text-gray-500 text-xs font-light">Signal or Enterprise WhatsApp utilized for real-time tactical comms.</p>
              </div>
              <div className="pb-4 border-b border-white/5">
                <h4 className="text-white text-sm font-medium mb-1">Secure File Transfer</h4>
                <p className="text-gray-500 text-xs font-light">Zero-knowledge cloud infrastructure used for sharing access credentials.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-medium mb-1">Tuta Cryptography</h4>
                <p className="text-gray-500 text-xs font-light">Primary email hosted on quantum-resistant Tuta infrastructure.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Pre-Engagement FAQ */}
      <section className="py-32 max-w-5xl mx-auto px-6 border-b border-white/10">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-16 tracking-tight">Pre-Engagement FAQ</h2>
        <div className="grid grid-cols-1 gap-0">
          {faqs.map(faq => (
            <div key={faq.id} className="border-b border-white/10">
              <button 
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)} 
                className="w-full py-8 flex justify-between items-center text-left text-white hover:text-gray-300 transition-colors"
              >
                <span className="font-medium text-base pr-4 tracking-tight">{faq.q}</span>
                <Plus size={18} className={`shrink-0 text-gray-600 transition-transform duration-500 ${activeFaq === faq.id ? 'rotate-45 text-white' : ''}`} />
              </button>
              {activeFaq === faq.id && (
                <div className="pb-8 text-gray-400 font-light text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 9. Facts and Figures (Response Metrics) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">Service<br/>Metrics</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">12h</div>
              <p className="text-gray-400 text-sm font-light">Maximum turnaround time for initial technical consultation scheduling.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">100%</div>
              <p className="text-gray-400 text-sm font-light">Client retention rate across long-term enterprise maintenance contracts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Consultation Offerings */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-white tracking-tight mb-12 text-center md:text-left">Strategic Consultation Offerings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 flex flex-col justify-between h-full hover:border-white/30 transition-colors">
              <div>
                <Server size={24} className="text-gray-500 mb-6" />
                <h4 className="text-xl font-medium text-white mb-4">Infrastructure Audit</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">A comprehensive review of your current tech stack, identifying bottlenecks and scalability limits.</p>
              </div>
              <button onClick={() => navigate('estimator')} className="text-xs font-semibold uppercase tracking-widest text-white flex items-center gap-2 hover:gap-4 transition-all">
                Scope Cost <ArrowRight size={14}/>
              </button>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-between h-full hover:border-white/30 transition-colors">
              <div>
                <ShieldCheck size={24} className="text-gray-500 mb-6" />
                <h4 className="text-xl font-medium text-white mb-4">Security Assessment</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">Discussing penetration testing methodologies to uncover hidden OWASP Top 10 vulnerabilities.</p>
              </div>
              <button onClick={() => navigate('scanner')} className="text-xs font-semibold uppercase tracking-widest text-white flex items-center gap-2 hover:gap-4 transition-all">
                Run Surface Scan <ArrowRight size={14}/>
              </button>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-between h-full hover:border-white/30 transition-colors">
              <div>
                <FileText size={24} className="text-gray-500 mb-6" />
                <h4 className="text-xl font-medium text-white mb-4">Full-Cycle Engineering</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">Mapping out the build process for a new MVP or enterprise platform from wireframe to deployment.</p>
              </div>
              <button onClick={() => navigate('projects')} className="text-xs font-semibold uppercase tracking-widest text-white flex items-center gap-2 hover:gap-4 transition-all">
                View Past Work <ArrowRight size={14}/>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Minimalist Closure */}
      <section className="py-24 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4 opacity-50">
          <ShieldCheck size={20} className="text-white" />
          <span className="text-sm font-medium tracking-widest uppercase text-white">Verified Vanguard Security Integrity</span>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-500 text-xs font-light">
            Operating with strict adherence to ISO 27001 guidelines.<br/>
            All consultations are strictly confidential.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;
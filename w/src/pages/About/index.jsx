import React from 'react';
import { 
  ArrowRight, Shield, Code2, Globe, Layers, 
  Terminal, Cpu, CheckCircle, MapPin
} from 'lucide-react';

const About = ({ navigate }) => {
  const stats = [
    { id: 1, num: '05', desc: 'Years of intensive full-stack development and security research' },
    { id: 2, num: '50+', desc: 'Enterprise-grade projects successfully architected and launched' },
    { id: 3, num: '200+', desc: 'Critical vulnerabilities identified and patched globally' },
    { id: 4, num: '100%', desc: 'Client satisfaction rate across all delivered digital solutions' }
  ];

  const competencies = [
    { icon: <Code2 size={20} strokeWidth={1.5} />, title: 'Front-End Engineering', desc: 'Crafting responsive, high-performance interfaces using React, Next.js, and modern CSS architectures.' },
    { icon: <Terminal size={20} strokeWidth={1.5} />, title: 'Back-End Architecture', desc: 'Building scalable, secure APIs and microservices with Node.js, Express, and Python.' },
    { icon: <Shield size={20} strokeWidth={1.5} />, title: 'Defensive Security', desc: 'Implementing robust authentication, OWASP Top 10 mitigation, and rigorous penetration testing.' },
    { icon: <Layers size={20} strokeWidth={1.5} />, title: 'UI/UX Design', desc: 'Designing intuitive, accessible, and conversion-optimized user journeys backed by behavioral data.' }
  ];

  const timeline = [
    { year: '2023 — Present', role: 'Founder & Chief Architect', company: 'Independent Consultancy', desc: 'Leading end-to-end digital transformation for enterprise clients, focusing on secure, high-availability web ecosystems.' },
    { year: '2021 — 2023', role: 'Senior Full-Stack Developer', company: 'Global Tech Solutions', desc: 'Architected scalable SaaS platforms, integrated complex third-party APIs, and optimized database performance.' },
    { year: '2019 — 2021', role: 'Security Researcher & Frontend Dev', company: 'CyberSec Initiatives', desc: 'Conducted vulnerability assessments while building internal monitoring dashboards using React.' }
  ];

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-20">
      
      {/* 1. Minimalist Hero Section with Abstract Background */}
      <section className="relative py-32 lg:py-48 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* SVG Background Element */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-end items-start">
          <svg viewBox="0 0 800 800" className="w-[800px] h-[800px] -translate-y-1/4 translate-x-1/4 animate-[pulse_10s_ease-in-out_infinite]">
            <circle cx="400" cy="400" r="300" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 8"/>
            <circle cx="400" cy="400" r="200" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
            <circle cx="400" cy="400" r="100" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 4"/>
            <path d="M400 0 L400 800 M0 400 L800 400" stroke="#ffffff" strokeWidth="0.25" opacity="0.5"/>
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 text-sm mb-6 tracking-[0.2em] uppercase font-medium">Profile & Expertise</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Engineering<br />
            <span className="text-gray-500">Digital</span> Excellence.
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            I am a multi-disciplinary digital architect bridging the gap between complex engineering, impenetrable security, and elegant user experiences.
          </p>
        </div>
      </section>

      {/* 2. Facts and Figures (Zahlmann Style) */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-8 border-b border-white/10">
        <div className="md:col-span-4">
          <h3 className="text-2xl text-white font-medium tracking-tight">Facts and figures</h3>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
          {stats.map(s => (
            <div key={s.id}>
              <div className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tighter">{s.num}</div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Biography & High-End Geometric Portrait */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-white/10">
        <div className="lg:col-span-6 flex flex-col">
          <h2 className="text-4xl font-semibold text-white mb-8 tracking-tight leading-tight">
            I specialize in researching, analyzing, and building your brand's digital standing.
          </h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6 text-lg">
            My journey began with a simple curiosity about how the web works. That curiosity evolved into a deep passion for full-stack engineering and, eventually, offensive security. I don't just write code; I architect systems designed to scale and withstand modern threats.
          </p>
          <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
            Working remotely from Pune, India, I collaborate with enterprises and startups worldwide. My mission is to provide high-quality, pixel-perfect, and exceptionally secure digital solutions that drive real business growth.
          </p>
          <div>
            <button onClick={() => navigate('cv-builder')} className="px-8 py-3 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors">
              View Curriculum Vitae
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          {/* Abstract Geometric "Portrait" SVG */}
          <div className="w-full max-w-md aspect-[4/5] bg-[#141414] border border-white/10 rounded-sm p-8 flex items-center justify-center overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <svg viewBox="0 0 200 250" className="w-full h-full">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.8}} />
                  <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.1}} />
                </linearGradient>
              </defs>
              <rect x="50" y="50" width="100" height="150" fill="none" stroke="url(#grad1)" strokeWidth="0.5"/>
              <rect x="60" y="60" width="80" height="130" fill="none" stroke="#ffffff" strokeWidth="0.25" opacity="0.5"/>
              <circle cx="100" cy="100" r="20" fill="none" stroke="#ffffff" strokeWidth="1"/>
              <circle cx="100" cy="100" r="2" fill="#ffffff"/>
              <path d="M100 120 L100 200" stroke="#ffffff" strokeWidth="0.5" opacity="0.7"/>
              <path d="M50 150 L150 150" stroke="#ffffff" strokeWidth="0.25" opacity="0.3"/>
              <line x1="80" y1="180" x2="120" y2="180" stroke="#ffffff" strokeWidth="0.5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* 4. Core Competencies (Minimal Cards) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <h2 className="text-3xl font-medium text-white mb-16 tracking-tight">Core Competencies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competencies.map((comp, idx) => (
            <div key={idx} className="bg-[#141414] border border-white/10 p-10 hover:border-white/30 transition-colors duration-300">
              <div className="text-white mb-6 opacity-60">{comp.icon}</div>
              <h4 className="text-xl font-medium text-white mb-4 tracking-tight">{comp.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{comp.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Professional Timeline */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/10">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-medium text-white tracking-tight">Professional Experience</h2>
        </div>
        <div className="lg:col-span-8 flex flex-col">
          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 pb-16 last:pb-0">
              {/* Timeline Line & Dot */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-white/10"></div>
              <div className="absolute left-[-4px] top-2 w-2 h-2 bg-white rounded-full"></div>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                <h4 className="text-xl font-medium text-white tracking-tight">{item.role}</h4>
                <span className="text-xs font-medium tracking-widest text-gray-500 uppercase">{item.year}</span>
              </div>
              <p className="text-sm font-medium text-gray-300 mb-4">{item.company}</p>
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-2xl">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Technical Arsenal / Stack */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm mb-6 tracking-[0.2em] uppercase font-medium">Technical Arsenal</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-12 text-white/40 text-lg md:text-2xl font-light tracking-tight">
            <span className="hover:text-white transition-colors cursor-default">React & Next.js</span>
            <span className="text-white cursor-default">Node.js</span>
            <span className="hover:text-white transition-colors cursor-default">TypeScript</span>
            <span className="hover:text-white transition-colors cursor-default">Tailwind CSS</span>
            <span className="text-white cursor-default">PostgreSQL</span>
            <span className="hover:text-white transition-colors cursor-default">MongoDB</span>
            <span className="hover:text-white transition-colors cursor-default">Python</span>
            <span className="text-white cursor-default">OWASP / Security</span>
            <span className="hover:text-white transition-colors cursor-default">Figma</span>
            <span className="hover:text-white transition-colors cursor-default">Docker</span>
          </div>
        </div>
      </section>

      {/* 7. Development Philosophy */}
      <section className="py-32 max-w-5xl mx-auto px-6 text-center border-b border-white/10">
        <Shield size={32} className="mx-auto mb-10 text-white/20" strokeWidth={1} />
        <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight tracking-tighter">
          "A beautiful interface is meaningless if the underlying architecture is vulnerable. True digital excellence requires a perfect balance of aesthetics, performance, and impenetrable security."
        </h3>
      </section>

      {/* 8. Global Reach & SVG Map Graphic */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-white/10">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-medium text-white mb-6 tracking-tight">Global Connectivity</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6 text-lg">
            Operating from Pune, India, my infrastructure and client base span across multiple continents. I provide localized expertise with global scalability.
          </p>
          <ul className="space-y-3">
            {['India (Primary Hub)', 'United States (Client Base)', 'United Arab Emirates', 'United Kingdom'].map((loc, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-light text-gray-300">
                <MapPin size={14} className="text-gray-600" /> {loc}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7 flex justify-center">
          {/* Abstract Global Network SVG */}
          <div className="w-full max-w-lg aspect-[16/9] bg-[#141414] border border-white/10 rounded-sm flex items-center justify-center overflow-hidden p-6 relative">
             <svg viewBox="0 0 800 400" className="w-full h-full opacity-60">
               {/* Grid lines */}
               <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                 <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5"/>
               </pattern>
               <rect width="800" height="400" fill="url(#grid)" />
               
               {/* Nodes */}
               <circle cx="550" cy="150" r="4" fill="#ffffff" />
               <circle cx="550" cy="150" r="15" fill="none" stroke="#ffffff" strokeWidth="0.5" className="animate-ping" style={{animationDuration: '3s'}} />
               <circle cx="200" cy="180" r="3" fill="#ffffff" opacity="0.5" />
               <circle cx="480" cy="220" r="3" fill="#ffffff" opacity="0.5" />
               <circle cx="450" cy="120" r="3" fill="#ffffff" opacity="0.5" />
               
               {/* Connecting lines */}
               <path d="M550 150 Q400 50 200 180" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" />
               <path d="M550 150 L480 220" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
               <path d="M550 150 L450 120" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
             </svg>
          </div>
        </div>
      </section>

      {/* 9. Minimalist Zahlmann-style CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Reach out for<br />
            exceptional digital<br />
            solutions
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            Get in touch and discover how my dedicated expertise can help drive your business forward with tailored architecture.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <button onClick={() => navigate('contact')} className="px-8 py-3.5 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors">
            Contact Me
          </button>
          <button onClick={() => navigate('projects')} className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">
            View Projects
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;
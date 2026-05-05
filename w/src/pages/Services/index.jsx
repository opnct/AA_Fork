import React, { useState } from 'react';
import { 
  ArrowRight, Calculator, CheckCircle, Code2, 
  Database, Shield, Monitor, Layers, Cpu, 
  TerminalSquare, Zap
} from 'lucide-react';

const Services = ({ navigate }) => {
  const [hoveredService, setHoveredService] = useState(null);

  const servicesList = [
    {
      id: 'frontend',
      title: 'Front-End Architecture',
      shortDesc: 'Pixel-perfect, high-performance interfaces engineered for maximum user engagement and conversion.',
      features: ['React & Next.js Ecosystems', 'Complex State Management', 'Framer Motion Animations', 'Responsive Web Core'],
      icon: <Monitor size={24} strokeWidth={1.5} />,
      svg: (
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
          <rect x="50" y="50" width="300" height="200" fill="none" stroke="#ffffff" strokeWidth="1" rx="4"/>
          <line x1="50" y1="80" x2="350" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <circle cx="70" cy="65" r="3" fill="#ffffff" opacity="0.5"/>
          <circle cx="85" cy="65" r="3" fill="#ffffff" opacity="0.5"/>
          <circle cx="100" cy="65" r="3" fill="#ffffff" opacity="0.5"/>
          <rect x="70" y="110" width="120" height="110" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="2"/>
          <rect x="210" y="110" width="120" height="30" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="2"/>
          <rect x="210" y="150" width="120" height="30" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="2"/>
          <rect x="210" y="190" width="120" height="30" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="2"/>
        </svg>
      )
    },
    {
      id: 'backend',
      title: 'Back-End & Microservices',
      shortDesc: 'Scalable, secure, and highly available server-side architectures that power complex digital products.',
      features: ['Node.js & Python REST APIs', 'PostgreSQL & MongoDB', 'Redis Caching Layers', 'Docker Containerization'],
      icon: <Database size={24} strokeWidth={1.5} />,
      svg: (
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
          <ellipse cx="200" cy="80" rx="60" ry="15" fill="none" stroke="#ffffff" strokeWidth="1"/>
          <path d="M140 80 L140 140 A60 15 0 0 0 260 140 L260 80" fill="rgba(255,255,255,0.02)" stroke="#ffffff" strokeWidth="1"/>
          <ellipse cx="200" cy="140" rx="60" ry="15" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <path d="M140 140 L140 200 A60 15 0 0 0 260 200 L260 140" fill="rgba(255,255,255,0.02)" stroke="#ffffff" strokeWidth="1"/>
          <ellipse cx="200" cy="200" rx="60" ry="15" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
          <path d="M140 200 L140 260 A60 15 0 0 0 260 260 L260 200" fill="rgba(255,255,255,0.02)" stroke="#ffffff" strokeWidth="1"/>
          <circle cx="200" cy="140" r="3" fill="#ffffff" className="animate-ping"/>
          <path d="M280 140 L340 140 M340 140 L340 80" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="4 4" fill="none"/>
        </svg>
      )
    },
    {
      id: 'security',
      title: 'Defensive Cyber Security',
      shortDesc: 'Military-grade vulnerability assessments, penetration testing, and architectural hardening for enterprise systems.',
      features: ['OWASP Top 10 Mitigation', 'Zero-Day Vulnerability Scans', 'JWT & OAuth Hardening', 'Continuous Threat Monitoring'],
      icon: <Shield size={24} strokeWidth={1.5} />,
      svg: (
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
          <circle cx="200" cy="150" r="100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <circle cx="200" cy="150" r="70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="5 5"/>
          <circle cx="200" cy="150" r="40" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
          <path d="M200 30 L200 270 M80 150 L320 150" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <path d="M200 150 L270 80" stroke="#ffffff" strokeWidth="1.5" className="origin-[200px_150px] animate-[spin_4s_linear_infinite]"/>
          <circle cx="200" cy="150" r="4" fill="#ffffff"/>
          <polygon points="190,140 210,140 200,160" fill="none" stroke="#ffffff" strokeWidth="1"/>
        </svg>
      )
    },
    {
      id: 'uiux',
      title: 'UI/UX Engineering',
      shortDesc: 'Data-driven interface design focused on reducing cognitive load and maximizing aesthetic superiority.',
      features: ['Figma Prototyping', 'Design System Creation', 'Accessibility (WCAG) Compliance', 'User Journey Mapping'],
      icon: <Layers size={24} strokeWidth={1.5} />,
      svg: (
        <svg viewBox="0 0 400 300" className="w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-700">
          <rect x="60" y="60" width="80" height="80" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <rect x="160" y="60" width="180" height="80" fill="rgba(255,255,255,0.02)" stroke="#ffffff" strokeWidth="0.5"/>
          <rect x="60" y="160" width="130" height="80" fill="rgba(255,255,255,0.02)" stroke="#ffffff" strokeWidth="0.5"/>
          <rect x="210" y="160" width="130" height="80" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <circle cx="100" cy="100" r="15" fill="none" stroke="#ffffff" strokeWidth="1"/>
          <line x1="180" y1="80" x2="320" y2="80" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
          <line x1="180" y1="100" x2="280" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
          <line x1="180" y1="120" x2="250" y2="120" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
        </svg>
      )
    }
  ];

  const processSteps = [
    { num: '01', title: 'Discovery & Audit', desc: 'Comprehensive analysis of your requirements, current infrastructure, and market positioning.' },
    { num: '02', title: 'Architecture Planning', desc: 'Designing the database schemas, API routes, and UI/UX wireframes for optimal scalability.' },
    { num: '03', title: 'Agile Execution', desc: 'Iterative development sprints with continuous integration and real-time staging environments.' },
    { num: '04', title: 'Security & Launch', desc: 'Rigorous penetration testing, performance optimization, and seamless production deployment.' }
  ];

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-40 pb-24 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Abstract Background SVG */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <svg viewBox="0 0 1000 400" className="w-full h-full">
            <path d="M-100,200 C150,100 350,300 600,200 S1000,100 1200,200" fill="none" stroke="#ffffff" strokeWidth="0.5" className="animate-[pulse_5s_ease-in-out_infinite]"/>
            <path d="M-100,220 C150,120 350,320 600,220 S1000,120 1200,220" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <path d="M-100,240 C150,140 350,340 600,240 S1000,140 1200,240" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Capabilities & Offerings</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Digital<br />
            <span className="text-gray-500">Infrastructure.</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-10">
            From highly concurrent backend systems to pixel-perfect interfaces. I provide end-to-end engineering solutions designed to scale, perform, and protect.
          </p>
        </div>
      </section>

      {/* 2. Philosophy Quote */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center border-b border-white/10">
        <h3 className="text-2xl md:text-4xl font-light text-white leading-snug tracking-tight">
          "True digital excellence is found at the intersection of aesthetic superiority and impenetrable architecture."
        </h3>
      </section>

      {/* 3, 4, 5, 6. Core Services Detail Sections */}
      <section className="py-24">
        {servicesList.map((service, index) => (
          <div 
            key={service.id} 
            className="group max-w-7xl mx-auto px-6 py-20 border-b border-white/10 last:border-0 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center"
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Text Content */}
            <div className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-white/40 group-hover:text-white transition-colors duration-500">{service.icon}</span>
                <span className="text-xs font-medium tracking-[0.2em] text-gray-500 uppercase">Service 0{index + 1}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">
                {service.title}
              </h2>
              <p className="text-gray-400 text-lg font-light leading-relaxed mb-8 max-w-lg">
                {service.shortDesc}
              </p>
              <ul className="space-y-4 mb-10">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-light text-gray-300">
                    <CheckCircle size={14} className="text-white/30" /> {feature}
                  </li>
                ))}
              </ul>
              <button onClick={() => navigate('contact')} className="text-sm font-medium text-white flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
                Discuss Architecture <ArrowRight size={16} />
              </button>
            </div>
            
            {/* High-End SVG Illustration */}
            <div className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-1' : ''} flex justify-center`}>
              <div className="w-full max-w-lg aspect-[4/3] bg-[#141414] border border-white/10 rounded-sm p-4 relative overflow-hidden transition-all duration-700 group-hover:border-white/30 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                {service.svg}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 7. Process & Methodology */}
      <section className="py-32 bg-[#141414] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-white tracking-tight mb-4">Methodology</h2>
            <p className="text-gray-400 font-light text-lg">A structured, predictable pipeline for delivering excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.num} className="border-l border-white/10 pl-6 hover:border-white/40 transition-colors duration-300">
                <span className="text-3xl font-light text-white/20 mb-4 block">{step.num}</span>
                <h4 className="text-xl font-medium text-white mb-3 tracking-tight">{step.title}</h4>
                <p className="text-gray-400 text-sm font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Facts and Figures (Metrics) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">Performance<br/>Impact</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">0.8s</div>
              <p className="text-gray-400 text-sm font-light">Average Largest Contentful Paint (LCP) achieved across optimized web applications.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">100%</div>
              <p className="text-gray-400 text-sm font-light">Success rate in mitigating critical OWASP Top 10 vulnerabilities during audits.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">99.9%</div>
              <p className="text-gray-400 text-sm font-light">Infrastructure uptime SLA maintained for enterprise backend architectures.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">5x</div>
              <p className="text-gray-400 text-sm font-light">Average increase in user retention through data-driven UI/UX engineering.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Technical Arsenal / Stack */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-3xl font-medium text-white tracking-tight">Technical Arsenal</h2>
          <p className="text-gray-400 font-light text-sm max-w-sm">
            Leveraging modern, enterprise-grade tools to build resilient and performant systems.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          {[
            { label: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL'] },
            { label: 'Front-End', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
            { label: 'Back-End', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'] },
            { label: 'Security & DevOps', items: ['Docker', 'AWS / Vercel', 'Burp Suite', 'Kali Linux'] }
          ].map((category, idx) => (
            <div key={idx}>
              <h4 className="text-white text-xs font-semibold mb-6 uppercase tracking-[0.1em] border-b border-white/10 pb-3">{category.label}</h4>
              <ul className="space-y-3">
                {category.items.map(item => (
                  <li key={item} className="text-gray-400 text-sm font-light">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Pricing Estimator CTA */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Calculator size={40} className="mx-auto mb-8 text-white/30" strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight">Transparent Cost Structuring</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
            No hidden fees. No guesswork. Utilize my interactive pricing estimator to scope the exact architecture and features your project requires.
          </p>
          <button onClick={() => navigate('estimator')} className="px-8 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors">
            Launch Pricing Estimator
          </button>
        </div>
      </section>

      {/* 11. Final Contact CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Ready to engineer<br />
            your next platform?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            Get in touch to discuss your technical requirements and business objectives.
          </p>
        </div>
        <button onClick={() => navigate('contact')} className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-black transition-colors shrink-0">
          Start the Conversation
        </button>
      </section>

    </div>
  );
};

export default Services;
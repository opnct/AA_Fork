import React, { useState } from 'react';
import { 
  MapPin, Code2, Layers, Monitor, Shield, 
  Plus, Github, Linkedin, Mail, Twitter, ArrowRight
} from 'lucide-react';

const Home = ({ navigate }) => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeProject, setActiveProject] = useState('p1');

  // Real Content Logic
  const stats = [
    { id: 1, num: '4', desc: 'Offices worldwide: India, UAE, UK, USA' },
    { id: 2, num: '16', desc: 'Experts representing your interests in full-stack dev and security' },
    { id: 3, num: '10M+', desc: 'Dollars in new revenue generated through optimized web platforms' },
    { id: 4, num: '50+', desc: 'High-performance projects successfully launched globally' }
  ];

  const services = [
    { 
      id: 's1', icon: <Code2 size={24} strokeWidth={1.5} />, title: 'Front-End Dev', 
      desc: 'Bringing designs to life with clean, efficient, and optimized code. I build responsive, interactive, and user-friendly web applications using the latest front-end technologies like React.' 
    },
    { 
      id: 's2', icon: <Layers size={24} strokeWidth={1.5} />, title: 'Back-End Dev', 
      desc: 'I develop robust server-side applications that power dynamic and data-driven websites. From API creation to database management, I ensure your web apps run smoothly and efficiently.' 
    },
    { 
      id: 's3', icon: <Monitor size={24} strokeWidth={1.5} />, title: 'UI/UX Design', 
      desc: 'I design intuitive and visually compelling user interfaces that enhance engagement. My approach focuses on user behavior, accessibility, and aesthetics to deliver a polished digital experience.' 
    },
    { 
      id: 's4', icon: <Shield size={24} strokeWidth={1.5} />, title: 'Security Optimization', 
      desc: 'Slow and vulnerable websites lose visitors. I enhance website performance and security with code optimization, caching strategies, and defensive architecture.' 
    }
  ];

  const projects = [
    { id: 'p1', title: 'Vanguard Cyber Portal', desc: 'A vibrant React.js dashboard for enterprise security monitoring, celebrating data clarity and defensive insights. The platform features real-time threat intelligence.' },
    { id: 'p2', title: 'Apex FinTech Engine', desc: 'High-performance transaction processing interface with microsecond latency. Built for a tier-1 financial institution handling millions in daily volume.' },
    { id: 'p3', title: 'Lumina E-Commerce', desc: 'Checkout page designed for frictionless product purchasing. A high-quality e-commerce platform delivering fresh experiences and high conversion rates.' },
    { id: 'p4', title: 'Aura Analytics', desc: 'Admin Panel streamlines website management, enabling efficient updates to events and content. A simple and user-friendly tool for the team to keep the site dynamic.' }
  ];

  const faqs = [
    { id: 'f1', q: 'Who are you, and what do you do?', a: 'I am a Full Stack Developer and Security Researcher. I build scalable digital infrastructure and conduct rigorous security audits for enterprise clients globally.' },
    { id: 'f2', q: 'What services do you provide?', a: 'I offer end-to-end web application development, UI/UX engineering, backend database architecture, and comprehensive cybersecurity vulnerability assessments.' },
    { id: 'f3', q: 'What technologies do you work with?', a: 'My core stack revolves around React.js, Node.js, PostgreSQL, and Python. For security, I utilize industry-standard tools like Burp Suite and custom automated scripts.' },
    { id: 'f4', q: 'How do you approach a new project?', a: 'Every project begins with a deep discovery phase to understand business goals, followed by wireframing, architecture planning, agile development, and rigorous security testing prior to launch.' },
    { id: 'f5', q: 'Can you redesign an existing website?', a: 'Yes, I specialize in transforming legacy applications into modern, high-performance web experiences using current frameworks and secure coding practices.' },
    { id: 'f6', q: 'How can I collaborate with you on a project?', a: 'You can reach out via the contact form below or email me directly. We will schedule a strategic consultation to align on your vision and technical requirements.' }
  ];

  // High-End Custom SVG Render Engine
  const renderProjectGraphic = (id) => {
    switch(id) {
      case 'p1': return (
        <svg viewBox="0 0 400 300" className="w-full max-w-md animate-in zoom-in duration-500">
          <rect width="400" height="300" fill="#141414" rx="8"/>
          <circle cx="200" cy="150" r="80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <circle cx="200" cy="150" r="100" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4"/>
          <circle cx="200" cy="150" r="40" fill="#ffffff" opacity="0.05"/>
          <path d="M200 70 L200 230 M120 150 L280 150" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
          <circle cx="200" cy="150" r="4" fill="#ffffff"/>
          <circle cx="256" cy="94" r="3" fill="#ffffff"/>
          <circle cx="144" cy="206" r="3" fill="#ffffff"/>
          <path d="M200 150 L256 94 M200 150 L144 206" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
        </svg>
      );
      case 'p2': return (
        <svg viewBox="0 0 400 300" className="w-full max-w-md animate-in zoom-in duration-500">
          <rect width="400" height="300" fill="#141414" rx="8"/>
          <rect x="40" y="40" width="320" height="220" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="4"/>
          <line x1="40" y1="80" x2="360" y2="80" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <rect x="60" y="120" width="40" height="100" fill="rgba(255,255,255,0.1)"/>
          <rect x="120" y="160" width="40" height="60" fill="rgba(255,255,255,0.2)"/>
          <rect x="180" y="90" width="40" height="130" fill="rgba(255,255,255,0.05)"/>
          <rect x="240" y="140" width="40" height="80" fill="rgba(255,255,255,0.15)"/>
          <rect x="300" y="70" width="40" height="150" fill="rgba(255,255,255,0.3)"/>
          <polyline points="60,120 120,160 180,90 240,140 300,70" fill="none" stroke="#ffffff" strokeWidth="2"/>
        </svg>
      );
      case 'p3': return (
        <svg viewBox="0 0 400 300" className="w-full max-w-md animate-in zoom-in duration-500">
          <rect width="400" height="300" fill="#141414" rx="8"/>
          <rect x="60" y="60" width="180" height="180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <rect x="260" y="60" width="80" height="10" fill="rgba(255,255,255,0.2)"/>
          <rect x="260" y="80" width="60" height="6" fill="rgba(255,255,255,0.1)"/>
          <rect x="260" y="96" width="70" height="6" fill="rgba(255,255,255,0.1)"/>
          <rect x="260" y="130" width="40" height="20" fill="none" stroke="#ffffff" strokeWidth="1"/>
          <circle cx="150" cy="150" r="40" fill="rgba(255,255,255,0.05)"/>
          <path d="M120 180 L180 120" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
        </svg>
      );
      case 'p4': return (
        <svg viewBox="0 0 400 300" className="w-full max-w-md animate-in zoom-in duration-500">
          <rect width="400" height="300" fill="#141414" rx="8"/>
          <rect x="40" y="40" width="80" height="220" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <rect x="140" y="40" width="220" height="220" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
          <rect x="160" y="60" width="180" height="40" fill="rgba(255,255,255,0.05)"/>
          <circle cx="60" cy="60" r="8" fill="rgba(255,255,255,0.2)"/>
          <rect x="52" y="80" width="56" height="4" fill="rgba(255,255,255,0.1)"/>
          <rect x="52" y="94" width="40" height="4" fill="rgba(255,255,255,0.1)"/>
          <rect x="160" y="120" width="80" height="80" fill="rgba(255,255,255,0.03)"/>
          <rect x="250" y="120" width="80" height="80" fill="rgba(255,255,255,0.03)"/>
        </svg>
      );
      default: return null;
    }
  }

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black">
      
      {/* 1. Minimalist Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414] to-[#0d0d0d] opacity-50 pointer-events-none"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2 text-gray-400 mb-8 text-xs uppercase tracking-[0.2em]">
            <MapPin size={12} /> Pune, India
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
            I'm Arun Ammisetty<br />
            <span className="text-gray-500">Full Stack Developer</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
            I specialize in researching and analyzing your brand and provide you a beautiful and effective website for making a digital standing among your competitors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button onClick={() => navigate('contact')} className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-medium hover:bg-gray-200 transition-colors text-sm">
              Get yours now
            </button>
            <button onClick={() => navigate('projects')} className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-white border border-white/10 font-medium hover:bg-white/5 transition-colors text-sm">
              See my works
            </button>
          </div>
        </div>
      </section>

      {/* 2. Technologies Marquee (Static Elegance) */}
      <section className="py-12 border-y border-white/10 bg-[#0d0d0d] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-16 text-gray-600 text-xs md:text-sm font-medium tracking-wide">
          <span>JavaScript</span>
          <span className="text-gray-300">React.js</span>
          <span>Node</span>
          <span>Express</span>
          <span>Tailwind</span>
          <span className="text-gray-300">Kali Linux</span>
          <span>Python</span>
          <span>PostgreSQL</span>
          <span>MongoDB</span>
          <span>Figma</span>
        </div>
      </section>

      {/* 3. Facts and Figures Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-8">
        <div className="md:col-span-4">
          <h3 className="text-3xl text-white font-medium tracking-tight">Facts and figures</h3>
        </div>
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
          {stats.map(s => (
            <div key={s.id}>
              <div className="text-6xl md:text-8xl font-light text-white mb-6 tracking-tighter">{s.num}</div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. My Services Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 border-t border-white/10">
        <div className="lg:col-span-4">
          <h2 className="text-5xl font-semibold text-white mb-8 tracking-tight">My Services</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
            Explore my range of services designed to go beyond aesthetics. I craft visually appealing and fully functional websites tailored to your business needs.
          </p>
          <button onClick={() => navigate('services')} className="px-6 py-3 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors">
            Learn More
          </button>
        </div>
        <div className="lg:col-span-8 flex flex-col">
          {services.map(srv => (
            <div key={srv.id} className="group border-b border-white/10 pb-10 mb-10 last:border-0 last:pb-0 last:mb-0">
              <div className="flex items-start gap-8">
                <div className="mt-1 text-white/40 group-hover:text-white transition-colors duration-500">{srv.icon}</div>
                <div>
                  <h4 className="text-2xl font-medium text-white mb-4 tracking-tight">{srv.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{srv.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Projects & Creative Designs Section */}
      <section className="py-32 bg-[#141414] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-semibold text-white mb-16 tracking-tight leading-tight">Projects I've Created for My Clients</h2>
            <div className="flex flex-col">
              {projects.map(proj => (
                <button 
                  key={proj.id} 
                  onMouseEnter={() => setActiveProject(proj.id)} 
                  onClick={() => navigate('project-detail')}
                  className={`text-left border-b border-white/10 py-8 transition-colors group ${activeProject === proj.id ? 'text-white' : 'text-gray-500 hover:text-gray-300'}`}
                >
                  <h4 className="text-2xl font-medium mb-2 flex items-center justify-between">
                    {proj.title}
                    <ArrowRight size={18} className={`transition-all duration-300 ${activeProject === proj.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-50 group-hover:-translate-x-2'}`} />
                  </h4>
                  {activeProject === proj.id && (
                    <p className="text-gray-400 text-sm mt-4 font-light leading-relaxed animate-in fade-in slide-in-from-top-2 duration-500 max-w-md">
                      {proj.desc}
                    </p>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl aspect-video bg-[#0d0d0d] border border-white/10 flex items-center justify-center p-8 overflow-hidden rounded-sm">
               {renderProjectGraphic(activeProject)}
            </div>
          </div>
        </div>
      </section>

      {/* 6. About Profile Section */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-white/10">
        <div className="lg:col-span-5 relative flex justify-center lg:justify-start">
          <div className="w-full max-w-sm aspect-[4/5] border border-white/20 relative z-10 bg-[#141414] flex items-center justify-center overflow-hidden rounded-sm">
            {/* Abstract Minimalist Portrait Graphic */}
            <svg viewBox="0 0 200 250" className="w-full h-full opacity-20">
              <circle cx="100" cy="100" r="40" fill="none" stroke="#fff" strokeWidth="2"/>
              <path d="M40 250 Q100 160 160 250" fill="none" stroke="#fff" strokeWidth="2"/>
              <line x1="100" y1="140" x2="100" y2="190" stroke="#fff" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute top-8 left-8 w-full max-w-sm aspect-[4/5] border border-white/5 z-0 rounded-sm"></div>
        </div>
        <div className="lg:col-span-7">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-8 leading-snug tracking-tight">
            I am Arun, a full stack web developer and security researcher working remotely in my home at Pune, India
          </h2>
          <p className="text-gray-400 font-light leading-relaxed mb-6 text-lg">
            I've spent the last 5+ years learning and working across different areas of development: front-end engineering, robust backend architecture, UI/UX design, and creating secure environments for enterprise clients.
          </p>
          <p className="text-gray-400 font-light leading-relaxed mb-10 text-lg">
            My mission is to help small and medium-sized businesses grow their audience and brand recognition by providing them a stylish, fast, and fully functional digital ecosystem.
          </p>
          <div className="flex gap-4">
            <button onClick={() => navigate('cv-builder')} className="px-8 py-3 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors">My Resume</button>
            <button onClick={() => navigate('contact')} className="px-8 py-3 bg-transparent text-white border border-white/10 font-medium text-sm hover:bg-white/5 transition-colors">Hire me</button>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-32 max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-20 tracking-tight leading-tight">Frequently Asked<br/>Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {faqs.map(faq => (
            <div key={faq.id} className="border-b border-white/10">
              <button 
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)} 
                className="w-full py-8 flex justify-between items-center text-left text-white hover:text-gray-300 transition-colors"
              >
                <span className="font-medium text-base pr-4 tracking-tight">{faq.q}</span>
                <Plus size={18} className={`shrink-0 text-gray-500 transition-transform duration-500 ${activeFaq === faq.id ? 'rotate-45 text-white' : ''}`} />
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

      {/* 8. Contact Form Section */}
      <section className="py-32 bg-[#141414] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <p className="text-gray-500 text-sm mb-4 font-medium tracking-wide">Contact me</p>
            <h2 className="text-5xl font-semibold text-white mb-8 tracking-tight">Get in touch</h2>
            <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg max-w-md">
              It is very important for us to keep in touch with you, so we are always ready to answer any question that interests you.
            </p>
            <div className="flex items-center gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:contact.aa@tuta.io" className="hover:text-white transition-colors"><Mail size={20} /></a>
            </div>
          </div>
          <div className="lg:col-span-7">
             <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12" onSubmit={(e) => e.preventDefault()}>
               <div className="flex flex-col border-b border-white/20 focus-within:border-white transition-colors pb-3">
                 <label className="text-xs text-gray-500 mb-2 font-medium">Full name</label>
                 <input type="text" className="bg-transparent text-white outline-none font-medium w-full" />
               </div>
               <div className="flex flex-col border-b border-white/20 focus-within:border-white transition-colors pb-3">
                 <label className="text-xs text-gray-500 mb-2 font-medium">Email address</label>
                 <input type="email" className="bg-transparent text-white outline-none font-medium w-full" />
               </div>
               <div className="flex flex-col border-b border-white/20 focus-within:border-white transition-colors pb-3">
                 <label className="text-xs text-gray-500 mb-2 font-medium">Phone Number</label>
                 <input type="tel" className="bg-transparent text-white outline-none font-medium w-full" />
               </div>
               <div className="flex flex-col border-b border-white/20 focus-within:border-white transition-colors pb-3">
                 <label className="text-xs text-gray-500 mb-2 font-medium">Subject</label>
                 <input type="text" className="bg-transparent text-white outline-none font-medium w-full" />
               </div>
               <div className="md:col-span-2 flex flex-col border-b border-white/20 focus-within:border-white transition-colors pb-3">
                 <label className="text-xs text-gray-500 mb-2 font-medium">Write your message here</label>
                 <textarea rows="1" className="bg-transparent text-white outline-none font-medium w-full resize-none"></textarea>
               </div>
               <div className="md:col-span-2 mt-4">
                 <button type="submit" className="px-8 py-3.5 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors">
                   Send Message
                 </button>
               </div>
             </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
import React, { useState, useEffect } from 'react';
import { 
  FileText, Printer, ShieldCheck, Zap, 
  CheckCircle, Database, Layout, Search, 
  ArrowRight, Plus, Terminal
} from 'lucide-react';

const CvBuilder = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState({
    name: 'Arun Ammisetty',
    title: 'Principal Architect & Security Researcher',
    email: 'contact.aa@tuta.io',
    website: 'go.ly/vc',
    summary: 'Multi-disciplinary digital architect bridging the gap between complex engineering, impenetrable security, and elegant user experiences. Proven track record of scaling enterprise infrastructures and conducting zero-day vulnerability research.',
    experience: 'Founder & Chief Architect | Vanguard Cyber (2023 - Present)\n- Led end-to-end digital transformation for tier-1 financial clients.\n- Architected zero-trust networks and performed rigorous penetration testing.\n\nSenior Full-Stack Engineer | Global Tech Solutions (2021 - 2023)\n- Scaled Node.js microservices to handle 10M+ daily requests.\n- Optimized React frontend performance, reducing LCP by 40%.',
    skills: 'React.js, Next.js, Node.js, Python, PostgreSQL, Penetration Testing, OWASP Top 10, AWS, Docker',
    clearance: 'ISO 27001 Auditor | Offensive Security Certified'
  });

  const loadPreset = (preset) => {
    if (preset === 'frontend') {
      setData({
        name: 'Arun Ammisetty',
        title: 'Lead Front-End Engineer',
        email: 'contact.aa@tuta.io',
        website: 'github.com/arun',
        summary: 'Specialized in building high-performance, accessible, and pixel-perfect user interfaces using modern JavaScript frameworks. Passionate about UX engineering and design systems.',
        experience: 'Lead UI Engineer | Creative Agency (2022 - Present)\n- Architected a highly scalable component library used across 12 enterprise products.\n- Mentored a team of 5 junior developers in advanced React patterns.\n\nFrontend Developer | Tech Startup (2020 - 2022)\n- Migrated legacy monolithic frontend to a decoupled Next.js architecture.',
        skills: 'JavaScript (ES6+), React, TypeScript, Tailwind CSS, Framer Motion, Webpack, Jest',
        clearance: 'WCAG 2.1 AA Accessibility Expert'
      });
    } else if (preset === 'security') {
      setData({
        name: 'Arun Ammisetty',
        title: 'Cybersecurity Analyst',
        email: 'contact.aa@tuta.io',
        website: 'vanguardcyber.io',
        summary: 'Offensive security researcher focused on identifying and mitigating critical vulnerabilities in web applications and enterprise networks before malicious exploitation.',
        experience: 'Security Analyst | Vanguard Cyber (2023 - Present)\n- Conducted 50+ rigorous penetration tests on financial sector infrastructures.\n- Discovered and responsibly disclosed 3 zero-day vulnerabilities.\n\nSOC Analyst | SecureNet (2021 - 2023)\n- Monitored network telemetry for advanced persistent threats (APTs).',
        skills: 'Burp Suite, Kali Linux, Wireshark, Metasploit, Python Scripting, Cryptography',
        clearance: 'OSCP | Certified Ethical Hacker (CEH)'
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-20">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden print:hidden">
        {/* Animated Abstract Data Compilation SVG */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
          <svg viewBox="0 0 1000 600" className="w-[120%] h-[120%]">
            <rect x="200" y="100" width="100" height="20" fill="rgba(255,255,255,0.2)" className="animate-pulse" style={{animationDuration: '2s'}}/>
            <rect x="200" y="140" width="300" height="20" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <rect x="200" y="180" width="200" height="20" fill="rgba(255,255,255,0.1)" />
            <rect x="200" y="220" width="400" height="20" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 4" />
            <path d="M650 150 L800 150 M650 230 L750 230" stroke="#ffffff" strokeWidth="1" />
            <circle cx="800" cy="150" r="4" fill="#ffffff" />
            <circle cx="750" cy="230" r="4" fill="#ffffff" />
          </svg>
        </div>

        <div className="relative z-10 text-center">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Professional Formatting Engine</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Dossier<br />
            <span className="text-gray-500">Generator.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Compile your professional experience into a stark, ATS-optimized, high-contrast document designed to bypass automated filters and impress technical recruiters.
          </p>
        </div>
      </section>

      {/* 2. Engineering Philosophy */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center border-b border-white/10 print:hidden">
        <h3 className="text-2xl md:text-4xl font-light text-white leading-snug tracking-tight">
          "A modern curriculum vitae should not be a design experiment. It must be a flawlessly structured dataset, optimized for both human parsing and machine ingestion."
        </h3>
      </section>

      {/* Main Builder Interface */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        
        {/* 3. Rapid Prototyping (Role Presets) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 print:hidden">
          <div className="flex items-center gap-3 text-white">
            <Terminal size={20} strokeWidth={1.5} className="text-gray-500" />
            <h2 className="text-xl font-medium tracking-tight">Compile Environment</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-600 self-center mr-2">Load Preset Matrix:</span>
            <button onClick={() => loadPreset('frontend')} className="px-4 py-2 border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:border-white/30 transition-colors">
              UI/UX Engineer
            </button>
            <button onClick={() => loadPreset('security')} className="px-4 py-2 border border-white/10 text-xs font-medium text-gray-400 hover:text-white hover:border-white/30 transition-colors">
              Cybersecurity Analyst
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* 4. High-End Editor Console */}
          <div className="lg:col-span-5 space-y-8 print:hidden">
            <div className="bg-[#141414] border border-white/10 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">Executive Identity</h3>
              <div className="space-y-6">
                <div className="flex flex-col relative group">
                  <input type="text" id="name" value={data.name} onChange={e=>setData({...data, name: e.target.value})} className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Full Name" />
                  <label htmlFor="name" className="absolute left-0 -top-5 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-white font-medium uppercase tracking-widest">Full Name</label>
                </div>
                <div className="flex flex-col relative group pt-2">
                  <input type="text" id="title" value={data.title} onChange={e=>setData({...data, title: e.target.value})} className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Professional Title" />
                  <label htmlFor="title" className="absolute left-0 -top-3 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-medium uppercase tracking-widest">Professional Title</label>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="flex flex-col relative group">
                    <input type="email" id="email" value={data.email} onChange={e=>setData({...data, email: e.target.value})} className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Email" />
                    <label htmlFor="email" className="absolute left-0 -top-3 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-medium uppercase tracking-widest">Email</label>
                  </div>
                  <div className="flex flex-col relative group">
                    <input type="text" id="website" value={data.website} onChange={e=>setData({...data, website: e.target.value})} className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Website / GitHub" />
                    <label htmlFor="website" className="absolute left-0 -top-3 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-medium uppercase tracking-widest">Website / Portfolio</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#141414] border border-white/10 p-8">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white mb-8 border-b border-white/10 pb-4">Architectural Overview</h3>
              <div className="space-y-6">
                <div className="flex flex-col relative group">
                  <textarea rows="4" id="summary" value={data.summary} onChange={e=>setData({...data, summary: e.target.value})} className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none leading-relaxed" placeholder="Executive Summary"></textarea>
                  <label htmlFor="summary" className="absolute left-0 -top-5 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-white font-medium uppercase tracking-widest">Executive Summary</label>
                </div>
                <div className="flex flex-col relative group pt-2">
                  <textarea rows="6" id="experience" value={data.experience} onChange={e=>setData({...data, experience: e.target.value})} className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent resize-none leading-relaxed" placeholder="Professional Experience"></textarea>
                  <label htmlFor="experience" className="absolute left-0 -top-3 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-medium uppercase tracking-widest">Professional Experience (Markdown Supported)</label>
                </div>
                <div className="flex flex-col relative group pt-2">
                  <input type="text" id="skills" value={data.skills} onChange={e=>setData({...data, skills: e.target.value})} className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Core Technical Stack" />
                  <label htmlFor="skills" className="absolute left-0 -top-3 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-medium uppercase tracking-widest">Core Technical Stack (Comma Separated)</label>
                </div>
                <div className="flex flex-col relative group pt-2">
                  <input type="text" id="clearance" value={data.clearance} onChange={e=>setData({...data, clearance: e.target.value})} className="w-full bg-transparent border-b border-white/20 pb-2 text-sm text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Clearance / Certifications" />
                  <label htmlFor="clearance" className="absolute left-0 -top-3 text-[10px] text-gray-500 transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-[10px] peer-focus:text-white font-medium uppercase tracking-widest">Certifications / Clearance</label>
                </div>
              </div>
            </div>

            {/* 6. Document Export / Print Protocol */}
            <div className="bg-[#141414] border border-white/10 p-8 flex flex-col items-center text-center">
              <Printer size={32} className="text-white/40 mb-4" strokeWidth={1} />
              <h3 className="text-lg font-medium text-white mb-2">Compile Document</h3>
              <p className="text-gray-400 text-xs font-light mb-6">Executes native browser print dialog. Set destination to 'Save as PDF' with 'Background Graphics' disabled for optimal ATS parsing.</p>
              <button onClick={handlePrint} className="w-full py-4 bg-white text-black font-semibold text-sm uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center justify-center gap-3">
                Execute Compilation
              </button>
            </div>
          </div>

          {/* 5. Live Document Preview */}
          <div className="lg:col-span-7">
            <div className="sticky top-24">
              <div className="flex justify-between items-center mb-4 print:hidden">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">Live Preview Buffer</span>
                <span className="text-[10px] font-mono text-green-500 flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div> Syncing</span>
              </div>
              
              {/* The Stark, Print-Ready Document */}
              <div id="cv-print-area" className="bg-white text-black p-10 md:p-16 shadow-2xl min-h-[842px] max-w-[595px] mx-auto font-sans print:p-0 print:shadow-none print:m-0 print:w-full print:max-w-none">
                
                <header className="border-b border-gray-300 pb-6 mb-6">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-2 leading-none uppercase">{data.name}</h1>
                  <h2 className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-4">{data.title}</h2>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-medium text-gray-500">
                    <span className="flex items-center gap-1">{data.email}</span>
                    <span className="flex items-center gap-1">{data.website}</span>
                    <span className="flex items-center gap-1">{data.clearance}</span>
                  </div>
                </header>

                <section className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-2 mb-3">Executive Summary</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-light">{data.summary}</p>
                </section>

                <section className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-2 mb-3">Professional Experience</h3>
                  <div className="text-sm text-gray-700 leading-relaxed font-light whitespace-pre-wrap">
                    {data.experience}
                  </div>
                </section>

                <section>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-800 border-b border-gray-300 pb-2 mb-4">Technical Arsenal</h3>
                  <div className="flex flex-wrap gap-2">
                    {data.skills.split(',').map((skill, idx) => (
                      <span key={idx} className="border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700 rounded-sm bg-gray-50">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </section>
                
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. ATS & Parsing Metrics (Facts & Figures) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10 print:hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">Parser<br/>Optimization</h3>
            <p className="text-gray-400 font-light mt-4 text-sm max-w-xs">Built specifically to navigate strict enterprise applicant tracking systems.</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">100%</div>
              <p className="text-gray-400 text-sm font-light">Machine readability score. No complex columns, images, or un-parseable graphics.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">0</div>
              <p className="text-gray-400 text-sm font-light">CSS or JavaScript required for the final output. Pure semantic data structures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Custom Data Architecture SVG & 9. Security Guarantee */}
      <section className="py-32 bg-[#141414] border-b border-white/10 print:hidden overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight flex items-center gap-3">
                <Database size={20} className="text-white/40" strokeWidth={1.5} /> Data Ingestion
              </h3>
              <p className="text-gray-400 font-light text-base leading-relaxed">
                The generator takes unstructured string inputs and maps them into a rigorous, semantic HTML schema, ensuring high-fidelity rendering upon print execution.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6 tracking-tight flex items-center gap-3">
                <ShieldCheck size={20} className="text-white/40" strokeWidth={1.5} /> Absolute Privacy
              </h3>
              <p className="text-gray-400 font-light text-base leading-relaxed">
                All data entered into this form is managed within the local React state of your browser. Zero bytes are transmitted to any external server or database. Absolute privacy is guaranteed.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            {/* Architectural Data Flow SVG */}
            <div className="w-full max-w-lg aspect-[4/3] bg-[#0d0d0d] border border-white/10 p-8 flex items-center justify-center relative">
              <svg viewBox="0 0 400 300" className="w-full h-full opacity-60">
                {/* Inputs */}
                <rect x="20" y="50" width="80" height="20" fill="none" stroke="#ffffff" strokeWidth="0.5" rx="2" />
                <rect x="20" y="100" width="80" height="20" fill="none" stroke="#ffffff" strokeWidth="0.5" rx="2" />
                <rect x="20" y="150" width="80" height="40" fill="none" stroke="#ffffff" strokeWidth="0.5" rx="2" />
                {/* Processing Node */}
                <circle cx="200" cy="120" r="40" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <path d="M185 120 L200 135 L225 100" fill="none" stroke="#ffffff" strokeWidth="2" />
                {/* Data Lines */}
                <path d="M100 60 Q150 60 165 100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" className="animate-[pulse_2s_linear_infinite]" />
                <path d="M100 110 L160 120" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" className="animate-[pulse_2s_linear_infinite] delay-75" />
                <path d="M100 170 Q150 170 165 140" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 2" className="animate-[pulse_2s_linear_infinite] delay-150" />
                {/* Output Document */}
                <rect x="280" y="50" width="100" height="140" fill="#ffffff" />
                <rect x="290" y="60" width="50" height="6" fill="#141414" />
                <rect x="290" y="72" width="30" height="4" fill="rgba(0,0,0,0.5)" />
                <rect x="290" y="90" width="80" height="2" fill="rgba(0,0,0,0.2)" />
                <rect x="290" y="96" width="70" height="2" fill="rgba(0,0,0,0.2)" />
                <rect x="290" y="102" width="80" height="2" fill="rgba(0,0,0,0.2)" />
                {/* Output connection */}
                <path d="M240 120 L280 120" fill="none" stroke="#ffffff" strokeWidth="1" />
                <circle cx="260" cy="120" r="3" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Typography & Formatting Standards */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10 print:hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-3xl font-medium text-white tracking-tight">Typography Standards</h2>
          <p className="text-gray-400 font-light text-sm max-w-sm">
            Architectural decisions behind the generated document's visual hierarchy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/10 hover:border-white/30 transition-colors">
            <Layout size={24} className="text-white/40 mb-6" />
            <h4 className="text-lg font-medium text-white mb-3">Single Column Layout</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Multi-column resumes frequently break ATS reading algorithms, causing text to be parsed out of order. We strictly enforce a single, top-down hierarchy.</p>
          </div>
          <div className="p-8 border border-white/10 hover:border-white/30 transition-colors">
            <Zap size={24} className="text-white/40 mb-6" />
            <h4 className="text-lg font-medium text-white mb-3">High Contrast Matrix</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">The print output utilizes pure black (`#000000`) on pure white (`#ffffff`) ensuring flawless legibility whether viewed on an iPad or printed physically.</p>
          </div>
          <div className="p-8 border border-white/10 hover:border-white/30 transition-colors">
            <Search size={24} className="text-white/40 mb-6" />
            <h4 className="text-lg font-medium text-white mb-3">Semantic Sub-Headers</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Sections are separated by distinct, uppercase headers with subtle bottom borders, providing clear visual anchors for human recruiters skimming the document.</p>
          </div>
        </div>
      </section>

      {/* 11. Final Minimalist CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12 print:hidden">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Need to build<br />
            your team?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            I am actively available for senior architecture and security consultation roles.
          </p>
        </div>
        <button onClick={() => navigate('contact')} className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shrink-0 flex items-center gap-3">
          Contact Arun <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default CvBuilder;
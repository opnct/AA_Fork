import React, { useState, useEffect } from 'react';
import { 
  Search, ArrowRight, Mail, ArrowUpRight, 
  ShieldCheck, Activity, Play, Headphones,
  BarChart, Layers, Terminal, CheckCircle
} from 'lucide-react';

const Newsletter = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const categories = ['All', 'Architecture', 'Security', 'Engineering', 'Business'];

  const issues = [
    { 
      id: 1, 
      title: 'Architecting Zero-Trust Networks in 2026', 
      date: 'Oct 2026', 
      readTime: '8 min read',
      category: 'Security',
      desc: 'An executive breakdown of migrating legacy systems to a strict zero-trust perimeter, featuring real-world latency metrics and implementation strategies.' 
    },
    { 
      id: 2, 
      title: 'The Post-React Era: Performance at the Edge', 
      date: 'Sep 2026', 
      readTime: '12 min read',
      category: 'Engineering',
      desc: 'Analyzing the shift towards edge compute rendering and how it impacts Largest Contentful Paint (LCP) in enterprise e-commerce applications.' 
    },
    { 
      id: 3, 
      title: 'Mitigating AI-Generated Phishing Payloads', 
      date: 'Aug 2026', 
      readTime: '6 min read',
      category: 'Security',
      desc: 'LLMs have democratized spear-phishing. We explore automated defense mechanisms and algorithmic email validation frameworks.' 
    },
    { 
      id: 4, 
      title: 'Scaling PostgreSQL for FinTech Startups', 
      date: 'Jul 2026', 
      readTime: '15 min read',
      category: 'Architecture',
      desc: 'A deep dive into connection pooling, read replicas, and indexing strategies to handle millions of transactions without compromising ACID compliance.' 
    },
    { 
      id: 5, 
      title: 'WebAssembly: The Next Frontier of Frontend', 
      date: 'Jun 2026', 
      readTime: '10 min read',
      category: 'Engineering',
      desc: 'How compiling Rust and C++ to WebAssembly is allowing browsers to run complex CAD and video editing tools natively.' 
    },
    { 
      id: 6, 
      title: 'Measuring ROI on Cybersecurity Audits', 
      date: 'May 2026', 
      readTime: '7 min read',
      category: 'Business',
      desc: 'Translating technical vulnerabilities into financial risk models to secure stakeholder buy-in for infrastructure upgrades.' 
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API network request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubscribed(true);
    }, 1500);
  };

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(search.toLowerCase()) || issue.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || issue.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-20">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Geometry SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
          <svg viewBox="0 0 1000 600" className="w-[120%] h-[120%] animate-[pulse_8s_ease-in-out_infinite]">
            <rect x="200" y="100" width="600" height="400" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="5 10"/>
            <rect x="250" y="150" width="500" height="300" fill="none" stroke="#ffffff" strokeWidth="0.5"/>
            <circle cx="500" cy="300" r="100" fill="none" stroke="#ffffff" strokeWidth="1"/>
            <path d="M200 100 L800 500 M200 500 L800 100" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Monthly Intelligence</p>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
              Executive<br />
              <span className="text-gray-500">Digest.</span>
            </h1>
            <p className="max-w-lg text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Curated insights on high-performance architecture, defensive security, and digital business strategy.
            </p>
          </div>
          
          {/* 2. High-End Subscription Engine */}
          <div className="bg-[#141414] border border-white/10 p-8 lg:p-12">
            {subscribed ? (
              <div className="text-center py-8 animate-in zoom-in-95 duration-500">
                <CheckCircle size={48} className="mx-auto mb-6 text-white" strokeWidth={1} />
                <h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Access Granted</h3>
                <p className="text-gray-400 font-light text-sm">Your secure email has been added to the distribution ledger. Expect the next issue shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-8">
                <div className="flex items-center gap-3 text-white mb-4">
                  <Mail size={20} strokeWidth={1.5} />
                  <h3 className="text-xl font-medium tracking-tight">Join the Network</h3>
                </div>
                
                <div className="flex flex-col relative group">
                  <input 
                    type="email" 
                    required 
                    id="email" 
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent disabled:opacity-50" 
                    placeholder="Corporate Email" 
                  />
                  <label htmlFor="email" className="absolute left-0 -top-5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white font-medium cursor-text">
                    Corporate Email Address
                  </label>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black text-xs font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center gap-3"
                >
                  {isSubmitting ? <><Activity size={16} className="animate-spin"/> Registering Node...</> : 'Subscribe Now'}
                </button>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">Strictly No Spam. Unsubscribe Anytime.</p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. Featured Insight (Spotlight) */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        <p className="text-gray-500 text-xs mb-8 tracking-[0.3em] uppercase font-medium">Latest Publication</p>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center cursor-pointer group">
          <div className="lg:col-span-7 lg:order-2">
            <div className="w-full aspect-[16/9] bg-[#141414] border border-white/10 p-8 flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-white/30">
              {/* Custom Tech/Security SVG Illustration */}
              <svg viewBox="0 0 600 400" className="w-full h-full opacity-70 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105 transform">
                <rect x="100" y="50" width="400" height="300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" rx="8"/>
                <path d="M100 100 L500 100" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                <circle cx="130" cy="75" r="4" fill="#ffffff" opacity="0.5"/>
                <circle cx="150" cy="75" r="4" fill="#ffffff" opacity="0.5"/>
                <circle cx="170" cy="75" r="4" fill="#ffffff" opacity="0.5"/>
                <rect x="150" y="150" width="100" height="150" fill="rgba(255,255,255,0.03)" stroke="#ffffff" strokeWidth="0.5"/>
                <rect x="280" y="200" width="100" height="100" fill="rgba(255,255,255,0.03)" stroke="#ffffff" strokeWidth="0.5"/>
                <path d="M250 200 L280 230" stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" className="animate-pulse"/>
                <circle cx="420" cy="180" r="40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="10"/>
                <circle cx="420" cy="180" r="40" fill="none" stroke="#ffffff" strokeWidth="10" strokeDasharray="100 250" className="animate-[spin_4s_linear_infinite]"/>
              </svg>
            </div>
          </div>
          <div className="lg:col-span-5 lg:order-1 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-semibold tracking-[0.2em] text-white uppercase border border-white/20 px-3 py-1 rounded-full">
                Security
              </span>
              <span className="text-gray-500 font-mono text-xs">Oct 2026 • 8 min read</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight group-hover:text-gray-300 transition-colors">
              Architecting Zero-Trust Networks in 2026.
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              An executive breakdown of migrating legacy systems to a strict zero-trust perimeter, featuring real-world latency metrics and implementation strategies.
            </p>
            <span className="text-sm font-medium text-white flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
              Read Publication <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </section>

      {/* 4. Editorial Filter Engine & 5. Live Search */}
      <section className="py-12 bg-[#141414] border-b border-white/10 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-medium uppercase tracking-widest transition-colors border
                  ${activeCategory === cat ? 'bg-white text-black border-white' : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30 hover:text-white'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72 group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" size={16} strokeWidth={1.5} />
            <input 
              type="text" 
              value={search}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search archive..."
              className="w-full bg-transparent border-b border-white/20 py-2 pl-8 pr-4 text-sm text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600 font-light"
            />
          </div>

        </div>
      </section>

      {/* 6. The Archive Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        
        {/* 7. Empty State Logic */}
        {filteredIssues.length === 0 && (
          <div className="bg-[#141414] border border-white/10 p-12 text-center flex flex-col items-center justify-center min-h-[300px]">
            <Terminal size={48} className="text-gray-600 mb-6" strokeWidth={1} />
            <h3 className="text-2xl font-medium text-white tracking-tight mb-4">No publications found</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              The query parameters did not match any articles in the current editorial archive.
            </p>
            <button onClick={() => {setSearch(''); setActiveCategory('All');}} className="mt-8 px-6 py-2 border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">
              Reset Filters
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredIssues.map((issue) => (
            <div key={issue.id} className="group bg-[#141414] border border-white/5 p-8 flex flex-col h-full hover:bg-[#1a1a1a] hover:border-white/20 transition-all duration-300 cursor-pointer animate-in fade-in slide-in-from-bottom-4">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[10px] font-semibold tracking-widest text-gray-400 uppercase">
                  {issue.category}
                </span>
                <span className="text-[10px] font-mono text-gray-600">
                  {issue.date}
                </span>
              </div>
              <h3 className="text-xl font-medium text-white mb-4 tracking-tight leading-snug group-hover:text-gray-300 transition-colors">
                {issue.title}
              </h3>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-8 flex-grow">
                {issue.desc}
              </p>
              <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                <span className="text-xs text-gray-600 font-medium">{issue.readTime}</span>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Facts and Figures (Demographics) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">Reader<br/>Demographics</h3>
            <p className="text-gray-400 font-light mt-4 text-sm max-w-xs">Join a highly curated network of technology leaders and engineering professionals.</p>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">15k+</div>
              <p className="text-gray-400 text-sm font-light">Active subscribers receiving the monthly executive digest.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">42%</div>
              <p className="text-gray-400 text-sm font-light">Average open rate, significantly exceeding the industry standard of 21%.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">Tier-1</div>
              <p className="text-gray-400 text-sm font-light">Primary demographic composed of CTOs, Lead Engineers, and Security Analysts.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">0%</div>
              <p className="text-gray-400 text-sm font-light">Advertisements or sponsored content. Pure, unadulterated technical research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Audio Digest Promo */}
      <section className="py-32 bg-[#141414] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 text-white mb-6">
              <Headphones size={24} strokeWidth={1.5} />
              <h2 className="text-3xl font-semibold tracking-tight">Audio Edition</h2>
            </div>
            <p className="text-gray-400 font-light text-lg leading-relaxed mb-8">
              Prefer listening? The Executive Digest is also recorded professionally every month, allowing you to consume architectural deep-dives during your commute.
            </p>
            <button className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white hover:text-black transition-colors flex items-center gap-3 w-max">
              <Play size={16} fill="currentColor" /> Listen to Latest Episode
            </button>
          </div>
          <div className="lg:col-span-7 flex justify-center">
            {/* Animated Soundwave SVG */}
            <div className="w-full max-w-lg h-40 flex items-center justify-center gap-2">
              {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                <div 
                  key={i} 
                  className="w-2 bg-white/40 rounded-full animate-pulse"
                  style={{
                    height: `${Math.max(20, Math.random() * 100)}%`,
                    animationDuration: `${0.5 + Math.random()}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Editorial Philosophy */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <h2 className="text-3xl font-medium text-white tracking-tight">Editorial Standards</h2>
          <p className="text-gray-400 font-light text-sm max-w-sm">
            Maintaining the highest quality of technical writing requires strict adherence to our core principles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-white/10 bg-[#141414]">
            <ShieldCheck size={24} className="text-white/40 mb-6" />
            <h4 className="text-lg font-medium text-white mb-3">No Fluff, No Filler</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Articles are heavily edited to respect your time. We deliver dense, actionable technical data without the verbose introductions.</p>
          </div>
          <div className="p-8 border border-white/10 bg-[#141414]">
            <BarChart size={24} className="text-white/40 mb-6" />
            <h4 className="text-lg font-medium text-white mb-3">Data-Driven Assertions</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">Opinions on architecture or security are backed by empirical metrics, benchmark tests, or referenced CVE documentation.</p>
          </div>
          <div className="p-8 border border-white/10 bg-[#141414]">
            <Layers size={24} className="text-white/40 mb-6" />
            <h4 className="text-lg font-medium text-white mb-3">Agnostic Analysis</h4>
            <p className="text-gray-400 text-sm font-light leading-relaxed">We do not accept sponsorships. Our framework and tooling analyses remain completely objective and unbiased.</p>
          </div>
        </div>
      </section>

      {/* 11. Final Minimalist CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Require strategic<br />
            consultation?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            Beyond the digest, I am available for direct infrastructure architecture and security engagements.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <button onClick={() => navigate('contact')} className="px-8 py-3.5 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors">
            Contact Architect
          </button>
          <button onClick={() => navigate('client-portal')} className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors">
            Client Login
          </button>
        </div>
      </section>

    </div>
  );
};

export default Newsletter;
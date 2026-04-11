import React, { useState, useEffect } from 'react';
import { 
  Search, ArrowRight, Compass, Shield, 
  Terminal, FileText, Scale, Database, 
  Activity, Zap, Globe
} from 'lucide-react';

const Sitemap = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState('');

  const sitemapData = [
    {
      category: 'Core Navigation',
      icon: <Compass size={20} strokeWidth={1.5} />,
      desc: 'Primary entry points and structural pillars of the agency.',
      links: [
        { path: 'home', label: 'Index / Landing', desc: 'Main entry point and executive overview.' },
        { path: 'about', label: 'Agency Profile', desc: 'Founder biography, methodology, and values.' },
        { path: 'services', label: 'Capabilities', desc: 'Comprehensive list of engineering and security services.' },
        { path: 'projects', label: 'Selected Works', desc: 'High-fidelity case studies and architectural overviews.' },
        { path: 'blog', label: 'Executive Insights', desc: 'Articles on digital strategy and technical deep-dives.' },
        { path: 'contact', label: 'Client Engagement', desc: 'Direct communication channels and project inquiry form.' }
      ]
    },
    {
      category: 'Tools & Calculators',
      icon: <Terminal size={20} strokeWidth={1.5} />,
      desc: 'Interactive utilities for technical and financial scoping.',
      links: [
        { path: 'scanner', label: 'Security Scanner', desc: 'Passive reconnaissance tool for perimeter auditing.' },
        { path: 'estimator', label: 'Investment Estimator', desc: 'Dynamic project cost structuring and timeline projection.' },
        { path: 'roi', label: 'ROI Calculator', desc: 'Algorithm to determine long-term return on digital infrastructure.' },
        { path: 'invoice', label: 'Invoice Generator', desc: 'Billing documentation generator (Internal/Client use).' },
        { path: 'cv-builder', label: 'Curriculum Vitae', desc: 'Dynamic professional resume and capability deck.' }
      ]
    },
    {
      category: 'Knowledge & Resources',
      icon: <Database size={20} strokeWidth={1.5} />,
      desc: 'Deep-dive analytical data and industry intelligence.',
      links: [
        { path: 'resources', label: 'Resource Hub', desc: 'Curated list of technical assets and whitepapers.' },
        { path: 'case-studies', label: 'Case Studies', desc: 'In-depth analysis of enterprise client success stories.' },
        { path: 'tech-radar', label: 'Technology Radar', desc: 'Current adoption status of specific languages and frameworks.' },
        { path: 'glossary', label: 'Technical Glossary', desc: 'Definitions of complex engineering and security terminology.' },
        { path: 'media', label: 'Media Kit', desc: 'Brand assets, high-res logos, and press information.' }
      ]
    },
    {
      category: 'Client Operations',
      icon: <Activity size={20} strokeWidth={1.5} />,
      desc: 'Dedicated hubs for ongoing project management and status.',
      links: [
        { path: 'client-portal', label: 'Secure Client Portal', desc: 'Encrypted dashboard for active project telemetry and assets.' },
        { path: 'book-call', label: 'Schedule Briefing', desc: 'Direct calendar integration for strategic consultations.' },
        { path: 'status', label: 'System Status', desc: 'Real-time uptime and incident tracking for hosted services.' },
        { path: 'changelog', label: 'Release Changelog', desc: 'Chronological history of updates to this portfolio engine.' },
        { path: 'newsletter', label: 'Network Digest', desc: 'Subscription portal for monthly industry intelligence.' },
        { path: 'training', label: 'Training Modules', desc: 'Educational materials for client handoff and team onboarding.' },
        { path: 'faq', label: 'Technical FAQ', desc: 'Frequently asked questions regarding methodology and SLAs.' }
      ]
    },
    {
      category: 'Legal & Compliance',
      icon: <Scale size={20} strokeWidth={1.5} />,
      desc: 'Regulatory adherence, data protection, and operational policies.',
      links: [
        { path: 'privacy', label: 'Privacy Policy', desc: 'GDPR-compliant data handling and retention protocols.' },
        { path: 'terms', label: 'Terms of Service', desc: 'Standard operating agreements and service level conditions.' },
        { path: 'accessibility', label: 'Accessibility (WCAG)', desc: 'Commitment to inclusive design and assistive technology.' },
        { path: 'disclaimer', label: 'Legal Disclaimer', desc: 'Liability limitations and professional service scopes.' },
        { path: 'bug-bounty', label: 'Bug Bounty Program', desc: 'Responsible disclosure guidelines for security researchers.' },
        { path: 'partners', label: 'Strategic Partners', desc: 'Information on enterprise affiliations and vendor relations.' },
        { path: 'guestbook', label: 'Public Guestbook', desc: 'Open ledger for peer signatures and community engagement.' }
      ]
    }
  ];

  // Live filter logic
  const filteredData = sitemapData.map(group => ({
    ...group,
    links: group.links.filter(link => 
      link.label.toLowerCase().includes(searchTerm.toLowerCase()) || 
      link.path.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.desc.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(group => group.links.length > 0);

  const totalLinks = sitemapData.reduce((acc, curr) => acc + curr.links.length, 0);
  const visibleLinks = filteredData.reduce((acc, curr) => acc + curr.links.length, 0);

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-20">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Node SVG Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-end items-center">
          <svg viewBox="0 0 800 600" className="w-[800px] h-[600px] translate-x-1/4">
            <circle cx="400" cy="300" r="250" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 8" className="animate-[spin_120s_linear_infinite]" />
            <circle cx="400" cy="300" r="150" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" className="animate-[spin_80s_linear_infinite_reverse]" />
            <path d="M400 50 L400 550 M150 300 L650 300" stroke="#ffffff" strokeWidth="0.5" opacity="0.3" />
            <circle cx="400" cy="300" r="5" fill="#ffffff" />
            <circle cx="400" cy="50" r="3" fill="#ffffff" />
            <circle cx="650" cy="300" r="3" fill="#ffffff" />
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Architecture Directory</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            System<br />
            <span className="text-gray-500">Index.</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            A comprehensive mapping of all available routes, endpoints, and resources within the digital ecosystem.
          </p>
        </div>
      </section>

      {/* 2. Functional Search/Filter Engine */}
      <section className="py-12 bg-[#141414] border-b border-white/10 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-full max-w-2xl group">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors" size={20} strokeWidth={1.5} />
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter endpoints, routes, or keywords..."
              className="w-full bg-transparent border-b border-white/20 py-4 pl-10 pr-4 text-base text-white focus:outline-none focus:border-white transition-colors placeholder-gray-600 font-light"
            />
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs font-medium uppercase tracking-[0.2em] text-gray-500 w-full justify-end">
            <span>Query Active</span>
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 py-32">
        
        {/* 3. Custom SVG Architecture Map (Sidebar) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-48">
            <h3 className="text-xl font-medium text-white tracking-tight mb-8">Topology Map</h3>
            <div className="w-full aspect-square bg-[#141414] border border-white/10 flex items-center justify-center p-6 mb-12">
              <svg viewBox="0 0 200 200" className="w-full h-full opacity-60">
                <rect width="200" height="200" fill="none" />
                {/* Root */}
                <rect x="80" y="20" width="40" height="20" fill="none" stroke="#ffffff" strokeWidth="1" rx="2" />
                <path d="M100 40 L100 70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <path d="M40 70 L160 70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                {/* Branches */}
                <path d="M40 70 L40 100 M100 70 L100 100 M160 70 L160 100" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                {/* Nodes */}
                <rect x="20" y="100" width="40" height="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" rx="2" />
                <rect x="80" y="100" width="40" height="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" rx="2" />
                <rect x="140" y="100" width="40" height="20" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" rx="2" />
                {/* Sub-branches */}
                <path d="M40 120 L40 150 M100 120 L100 150 M160 120 L160 150" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="40" cy="150" r="2" fill="#ffffff" />
                <circle cx="100" cy="150" r="2" fill="#ffffff" />
                <circle cx="160" cy="150" r="2" fill="#ffffff" />
              </svg>
            </div>

            {/* 4. Facts and Figures (Metrics) */}
            <div className="space-y-8">
              <div>
                <div className="text-5xl font-light text-white mb-2 tracking-tighter">{visibleLinks}</div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">Nodes Matched</p>
              </div>
              <div>
                <div className="text-5xl font-light text-white mb-2 tracking-tighter">{totalLinks}</div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">Total Endpoints</p>
              </div>
              <div>
                <div className="text-5xl font-light text-white mb-2 tracking-tighter">v4.0</div>
                <p className="text-gray-500 text-xs uppercase tracking-[0.2em] font-medium">Current Schema</p>
              </div>
            </div>
          </div>
        </div>

        {/* 5, 6, 7, 8, 9. Categorized Grids */}
        <div className="lg:col-span-8 flex flex-col gap-24">
          
          {/* 10. Empty State Logic */}
          {filteredData.length === 0 && (
            <div className="bg-[#141414] border border-white/10 p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <Globe size={48} className="text-gray-600 mb-6" strokeWidth={1} />
              <h3 className="text-2xl font-medium text-white tracking-tight mb-4">No matching endpoints found</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                The query "{searchTerm}" did not return any valid routes within the current architecture. Please adjust your filter parameters.
              </p>
              <button onClick={() => setSearchTerm('')} className="mt-8 px-6 py-2 border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">
                Clear Filter
              </button>
            </div>
          )}

          {filteredData.map((group, index) => (
            <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-end justify-between border-b border-white/10 pb-6 mb-8">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 text-gray-500 mb-3">
                    {group.icon}
                    <span className="text-xs font-semibold uppercase tracking-[0.2em]">{group.category}</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light">{group.desc}</p>
                </div>
                <span className="hidden sm:block text-gray-600 font-mono text-xs">[{group.links.length} routes]</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {group.links.map((link, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => navigate(link.path)}
                    className="group relative bg-[#141414] border border-white/5 p-6 text-left hover:border-white/30 hover:bg-[#1a1a1a] transition-all duration-300"
                  >
                    {/* Top right path label */}
                    <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-100 transition-opacity">
                      <span className="text-[10px] font-mono text-gray-400 group-hover:text-white transition-colors">/{link.path}</span>
                    </div>

                    <h4 className="text-lg font-medium text-white mb-2 tracking-tight flex items-center gap-2">
                      {link.label}
                    </h4>
                    <p className="text-gray-500 text-xs font-light leading-relaxed pr-8">
                      {link.desc}
                    </p>
                    
                    {/* Hover Animated Arrow */}
                    <ArrowRight size={16} className="absolute bottom-6 right-6 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* 11. Final Minimalist CTA */}
      <section className="py-32 bg-[#141414] border-t border-white/10 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter leading-tight mb-6">
          Unable to locate a specific resource?
        </h2>
        <p className="text-gray-400 font-light text-lg max-w-xl mx-auto leading-relaxed mb-10">
          Some endpoints and client portals are restricted or unindexed. Reach out directly for specific architectural documentation or access keys.
        </p>
        <button onClick={() => navigate('contact')} className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors inline-flex items-center gap-3">
          Contact Support <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default Sitemap;
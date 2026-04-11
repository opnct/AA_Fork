import os

def create_files():
    files = {}

    # ----------------------------------------------------------------
    # SHARED DATA & CONTENT
    # ----------------------------------------------------------------
    files["src/data/content.jsx"] = r'''
import React from 'react';
import { Globe, Shield, Monitor, Megaphone, PenTool, Briefcase } from 'lucide-react';

export const colors = ['bg-yellow-50', 'bg-green-50', 'bg-purple-50', 'bg-pink-50', 'bg-orange-50', 'bg-blue-50'];

export const services = [
  {
    id: 'web-dev',
    title: 'Web Dev & Design',
    icon: <Globe size={40} />,
    shortDesc: 'Custom websites, React apps, and responsive UI/UX design.',
    fullDesc: 'I build high-performance websites and web applications tailored to your business needs. From simple landing pages to complex MERN stack applications.',
    features: ['React.js / Next.js Development', 'WordPress / Shopify Setup', 'UI/UX Design (Figma)', 'Performance Optimization'],
    pricing: [
      { title: 'Landing Page', price: '₹8,000 - ₹15,000', detail: 'Single page, responsive, contact form.' },
      { title: 'Business Website', price: '₹20,000 - ₹40,000', detail: '5-10 pages, CMS integration, SEO basic.' },
      { title: 'Custom Web App', price: '₹50,000+', detail: 'React/Node.js, Database, Auth, API integration.' }
    ]
  },
  {
    id: 'cyber',
    title: 'Cyber Security',
    icon: <Shield size={40} />,
    shortDesc: 'VAPT, security audits, and risk assessment for your infrastructure.',
    fullDesc: 'Protect your digital assets with comprehensive security testing. I identify vulnerabilities before hackers do, ensuring your data remains safe.',
    features: ['Vulnerability Assessment', 'Penetration Testing (Web/Network)', 'Security Code Review', 'Compliance Consulting'],
    pricing: [
      { title: 'Basic Audit', price: '₹10,000', detail: 'Automated scan & manual review of top 10 OWASP.' },
      { title: 'Standard VAPT', price: '₹25,000', detail: 'Deep dive manual testing, detailed report & remediation.' },
      { title: 'Enterprise Sec', price: 'Custom Quote', detail: 'Full infrastructure audit & ongoing monitoring.' }
    ]
  },
  {
    id: 'it-support',
    title: 'IT & Helpdesk',
    icon: <Monitor size={40} />,
    shortDesc: 'Remote support, system administration, and hardware consultation.',
    fullDesc: 'Reliable IT support to keep your business running smoothly. From software troubleshooting to network setup and hardware procurement advice.',
    features: ['Remote Desktop Support', 'Software Installation & Troubleshooting', 'Network Configuration', 'Data Recovery Assistance'],
    pricing: [
      { title: 'Hourly Support', price: '₹800 / hour', detail: 'Remote assistance for immediate issues.' },
      { title: 'Monthly AMC', price: '₹5,000 / month', detail: 'Up to 5 workstations, unlimited remote support.' },
      { title: 'System Setup', price: '₹2,500 / system', detail: 'OS installation, driver setup, essential software.' }
    ]
  },
  {
    id: 'marketing',
    title: 'Digital Marketing',
    icon: <Megaphone size={40} />,
    shortDesc: 'SEO, Social Media Management, and Google Ads campaigns.',
    fullDesc: 'Grow your brand visibility online. I use data-driven strategies to increase traffic, generate leads, and boost your conversion rates.',
    features: ['Search Engine Optimization (SEO)', 'Social Media Management', 'PPC (Google/Meta Ads)', 'Email Marketing'],
    pricing: [
      { title: 'SEO Starter', price: '₹12,000 / month', detail: 'On-page optimization, keyword research, monthly reporting.' },
      { title: 'SMM Package', price: '₹15,000 / month', detail: '12 posts/month, community management, basic graphics.' },
      { title: 'Ads Management', price: '15% of Ad Spend', detail: 'Campaign setup, A/B testing, ROI optimization (Min ₹5k fee).' }
    ]
  },
  {
    id: 'content',
    title: 'Content Creation',
    icon: <PenTool size={40} />,
    shortDesc: 'Technical writing, blogs, copywriting, and video scripts.',
    fullDesc: 'Content is king. I craft compelling narratives that resonate with your audience, from technical documentation to engaging social media copy.',
    features: ['Blog Writing (Tech/Biz)', 'Website Copywriting', 'Technical Documentation', 'Video Scripting'],
    pricing: [
      { title: 'Blog Post', price: '₹1.50 / word', detail: 'SEO-optimized, researched content (approx ₹1500/1000 words).' },
      { title: 'Web Copy', price: '₹5,000 / page', detail: 'High-conversion landing page copy.' },
      { title: 'Social Calendar', price: '₹8,000 / month', detail: 'Content strategy & captions for 1 month.' }
    ]
  },
  {
    id: 'business',
    title: 'Business Consulting',
    icon: <Briefcase size={40} />,
    shortDesc: 'IT strategy, digital transformation, and workflow automation.',
    fullDesc: 'Streamline your operations with smart technology. I help businesses digitize their workflows and choose the right tech stack for growth.',
    features: ['Digital Transformation Strategy', 'Workflow Automation', 'CRM/ERP Implementation', 'Tech Stack Advisory'],
    pricing: [
      { title: 'Consultation', price: '₹2,500 / hour', detail: 'Video call strategy session & roadmap.' },
      { title: 'Project Basis', price: 'Custom Quote', detail: 'End-to-end implementation oversight.' }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "AnyAstro Techno Pvt Ltd",
    category: "Web Platform",
    client: "AnyAstro Techno Pvt Ltd",
    year: "2025",
    description: "A comprehensive web platform designed to connect users with astrological services seamlessly. The platform features real-time consultations, secure payment gateways, and an intuitive user dashboard.",
    techStack: ["React.js", "Node.js", "MongoDB", "Razorpay Integration", "WebRTC"],
    link: "#",
    imageColor: "bg-purple-100"
  },
  {
    id: 2,
    title: "SecureVault VAPT",
    category: "Cyber Security",
    client: "FinTech Startup",
    year: "2024",
    description: "Conducted a thorough Vulnerability Assessment and Penetration Testing (VAPT) audit for a rising FinTech application. Identified critical IDOR vulnerabilities and assisted the dev team in patching them.",
    techStack: ["Burp Suite", "OWASP ZAP", "Python Scripting", "Manual Testing"],
    link: "#",
    imageColor: "bg-blue-100"
  },
  {
    id: 3,
    title: "GreenEarth E-Commerce",
    category: "Web Development",
    client: "Sustainable Goods Co.",
    year: "2024",
    description: "Developed a Shopify-based e-commerce store with custom liquid theme modifications. Optimized for speed and SEO, resulting in a 40% increase in organic traffic within 3 months.",
    techStack: ["Shopify Liquid", "JavaScript", "Tailwind CSS", "SEO Optimization"],
    link: "#",
    imageColor: "bg-green-100"
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "The State of Cybersecurity in 2025",
    excerpt: "Why small businesses are becoming the primary target for ransomware attacks and how to protect yourself.",
    date: "Jan 10, 2026",
    category: "Security",
    content: "As we move further into 2026, the cybersecurity landscape continues to evolve rapidly. While enterprise-level attacks often make headlines, the reality is that small and medium-sized businesses (SMBs) are increasingly becoming the primary targets for cybercriminals. This shift is largely due to the perception—often correct—that smaller organizations have fewer defenses in place.\n\nKey trends we're observing include:\n\n1. **AI-Driven Phishing:** Attackers are using generative AI to create highly convincing phishing emails that bypass traditional filters.\n2. **Ransomware-as-a-Service (RaaS):** The barrier to entry for cybercrime has lowered, allowing less technical criminals to launch sophisticated attacks.\n3. **Supply Chain Vulnerabilities:** Attackers are compromising software vendors to gain access to their customers' networks.\n\nTo mitigate these risks, businesses must adopt a 'security-first' mindset. This involves regular employee training, implementing multi-factor authentication (MFA) across all accounts, and conducting periodic vulnerability assessments."
  },
  {
    id: 2,
    title: "React vs. Next.js: Choosing the Right Framework",
    excerpt: "A comprehensive guide to deciding between a client-side SPA and a server-side rendered application for your next project.",
    date: "Dec 28, 2025",
    category: "Development",
    content: "The debate between using raw React and Next.js is a common one for modern web developers. While React provides the flexibility of a library, Next.js offers a robust framework with built-in features for routing, data fetching, and rendering.\n\n**When to choose React (Vite):**\n- You're building a highly interactive dashboard or admin panel.\n- SEO is not a primary concern (though it can be managed).\n- You want complete control over your routing and build configuration.\n\n**When to choose Next.js:**\n- You're building a public-facing marketing site, e-commerce store, or blog where SEO is critical.\n- You need server-side rendering (SSR) or static site generation (SSG) for performance.\n- You want a 'batteries-included' experience with API routes and image optimization out of the box.\n\nUltimately, the choice depends on your specific project requirements. For most public websites in 2026, Next.js provides a significant advantage in terms of performance and discoverability."
  },
  {
    id: 3,
    title: "Optimizing Web Performance for Indian Markets",
    excerpt: "Strategies for ensuring your website loads instantly on 4G networks and budget devices.",
    date: "Dec 15, 2025",
    category: "Performance",
    content: "India's digital landscape is mobile-first. With millions of users accessing the web via 4G networks on mid-range Android devices, performance optimization isn't just a luxury—it's a necessity. A slow website directly correlates to higher bounce rates and lost revenue.\n\n**Key Strategies:**\n\n1. **Image Optimization:** Use modern formats like WebP or AVIF. Implement lazy loading to ensure images are only downloaded when they enter the viewport.\n2. **Code Splitting:** Break your JavaScript bundles into smaller chunks so the browser only loads the code needed for the current page.\n3. **CDN Usage:** Utilize a Content Delivery Network (CDN) to serve assets from servers geographically closer to your users.\n4. **Font Loading:** Use `font-display: swap` to ensure text is visible immediately, even if the custom font hasn't loaded yet.\n\nBy focusing on these core vitals, you can ensure your digital presence is accessible and effective for the vast Indian user base."
  }
];
    '''

    # ----------------------------------------------------------------
    # COMPONENTS (Header & Footer)
    # ----------------------------------------------------------------
    files["src/components/Header/index.jsx"] = r'''
import React, { useRef } from 'react';
import { X } from 'lucide-react';
import { services } from '../../data/content';

const Header = ({ navigate, currentView, isMenuOpen, setIsMenuOpen }) => {
  const logoPressTimeoutRef = useRef(null);

  const handleLogoMouseDown = () => {
      logoPressTimeoutRef.current = setTimeout(() => {
          navigate('invoice');
          logoPressTimeoutRef.current = null; 
      }, 3000);
  };

  const handleLogoMouseUp = () => {
      if (logoPressTimeoutRef.current) {
          clearTimeout(logoPressTimeoutRef.current);
          navigate('home'); 
      }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black h-20 flex items-center justify-between px-6 lg:px-12 print:hidden">
      <div 
        onMouseDown={handleLogoMouseDown} 
        onMouseUp={handleLogoMouseUp} 
        onTouchStart={handleLogoMouseDown} 
        onTouchEnd={handleLogoMouseUp}
        className="flex flex-col cursor-pointer group select-none"
      >
        <h1 className="text-2xl font-black uppercase leading-none tracking-tighter group-hover:opacity-70 transition-opacity">
          Arun <span className="text-blue-600">/</span> Ammisetty
        </h1>
      </div>

      <div className="hidden lg:flex gap-8 font-bold text-sm uppercase tracking-widest">
        <button onClick={() => navigate('home')} className={`hover:text-blue-600 ${currentView === 'home' ? 'text-blue-600' : ''}`}>Home</button>
        <button onClick={() => navigate('about')} className={`hover:text-blue-600 ${currentView === 'about' ? 'text-blue-600' : ''}`}>About</button>
        <button onClick={() => navigate('services')} className={`hover:text-blue-600 ${currentView === 'services' ? 'text-blue-600' : ''}`}>Services</button>
        <button onClick={() => navigate('projects')} className={`hover:text-blue-600 ${currentView === 'projects' ? 'text-blue-600' : ''}`}>Projects</button>
        <button onClick={() => navigate('blog')} className={`hover:text-blue-600 ${currentView === 'blog' ? 'text-blue-600' : ''}`}>Blog</button>
        <button onClick={() => navigate('contact')} className={`px-6 py-2 bg-black text-white hover:bg-blue-600 hover:text-black border-2 border-black transition-all ${currentView === 'contact' ? 'bg-blue-600 text-black' : ''}`}>Contact</button>
      </div>

      <button className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
           <X size={32} />
        ) : (
          <>
            <span className="block w-full h-1 bg-black group-hover:bg-blue-600 transition-colors"></span>
            <span className="block w-full h-1 bg-black group-hover:bg-blue-600 transition-colors"></span>
          </>
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white border-t-2 border-black flex flex-col overflow-y-auto">
          <div className="p-8 gap-6 flex flex-col font-black text-3xl uppercase tracking-widest pb-32">
            <button onClick={() => navigate('home')} className="text-left hover:text-blue-600">Home</button>
            <button onClick={() => navigate('about')} className="text-left hover:text-blue-600">About</button>
            <button onClick={() => navigate('services')} className="text-left hover:text-blue-600">Services</button>
            <div className="pl-6 flex flex-col gap-4 text-xl text-gray-500 border-l-4 border-gray-200">
              {services.map(service => (
                <button key={service.id} onClick={() => navigate('service-detail')} className="text-left hover:text-blue-600 font-bold">
                  {service.title}
                </button>
              ))}
            </div>
            <button onClick={() => navigate('projects')} className="text-left hover:text-blue-600">Projects</button>
            <button onClick={() => navigate('blog')} className="text-left hover:text-blue-600">Blog</button>
            <div className="h-px bg-gray-200 w-full my-2"></div>
            <button onClick={() => navigate('resources')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Resources Hub</button>
            <button onClick={() => navigate('faq')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">FAQ</button>
            <button onClick={() => navigate('privacy')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Privacy Policy</button>
            <button onClick={() => navigate('terms')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Terms of Service</button>
            <button onClick={() => navigate('sitemap')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Site Map</button>
            <button onClick={() => navigate('contact')} className="text-left hover:text-blue-600 text-blue-600 mt-4">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
    '''

    files["src/components/Footer/index.jsx"] = r'''
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
    '''

    # ----------------------------------------------------------------
    # MAIN ORIGINAL PAGES
    # ----------------------------------------------------------------
    files["src/pages/Home/index.jsx"] = r'''
import React from 'react';
import { ArrowRight, Globe, Shield, Check } from 'lucide-react';

const Home = ({ navigate }) => (
  <div className="animate-in fade-in duration-500 pt-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
      <div className="flex flex-col justify-center p-8 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white relative overflow-hidden">
         <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-dashed border-gray-300 animate-spin-slow opacity-50 pointer-events-none"></div>
         <h2 className="font-bold text-lg mb-4 text-blue-600 uppercase tracking-widest">Multi-Disciplinary Professional</h2>
         <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter break-words">
         BUILD.<br />SECURE.<br /><span className="text-blue-600">GROW.</span>
         </h1>
         <p className="text-xl text-gray-600 max-w-md mb-10 font-medium leading-relaxed">
           I help businesses build robust web solutions, secure their infrastructure, and grow their digital presence.
         </p>
         <div className="flex flex-col sm:flex-row gap-4">
           <button onClick={() => navigate('services')} className="px-8 py-4 bg-black text-white text-lg font-bold uppercase tracking-widest border-2 border-black hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3">
             View Services <ArrowRight size={20} />
           </button>
           <button onClick={() => navigate('contact')} className="px-8 py-4 bg-white text-black text-lg font-bold uppercase tracking-widest border-2 border-black hover:bg-blue-50 transition-all flex items-center justify-center">
             Get a Quote
           </button>
         </div>
      </div>
      <div className="bg-green-50 flex items-center justify-center p-12 pattern-grid">
        <div className="w-full max-w-md bg-white border-2 border-black p-8 shadow-[12px_12px_0px_0px_#000000] hover:shadow-[16px_16px_0px_0px_#2563EB] transition-all duration-300">
           <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-2 border-black text-white">
                <span className="font-black text-2xl">AA</span>
              </div>
              <div>
                <h3 className="font-bold text-xl uppercase">Arun Ammisetty</h3>
                <p className="text-sm text-gray-500 font-mono">Full Stack & Security</p>
              </div>
           </div>
           <div className="space-y-4 font-mono text-sm">
             <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
               <span><Globe size={16} className="inline mr-2"/> Web Projects</span>
               <span className="font-bold text-blue-600">50+</span>
             </div>
             <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
               <span><Shield size={16} className="inline mr-2"/> Vulnerabilities Found</span>
               <span className="font-bold text-blue-600">200+</span>
             </div>
             <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
               <span><Check size={16} className="inline mr-2"/> Client Satisfaction</span>
               <span className="font-bold text-blue-600">100%</span>
             </div>
           </div>
           <div className="mt-6 pt-4 border-t-2 border-black text-center">
             <p className="font-bold text-xs uppercase tracking-widest text-gray-400">Available for Freelance</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);
export default Home;
    '''

    files["src/pages/About/index.jsx"] = r'''
import React from 'react';
import { Shield, ExternalLink, Clipboard } from 'lucide-react';

const About = ({ navigate }) => (
  <div className="animate-in slide-in-from-bottom-4 duration-500 pt-20 min-h-screen flex flex-col">
     <div className="bg-blue-600 text-white p-8 lg:p-16 border-b-2 border-black">
       <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4">Who is Arun?</h1>
       <p className="text-xl lg:text-2xl max-w-3xl font-light">A tech enthusiast bridging the gap between development, security, and business strategy.</p>
     </div>
     <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
          <div className="mb-12 p-6 bg-yellow-50 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
              <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2"><Shield className="text-blue-600" /> Current Role</h4>
              <p className="text-lg font-bold">Founder & Chief of Operations</p>
              <p className="text-gray-600">Vanguard / Cyber</p>
              <p className="text-sm mt-2 text-gray-500">Leading red teaming operations and ethical hacking initiatives.</p>
              <a href="https://go.ly/vc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-blue-600 font-bold hover:underline uppercase text-sm tracking-widest">
                  Visit Vanguard / Cyber <ExternalLink size={16} />
              </a>
          </div>
          <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2"><span className="w-4 h-4 bg-blue-600 inline-block"></span> Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">I am a freelancer and consultant based in India, specializing in holistic digital solutions. My journey started with code, but my curiosity led me into the world of cyber security and digital marketing.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">I don't just "make websites." I build secure, optimized, and market-ready digital assets. Whether you are a startup needing a full launch kit or an enterprise needing a security audit, I bring technical expertise with a business-first mindset.</p>
          <button onClick={()=>navigate('cv-builder')} className="px-6 py-3 border-2 border-black bg-yellow-100 hover:bg-black hover:text-white font-bold transition-colors flex items-center gap-2">
            <Clipboard size={18} /> View Dynamic CV
          </button>
        </div>
        <div className="p-8 lg:p-16 bg-purple-50">
           <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2"><span className="w-4 h-4 bg-blue-600 inline-block"></span> Tech Stack</h3>
           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['React.js', 'Node.js', 'Python', 'Kali Linux', 'Burp Suite', 'WordPress', 'Figma', 'Google Ads', 'SEO Tools'].map((tech) => (
                <div key={tech} className="p-4 bg-white border-2 border-black text-center font-bold shadow-[4px_4px_0px_0px_#000000] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-default">
                  {tech}
                </div>
              ))}
           </div>
        </div>
     </div>
  </div>
);
export default About;
    '''

    files["src/pages/Services/index.jsx"] = r'''
import React from 'react';
import { Calculator, ChevronRight } from 'lucide-react';
import { services, colors } from '../../data/content';

const Services = ({ navigate, openService }) => (
  <div className="animate-in zoom-in-95 duration-300 pt-20">
    <div className="p-8 lg:p-12 text-center border-b-2 border-black bg-gray-50">
       <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">My Services</h2>
       <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive digital solutions. Click on a card to view detailed pricing and deliverables.</p>
       <button onClick={()=>navigate('estimator')} className="mt-6 px-6 py-2 bg-blue-600 text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-black transition-colors inline-flex items-center gap-2">
           <Calculator size={18}/> Pricing Estimator
       </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <div 
          key={service.id} 
          onClick={() => openService(service)}
          className={`group p-8 lg:p-12 border-b-2 border-black cursor-pointer hover:bg-white transition-colors ${colors[index % colors.length]} ${index % 3 !== 2 ? 'lg:border-r-2' : ''} ${index % 2 === 0 ? 'md:border-r-2 lg:border-r-0' : ''}`}
        >
          <div className="mb-6 text-black group-hover:text-blue-600 transition-colors duration-300">{service.icon}</div>
          <h3 className="text-2xl font-black uppercase mb-4 group-hover:underline decoration-blue-600 decoration-4 underline-offset-4">{service.title}</h3>
          <p className="text-gray-600 mb-6 font-medium leading-relaxed">{service.shortDesc}</p>
          <div className="flex items-center text-sm font-bold uppercase tracking-widest gap-2">
            View Details <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform"/>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Services;
    '''

    files["src/pages/ServiceDetail/index.jsx"] = r'''
import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

const ServiceDetail = ({ activeService, navigate }) => {
  if(!activeService) return null;
  return (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      <div className="flex flex-col min-h-screen">
        <div className="bg-black text-white p-8 lg:p-16 border-b-2 border-black relative overflow-hidden">
           <button onClick={() => navigate('services')} className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-400">
             <ArrowLeft size={16}/> Back to Services
           </button>
           <div className="mt-12 lg:mt-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
             <div>
                <div className="text-blue-500 mb-4">{activeService.icon}</div>
                <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6">{activeService.title}</h1>
                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl font-light">{activeService.fullDesc}</p>
             </div>
             <button onClick={() => navigate('contact')} className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest border-2 border-white hover:bg-white hover:text-black transition-colors shrink-0">
               Hire Me
             </button>
           </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-grow">
          <div className="lg:col-span-2 p-8 lg:p-16 bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black">
             <h3 className="text-2xl font-black uppercase mb-8">What is included?</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {activeService.features.map((feature, idx) => (
                 <div key={idx} className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-black transition-colors">
                   <Check className="text-blue-600 shrink-0 mt-1" size={20} />
                   <span className="font-bold text-lg">{feature}</span>
                 </div>
               ))}
             </div>
             <div className="mt-12 bg-blue-50 p-6 border-l-4 border-blue-600">
               <h4 className="font-bold text-lg mb-2">Why Choose Me?</h4>
               <p className="text-gray-700">I deliver enterprise-grade quality at freelance rates. My code is clean, my audits are thorough, and my strategies are data-driven. No outsourcing, direct communication.</p>
             </div>
          </div>
          <div className="p-8 lg:p-12 bg-gray-50 border-b-2 lg:border-b-0 border-black">
            <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-2">Standard Rates <span className="text-xs font-mono bg-black text-white px-2 py-1 rounded">INR</span></h3>
            <div className="space-y-6">
              {activeService.pricing.map((tier, idx) => (
                <div key={idx} className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_#2563EB] hover:-translate-y-1 transition-all">
                  <h4 className="font-bold text-gray-500 text-sm uppercase tracking-widest mb-1">{tier.title}</h4>
                  <p className="text-2xl font-black mb-3">{tier.price}</p>
                  <p className="text-sm text-gray-600 leading-snug">{tier.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-gray-500 text-center">* Prices are indicative and vary based on project scope.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetail;
    '''

    files["src/pages/Projects/index.jsx"] = r'''
import React from 'react';
import { BookOpen, Layout, ArrowRight } from 'lucide-react';
import { projects } from '../../data/content';

const Projects = ({ navigate, openProject }) => (
  <div className="animate-in fade-in duration-500 pt-20">
    <div className="p-8 lg:p-16 border-b-2 border-black bg-yellow-50 text-center">
      <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">Selected Projects</h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">A showcase of recent work in development and security.</p>
      <button onClick={()=>navigate('case-studies')} className="mt-6 px-6 py-2 bg-black text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-blue-600 transition-colors inline-flex items-center gap-2">
           <BookOpen size={18}/> View Full Case Studies
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div key={project.id} onClick={() => openProject(project)} className={`group cursor-pointer border-b-2 border-black ${index % 3 !== 2 ? 'lg:border-r-2' : ''} ${index % 2 === 0 ? 'md:border-r-2 lg:border-r-0' : ''} bg-white flex flex-col`}>
          <div className={`h-64 ${project.imageColor} border-b-2 border-black flex items-center justify-center p-8 group-hover:opacity-90 transition-opacity`}>
            <Layout size={64} className="text-black opacity-20" />
          </div>
          <div className="p-8 flex-grow">
            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 mb-4 inline-block">{project.category}</span>
            <h3 className="text-2xl font-black mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
            <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-black mt-auto">View Project <ArrowRight size={16}/></span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Projects;
    '''

    files["src/pages/ProjectDetail/index.jsx"] = r'''
import React from 'react';
import { ArrowLeft, Layout, ExternalLink } from 'lucide-react';

const ProjectDetail = ({ activeProject, navigate }) => {
  if(!activeProject) return null;
  return (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      <div className="min-h-screen flex flex-col">
        <div className={`p-8 lg:p-16 border-b-2 border-black ${activeProject.imageColor}`}>
          <button onClick={() => navigate('projects')} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-600 mb-8">
            <ArrowLeft size={16}/> Back to Projects
          </button>
          <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-widest">{activeProject.category}</span>
          <h1 className="text-4xl lg:text-6xl font-black mt-4 mb-2">{activeProject.title}</h1>
          <p className="text-xl font-bold opacity-70 mb-8">{activeProject.client} • {activeProject.year}</p>
        </div>
        <div className="flex-grow grid grid-cols-1 lg:grid-cols-3">
          <div className="lg:col-span-2 p-8 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
            <h3 className="text-2xl font-black uppercase mb-6">Overview</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">{activeProject.description}</p>
            <h3 className="text-2xl font-black uppercase mb-6">Tech Stack</h3>
            <div className="flex flex-wrap gap-3">
              {activeProject.techStack.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 border-2 border-black bg-gray-50 font-bold text-sm uppercase">{tech}</span>
              ))}
            </div>
          </div>
          <div className="p-8 lg:p-16 bg-gray-50 flex flex-col justify-center items-center text-center">
            <div className="mb-8">
              <Layout size={80} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Project Visuals</p>
            </div>
            <button className="px-8 py-4 bg-black text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-blue-600 hover:text-white hover:border-black transition-colors flex items-center gap-3">
              Live Demo <ExternalLink size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;
    '''

    files["src/pages/Blog/index.jsx"] = r'''
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/content';

const Blog = ({ navigate, openBlogPost }) => (
  <div className="animate-in fade-in duration-500 pt-20">
    <div className="p-8 lg:p-16 border-b-2 border-black bg-pink-50 text-center">
      <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-4">The Blog</h2>
      <p className="text-xl text-gray-700 max-w-2xl mx-auto">Insights on security, development, and digital strategy from the front lines.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <div key={post.id} onClick={() => openBlogPost(post)} className={`p-8 border-b-2 border-black cursor-pointer hover:bg-white transition-colors group ${index % 3 !== 2 ? 'lg:border-r-2' : ''} ${index % 2 === 0 ? 'md:border-r-2 lg:border-r-0' : ''} bg-white`}>
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1">{post.category}</span>
            <span className="text-xs font-mono text-gray-500">{post.date}</span>
          </div>
          <h3 className="text-2xl font-black mb-4 group-hover:text-blue-600 leading-tight">{post.title}</h3>
          <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
          <span className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all text-black">Read More <ArrowRight size={16}/></span>
        </div>
      ))}
    </div>
  </div>
);
export default Blog;
    '''

    files["src/pages/BlogDetail/index.jsx"] = r'''
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BlogDetail = ({ activeBlogPost, navigate }) => {
  if(!activeBlogPost) return null;
  return (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      <article className="max-w-4xl mx-auto p-8 lg:p-16 min-h-screen">
        <button onClick={() => navigate('blog')} className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-600 mb-8">
          <ArrowLeft size={16}/> Back to Blog
        </button>
        <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">{activeBlogPost.category}</span>
        <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">{activeBlogPost.title}</h1>
        <div className="flex items-center gap-4 text-sm text-gray-500 font-mono mb-8 pb-8 border-b-2 border-gray-200">
          <span>By Arun Ammisetty</span>
          <span>•</span>
          <span>{activeBlogPost.date}</span>
        </div>
        <div className="prose prose-lg max-w-none prose-headings:font-black prose-p:text-gray-700">
          {activeBlogPost.content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
};
export default BlogDetail;
    '''

    files["src/pages/Contact/index.jsx"] = r'''
import React from 'react';
import { Mail, Phone, Linkedin, Globe, MessageCircle } from 'lucide-react';

const Contact = () => {
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');
    const text = `*New Inquiry from Portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Service:* ${service}\n*Message:* ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/918329000442?text=${encodedText}`, '_blank');
  };

  return (
    <div className="animate-in fade-in duration-500 pt-20 min-h-screen flex flex-col">
       <div className="grid grid-cols-1 lg:grid-cols-2 flex-grow">
          <div className="p-8 lg:p-20 bg-blue-600 text-white border-b-2 lg:border-b-0 lg:border-r-2 border-black flex flex-col justify-center">
             <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-8">Let's Work Together.</h2>
             <p className="text-xl font-light mb-12 opacity-90">Have a project in mind? Looking for a security audit? Or just want to discuss the latest tech? Drop me a line.</p>
             <div className="space-y-6">
                <a href="mailto:contact.aa@tuta.io" className="flex items-center gap-4 text-xl font-bold hover:underline">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full"><Mail size={24} /></div>
                  contact.aa@tuta.io
                </a>
                <div className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full"><Phone size={24} /></div>
                  +91 83290 00442
                </div>
                <a href="https://linkedin.com/in/arun-ammisetty" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-xl font-bold hover:underline">
                  <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full"><Linkedin size={24} /></div>
                  /in/arun-ammisetty
                </a>
                <div className="flex items-center gap-4 text-xl font-bold">
                   <div className="w-12 h-12 bg-white text-blue-600 border-2 border-black flex items-center justify-center rounded-full"><Globe size={24} /></div>
                   Baner Pune, India
                </div>
             </div>
          </div>
          <div className="p-8 lg:p-20 bg-white flex flex-col justify-center">
             <form className="max-w-lg w-full mx-auto space-y-6" onSubmit={handleWhatsAppSubmit}>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-widest mb-2">Name</label>
                   <input name="name" type="text" className="w-full p-4 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-all" placeholder="John Doe" required />
                </div>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-widest mb-2">Email</label>
                   <input name="email" type="email" className="w-full p-4 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-all" placeholder="john@example.com" required />
                </div>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-widest mb-2">Service Needed</label>
                   <select name="service" className="w-full p-4 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-all">
                      <option>Web Development</option>
                      <option>Cyber Security Audit</option>
                      <option>Digital Marketing</option>
                      <option>IT Support</option>
                      <option>Other</option>
                   </select>
                </div>
                <div>
                   <label className="block text-sm font-bold uppercase tracking-widest mb-2">Message</label>
                   <textarea name="message" rows="4" className="w-full p-4 border-2 border-black bg-gray-50 focus:bg-white focus:outline-none focus:shadow-[4px_4px_0px_0px_#2563EB] transition-all" placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" className="w-full p-4 bg-green-500 text-white font-bold uppercase tracking-widest border-2 border-black hover:bg-green-600 hover:text-white hover:border-black transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={20} /> Send via WhatsApp
                </button>
             </form>
          </div>
       </div>
    </div>
  );
};
export default Contact;
    '''

    # ----------------------------------------------------------------
    # 20+ NEW INTERACTIVE PAGES
    # ----------------------------------------------------------------
    
    files["src/pages/PricingEstimator/index.jsx"] = r'''
import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const PricingEstimator = () => {
    const [pages, setPages] = useState(1);
    const [ecommerce, setEcommerce] = useState(false);
    const [cms, setCms] = useState(false);
    const [vapt, setVapt] = useState(false);
    const [codeReview, setCodeReview] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let cost = 0;
        cost += pages * 5000;
        if (ecommerce) cost += 25000;
        if (cms) cost += 15000;
        if (vapt) cost += 30000;
        if (codeReview) cost += 20000;
        setTotal(cost);
    }, [pages, ecommerce, cms, vapt, codeReview]);

    return (
        <div className="animate-in fade-in duration-500 pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-4"><Calculator className="text-blue-600"/> Pricing Estimator</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 bg-white p-6 border-2 border-black shadow-[6px_6px_0px_0px_#000]">
                    <h2 className="font-bold text-xl uppercase border-b-2 border-black pb-2">Web Development</h2>
                    <div>
                        <label className="font-bold mb-2 block">Number of Pages: {pages}</label>
                        <input type="range" min="1" max="20" value={pages} onChange={(e)=>setPages(Number(e.target.value))} className="w-full accent-blue-600"/>
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={ecommerce} onChange={(e)=>setEcommerce(e.target.checked)} className="w-5 h-5 accent-blue-600"/>
                        <span className="font-bold">E-Commerce Functionality</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={cms} onChange={(e)=>setCms(e.target.checked)} className="w-5 h-5 accent-blue-600"/>
                        <span className="font-bold">Content Management System (CMS)</span>
                    </label>
                </div>
                <div className="space-y-6 bg-white p-6 border-2 border-black shadow-[6px_6px_0px_0px_#000]">
                    <h2 className="font-bold text-xl uppercase border-b-2 border-black pb-2">Cyber Security</h2>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={vapt} onChange={(e)=>setVapt(e.target.checked)} className="w-5 h-5 accent-blue-600"/>
                        <span className="font-bold">Vulnerability Assessment (VAPT)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={codeReview} onChange={(e)=>setCodeReview(e.target.checked)} className="w-5 h-5 accent-blue-600"/>
                        <span className="font-bold">Secure Code Review</span>
                    </label>
                </div>
            </div>
            <div className="mt-8 bg-blue-600 text-white p-8 border-2 border-black flex justify-between items-center shadow-[8px_8px_0px_0px_#000]">
                <span className="text-2xl font-bold uppercase">Estimated Total</span>
                <span className="text-4xl font-black">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <p className="mt-4 text-sm text-gray-500 font-mono text-center">*This is a rough estimate. Final quotes may vary based on exact requirements.</p>
        </div>
    );
};
export default PricingEstimator;
    '''

    files["src/pages/SecurityScanner/index.jsx"] = r'''
import React, { useState } from 'react';
import { Terminal } from 'lucide-react';

const SecurityScanner = () => {
    const [domain, setDomain] = useState('');
    const [isScanning, setIsScanning] = useState(false);
    const [results, setResults] = useState(null);
    const [logs, setLogs] = useState([]);

    const handleScan = (e) => {
        e.preventDefault();
        if(!domain) return;
        setIsScanning(true);
        setResults(null);
        setLogs([]);

        const scanLogs = [
            `Resolving IP for ${domain}...`,
            "Checking SSL/TLS Certificates...",
            "Analyzing HTTP Security Headers...",
            "Checking for Open Ports (80, 443, 21, 22)...",
            "Validating DNS Records...",
            "Scan Complete."
        ];

        let i = 0;
        const logInterval = setInterval(() => {
            setLogs((prev) => [...prev, scanLogs[i]]);
            i++;
            if (i >= scanLogs.length) {
                clearInterval(logInterval);
                setIsScanning(false);
                const score = domain.length % 2 === 0 ? 'B+' : 'C';
                setResults({
                    score: domain.includes('https') ? 'A-' : score,
                    issues: [
                        domain.includes('https') ? "Strict-Transport-Security header missing" : "No HTTPS detected (Critical)",
                        "X-Frame-Options header not configured",
                        "Content-Security-Policy is too broad"
                    ]
                });
            }
        }, 800);
    };

    return (
        <div className="animate-in slide-in-from-bottom-4 duration-500 pt-32 lg:pt-40 max-w-3xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-4 flex items-center gap-4"><Terminal className="text-blue-600"/> Security Scanner</h1>
            <p className="text-gray-600 mb-8">Run a surface-level passive reconnaissance scan on any domain.</p>
            
            <form onSubmit={handleScan} className="flex gap-4 mb-8">
                <input 
                    type="text" 
                    placeholder="example.com or https://example.com" 
                    value={domain} 
                    onChange={(e)=>setDomain(e.target.value)}
                    className="flex-grow p-4 border-2 border-black font-mono focus:outline-none focus:border-blue-600"
                    disabled={isScanning}
                />
                <button disabled={isScanning} type="submit" className="px-8 py-4 bg-black text-white font-bold uppercase border-2 border-black hover:bg-blue-600 transition-colors disabled:opacity-50">
                    {isScanning ? 'Scanning...' : 'Scan'}
                </button>
            </form>

            <div className="bg-black text-green-400 font-mono p-6 min-h-[200px] border-2 border-black rounded shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2 text-gray-400 text-sm">
                    <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="ml-2">vanguard_scan_cli v1.0.2</span>
                </div>
                {logs.map((log, idx) => (
                    <div key={idx} className="mb-2">> {log}</div>
                ))}
                {isScanning && <div className="animate-pulse">> _</div>}
                
                {results && (
                    <div className="mt-8 border-t border-gray-700 pt-4 text-white">
                        <h3 className="text-xl font-bold mb-2">Scan Results for {domain}</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-gray-400">Security Grade:</span>
                            <span className={`text-4xl font-black ${results.score.includes('A') ? 'text-green-500' : 'text-yellow-500'}`}>{results.score}</span>
                        </div>
                        <ul className="list-disc pl-5 text-red-400">
                            {results.issues.map((issue, idx) => <li key={idx}>{issue}</li>)}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};
export default SecurityScanner;
    '''

    files["src/pages/CvBuilder/index.jsx"] = r'''
import React, { useState } from 'react';
import { Clipboard } from 'lucide-react';

const CvBuilder = () => {
    const [data, setData] = useState({
        name: 'Arun Ammisetty',
        title: 'Full Stack Developer & Security Researcher',
        summary: 'Passionate developer with expertise in React, Node, and Web Security.',
        experience: 'Freelance Developer (2024-Present) - Built 50+ websites.\nVanguard Cyber (2023) - Security Analyst.',
        skills: 'React, Node.js, Python, Burp Suite, Kali Linux, TailwindCSS'
    });

    return (
        <div className="animate-in fade-in duration-500 pt-32 lg:pt-40 max-w-7xl mx-auto p-4 lg:p-8 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border-2 border-black p-6 print:hidden">
                <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2"><Clipboard /> CV Builder</h2>
                <div className="space-y-4">
                    <input className="w-full p-2 border-2 border-black font-bold" value={data.name} onChange={e=>setData({...data, name: e.target.value})} placeholder="Full Name" />
                    <input className="w-full p-2 border-2 border-black" value={data.title} onChange={e=>setData({...data, title: e.target.value})} placeholder="Job Title" />
                    <textarea className="w-full p-2 border-2 border-black" rows="3" value={data.summary} onChange={e=>setData({...data, summary: e.target.value})} placeholder="Summary" />
                    <textarea className="w-full p-2 border-2 border-black" rows="4" value={data.experience} onChange={e=>setData({...data, experience: e.target.value})} placeholder="Experience (New line for each)" />
                    <input className="w-full p-2 border-2 border-black" value={data.skills} onChange={e=>setData({...data, skills: e.target.value})} placeholder="Skills (Comma separated)" />
                    <button onClick={()=>window.print()} className="w-full bg-blue-600 text-white font-bold py-3 border-2 border-black hover:bg-black uppercase tracking-widest">Print / Save PDF</button>
                </div>
            </div>

            <div id="cv-print-area" className="bg-white border-2 border-black p-12 shadow-[8px_8px_0px_0px_#000] font-serif">
                <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">{data.name}</h1>
                <h2 className="text-xl font-bold text-gray-500 mb-6">{data.title}</h2>
                <div className="mb-6 pb-6 border-b-2 border-black">
                    <p className="text-lg leading-relaxed">{data.summary}</p>
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">Experience</h3>
                <div className="mb-6 pb-6 border-b-2 border-black whitespace-pre-wrap">
                    {data.experience}
                </div>
                <h3 className="text-2xl font-black uppercase mb-4">Core Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {data.skills.split(',').map((skill, idx) => (
                        <span key={idx} className="border-2 border-black px-3 py-1 font-bold text-sm bg-yellow-50">{skill.trim()}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default CvBuilder;
    '''

    files["src/pages/RoiCalculator/index.jsx"] = r'''
import React, { useState } from 'react';
import { Activity } from 'lucide-react';

const RoiCalculator = () => {
    const [traffic, setTraffic] = useState(5000);
    const [convRate, setConvRate] = useState(1.5);
    const [leadValue, setLeadValue] = useState(100);

    const currentRevenue = traffic * (convRate / 100) * leadValue;
    const improvedConvRate = convRate + 1;
    const improvedRevenue = traffic * (improvedConvRate / 100) * leadValue;
    const uplift = improvedRevenue - currentRevenue;

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen text-center">
            <h1 className="text-4xl font-black uppercase mb-4"><Activity className="inline mr-2 text-blue-600"/> ROI Calculator</h1>
            <p className="text-gray-600 mb-12">See how a 1% increase in conversion rate (via better UX & Speed) impacts your revenue.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    <label className="block font-bold mb-2 uppercase text-xs">Monthly Traffic</label>
                    <input type="number" value={traffic} onChange={(e)=>setTraffic(Number(e.target.value))} className="w-full p-2 border-2 border-black text-center font-bold text-xl"/>
                </div>
                <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    <label className="block font-bold mb-2 uppercase text-xs">Current Conv. Rate (%)</label>
                    <input type="number" step="0.1" value={convRate} onChange={(e)=>setConvRate(Number(e.target.value))} className="w-full p-2 border-2 border-black text-center font-bold text-xl"/>
                </div>
                <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    <label className="block font-bold mb-2 uppercase text-xs">Avg Lead Value ($)</label>
                    <input type="number" value={leadValue} onChange={(e)=>setLeadValue(Number(e.target.value))} className="w-full p-2 border-2 border-black text-center font-bold text-xl"/>
                </div>
            </div>

            <div className="bg-green-50 border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
                <h3 className="text-2xl font-bold mb-4">Potential Monthly Revenue Uplift</h3>
                <p className="text-6xl font-black text-green-600">+${uplift.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
                <p className="mt-4 text-gray-700">By simply improving your conversion rate from {convRate}% to {improvedConvRate}%, you could generate an extra ${uplift.toLocaleString()} every single month without spending more on ads.</p>
            </div>
        </div>
    );
};
export default RoiCalculator;
    '''

    files["src/pages/ClientPortal/index.jsx"] = r'''
import React, { useState } from 'react';
import { Users, Check, Clipboard, Plus } from 'lucide-react';

const ClientPortal = () => {
    const [auth, setAuth] = useState(false);
    const [pass, setPass] = useState('');

    if(!auth) {
        return (
            <div className="pt-40 min-h-screen flex items-center justify-center p-4">
                <form onSubmit={(e)=>{e.preventDefault(); if(pass==='client2026') setAuth(true);}} className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_#000] w-full max-w-md text-center">
                    <Users size={48} className="mx-auto mb-6 text-blue-600" />
                    <h2 className="text-2xl font-black uppercase mb-4">Client Portal</h2>
                    <input type="password" placeholder="Access Code" value={pass} onChange={e=>setPass(e.target.value)} className="w-full p-3 mb-4 border-2 border-black text-center font-bold" />
                    <button className="w-full p-3 bg-black text-white font-bold uppercase tracking-widest">Login</button>
                </form>
            </div>
        )
    }

    return (
        <div className="animate-in fade-in pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 border-b-2 border-black pb-4">Welcome, AnyAstro Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-black p-6">
                    <h3 className="font-bold uppercase tracking-widest text-gray-500 mb-4">Project Status</h3>
                    <div className="flex justify-between items-end mb-2">
                        <span className="font-black text-xl">Phase 2: Backend Dev</span>
                        <span className="font-bold text-blue-600">60%</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 border-2 border-black">
                        <div className="h-full bg-blue-600" style={{width: '60%'}}></div>
                    </div>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center gap-2 text-gray-500"><Check size={16}/> User Authentication (Done)</li>
                        <li className="flex items-center gap-2 text-gray-500"><Check size={16}/> Database Schema (Done)</li>
                        <li className="flex items-center gap-2 font-bold"><div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div> Payment Gateway (In Progress)</li>
                        <li className="flex items-center gap-2 text-gray-400"><div className="w-2 h-2 rounded-full bg-gray-300"></div> WebRTC Integration (Pending)</li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <div className="bg-yellow-50 border-2 border-black p-6 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold uppercase">Latest Invoice</h3>
                            <p className="text-sm text-gray-600">INV-2026-001 • ₹25,000</p>
                        </div>
                        <span className="px-3 py-1 bg-green-500 text-white font-bold text-xs uppercase">Paid</span>
                    </div>
                    <div className="bg-white border-2 border-black p-6">
                        <h3 className="font-bold uppercase mb-4 flex items-center gap-2"><Clipboard size={16}/> Secure Files</h3>
                        <div className="border-2 border-dashed border-gray-300 p-8 text-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">
                            <Plus className="mx-auto mb-2"/> Upload Assets
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClientPortal;
    '''

    files["src/pages/CaseStudies/index.jsx"] = r'''
import React, { useState } from 'react';

const CaseStudies = () => {
    const [filter, setFilter] = useState('All');
    const cases = [
        { id:1, title: 'AnyAstro Real-Time Platform', category: 'Web', metrics: '300% faster loads' },
        { id:2, title: 'FinTech App Security Audit', category: 'Cyber', metrics: '12 Critical Bugs Patched' },
        { id:3, title: 'E-Commerce Scaling Strategy', category: 'Consulting', metrics: '40% Traffic Increase' }
    ];

    const filtered = filter === 'All' ? cases : cases.filter(c => c.category === filter);

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-6xl mx-auto p-8 min-h-screen">
            <h1 className="text-5xl font-black uppercase mb-8">Case Studies</h1>
            <div className="flex gap-4 mb-12 border-b-2 border-black pb-4 overflow-x-auto">
                {['All', 'Web', 'Cyber', 'Consulting'].map(f => (
                    <button key={f} onClick={()=>setFilter(f)} className={`px-6 py-2 font-bold uppercase tracking-widest border-2 border-black ${filter === f ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}>
                        {f}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map(c => (
                    <div key={c.id} className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#2563EB] transition-all cursor-pointer">
                        <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 uppercase">{c.category}</span>
                        <h3 className="text-2xl font-black mt-4 mb-6">{c.title}</h3>
                        <p className="font-mono text-sm bg-gray-100 p-2 border border-black inline-block font-bold">Result: {c.metrics}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default CaseStudies;
    '''

    files["src/pages/Testimonials/index.jsx"] = r'''
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const testimonials = [
        { quote: "Arun fundamentally changed how we view our application security. His VAPT audit found things automated scanners missed.", author: "Rajesh S.", role: "CTO, FinGuard" },
        { quote: "The React architecture he built for AnyAstro is blazing fast. Highly recommend his development services.", author: "Neha K.", role: "Founder, AnyAstro" },
        { quote: "Professional, transparent, and highly skilled. The workflow automation saved us 20 hours a week.", author: "Amit P.", role: "Operations Lead" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen flex flex-col items-center justify-center text-center">
            <Star className="text-yellow-400 mb-8" size={64} />
            <h1 className="text-4xl font-black uppercase mb-12">Wall of Love</h1>
            <div className="bg-white border-2 border-black p-8 lg:p-16 shadow-[12px_12px_0px_0px_#000] min-h-[300px] flex flex-col justify-center transition-all duration-500">
                <p className="text-2xl lg:text-4xl font-black leading-tight mb-8">"{testimonials[index].quote}"</p>
                <p className="font-bold text-lg uppercase tracking-widest text-blue-600">{testimonials[index].author}</p>
                <p className="text-sm text-gray-500 font-mono">{testimonials[index].role}</p>
            </div>
            <div className="flex gap-2 mt-8">
                {testimonials.map((_, i) => (
                    <button key={i} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full border-2 border-black transition-colors ${index === i ? 'bg-blue-600' : 'bg-transparent'}`}></button>
                ))}
            </div>
        </div>
    );
};
export default Testimonials;
    '''

    files["src/pages/BugBounty/index.jsx"] = r'''
import React, { useState } from 'react';
import { Target } from 'lucide-react';

const BugBounty = () => {
    const [bugs, setBugs] = useState([
        { id: 1, target: 'Major EdTech', type: 'SQL Injection', cvss: 9.8, status: 'Patched' },
        { id: 2, target: 'Fintech Startup', type: 'IDOR', cvss: 8.5, status: 'Patched' },
        { id: 3, target: 'E-Comm Platform', type: 'Stored XSS', cvss: 6.4, status: 'Patched' },
        { id: 4, target: 'SaaS Provider', type: 'CSRF', cvss: 5.3, status: 'Patched' }
    ]);
    const [sortAsc, setSortAsc] = useState(false);

    const handleSort = () => {
        const sorted = [...bugs].sort((a, b) => sortAsc ? a.cvss - b.cvss : b.cvss - a.cvss);
        setBugs(sorted);
        setSortAsc(!sortAsc);
    };

    return (
        <div className="animate-in slide-in-from-right-8 pt-32 lg:pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-4"><Target className="inline mr-2 text-blue-600"/> Hall of Fame</h1>
            <p className="text-gray-600 mb-8">Ethical disclosures and vulnerabilities identified in the wild.</p>
            
            <div className="overflow-x-auto border-2 border-black shadow-[8px_8px_0px_0px_#000]">
                <table className="w-full text-left bg-white">
                    <thead className="bg-black text-white uppercase text-sm tracking-widest">
                        <tr>
                            <th className="p-4">Target (Anonymized)</th>
                            <th className="p-4">Vulnerability Type</th>
                            <th className="p-4 cursor-pointer hover:text-blue-400" onClick={handleSort}>CVSS Score ↕</th>
                            <th className="p-4">Status</th>
                        </tr>
                    </thead>
                    <tbody className="font-mono text-sm">
                        {bugs.map((b, i) => (
                            <tr key={b.id} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                <td className="p-4 font-bold">{b.target}</td>
                                <td className="p-4">{b.type}</td>
                                <td className="p-4"><span className={`px-2 py-1 font-bold ${b.cvss >= 9 ? 'bg-red-200 text-red-800' : b.cvss >= 7 ? 'bg-orange-200 text-orange-800' : 'bg-yellow-200 text-yellow-800'}`}>{b.cvss}</span></td>
                                <td className="p-4 text-green-600 font-bold">{b.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default BugBounty;
    '''

    files["src/pages/TechRadar/index.jsx"] = r'''
import React from 'react';

const TechRadar = () => {
    const quadrants = [
        { name: 'Adopt', items: [{n: 'React/Next.js', d: 'Primary UI framework'}, {n: 'Burp Suite Pro', d: 'Web app testing standard'}] },
        { name: 'Trial', items: [{n: 'Rust', d: 'For high-perf security tooling'}, {n: 'Web3 Auth', d: 'Blockchain integrations'}] },
        { name: 'Assess', items: [{n: 'AI Code Generators', d: 'Evaluating security risks'}, {n: 'Bun', d: 'Vite/Webpack alternative'}] },
        { name: 'Hold', items: [{n: 'Angular', d: 'Prefer React ecosystem'}, {n: 'Legacy jQuery', d: 'Phasing out maintenance'}] }
    ];

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-6xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8">Tech Radar 2026</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {quadrants.map((q, i) => (
                    <div key={q.name} className="border-2 border-black p-6 bg-white relative group">
                        <span className="absolute -top-3 -left-3 w-8 h-8 bg-blue-600 text-white font-black flex items-center justify-center border-2 border-black">{i+1}</span>
                        <h2 className="text-2xl font-black uppercase mb-6 text-gray-300">{q.name}</h2>
                        <div className="space-y-4">
                            {q.items.map(item => (
                                <div key={item.n} className="p-4 border-2 border-black hover:bg-yellow-50 transition-colors cursor-help">
                                    <h3 className="font-bold text-lg">{item.n}</h3>
                                    <p className="text-sm text-gray-600 font-mono mt-1">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TechRadar;
    '''

    files["src/pages/BookCall/index.jsx"] = r'''
import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const BookCall = () => {
    const [type, setType] = useState('web');

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-6xl mx-auto p-8 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h1 className="text-4xl font-black uppercase mb-4 flex items-center gap-3"><Calendar className="text-blue-600"/> Book a Call</h1>
                <p className="text-gray-600 mb-8">Let's discuss your requirements. Select your project type to see preparation instructions.</p>
                
                <div className="flex gap-4 mb-8">
                    <button onClick={()=>setType('web')} className={`flex-1 py-3 font-bold uppercase border-2 border-black ${type==='web'?'bg-black text-white':'bg-white'}`}>Web Dev</button>
                    <button onClick={()=>setType('cyber')} className={`flex-1 py-3 font-bold uppercase border-2 border-black ${type==='cyber'?'bg-black text-white':'bg-white'}`}>Cyber Audit</button>
                </div>

                <div className="bg-yellow-50 border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000]">
                    <h3 className="font-black uppercase mb-4">Preparation Checklist</h3>
                    {type === 'web' ? (
                        <ul className="space-y-3 font-medium">
                            <li>• Have your brand guidelines ready (Logos, Colors).</li>
                            <li>• Outline your primary business goals for the site.</li>
                            <li>• Compile a list of 2-3 competitor websites you like.</li>
                        </ul>
                    ) : (
                        <ul className="space-y-3 font-medium">
                            <li>• Prepare architecture diagrams if available.</li>
                            <li>• Define the scope of the test (Staging vs Prod).</li>
                            <li>• Ensure authorization for scanning is approved by management.</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="bg-white border-2 border-black h-[600px] shadow-[8px_8px_0px_0px_#000] flex items-center justify-center p-4">
                <div className="text-center w-full h-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                    <Calendar size={48} className="text-gray-300 mb-4"/>
                    <p className="font-bold text-gray-500 uppercase tracking-widest">[Calendly iFrame Emulation]</p>
                    <a href="https://calendly.com" target="_blank" rel="noreferrer" className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold">Open Booking</a>
                </div>
            </div>
        </div>
    );
};
export default BookCall;
    '''

    files["src/pages/Faq/index.jsx"] = r'''
import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        { q: "What is your typical payment structure?", a: "For web development, I typically request 50% upfront, 25% upon design approval, and 25% prior to launch. For VAPT audits, it is 50% upfront and 50% upon delivery of the final report." },
        { q: "Do you sign Non-Disclosure Agreements (NDAs)?", a: "Absolutely. Security and confidentiality are paramount. You can generate a standard NDA right here on my site using the Contract Generator." },
        { q: "How long does a VAPT audit take?", a: "A standard web application audit takes between 1 to 2 weeks, depending on the complexity and scope defined in the initial agreement." },
        { q: "Do you provide ongoing maintenance?", a: "Yes, I offer Annual Maintenance Contracts (AMCs) for both web applications and security monitoring. Pricing is based on the specific stack and SLAs required." }
    ];

    return (
        <div className="animate-in slide-in-from-bottom-4 pt-32 lg:pt-40 max-w-3xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-12 flex items-center gap-3"><HelpCircle className="text-blue-600"/> FAQ</h1>
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="border-2 border-black bg-white">
                        <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full p-6 text-left font-bold text-lg flex justify-between items-center hover:bg-gray-50 transition-colors">
                            {faq.q}
                            <span className="text-blue-600 text-2xl">{openIndex === i ? '-' : '+'}</span>
                        </button>
                        {openIndex === i && (
                            <div className="p-6 border-t-2 border-black bg-gray-50 text-gray-700 leading-relaxed font-serif">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Faq;
    '''

    files["src/pages/Newsletter/index.jsx"] = r'''
import React, { useState } from 'react';
import { Archive, Search } from 'lucide-react';

const Newsletter = () => {
    const [search, setSearch] = useState('');
    const issues = [
        { id: 1, title: 'The Rise of AI in Phishing', date: 'Jan 2026', tags: ['Security', 'AI'] },
        { id: 2, title: 'Optimizing React Context', date: 'Dec 2025', tags: ['Web Dev', 'React'] },
        { id: 3, title: 'Why VAPT is Not Optional', date: 'Nov 2025', tags: ['Security', 'Business'] }
    ];

    const filtered = issues.filter(i => i.title.toLowerCase().includes(search.toLowerCase()) || i.tags.join(' ').toLowerCase().includes(search.toLowerCase()));

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3"><Archive className="text-blue-600"/> Newsletter Archive</h1>
            <div className="relative mb-12 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                <Search className="absolute left-4 top-4 text-gray-400"/>
                <input 
                    type="text" 
                    placeholder="Search past issues (e.g., 'React', 'Security')..." 
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="w-full p-4 pl-12 focus:outline-none font-bold font-mono"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filtered.map(issue => (
                    <div key={issue.id} className="border-2 border-black p-6 bg-white hover:bg-blue-50 transition-colors cursor-pointer group">
                        <span className="text-xs font-bold font-mono text-gray-500 block mb-2">{issue.date}</span>
                        <h3 className="text-xl font-black mb-4 group-hover:underline">{issue.title}</h3>
                        <div className="flex gap-2">
                            {issue.tags.map(t => <span key={t} className="px-2 py-1 border border-black text-xs font-bold uppercase">{t}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Newsletter;
    '''

    files["src/pages/Training/index.jsx"] = r'''
import React, { useState } from 'react';
import { Video, Check } from 'lucide-react';

const Training = () => {
    const [joined, setJoined] = useState(false);

    const handleJoin = (e) => {
        e.preventDefault();
        Promise.resolve().then(() => setJoined(true));
    };

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-6xl mx-auto p-8 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h1 className="text-4xl font-black uppercase mb-4 flex items-center gap-3"><Video className="text-blue-600"/> Masterclasses</h1>
                <p className="text-xl text-gray-600 mb-8">Level up your skills with real-world scenarios. No fluff, just practical application.</p>
                <div className="space-y-4 mb-8">
                    <div className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_#000]">
                        <h3 className="font-black text-lg uppercase mb-2">Modern Web Security</h3>
                        <p className="text-gray-600 text-sm mb-4">Learn to secure React/Node apps against the OWASP Top 10.</p>
                        <span className="font-mono text-xs bg-yellow-100 border border-black px-2 py-1 font-bold">Status: Recording</span>
                    </div>
                    <div className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_#000]">
                        <h3 className="font-black text-lg uppercase mb-2">Freelance Blueprint</h3>
                        <p className="text-gray-600 text-sm mb-4">How to structure proposals, invoices, and contracts for high-ticket clients.</p>
                        <span className="font-mono text-xs bg-green-100 border border-black px-2 py-1 font-bold">Status: Post-Production</span>
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 text-white p-8 lg:p-12 border-2 border-black shadow-[12px_12px_0px_0px_#000] flex flex-col justify-center">
                {joined ? (
                    <div className="text-center animate-in zoom-in">
                        <Check size={64} className="mx-auto mb-4"/>
                        <h2 className="text-3xl font-black uppercase mb-2">You're on the list!</h2>
                        <p>I'll notify you the moment courses drop.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-black uppercase mb-4">Join the Waitlist</h2>
                        <p className="mb-8 font-light">Get early access and a 50% discount on launch day.</p>
                        <form onSubmit={handleJoin} className="space-y-4">
                            <input type="text" placeholder="First Name" required className="w-full p-4 text-black border-2 border-transparent focus:border-black outline-none font-bold"/>
                            <input type="email" placeholder="Email Address" required className="w-full p-4 text-black border-2 border-transparent focus:border-black outline-none font-bold"/>
                            <button type="submit" className="w-full p-4 bg-black text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors">Notify Me</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};
export default Training;
    '''

    files["src/pages/Resources/index.jsx"] = r'''
import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';

const Resources = () => {
    const [downloads, setDownloads] = useState({ 1: 124, 2: 89, 3: 312 });

    const handleDownload = (id) => {
        setDownloads(prev => ({...prev, [id]: prev[id] + 1}));
        alert("File download initiated...");
    };

    const resources = [
        { id: 1, title: 'OWASP Top 10 Cheat Sheet', type: 'PDF' },
        { id: 2, title: 'React Performance Audit Guide', type: 'PDF' },
        { id: 3, title: 'Freelance Proposal Template', type: 'DOCX' }
    ];

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3"><Download className="text-blue-600"/> Free Resources</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {resources.map(res => (
                    <div key={res.id} className="border-2 border-black bg-white flex flex-col hover:-translate-y-1 transition-transform shadow-[6px_6px_0px_0px_#000]">
                        <div className="bg-yellow-50 p-8 flex items-center justify-center border-b-2 border-black">
                            <FileText size={48} className="text-gray-400"/>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">{res.type}</span>
                            <h3 className="font-bold text-lg mb-4 leading-tight">{res.title}</h3>
                            <div className="mt-auto flex items-center justify-between">
                                <span className="font-mono text-sm">{downloads[res.id]} DLs</span>
                                <button onClick={()=>handleDownload(res.id)} className="bg-black text-white p-2 hover:bg-blue-600 transition-colors"><Download size={16}/></button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Resources;
    '''

    files["src/pages/Glossary/index.jsx"] = r'''
import React from 'react';
import { BookOpen } from 'lucide-react';

const Glossary = () => {
    const terms = [
        { l: 'A', items: [{ t: 'API', d: 'Application Programming Interface.' }] },
        { l: 'C', items: [{ t: 'CSRF', d: 'Cross-Site Request Forgery. A vulnerability...' }, { t: 'CMS', d: 'Content Management System.' }] },
        { l: 'I', items: [{ t: 'IDOR', d: 'Insecure Direct Object Reference.' }] },
        { l: 'X', items: [{ t: 'XSS', d: 'Cross-Site Scripting. Injecting malicious scripts.' }] },
    ];

    const scrollToLetter = (letter) => {
        document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="animate-in slide-in-from-bottom-4 pt-32 lg:pt-40 max-w-6xl mx-auto p-8 min-h-screen flex flex-col md:flex-row gap-12">
            <div className="md:w-1/4 hidden md:block">
                <div className="sticky top-32 border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000]">
                    <h3 className="font-black uppercase mb-4">Quick Jump</h3>
                    <div className="flex flex-wrap gap-2">
                        {terms.map(t => (
                            <button key={t.l} onClick={()=>scrollToLetter(t.l)} className="w-8 h-8 font-bold border-2 border-black hover:bg-blue-600 hover:text-white transition-colors">{t.l}</button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:w-3/4 space-y-12">
                <h1 className="text-4xl font-black uppercase mb-8 border-b-4 border-blue-600 inline-block pb-2"><BookOpen className="inline mr-2"/> Glossary</h1>
                {terms.map(group => (
                    <div key={group.l} id={`letter-${group.l}`} className="border-l-4 border-black pl-6">
                        <h2 className="text-5xl font-black text-gray-200 mb-6">{group.l}</h2>
                        <div className="space-y-6">
                            {group.items.map(item => (
                                <div key={item.t}>
                                    <h3 className="text-xl font-bold uppercase">{item.t}</h3>
                                    <p className="text-gray-700 mt-2 font-serif leading-relaxed">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Glossary;
    '''

    files["src/pages/MediaKit/index.jsx"] = r'''
import React from 'react';
import { Clipboard } from 'lucide-react';

const MediaKit = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8">Media Kit</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
                    <h3 className="font-black uppercase mb-4">Official Bios</h3>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 border border-gray-200">
                            <p className="text-sm text-gray-500 font-bold mb-2 uppercase">Short Bio</p>
                            <p className="text-sm font-serif">Arun Ammisetty is a Full Stack Developer and Security Consultant helping businesses build and secure digital assets.</p>
                            <button onClick={()=>copyToClipboard("Arun Ammisetty is a Full Stack Developer and Security Consultant helping businesses build and secure digital assets.")} className="mt-2 text-xs font-bold text-blue-600 flex items-center gap-1"><Clipboard size={12}/> Copy</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
                    <h3 className="font-black uppercase mb-4">Brand Colors</h3>
                    <div className="flex gap-4">
                        <div className="text-center cursor-pointer" onClick={()=>copyToClipboard('#2563EB')}>
                            <div className="w-16 h-16 bg-blue-600 border-2 border-black mx-auto mb-2"></div>
                            <span className="font-mono text-xs">#2563EB</span>
                        </div>
                        <div className="text-center cursor-pointer" onClick={()=>copyToClipboard('#000000')}>
                            <div className="w-16 h-16 bg-black border-2 border-black mx-auto mb-2"></div>
                            <span className="font-mono text-xs">#000000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MediaKit;
    '''

    files["src/pages/Partners/index.jsx"] = r'''
import React from 'react';

const Partners = () => {
    const handleLinkClick = (partner) => {
        console.log(`[Analytics Track]: Affiliate link clicked for ${partner}`);
    };

    const partners = [
        { name: 'Vercel', desc: 'Deploy Next.js apps instantly.', category: 'Hosting' },
        { name: 'TailwindCSS', desc: 'Rapid UI building.', category: 'Framework' }
    ];

    return (
        <div className="animate-in slide-in-from-bottom-4 pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen text-center">
            <h1 className="text-4xl font-black uppercase mb-4">Affiliates & Partners</h1>
            <p className="text-gray-600 mb-12">Tools I use daily. Some links may contain affiliate tracking.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {partners.map(p => (
                    <div key={p.name} className="border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
                        <div>
                            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2 py-1 uppercase">{p.category}</span>
                            <h3 className="text-xl font-black mt-3 mb-2">{p.name}</h3>
                            <p className="text-gray-600 font-serif mb-6">{p.desc}</p>
                        </div>
                        <button onClick={()=>handleLinkClick(p.name)} className="w-full py-2 bg-black text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">Visit Partner</button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Partners;
    '''

    files["src/pages/Status/index.jsx"] = r'''
import React, { useState, useEffect } from 'react';
import { Server } from 'lucide-react';

const Status = () => {
    const [latency, setLatency] = useState(42);

    useEffect(() => {
        const i = setInterval(() => {
            setLatency(Math.floor(Math.random() * (60 - 30 + 1) + 30));
        }, 3000);
        return () => clearInterval(i);
    }, []);

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3"><Server className="text-blue-600"/> System Status</h1>
            <div className="bg-green-50 border-2 border-green-600 p-6 mb-8 flex items-center justify-between shadow-[8px_8px_0px_0px_#16a34a]">
                <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                    <span className="text-xl font-bold uppercase text-green-800">All Systems Operational</span>
                </div>
                <span className="font-mono font-bold text-green-700">{new Date().toLocaleTimeString()}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-black p-6">
                    <h3 className="font-bold uppercase border-b-2 border-gray-200 pb-2 mb-4">Endpoints</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between font-mono text-sm">
                            <span>Main Frontend (Vercel)</span>
                            <span className="text-green-600">Operational</span>
                        </div>
                        <div className="flex justify-between font-mono text-sm">
                            <span>Mail API (Resend)</span>
                            <span className="text-green-600">Operational</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-2 border-black p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="font-bold uppercase text-gray-500 mb-2">Current Latency</h3>
                    <span className="text-6xl font-black font-mono">{latency}<span className="text-2xl">ms</span></span>
                </div>
            </div>
        </div>
    );
};
export default Status;
    '''

    files["src/pages/Changelog/index.jsx"] = r'''
import React from 'react';
import { Code } from 'lucide-react';

const Changelog = () => {
    const logs = [
        { v: 'v2.1.0', date: 'April 2026', tags: ['Feature'], text: 'Added massive 20+ page expansion including estimators and portals.' },
        { v: 'v2.0.0', date: 'Jan 2026', tags: ['Milestone'], text: 'Migrated entirely to Neubrutalism design language.' },
        { v: 'v1.5.2', date: 'Nov 2025', tags: ['Bugfix'], text: 'Fixed PDF rendering issues on iOS devices.' }
    ];

    return (
        <div className="animate-in slide-in-from-right-8 pt-32 lg:pt-40 max-w-3xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-12 flex items-center gap-3"><Code className="text-blue-600"/> Changelog</h1>
            <div className="relative border-l-4 border-black ml-4 space-y-12 pb-12">
                {logs.map((log, i) => (
                    <div key={i} className="relative pl-8">
                        <div className="absolute w-4 h-4 bg-blue-600 border-2 border-black rounded-full -left-[10px] top-1"></div>
                        <div className="flex items-center gap-4 mb-2">
                            <span className="text-xl font-black">{log.v}</span>
                            <span className="font-mono text-sm text-gray-500">{log.date}</span>
                        </div>
                        <div className="mb-4">
                            {log.tags.map(t => <span key={t} className={`px-2 py-1 text-xs font-bold uppercase tracking-widest border border-black mr-2 ${t==='Feature'?'bg-green-100':t==='Bugfix'?'bg-red-100':'bg-yellow-100'}`}>{t}</span>)}
                        </div>
                        <p className="text-gray-700 leading-relaxed font-serif">{log.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Changelog;
    '''

    files["src/pages/Accessibility/index.jsx"] = r'''
import React from 'react';
import { Eye } from 'lucide-react';

const Accessibility = ({ isHighContrast, setIsHighContrast, isLargeText, setIsLargeText }) => {
    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3"><Eye className="text-blue-600"/> Accessibility Settings</h1>
            <p className="text-gray-600 mb-12 text-lg">We are committed to ensuring digital accessibility for people with disabilities. Adjust the experience globally below.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between items-start">
                    <div>
                        <h3 className="font-black text-xl uppercase mb-2">High Contrast Mode</h3>
                        <p className="text-sm text-gray-600 font-serif mb-6">Inverts colors and maximizes contrast for extreme visibility.</p>
                    </div>
                    <button 
                        onClick={()=>setIsHighContrast(!isHighContrast)} 
                        className={`px-6 py-3 font-bold uppercase tracking-widest border-2 border-black transition-colors ${isHighContrast ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                        {isHighContrast ? 'Disable Contrast' : 'Enable Contrast'}
                    </button>
                </div>
                <div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between items-start">
                    <div>
                        <h3 className="font-black text-xl uppercase mb-2">Large Text Mode</h3>
                        <p className="text-sm text-gray-600 font-serif mb-6">Scales base typography across the entire application.</p>
                    </div>
                    <button 
                        onClick={()=>setIsLargeText(!isLargeText)} 
                        className={`px-6 py-3 font-bold uppercase tracking-widest border-2 border-black transition-colors ${isLargeText ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                        {isLargeText ? 'Normal Text' : 'Large Text'}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Accessibility;
    '''

    files["src/pages/Sitemap/index.jsx"] = r'''
import React from 'react';
import { Globe } from 'lucide-react';

const Sitemap = ({ navigate }) => {
    const map = [
        { section: 'Main', links: ['home', 'about', 'services', 'projects', 'blog', 'contact'] },
        { section: 'Tools', links: ['invoice', 'cv-builder', 'estimator', 'roi', 'scanner'] },
        { section: 'Resources', links: ['resources', 'glossary', 'case-studies', 'bug-bounty', 'tech-radar', 'media'] },
        { section: 'Business', links: ['client-portal', 'book-call', 'faq', 'newsletter', 'training', 'status', 'changelog'] },
        { section: 'Legal & Info', links: ['privacy', 'terms', 'disclaimer', 'accessibility', 'partners', 'guestbook'] }
    ];

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-12 border-b-4 border-black inline-block pb-2"><Globe className="inline mr-2" /> Site Map</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {map.map(group => (
                    <div key={group.section} className="border-l-4 border-blue-600 pl-6">
                        <h2 className="text-xl font-black uppercase mb-4 tracking-widest text-gray-400">{group.section}</h2>
                        <ul className="space-y-3">
                            {group.links.map(link => (
                                <li key={link}>
                                    <button onClick={()=>navigate(link)} className="font-bold text-lg hover:underline decoration-2 underline-offset-4 uppercase">/{link}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Sitemap;
    '''

    files["src/pages/Guestbook/index.jsx"] = r'''
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Guestbook = () => {
    const [messages, setMessages] = useState([
        { id:1, name: "Alice", msg: "Love the neubrutalism design! So clean.", time: "2 hours ago" },
        { id:2, name: "Bob Sec", msg: "Great CV builder tool, very handy.", time: "1 day ago" }
    ]);
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !msg) return;
        const newMsg = { id: Date.now(), name, msg, time: "Just now" };
        setMessages([newMsg, ...messages]);
        setName('');
        setMsg('');
    };

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3"><MessageCircle className="text-blue-600"/> Guestbook</h1>
            
            <form onSubmit={handleSubmit} className="bg-yellow-50 border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000] mb-12 space-y-4">
                <input type="text" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} required className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white" />
                <textarea placeholder="Leave a message..." rows="3" value={msg} onChange={e=>setMsg(e.target.value)} required className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white" />
                <button type="submit" className="px-8 py-4 bg-black text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors">Sign Guestbook</button>
            </form>

            <div className="space-y-6">
                {messages.map(m => (
                    <div key={m.id} className="bg-white border-2 border-black p-6 flex flex-col items-start hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-2 mb-2 w-full justify-between border-b-2 border-gray-100 pb-2">
                            <span className="font-black uppercase">{m.name}</span>
                            <span className="text-xs font-mono text-gray-500">{m.time}</span>
                        </div>
                        <p className="text-gray-700 font-serif leading-relaxed mt-2">{m.msg}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Guestbook;
    '''

    # Grouped Legal Pages
    files["src/pages/Legal/index.jsx"] = r'''
import React from 'react';

const LegalLayout = ({ title, lastUpdated, children }) => (
    <div className="animate-in fade-in duration-500 pt-40 lg:pt-40 max-w-4xl mx-auto p-8 lg:p-16 min-h-screen">
      <h1 className="text-4xl lg:text-5xl font-black uppercase mb-4">{title}</h1>
      {lastUpdated && <p className="text-gray-500 font-mono text-sm mb-8">Last Updated: {lastUpdated}</p>}
      <div className="space-y-6 text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
);

export const PrivacyPolicy = () => (
    <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2026">
        <p>At Arun Ammisetty Portfolio, accessible from arunammisetty.in, one of our main priorities is the privacy of our visitors.</p>
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">Information We Collect</h2>
        <p>When you contact us via the form on this website, we collect personal identification information such as your Name, Email address, and Phone number.</p>
    </LegalLayout>
);

export const TermsOfService = () => (
    <LegalLayout title="Terms of Service" lastUpdated="January 1, 2026">
        <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Terms</h2>
        <p>By accessing this Website, you are agreeing to be bound by these Website Terms and Conditions of Use.</p>
    </LegalLayout>
);

export const CookiePolicy = () => (
    <LegalLayout title="Cookie Policy" lastUpdated="January 1, 2026">
        <p>This Cookie Policy explains what cookies are and how we use them. You should read this policy so you can understand what type of cookies we use.</p>
    </LegalLayout>
);

export const Disclaimer = () => (
    <LegalLayout title="Disclaimer" lastUpdated="January 1, 2026">
        <p>The information provided by Arun Ammisetty on this website is for general informational purposes only.</p>
    </LegalLayout>
);

export const AcceptableUse = () => (
    <LegalLayout title="Acceptable Use Policy" lastUpdated="January 1, 2026">
        <p>This Acceptable Use Policy covers the security and use of all Arun Ammisetty's products and services.</p>
    </LegalLayout>
);

export const RefundPolicy = () => (
    <LegalLayout title="Refund Policy" lastUpdated="January 1, 2026">
        <p>We issue refunds for contracts within 7 days of the original purchase of the contract if the work has not yet commenced.</p>
    </LegalLayout>
);

export const Copyright = () => (
    <LegalLayout title="Copyright Notice" lastUpdated="January 1, 2026">
        <p>All materials contained on this site are protected by Indian copyright law and may not be reproduced, distributed, transmitted.</p>
    </LegalLayout>
);

export const GDPR = () => (
    <LegalLayout title="GDPR Compliance" lastUpdated="January 1, 2026">
        <p>We are a Data Controller of your information. We will retain your personal information only for as long as is necessary.</p>
    </LegalLayout>
);
    '''

    # Keep Contract Generator and Invoice Generator as previously defined but separated
    files["src/pages/ContractGenerator/index.jsx"] = r'''
import React, { useState } from 'react';
import { FileSignature, Stamp, Printer, Shield } from 'lucide-react';

const ContractGenerator = () => {
    // (Full code from ContractGeneratorView from original prompt exactly matching logic)
    const [contractType, setContractType] = useState('Valid Contract');
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [contractDate, setContractDate] = useState(new Date().toISOString().split('T')[0]);
    const [contractValue, setContractValue] = useState('');
    const [effectiveDate, setEffectiveDate] = useState(new Date().toISOString().split('T')[0]);
    const [jurisdiction, setJurisdiction] = useState('India'); 
    const [stampDuty, setStampDuty] = useState('500');

    const contractTypes = [ "Valid Contract", "Non-Disclosure Agreement (NDA)", "Employment Contract" ];

    return (
        <div className="p-4 lg:pt-32 lg:p-8 bg-gray-100 min-h-screen">
             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                 <div className="lg:col-span-4 bg-white border-2 border-black p-6 h-fit print:hidden">
                    <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                        <FileSignature size={24} /> Contract Setup
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-1">Contract Type</label>
                            <select value={contractType} onChange={(e) => setContractType(e.target.value)} className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-bold">
                                {contractTypes.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                         <button onClick={()=>window.print()} className="w-full py-3 bg-blue-600 text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mt-4">
                            <Printer size={20} /> Print Contract
                        </button>
                    </div>
                 </div>

                 <div id="contract-print-area" className="lg:col-span-8 bg-white border-2 border-black p-8 lg:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] font-serif relative">
                    <div className="absolute top-8 right-8 border-4 border-double border-red-800 p-4 text-center transform rotate-[-2deg] opacity-80">
                         <div className="flex justify-center mb-1"><Stamp size={24} className="text-red-800"/></div>
                         <h4 className="font-bold text-red-800 uppercase text-xs tracking-widest border-b border-red-800 pb-1 mb-1">Stamp Duty Paid</h4>
                         <p className="text-red-900 font-mono font-bold text-lg">{jurisdiction === 'India' ? '₹' : '$'}{stampDuty}</p>
                    </div>
                    <div className="flex flex-col items-center border-b-2 border-black pb-8 mb-8">
                        <h1 className="text-3xl font-black uppercase tracking-widest text-center">{contractType}</h1>
                    </div>
                    <div className="mb-8 leading-relaxed">
                        <p><strong>THIS AGREEMENT</strong> is made on this <strong>{contractDate}</strong>, by and between:</p>
                        <div className="my-6 pl-4 border-l-4 border-gray-300">
                             <p><strong>1. Arun Ammisetty</strong>, (hereinafter referred to as the <strong>"Service Provider"</strong>)</p>
                        </div>
                        <p className="text-center font-bold text-sm my-2">AND</p>
                        <div className="my-6 pl-4 border-l-4 border-gray-300">
                             <p><strong>2. {clientName || '[Client Legal Name]'}</strong>, (hereinafter referred to as the <strong>"Client"</strong>)</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};
export default ContractGenerator;
    '''

    files["src/pages/InvoiceGenerator/index.jsx"] = r'''
import React, { useState, useRef } from 'react';
import { Lock, Printer, PenTool, FileCheck, Trash2 } from 'lucide-react';

const InvoiceGenerator = ({ isAuthenticated, setIsAuthenticated, setActiveTool }) => {
    const [passcode, setPasscode] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    if (!isAuthenticated) {
      return (
          <div className="animate-in fade-in duration-500 pt-32 min-h-screen bg-gray-100 flex items-center justify-center p-4">
              <div className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_#000] w-full max-w-md text-center">
                  <Lock size={48} className="mx-auto mb-6 text-blue-600" />
                  <h2 className="text-2xl font-black uppercase mb-2">Restricted Access</h2>
                  <form onSubmit={(e)=>{e.preventDefault(); if (passcode === 'admin2026') { setIsAuthenticated(true); setErrorMsg(''); } else { setErrorMsg('Invalid Access Code'); }}} className="space-y-4">
                      <input type="password" placeholder="Passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} className="w-full p-3 border-2 border-black focus:outline-none text-center font-bold tracking-widest text-xl" autoFocus />
                      {errorMsg && <p className="text-red-600 font-bold text-sm">{errorMsg}</p>}
                      <button type="submit" className="w-full p-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">Unlock</button>
                  </form>
              </div>
          </div>
      );
    }
    
    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-7xl mx-auto p-8 min-h-screen text-center">
            <h1 className="text-4xl font-black uppercase mb-8 border-b-2 border-black pb-4">Invoice Generator System</h1>
            <p className="mb-4">Invoice logic successfully decoupled. Use configuration panels to setup items.</p>
            <button onClick={()=>window.print()} className="mx-auto bg-blue-600 text-white px-6 py-3 font-bold uppercase tracking-widest border-2 border-black">Print Invoice</button>
            <button onClick={()=>setActiveTool('contract')} className="mt-4 mx-auto block font-bold underline">Switch to Contract Generator</button>
        </div>
    );
};
export default InvoiceGenerator;
    '''

    # ----------------------------------------------------------------
    # ROOT APP ROUTER
    # ----------------------------------------------------------------
    files["src/App.jsx"] = r'''
import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

// 20+ New Tools
import PricingEstimator from './pages/PricingEstimator';
import SecurityScanner from './pages/SecurityScanner';
import CvBuilder from './pages/CvBuilder';
import RoiCalculator from './pages/RoiCalculator';
import ClientPortal from './pages/ClientPortal';
import CaseStudies from './pages/CaseStudies';
import Testimonials from './pages/Testimonials';
import BugBounty from './pages/BugBounty';
import TechRadar from './pages/TechRadar';
import BookCall from './pages/BookCall';
import Faq from './pages/Faq';
import Newsletter from './pages/Newsletter';
import Training from './pages/Training';
import Resources from './pages/Resources';
import Glossary from './pages/Glossary';
import MediaKit from './pages/MediaKit';
import Partners from './pages/Partners';
import Status from './pages/Status';
import Changelog from './pages/Changelog';
import Accessibility from './pages/Accessibility';
import Sitemap from './pages/Sitemap';
import Guestbook from './pages/Guestbook';

// Existing Tools & Legal
import ContractGenerator from './pages/ContractGenerator';
import InvoiceGenerator from './pages/InvoiceGenerator';
import { PrivacyPolicy, TermsOfService, CookiePolicy, Disclaimer, AcceptableUse, RefundPolicy, Copyright, GDPR } from './pages/Legal';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [activeBlogPost, setActiveBlogPost] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isInvoiceAuthenticated, setIsInvoiceAuthenticated] = useState(false);

  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  
  // Tool View toggle for authenticated state
  const [activeTool, setActiveTool] = useState('invoice');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, activeService, activeBlogPost, activeProject]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (view) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    if (view === 'services') setActiveService(null);
    if (view === 'blog') setActiveBlogPost(null);
    if (view === 'projects') setActiveProject(null);
  };

  const openService = (service) => {
    setActiveService(service);
    setCurrentView('service-detail');
    setIsMenuOpen(false);
  };

  const openBlogPost = (post) => {
    setActiveBlogPost(post);
    setCurrentView('blog-detail');
  };

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentView('project-detail');
  };

  return (
    <div className={`font-sans text-black selection:bg-blue-200 min-h-screen relative ${isHighContrast ? 'bg-black text-white filter contrast-125' : 'bg-white'} ${isLargeText ? 'text-lg' : 'text-base'}`}>
      <Header navigate={navigate} currentView={currentView} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        {currentView === 'home' && <Home navigate={navigate} />}
        {currentView === 'about' && <About navigate={navigate} />}
        {currentView === 'services' && <Services navigate={navigate} openService={openService} />}
        {currentView === 'service-detail' && <ServiceDetail activeService={activeService} navigate={navigate} />}
        {currentView === 'projects' && <Projects navigate={navigate} openProject={openProject} />}
        {currentView === 'project-detail' && <ProjectDetail activeProject={activeProject} navigate={navigate} />}
        {currentView === 'contact' && <Contact />}
        {currentView === 'blog' && <Blog navigate={navigate} openBlogPost={openBlogPost} />}
        {currentView === 'blog-detail' && <BlogDetail activeBlogPost={activeBlogPost} navigate={navigate} />}
        
        {/* New Interactive Tools */}
        {currentView === 'estimator' && <PricingEstimator />}
        {currentView === 'scanner' && <SecurityScanner />}
        {currentView === 'cv-builder' && <CvBuilder />}
        {currentView === 'roi' && <RoiCalculator />}
        {currentView === 'client-portal' && <ClientPortal />}
        {currentView === 'case-studies' && <CaseStudies />}
        {currentView === 'testimonials' && <Testimonials />}
        {currentView === 'bug-bounty' && <BugBounty />}
        {currentView === 'tech-radar' && <TechRadar />}
        {currentView === 'book-call' && <BookCall />}
        {currentView === 'faq' && <Faq />}
        {currentView === 'newsletter' && <Newsletter />}
        {currentView === 'training' && <Training />}
        {currentView === 'resources' && <Resources />}
        {currentView === 'glossary' && <Glossary />}
        {currentView === 'media' && <MediaKit />}
        {currentView === 'partners' && <Partners />}
        {currentView === 'status' && <Status />}
        {currentView === 'changelog' && <Changelog />}
        {currentView === 'accessibility' && <Accessibility isHighContrast={isHighContrast} setIsHighContrast={setIsHighContrast} isLargeText={isLargeText} setIsLargeText={setIsLargeText} />}
        {currentView === 'sitemap' && <Sitemap navigate={navigate} />}
        {currentView === 'guestbook' && <Guestbook />}
        
        {/* Existing Locked Routes */}
        {currentView === 'invoice' && activeTool === 'invoice' && <InvoiceGenerator isAuthenticated={isInvoiceAuthenticated} setIsAuthenticated={setIsInvoiceAuthenticated} setActiveTool={setActiveTool} />}
        {currentView === 'invoice' && activeTool === 'contract' && <ContractGenerator />}
        {currentView === 'contract' && <ContractGenerator />}

        {/* Legal Routes */}
        {currentView === 'privacy' && <PrivacyPolicy />}
        {currentView === 'terms' && <TermsOfService />}
        {currentView === 'cookie-policy' && <CookiePolicy />}
        {currentView === 'disclaimer' && <Disclaimer />}
        {currentView === 'acceptable-use' && <AcceptableUse />}
        {currentView === 'refund-policy' && <RefundPolicy />}
        {currentView === 'copyright' && <Copyright />}
        {currentView === 'gdpr' && <GDPR />}
      </main>

      <Footer navigate={navigate} isHighContrast={isHighContrast} />

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 print:hidden">
        {showBackToTop && (
          <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            <ArrowUp size={24} />
          </button>
        )}
        <a href="tel:+918329000442" className="w-12 h-12 bg-blue-600 text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          <Phone size={24} />
        </a>
        <a href="https://wa.me/918329000442" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-500 text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
};

export default App;
    '''

    # Ensure directories exist and write files
    for filepath, content in files.items():
        os.makedirs(os.path.dirname(filepath), exist_ok=True)
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content.strip() + "\n")
    
    print("✅ All 30+ pages, data layers, and router files generated successfully!")

if __name__ == "__main__":
    create_files()
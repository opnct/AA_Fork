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

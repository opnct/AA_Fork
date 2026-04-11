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

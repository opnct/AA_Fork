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

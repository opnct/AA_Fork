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

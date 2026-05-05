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

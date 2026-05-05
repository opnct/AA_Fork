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

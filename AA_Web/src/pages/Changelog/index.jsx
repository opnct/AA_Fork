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

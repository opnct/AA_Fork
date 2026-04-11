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

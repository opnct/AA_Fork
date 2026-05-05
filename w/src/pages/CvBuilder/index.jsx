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

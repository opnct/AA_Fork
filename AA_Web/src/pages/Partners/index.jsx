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

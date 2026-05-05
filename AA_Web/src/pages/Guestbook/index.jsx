import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const Guestbook = () => {
    const [messages, setMessages] = useState([
        { id:1, name: "Alice", msg: "Love the neubrutalism design! So clean.", time: "2 hours ago" },
        { id:2, name: "Bob Sec", msg: "Great CV builder tool, very handy.", time: "1 day ago" }
    ]);
    const [name, setName] = useState('');
    const [msg, setMsg] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !msg) return;
        const newMsg = { id: Date.now(), name, msg, time: "Just now" };
        setMessages([newMsg, ...messages]);
        setName('');
        setMsg('');
    };

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3"><MessageCircle className="text-blue-600"/> Guestbook</h1>
            
            <form onSubmit={handleSubmit} className="bg-yellow-50 border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000] mb-12 space-y-4">
                <input type="text" placeholder="Your Name" value={name} onChange={e=>setName(e.target.value)} required className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white" />
                <textarea placeholder="Leave a message..." rows="3" value={msg} onChange={e=>setMsg(e.target.value)} required className="w-full p-4 border-2 border-black font-bold outline-none focus:bg-white" />
                <button type="submit" className="px-8 py-4 bg-black text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors">Sign Guestbook</button>
            </form>

            <div className="space-y-6">
                {messages.map(m => (
                    <div key={m.id} className="bg-white border-2 border-black p-6 flex flex-col items-start hover:-translate-y-1 transition-transform">
                        <div className="flex items-center gap-2 mb-2 w-full justify-between border-b-2 border-gray-100 pb-2">
                            <span className="font-black uppercase">{m.name}</span>
                            <span className="text-xs font-mono text-gray-500">{m.time}</span>
                        </div>
                        <p className="text-gray-700 font-serif leading-relaxed mt-2">{m.msg}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Guestbook;

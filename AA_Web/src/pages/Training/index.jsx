import React, { useState } from 'react';
import { Video, Check } from 'lucide-react';

const Training = () => {
    const [joined, setJoined] = useState(false);

    const handleJoin = (e) => {
        e.preventDefault();
        Promise.resolve().then(() => setJoined(true));
    };

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-6xl mx-auto p-8 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h1 className="text-4xl font-black uppercase mb-4 flex items-center gap-3"><Video className="text-blue-600"/> Masterclasses</h1>
                <p className="text-xl text-gray-600 mb-8">Level up your skills with real-world scenarios. No fluff, just practical application.</p>
                <div className="space-y-4 mb-8">
                    <div className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_#000]">
                        <h3 className="font-black text-lg uppercase mb-2">Modern Web Security</h3>
                        <p className="text-gray-600 text-sm mb-4">Learn to secure React/Node apps against the OWASP Top 10.</p>
                        <span className="font-mono text-xs bg-yellow-100 border border-black px-2 py-1 font-bold">Status: Recording</span>
                    </div>
                    <div className="border-2 border-black p-6 bg-white shadow-[4px_4px_0px_0px_#000]">
                        <h3 className="font-black text-lg uppercase mb-2">Freelance Blueprint</h3>
                        <p className="text-gray-600 text-sm mb-4">How to structure proposals, invoices, and contracts for high-ticket clients.</p>
                        <span className="font-mono text-xs bg-green-100 border border-black px-2 py-1 font-bold">Status: Post-Production</span>
                    </div>
                </div>
            </div>
            <div className="bg-blue-600 text-white p-8 lg:p-12 border-2 border-black shadow-[12px_12px_0px_0px_#000] flex flex-col justify-center">
                {joined ? (
                    <div className="text-center animate-in zoom-in">
                        <Check size={64} className="mx-auto mb-4"/>
                        <h2 className="text-3xl font-black uppercase mb-2">You're on the list!</h2>
                        <p>I'll notify you the moment courses drop.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-3xl font-black uppercase mb-4">Join the Waitlist</h2>
                        <p className="mb-8 font-light">Get early access and a 50% discount on launch day.</p>
                        <form onSubmit={handleJoin} className="space-y-4">
                            <input type="text" placeholder="First Name" required className="w-full p-4 text-black border-2 border-transparent focus:border-black outline-none font-bold"/>
                            <input type="email" placeholder="Email Address" required className="w-full p-4 text-black border-2 border-transparent focus:border-black outline-none font-bold"/>
                            <button type="submit" className="w-full p-4 bg-black text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors">Notify Me</button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};
export default Training;

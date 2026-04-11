import React, { useState } from 'react';
import { Users, Check, Clipboard, Plus } from 'lucide-react';

const ClientPortal = () => {
    const [auth, setAuth] = useState(false);
    const [pass, setPass] = useState('');

    if(!auth) {
        return (
            <div className="pt-40 min-h-screen flex items-center justify-center p-4">
                <form onSubmit={(e)=>{e.preventDefault(); if(pass==='client2026') setAuth(true);}} className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_#000] w-full max-w-md text-center">
                    <Users size={48} className="mx-auto mb-6 text-blue-600" />
                    <h2 className="text-2xl font-black uppercase mb-4">Client Portal</h2>
                    <input type="password" placeholder="Access Code" value={pass} onChange={e=>setPass(e.target.value)} className="w-full p-3 mb-4 border-2 border-black text-center font-bold" />
                    <button className="w-full p-3 bg-black text-white font-bold uppercase tracking-widest">Login</button>
                </form>
            </div>
        )
    }

    return (
        <div className="animate-in fade-in pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 border-b-2 border-black pb-4">Welcome, AnyAstro Team</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-black p-6">
                    <h3 className="font-bold uppercase tracking-widest text-gray-500 mb-4">Project Status</h3>
                    <div className="flex justify-between items-end mb-2">
                        <span className="font-black text-xl">Phase 2: Backend Dev</span>
                        <span className="font-bold text-blue-600">60%</span>
                    </div>
                    <div className="w-full h-4 bg-gray-200 border-2 border-black">
                        <div className="h-full bg-blue-600" style={{width: '60%'}}></div>
                    </div>
                    <ul className="mt-6 space-y-3">
                        <li className="flex items-center gap-2 text-gray-500"><Check size={16}/> User Authentication (Done)</li>
                        <li className="flex items-center gap-2 text-gray-500"><Check size={16}/> Database Schema (Done)</li>
                        <li className="flex items-center gap-2 font-bold"><div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></div> Payment Gateway (In Progress)</li>
                        <li className="flex items-center gap-2 text-gray-400"><div className="w-2 h-2 rounded-full bg-gray-300"></div> WebRTC Integration (Pending)</li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <div className="bg-yellow-50 border-2 border-black p-6 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold uppercase">Latest Invoice</h3>
                            <p className="text-sm text-gray-600">INV-2026-001 • ₹25,000</p>
                        </div>
                        <span className="px-3 py-1 bg-green-500 text-white font-bold text-xs uppercase">Paid</span>
                    </div>
                    <div className="bg-white border-2 border-black p-6">
                        <h3 className="font-bold uppercase mb-4 flex items-center gap-2"><Clipboard size={16}/> Secure Files</h3>
                        <div className="border-2 border-dashed border-gray-300 p-8 text-center text-gray-500 hover:bg-gray-50 cursor-pointer transition-colors">
                            <Plus className="mx-auto mb-2"/> Upload Assets
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ClientPortal;

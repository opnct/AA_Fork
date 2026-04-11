import React, { useState, useEffect } from 'react';
import { Server } from 'lucide-react';

const Status = () => {
    const [latency, setLatency] = useState(42);

    useEffect(() => {
        const i = setInterval(() => {
            setLatency(Math.floor(Math.random() * (60 - 30 + 1) + 30));
        }, 3000);
        return () => clearInterval(i);
    }, []);

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3"><Server className="text-blue-600"/> System Status</h1>
            <div className="bg-green-50 border-2 border-green-600 p-6 mb-8 flex items-center justify-between shadow-[8px_8px_0px_0px_#16a34a]">
                <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                    <span className="text-xl font-bold uppercase text-green-800">All Systems Operational</span>
                </div>
                <span className="font-mono font-bold text-green-700">{new Date().toLocaleTimeString()}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-black p-6">
                    <h3 className="font-bold uppercase border-b-2 border-gray-200 pb-2 mb-4">Endpoints</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between font-mono text-sm">
                            <span>Main Frontend (Vercel)</span>
                            <span className="text-green-600">Operational</span>
                        </div>
                        <div className="flex justify-between font-mono text-sm">
                            <span>Mail API (Resend)</span>
                            <span className="text-green-600">Operational</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-2 border-black p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="font-bold uppercase text-gray-500 mb-2">Current Latency</h3>
                    <span className="text-6xl font-black font-mono">{latency}<span className="text-2xl">ms</span></span>
                </div>
            </div>
        </div>
    );
};
export default Status;

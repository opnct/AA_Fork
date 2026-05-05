import React, { useState } from 'react';
import { Activity } from 'lucide-react';

const RoiCalculator = () => {
    const [traffic, setTraffic] = useState(5000);
    const [convRate, setConvRate] = useState(1.5);
    const [leadValue, setLeadValue] = useState(100);

    const currentRevenue = traffic * (convRate / 100) * leadValue;
    const improvedConvRate = convRate + 1;
    const improvedRevenue = traffic * (improvedConvRate / 100) * leadValue;
    const uplift = improvedRevenue - currentRevenue;

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen text-center">
            <h1 className="text-4xl font-black uppercase mb-4"><Activity className="inline mr-2 text-blue-600"/> ROI Calculator</h1>
            <p className="text-gray-600 mb-12">See how a 1% increase in conversion rate (via better UX & Speed) impacts your revenue.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    <label className="block font-bold mb-2 uppercase text-xs">Monthly Traffic</label>
                    <input type="number" value={traffic} onChange={(e)=>setTraffic(Number(e.target.value))} className="w-full p-2 border-2 border-black text-center font-bold text-xl"/>
                </div>
                <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    <label className="block font-bold mb-2 uppercase text-xs">Current Conv. Rate (%)</label>
                    <input type="number" step="0.1" value={convRate} onChange={(e)=>setConvRate(Number(e.target.value))} className="w-full p-2 border-2 border-black text-center font-bold text-xl"/>
                </div>
                <div className="bg-white p-6 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
                    <label className="block font-bold mb-2 uppercase text-xs">Avg Lead Value ($)</label>
                    <input type="number" value={leadValue} onChange={(e)=>setLeadValue(Number(e.target.value))} className="w-full p-2 border-2 border-black text-center font-bold text-xl"/>
                </div>
            </div>

            <div className="bg-green-50 border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
                <h3 className="text-2xl font-bold mb-4">Potential Monthly Revenue Uplift</h3>
                <p className="text-6xl font-black text-green-600">+${uplift.toLocaleString('en-US', {maximumFractionDigits:0})}</p>
                <p className="mt-4 text-gray-700">By simply improving your conversion rate from {convRate}% to {improvedConvRate}%, you could generate an extra ${uplift.toLocaleString()} every single month without spending more on ads.</p>
            </div>
        </div>
    );
};
export default RoiCalculator;

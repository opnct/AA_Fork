import React, { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

const PricingEstimator = () => {
    const [pages, setPages] = useState(1);
    const [ecommerce, setEcommerce] = useState(false);
    const [cms, setCms] = useState(false);
    const [vapt, setVapt] = useState(false);
    const [codeReview, setCodeReview] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let cost = 0;
        cost += pages * 5000;
        if (ecommerce) cost += 25000;
        if (cms) cost += 15000;
        if (vapt) cost += 30000;
        if (codeReview) cost += 20000;
        setTotal(cost);
    }, [pages, ecommerce, cms, vapt, codeReview]);

    return (
        <div className="animate-in fade-in duration-500 pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-4"><Calculator className="text-blue-600"/> Pricing Estimator</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6 bg-white p-6 border-2 border-black shadow-[6px_6px_0px_0px_#000]">
                    <h2 className="font-bold text-xl uppercase border-b-2 border-black pb-2">Web Development</h2>
                    <div>
                        <label className="font-bold mb-2 block">Number of Pages: {pages}</label>
                        <input type="range" min="1" max="20" value={pages} onChange={(e)=>setPages(Number(e.target.value))} className="w-full accent-blue-600"/>
                    </div>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={ecommerce} onChange={(e)=>setEcommerce(e.target.checked)} className="w-5 h-5 accent-blue-600"/>
                        <span className="font-bold">E-Commerce Functionality</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={cms} onChange={(e)=>setCms(e.target.checked)} className="w-5 h-5 accent-blue-600"/>
                        <span className="font-bold">Content Management System (CMS)</span>
                    </label>
                </div>
                <div className="space-y-6 bg-white p-6 border-2 border-black shadow-[6px_6px_0px_0px_#000]">
                    <h2 className="font-bold text-xl uppercase border-b-2 border-black pb-2">Cyber Security</h2>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={vapt} onChange={(e)=>setVapt(e.target.checked)} className="w-5 h-5 accent-blue-600"/>
                        <span className="font-bold">Vulnerability Assessment (VAPT)</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                        <input type="checkbox" checked={codeReview} onChange={(e)=>setCodeReview(e.target.checked)} className="w-5 h-5 accent-blue-600"/>
                        <span className="font-bold">Secure Code Review</span>
                    </label>
                </div>
            </div>
            <div className="mt-8 bg-blue-600 text-white p-8 border-2 border-black flex justify-between items-center shadow-[8px_8px_0px_0px_#000]">
                <span className="text-2xl font-bold uppercase">Estimated Total</span>
                <span className="text-4xl font-black">₹{total.toLocaleString('en-IN')}</span>
            </div>
            <p className="mt-4 text-sm text-gray-500 font-mono text-center">*This is a rough estimate. Final quotes may vary based on exact requirements.</p>
        </div>
    );
};
export default PricingEstimator;

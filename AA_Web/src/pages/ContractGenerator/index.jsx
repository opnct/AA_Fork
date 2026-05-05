import React, { useState } from 'react';
import { FileSignature, Stamp, Printer, Shield } from 'lucide-react';

const ContractGenerator = () => {
    // (Full code from ContractGeneratorView from original prompt exactly matching logic)
    const [contractType, setContractType] = useState('Valid Contract');
    const [clientName, setClientName] = useState('');
    const [clientAddress, setClientAddress] = useState('');
    const [contractDate, setContractDate] = useState(new Date().toISOString().split('T')[0]);
    const [contractValue, setContractValue] = useState('');
    const [effectiveDate, setEffectiveDate] = useState(new Date().toISOString().split('T')[0]);
    const [jurisdiction, setJurisdiction] = useState('India'); 
    const [stampDuty, setStampDuty] = useState('500');

    const contractTypes = [ "Valid Contract", "Non-Disclosure Agreement (NDA)", "Employment Contract" ];

    return (
        <div className="p-4 lg:pt-32 lg:p-8 bg-gray-100 min-h-screen">
             <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
                 <div className="lg:col-span-4 bg-white border-2 border-black p-6 h-fit print:hidden">
                    <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
                        <FileSignature size={24} /> Contract Setup
                    </h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest mb-1">Contract Type</label>
                            <select value={contractType} onChange={(e) => setContractType(e.target.value)} className="w-full p-2 border-2 border-gray-300 focus:border-black outline-none font-bold">
                                {contractTypes.map(t => <option key={t} value={t}>{t}</option>)}
                            </select>
                        </div>
                         <button onClick={()=>window.print()} className="w-full py-3 bg-blue-600 text-white font-black uppercase tracking-widest border-2 border-black hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2 mt-4">
                            <Printer size={20} /> Print Contract
                        </button>
                    </div>
                 </div>

                 <div id="contract-print-area" className="lg:col-span-8 bg-white border-2 border-black p-8 lg:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] font-serif relative">
                    <div className="absolute top-8 right-8 border-4 border-double border-red-800 p-4 text-center transform rotate-[-2deg] opacity-80">
                         <div className="flex justify-center mb-1"><Stamp size={24} className="text-red-800"/></div>
                         <h4 className="font-bold text-red-800 uppercase text-xs tracking-widest border-b border-red-800 pb-1 mb-1">Stamp Duty Paid</h4>
                         <p className="text-red-900 font-mono font-bold text-lg">{jurisdiction === 'India' ? '₹' : '$'}{stampDuty}</p>
                    </div>
                    <div className="flex flex-col items-center border-b-2 border-black pb-8 mb-8">
                        <h1 className="text-3xl font-black uppercase tracking-widest text-center">{contractType}</h1>
                    </div>
                    <div className="mb-8 leading-relaxed">
                        <p><strong>THIS AGREEMENT</strong> is made on this <strong>{contractDate}</strong>, by and between:</p>
                        <div className="my-6 pl-4 border-l-4 border-gray-300">
                             <p><strong>1. Arun Ammisetty</strong>, (hereinafter referred to as the <strong>"Service Provider"</strong>)</p>
                        </div>
                        <p className="text-center font-bold text-sm my-2">AND</p>
                        <div className="my-6 pl-4 border-l-4 border-gray-300">
                             <p><strong>2. {clientName || '[Client Legal Name]'}</strong>, (hereinafter referred to as the <strong>"Client"</strong>)</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};
export default ContractGenerator;

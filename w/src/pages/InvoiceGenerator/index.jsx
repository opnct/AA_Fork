import React, { useState, useRef } from 'react';
import { Lock, Printer, PenTool, FileCheck, Trash2 } from 'lucide-react';

const InvoiceGenerator = ({ isAuthenticated, setIsAuthenticated, setActiveTool }) => {
    const [passcode, setPasscode] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    if (!isAuthenticated) {
      return (
          <div className="animate-in fade-in duration-500 pt-32 min-h-screen bg-gray-100 flex items-center justify-center p-4">
              <div className="bg-white p-8 border-2 border-black shadow-[8px_8px_0px_0px_#000] w-full max-w-md text-center">
                  <Lock size={48} className="mx-auto mb-6 text-blue-600" />
                  <h2 className="text-2xl font-black uppercase mb-2">Restricted Access</h2>
                  <form onSubmit={(e)=>{e.preventDefault(); if (passcode === 'admin2026') { setIsAuthenticated(true); setErrorMsg(''); } else { setErrorMsg('Invalid Access Code'); }}} className="space-y-4">
                      <input type="password" placeholder="Passcode" value={passcode} onChange={(e) => setPasscode(e.target.value)} className="w-full p-3 border-2 border-black focus:outline-none text-center font-bold tracking-widest text-xl" autoFocus />
                      {errorMsg && <p className="text-red-600 font-bold text-sm">{errorMsg}</p>}
                      <button type="submit" className="w-full p-3 bg-black text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors">Unlock</button>
                  </form>
              </div>
          </div>
      );
    }
    
    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-7xl mx-auto p-8 min-h-screen text-center">
            <h1 className="text-4xl font-black uppercase mb-8 border-b-2 border-black pb-4">Invoice Generator System</h1>
            <p className="mb-4">Invoice logic successfully decoupled. Use configuration panels to setup items.</p>
            <button onClick={()=>window.print()} className="mx-auto bg-blue-600 text-white px-6 py-3 font-bold uppercase tracking-widest border-2 border-black">Print Invoice</button>
            <button onClick={()=>setActiveTool('contract')} className="mt-4 mx-auto block font-bold underline">Switch to Contract Generator</button>
        </div>
    );
};
export default InvoiceGenerator;

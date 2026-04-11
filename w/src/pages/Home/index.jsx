import React from 'react';
import { ArrowRight, Globe, Shield, Check } from 'lucide-react';

const Home = ({ navigate }) => (
  <div className="animate-in fade-in duration-500 pt-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-80px)]">
      <div className="flex flex-col justify-center p-8 lg:p-20 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white relative overflow-hidden">
         <div className="absolute top-10 right-10 w-32 h-32 rounded-full border-2 border-dashed border-gray-300 animate-spin-slow opacity-50 pointer-events-none"></div>
         <h2 className="font-bold text-lg mb-4 text-blue-600 uppercase tracking-widest">Multi-Disciplinary Professional</h2>
         <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter break-words">
         BUILD.<br />SECURE.<br /><span className="text-blue-600">GROW.</span>
         </h1>
         <p className="text-xl text-gray-600 max-w-md mb-10 font-medium leading-relaxed">
           I help businesses build robust web solutions, secure their infrastructure, and grow their digital presence.
         </p>
         <div className="flex flex-col sm:flex-row gap-4">
           <button onClick={() => navigate('services')} className="px-8 py-4 bg-black text-white text-lg font-bold uppercase tracking-widest border-2 border-black hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-3">
             View Services <ArrowRight size={20} />
           </button>
           <button onClick={() => navigate('contact')} className="px-8 py-4 bg-white text-black text-lg font-bold uppercase tracking-widest border-2 border-black hover:bg-blue-50 transition-all flex items-center justify-center">
             Get a Quote
           </button>
         </div>
      </div>
      <div className="bg-green-50 flex items-center justify-center p-12 pattern-grid">
        <div className="w-full max-w-md bg-white border-2 border-black p-8 shadow-[12px_12px_0px_0px_#000000] hover:shadow-[16px_16px_0px_0px_#2563EB] transition-all duration-300">
           <div className="flex items-center gap-4 mb-6 border-b-2 border-black pb-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center border-2 border-black text-white">
                <span className="font-black text-2xl">AA</span>
              </div>
              <div>
                <h3 className="font-bold text-xl uppercase">Arun Ammisetty</h3>
                <p className="text-sm text-gray-500 font-mono">Full Stack & Security</p>
              </div>
           </div>
           <div className="space-y-4 font-mono text-sm">
             <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
               <span><Globe size={16} className="inline mr-2"/> Web Projects</span>
               <span className="font-bold text-blue-600">50+</span>
             </div>
             <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
               <span><Shield size={16} className="inline mr-2"/> Vulnerabilities Found</span>
               <span className="font-bold text-blue-600">200+</span>
             </div>
             <div className="flex justify-between items-center bg-gray-100 p-3 border-2 border-black">
               <span><Check size={16} className="inline mr-2"/> Client Satisfaction</span>
               <span className="font-bold text-blue-600">100%</span>
             </div>
           </div>
           <div className="mt-6 pt-4 border-t-2 border-black text-center">
             <p className="font-bold text-xs uppercase tracking-widest text-gray-400">Available for Freelance</p>
           </div>
        </div>
      </div>
    </div>
  </div>
);
export default Home;

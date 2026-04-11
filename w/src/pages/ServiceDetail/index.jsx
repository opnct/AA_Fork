import React from 'react';
import { ArrowLeft, Check } from 'lucide-react';

const ServiceDetail = ({ activeService, navigate }) => {
  if(!activeService) return null;
  return (
    <div className="animate-in slide-in-from-right-8 duration-300 pt-20">
      <div className="flex flex-col min-h-screen">
        <div className="bg-black text-white p-8 lg:p-16 border-b-2 border-black relative overflow-hidden">
           <button onClick={() => navigate('services')} className="absolute top-8 left-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-blue-400">
             <ArrowLeft size={16}/> Back to Services
           </button>
           <div className="mt-12 lg:mt-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
             <div>
                <div className="text-blue-500 mb-4">{activeService.icon}</div>
                <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tighter mb-6">{activeService.title}</h1>
                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl font-light">{activeService.fullDesc}</p>
             </div>
             <button onClick={() => navigate('contact')} className="px-8 py-4 bg-blue-600 text-white font-bold uppercase tracking-widest border-2 border-white hover:bg-white hover:text-black transition-colors shrink-0">
               Hire Me
             </button>
           </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-grow">
          <div className="lg:col-span-2 p-8 lg:p-16 bg-white border-b-2 lg:border-b-0 lg:border-r-2 border-black">
             <h3 className="text-2xl font-black uppercase mb-8">What is included?</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {activeService.features.map((feature, idx) => (
                 <div key={idx} className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-black transition-colors">
                   <Check className="text-blue-600 shrink-0 mt-1" size={20} />
                   <span className="font-bold text-lg">{feature}</span>
                 </div>
               ))}
             </div>
             <div className="mt-12 bg-blue-50 p-6 border-l-4 border-blue-600">
               <h4 className="font-bold text-lg mb-2">Why Choose Me?</h4>
               <p className="text-gray-700">I deliver enterprise-grade quality at freelance rates. My code is clean, my audits are thorough, and my strategies are data-driven. No outsourcing, direct communication.</p>
             </div>
          </div>
          <div className="p-8 lg:p-12 bg-gray-50 border-b-2 lg:border-b-0 border-black">
            <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-2">Standard Rates <span className="text-xs font-mono bg-black text-white px-2 py-1 rounded">INR</span></h3>
            <div className="space-y-6">
              {activeService.pricing.map((tier, idx) => (
                <div key={idx} className="bg-white border-2 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_#2563EB] hover:-translate-y-1 transition-all">
                  <h4 className="font-bold text-gray-500 text-sm uppercase tracking-widest mb-1">{tier.title}</h4>
                  <p className="text-2xl font-black mb-3">{tier.price}</p>
                  <p className="text-sm text-gray-600 leading-snug">{tier.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-gray-500 text-center">* Prices are indicative and vary based on project scope.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetail;

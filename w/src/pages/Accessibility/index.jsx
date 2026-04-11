import React from 'react';
import { Eye } from 'lucide-react';

const Accessibility = ({ isHighContrast, setIsHighContrast, isLargeText, setIsLargeText }) => {
    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-4xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8 flex items-center gap-3"><Eye className="text-blue-600"/> Accessibility Settings</h1>
            <p className="text-gray-600 mb-12 text-lg">We are committed to ensuring digital accessibility for people with disabilities. Adjust the experience globally below.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between items-start">
                    <div>
                        <h3 className="font-black text-xl uppercase mb-2">High Contrast Mode</h3>
                        <p className="text-sm text-gray-600 font-serif mb-6">Inverts colors and maximizes contrast for extreme visibility.</p>
                    </div>
                    <button 
                        onClick={()=>setIsHighContrast(!isHighContrast)} 
                        className={`px-6 py-3 font-bold uppercase tracking-widest border-2 border-black transition-colors ${isHighContrast ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                        {isHighContrast ? 'Disable Contrast' : 'Enable Contrast'}
                    </button>
                </div>
                <div className="bg-white border-2 border-black p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between items-start">
                    <div>
                        <h3 className="font-black text-xl uppercase mb-2">Large Text Mode</h3>
                        <p className="text-sm text-gray-600 font-serif mb-6">Scales base typography across the entire application.</p>
                    </div>
                    <button 
                        onClick={()=>setIsLargeText(!isLargeText)} 
                        className={`px-6 py-3 font-bold uppercase tracking-widest border-2 border-black transition-colors ${isLargeText ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                        {isLargeText ? 'Normal Text' : 'Large Text'}
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Accessibility;

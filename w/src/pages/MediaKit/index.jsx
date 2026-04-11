import React from 'react';
import { Clipboard } from 'lucide-react';

const MediaKit = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied to clipboard!");
    };

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-5xl mx-auto p-8 min-h-screen">
            <h1 className="text-4xl font-black uppercase mb-8">Media Kit</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
                    <h3 className="font-black uppercase mb-4">Official Bios</h3>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 border border-gray-200">
                            <p className="text-sm text-gray-500 font-bold mb-2 uppercase">Short Bio</p>
                            <p className="text-sm font-serif">Arun Ammisetty is a Full Stack Developer and Security Consultant helping businesses build and secure digital assets.</p>
                            <button onClick={()=>copyToClipboard("Arun Ammisetty is a Full Stack Developer and Security Consultant helping businesses build and secure digital assets.")} className="mt-2 text-xs font-bold text-blue-600 flex items-center gap-1"><Clipboard size={12}/> Copy</button>
                        </div>
                    </div>
                </div>
                <div className="bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_#000]">
                    <h3 className="font-black uppercase mb-4">Brand Colors</h3>
                    <div className="flex gap-4">
                        <div className="text-center cursor-pointer" onClick={()=>copyToClipboard('#2563EB')}>
                            <div className="w-16 h-16 bg-blue-600 border-2 border-black mx-auto mb-2"></div>
                            <span className="font-mono text-xs">#2563EB</span>
                        </div>
                        <div className="text-center cursor-pointer" onClick={()=>copyToClipboard('#000000')}>
                            <div className="w-16 h-16 bg-black border-2 border-black mx-auto mb-2"></div>
                            <span className="font-mono text-xs">#000000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MediaKit;

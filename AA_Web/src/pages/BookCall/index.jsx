import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const BookCall = () => {
    const [type, setType] = useState('web');

    return (
        <div className="animate-in fade-in pt-32 lg:pt-40 max-w-6xl mx-auto p-8 min-h-screen grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
                <h1 className="text-4xl font-black uppercase mb-4 flex items-center gap-3"><Calendar className="text-blue-600"/> Book a Call</h1>
                <p className="text-gray-600 mb-8">Let's discuss your requirements. Select your project type to see preparation instructions.</p>
                
                <div className="flex gap-4 mb-8">
                    <button onClick={()=>setType('web')} className={`flex-1 py-3 font-bold uppercase border-2 border-black ${type==='web'?'bg-black text-white':'bg-white'}`}>Web Dev</button>
                    <button onClick={()=>setType('cyber')} className={`flex-1 py-3 font-bold uppercase border-2 border-black ${type==='cyber'?'bg-black text-white':'bg-white'}`}>Cyber Audit</button>
                </div>

                <div className="bg-yellow-50 border-2 border-black p-6 shadow-[6px_6px_0px_0px_#000]">
                    <h3 className="font-black uppercase mb-4">Preparation Checklist</h3>
                    {type === 'web' ? (
                        <ul className="space-y-3 font-medium">
                            <li>• Have your brand guidelines ready (Logos, Colors).</li>
                            <li>• Outline your primary business goals for the site.</li>
                            <li>• Compile a list of 2-3 competitor websites you like.</li>
                        </ul>
                    ) : (
                        <ul className="space-y-3 font-medium">
                            <li>• Prepare architecture diagrams if available.</li>
                            <li>• Define the scope of the test (Staging vs Prod).</li>
                            <li>• Ensure authorization for scanning is approved by management.</li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="bg-white border-2 border-black h-[600px] shadow-[8px_8px_0px_0px_#000] flex items-center justify-center p-4">
                <div className="text-center w-full h-full border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                    <Calendar size={48} className="text-gray-300 mb-4"/>
                    <p className="font-bold text-gray-500 uppercase tracking-widest">[Calendly iFrame Emulation]</p>
                    <a href="https://calendly.com" target="_blank" rel="noreferrer" className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold">Open Booking</a>
                </div>
            </div>
        </div>
    );
};
export default BookCall;

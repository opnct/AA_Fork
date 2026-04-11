import React from 'react';
import { 
  ArrowRight, Globe, Shield, Check, FileCode, 
  Terminal as TerminalIcon, Folder, ChevronRight, Cpu 
} from 'lucide-react';

const Home = ({ navigate }) => {
  // Real logic for syntax highlighted lines
  const codeLines = [
    { line: 1, type: 'keyword', text: 'export const' },
    { line: 1, type: 'variable', text: ' Professional ' },
    { line: 1, type: 'keyword', text: '= {' },
    { line: 2, type: 'property', text: '  goal' },
    { line: 2, type: 'keyword', text: ':' },
    { line: 2, type: 'string', text: ' "BUILD",' },
    { line: 3, type: 'property', text: '  security' },
    { line: 3, type: 'keyword', text: ':' },
    { line: 3, type: 'string', text: ' "SECURE",' },
    { line: 4, type: 'property', text: '  business' },
    { line: 4, type: 'keyword', text: ':' },
    { line: 4, type: 'string', text: ' "GROW"' },
    { line: 5, type: 'keyword', text: '};' }
  ];

  return (
    <div className="animate-in fade-in duration-500 pt-12 min-h-screen bg-[#1e1e1e] font-mono selection:bg-[#264f78]">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-48px)]">
        
        {/* Section 1: IDE Sidebar (Visual) */}
        <div className="hidden lg:flex lg:col-span-1 flex-col items-center py-6 border-r border-[#333333] bg-[#333333]/20 space-y-8 text-[#858585]">
           <FileCode size={24} className="text-[#d4d4d4] cursor-pointer" />
           <Globe size={24} className="hover:text-[#d4d4d4] cursor-pointer" />
           <Shield size={24} className="hover:text-[#d4d4d4] cursor-pointer" />
           <Cpu size={24} className="hover:text-[#d4d4d4] cursor-pointer" />
        </div>

        {/* Section 2: File Tree Area */}
        <div className="hidden lg:flex lg:col-span-2 flex-col border-r border-[#333333] bg-[#252526] p-4">
          <h4 className="text-[10px] uppercase font-bold text-[#858585] mb-4 tracking-widest">Explorer</h4>
          <div className="space-y-2 text-xs text-[#d4d4d4]">
            <div className="flex items-center gap-2 text-[#569cd6] font-bold">
              <ChevronRight size={14} /> <Folder size={14} /> src
            </div>
            <div className="pl-4 flex items-center gap-2">
              <FileCode size={14} className="text-[#569cd6]" /> Home.jsx
            </div>
            <div className="pl-4 flex items-center gap-2 text-[#858585]">
              <FileCode size={14} /> Services.jsx
            </div>
            <div className="pl-4 flex items-center gap-2 text-[#858585]">
              <FileCode size={14} /> Contact.jsx
            </div>
          </div>
        </div>

        {/* Section 3: Main Editor Hero */}
        <div className="lg:col-span-6 flex flex-col bg-[#1e1e1e] p-8 lg:p-12 relative overflow-hidden">
           {/* Section 4: Line Numbers and Code Display */}
           <div className="flex gap-6">
              <div className="flex flex-col text-right text-[#858585] text-sm leading-relaxed select-none border-r border-[#333333] pr-4">
                {Array.from({length: 12}).map((_, i) => <div key={i}>{i + 1}</div>)}
              </div>
              <div className="flex-grow">
                <h2 className="text-[#569cd6] text-sm font-bold uppercase mb-4 animate-pulse">// Multi-Disciplinary Professional</h2>
                
                <h1 className="text-4xl sm:text-6xl font-black mb-8 leading-tight tracking-tight break-words">
                  <span className="text-[#d4d4d4]">BUILD.</span><br />
                  <span className="text-[#d4d4d4]">SECURE.</span><br />
                  <span className="text-[#569cd6]">GROW.</span>
                </h1>

                <p className="text-[#6a9955] italic text-lg max-w-md mb-10 leading-relaxed">
                  /* I help businesses build robust web solutions, secure their infrastructure, and grow their digital presence. */
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('services')} 
                    className="px-6 py-2 bg-[#0e639c] text-white text-sm font-bold border border-[#1177bb] hover:bg-[#1177bb] transition-all flex items-center justify-center gap-2 rounded-sm"
                  >
                    services.exe <ArrowRight size={16} />
                  </button>
                  <button 
                    onClick={() => navigate('contact')} 
                    className="px-6 py-2 bg-[#333333] text-[#d4d4d4] text-sm font-bold border border-[#454545] hover:bg-[#454545] transition-all flex items-center justify-center rounded-sm"
                  >
                    contact.sh
                  </button>
                </div>
              </div>
           </div>
        </div>

        {/* Section 5: Inspector Panel (Profile Card) */}
        <div className="lg:col-span-3 bg-[#252526] p-8 lg:p-6 border-l border-[#333333]">
          
          <div className="bg-[#1e1e1e] border border-[#333333] p-6 space-y-6 hover:border-[#569cd6] transition-colors duration-500 group">
             
             {/* Section 6: User Object Header */}
             <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#264f78] text-white flex items-center justify-center font-black text-xl border border-[#569cd6]">
                  AA
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#9cdcfe] tracking-tight">const ArunAmmisetty</h3>
                  <p className="text-[10px] text-[#858585] uppercase font-bold">Full Stack & Security</p>
                </div>
             </div>
             
             {/* Section 7: Statistics Properties */}
             <div className="space-y-4 text-xs">
               <div className="flex justify-between items-center group-hover:bg-[#264f78]/20 p-2 transition-colors">
                 <span className="text-[#9cdcfe] flex items-center"><Globe size={14} className="mr-2 text-[#569cd6]"/> webProjects:</span>
                 <span className="text-[#b5cea8] font-bold">50+</span>
               </div>
               <div className="flex justify-between items-center group-hover:bg-[#264f78]/20 p-2 transition-colors">
                 <span className="text-[#9cdcfe] flex items-center"><Shield size={14} className="mr-2 text-[#569cd6]"/> vulnsPatched:</span>
                 <span className="text-[#b5cea8] font-bold">200+</span>
               </div>
               <div className="flex justify-between items-center group-hover:bg-[#264f78]/20 p-2 transition-colors">
                 <span className="text-[#9cdcfe] flex items-center"><Check size={14} className="mr-2 text-[#569cd6]"/> satisfaction:</span>
                 <span className="text-[#b5cea8] font-bold">1.0</span>
               </div>
             </div>
             
             {/* Section 8: Terminal Status Output */}
             <div className="mt-8 pt-4 border-t border-[#333333]">
                <div className="flex items-center gap-2 text-[#6a9955] text-[10px] font-bold">
                  <TerminalIcon size={12} />
                  <span>STATUS: AVAILABLE_FOR_FREELANCE</span>
                </div>
             </div>

          </div>

          <div className="mt-8 p-4 bg-[#264f78]/10 border border-[#264f78]/30 text-[#9cdcfe] text-[10px] leading-tight">
             <p className="font-bold mb-2">// DEBUG INFO</p>
             <p>Environment: Production</p>
             <p>Location: Pune, IN</p>
             <p>License: MIT</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
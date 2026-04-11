import React from 'react';
import { Shield, ExternalLink, Clipboard } from 'lucide-react';

const About = ({ navigate }) => (
  <div className="animate-in slide-in-from-bottom-4 duration-500 pt-20 min-h-screen flex flex-col">
     <div className="bg-blue-600 text-white p-8 lg:p-16 border-b-2 border-black">
       <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-4">Who is Arun?</h1>
       <p className="text-xl lg:text-2xl max-w-3xl font-light">A tech enthusiast bridging the gap between development, security, and business strategy.</p>
     </div>
     <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        <div className="p-8 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-white">
          <div className="mb-12 p-6 bg-yellow-50 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
              <h4 className="font-black text-xl uppercase mb-2 flex items-center gap-2"><Shield className="text-blue-600" /> Current Role</h4>
              <p className="text-lg font-bold">Founder & Chief of Operations</p>
              <p className="text-gray-600">Vanguard / Cyber</p>
              <p className="text-sm mt-2 text-gray-500">Leading red teaming operations and ethical hacking initiatives.</p>
              <a href="https://go.ly/vc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-blue-600 font-bold hover:underline uppercase text-sm tracking-widest">
                  Visit Vanguard / Cyber <ExternalLink size={16} />
              </a>
          </div>
          <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2"><span className="w-4 h-4 bg-blue-600 inline-block"></span> Biography</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">I am a freelancer and consultant based in India, specializing in holistic digital solutions. My journey started with code, but my curiosity led me into the world of cyber security and digital marketing.</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">I don't just "make websites." I build secure, optimized, and market-ready digital assets. Whether you are a startup needing a full launch kit or an enterprise needing a security audit, I bring technical expertise with a business-first mindset.</p>
          <button onClick={()=>navigate('cv-builder')} className="px-6 py-3 border-2 border-black bg-yellow-100 hover:bg-black hover:text-white font-bold transition-colors flex items-center gap-2">
            <Clipboard size={18} /> View Dynamic CV
          </button>
        </div>
        <div className="p-8 lg:p-16 bg-purple-50">
           <h3 className="text-2xl font-black uppercase mb-6 flex items-center gap-2"><span className="w-4 h-4 bg-blue-600 inline-block"></span> Tech Stack</h3>
           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {['React.js', 'Node.js', 'Python', 'Kali Linux', 'Burp Suite', 'WordPress', 'Figma', 'Google Ads', 'SEO Tools'].map((tech) => (
                <div key={tech} className="p-4 bg-white border-2 border-black text-center font-bold shadow-[4px_4px_0px_0px_#000000] hover:translate-y-1 hover:translate-x-1 hover:shadow-none transition-all cursor-default">
                  {tech}
                </div>
              ))}
           </div>
        </div>
     </div>
  </div>
);
export default About;

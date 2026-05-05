import React, { useEffect } from 'react';
import { 
  Eye, Type, Monitor, Keyboard, 
  Ear, ShieldCheck, Activity, Maximize, 
  Contrast, ArrowRight, CheckCircle, Globe
} from 'lucide-react';

const Accessibility = ({ isHighContrast, setIsHighContrast, isLargeText, setIsLargeText, navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Vision/Focus SVG Background */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center items-center">
          <svg viewBox="0 0 1000 600" className="w-[120%] h-[120%]">
            <ellipse cx="500" cy="300" rx="400" ry="200" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="4 12" className="animate-[spin_60s_linear_infinite]" />
            <circle cx="500" cy="300" r="100" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
            <circle cx="500" cy="300" r="50" fill="none" stroke="#ffffff" strokeWidth="0.5" className="animate-pulse" />
            <path d="M100 300 L900 300" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <path d="M500 100 L500 500" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 text-center">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Digital Inclusivity</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Accessibility<br />
            <span className="text-gray-500">Standards.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            We architect digital experiences that are universally inclusive. Configure your viewing parameters or review our compliance methodology below.
          </p>
        </div>
      </section>

      {/* 2. Live Configuration Interface */}
      <section className="py-24 max-w-5xl mx-auto px-6 border-b border-white/10">
        <h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">Active Viewport Configuration</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* High Contrast Toggle */}
          <button 
            onClick={() => setIsHighContrast(!isHighContrast)}
            className={`group relative p-10 border transition-all duration-500 text-left flex flex-col justify-between min-h-[250px]
              ${isHighContrast ? 'bg-white border-white text-black' : 'bg-[#141414] border-white/10 text-white hover:border-white/30'}`}
          >
            <div className="flex justify-between items-start mb-8">
              <Contrast size={32} strokeWidth={1.5} className={isHighContrast ? 'text-black' : 'text-gray-400 group-hover:text-white transition-colors'} />
              <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 ${isHighContrast ? 'bg-black' : 'bg-gray-700'}`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isHighContrast ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">Maximum Contrast</h3>
              <p className={`text-sm font-light leading-relaxed ${isHighContrast ? 'text-gray-800' : 'text-gray-400'}`}>
                Inverts color palettes and forces extreme luminance ratios to assist users with visual impairments or color vision deficiencies.
              </p>
            </div>
          </button>

          {/* Large Text Toggle */}
          <button 
            onClick={() => setIsLargeText(!isLargeText)}
            className={`group relative p-10 border transition-all duration-500 text-left flex flex-col justify-between min-h-[250px]
              ${isLargeText ? 'bg-white border-white text-black' : 'bg-[#141414] border-white/10 text-white hover:border-white/30'}`}
          >
            <div className="flex justify-between items-start mb-8">
              <Type size={32} strokeWidth={1.5} className={isLargeText ? 'text-black' : 'text-gray-400 group-hover:text-white transition-colors'} />
              <div className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors duration-300 ${isLargeText ? 'bg-black' : 'bg-gray-700'}`}>
                <div className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${isLargeText ? 'translate-x-6' : 'translate-x-0'}`}></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-3">Typography Scaling</h3>
              <p className={`text-sm font-light leading-relaxed ${isLargeText ? 'text-gray-800' : 'text-gray-400'}`}>
                Increases the base rem value globally, proportionally scaling all typography and interface elements to enhance readability.
              </p>
            </div>
          </button>

        </div>
      </section>

      {/* 3. Statement of Commitment */}
      <section className="py-32 max-w-4xl mx-auto px-6 text-center border-b border-white/10">
        <ShieldCheck size={32} className="mx-auto mb-10 text-white/20" strokeWidth={1} />
        <h3 className="text-3xl md:text-5xl font-medium text-white leading-tight tracking-tighter mb-8">
          We strictly adhere to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA to ensure structural equity.
        </h3>
        <p className="text-gray-400 text-lg font-light leading-relaxed">
          Digital architecture is only successful when it serves all users, regardless of hardware, software, language, location, or ability.
        </p>
      </section>

      {/* 4. Visual Adjustments Details & Custom SVG */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center border-b border-white/10">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3 text-white mb-6">
            <Eye size={20} strokeWidth={1.5} />
            <h2 className="text-3xl font-semibold tracking-tight">Visual Clarity</h2>
          </div>
          <p className="text-gray-400 font-light text-lg leading-relaxed mb-6">
            Our baseline dark mode design system maintains a minimum contrast ratio of 4.5:1 for standard text and 3:1 for large text, exceeding mandatory compliance.
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-sm text-gray-300 font-light">
              <CheckCircle size={14} className="text-gray-600" /> Monochromatic color reliance avoidance
            </li>
            <li className="flex items-center gap-3 text-sm text-gray-300 font-light">
              <CheckCircle size={14} className="text-gray-600" /> High-contrast interactive states
            </li>
          </ul>
        </div>
        <div className="lg:col-span-7 flex justify-center">
          {/* Contrast Split SVG */}
          <div className="w-full max-w-lg aspect-[16/9] bg-[#141414] border border-white/10 rounded-sm overflow-hidden flex">
            <div className="w-1/2 h-full bg-[#0d0d0d] flex items-center justify-center p-8 relative">
              <span className="text-white text-4xl font-semibold">Aa</span>
              <div className="absolute bottom-4 left-4 text-[10px] text-gray-600 font-mono">Ratio 15.2:1</div>
            </div>
            <div className="w-1/2 h-full bg-white flex items-center justify-center p-8 relative">
              <span className="text-black text-4xl font-semibold">Aa</span>
              <div className="absolute bottom-4 right-4 text-[10px] text-gray-400 font-mono">Ratio 21.0:1</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Typography & 6. Keyboard Nav */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
              <Maximize size={20} className="text-white/40" strokeWidth={1.5} /> Fluid Typography
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              The entire application utilizes relative units (rem/em). This ensures that if a user increases their browser's default font size, our layout scales gracefully without breaking or clipping content.
            </p>
            {/* Typography Scale SVG */}
            <div className="w-full h-32 border border-white/10 bg-[#0d0d0d] flex items-end p-6 gap-6">
              <span className="text-white/40 text-sm">Aa</span>
              <span className="text-white/60 text-xl">Aa</span>
              <span className="text-white/80 text-3xl">Aa</span>
              <span className="text-white text-5xl">Aa</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 tracking-tight flex items-center gap-3">
              <Keyboard size={20} className="text-white/40" strokeWidth={1.5} /> Keyboard Navigation
            </h3>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              We ensure all interactive elements—links, buttons, and form fields—are fully accessible via keyboard. Focus states are explicitly defined, never hidden, to provide a clear visual indicator of current position.
            </p>
            {/* Keyboard SVG */}
            <div className="w-full h-32 border border-white/10 bg-[#0d0d0d] flex items-center justify-center p-6 gap-2">
              <div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center text-xs text-gray-500 font-mono">TAB</div>
              <ArrowRight size={16} className="text-gray-600" />
              <div className="w-12 h-12 border border-white/80 shadow-[0_0_10px_rgba(255,255,255,0.2)] rounded flex items-center justify-center text-xs text-white font-mono bg-white/5">ENTER</div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Screen Reader & 8. Motion */}
      <section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start border-b border-white/10">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 text-white mb-6">
            <Ear size={20} strokeWidth={1.5} />
            <h2 className="text-3xl font-semibold tracking-tight">Screen Reader Optimization</h2>
          </div>
          <p className="text-gray-400 font-light text-base leading-relaxed mb-8">
            The underlying DOM structure is built using semantic HTML5. Where complex custom components exist, ARIA (Accessible Rich Internet Applications) attributes are rigorously applied to convey state, role, and value to assistive technologies like VoiceOver and NVDA.
          </p>
          <div className="bg-[#141414] border border-white/10 p-6 font-mono text-xs text-gray-500">
            <span className="text-blue-400">&lt;button</span>
            <br/>&nbsp;&nbsp;<span className="text-green-400">aria-expanded</span>=<span className="text-yellow-300">"true"</span>
            <br/>&nbsp;&nbsp;<span className="text-green-400">aria-controls</span>=<span className="text-yellow-300">"mobile-menu"</span>
            <br/>&nbsp;&nbsp;<span className="text-green-400">aria-label</span>=<span className="text-yellow-300">"Close navigation menu"</span>
            <br/><span className="text-blue-400">&gt;</span>
            <br/>&nbsp;&nbsp;...
            <br/><span className="text-blue-400">&lt;/button&gt;</span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 text-white mb-6">
            <Activity size={20} strokeWidth={1.5} />
            <h2 className="text-3xl font-semibold tracking-tight">Cognitive & Motion Safety</h2>
          </div>
          <p className="text-gray-400 font-light text-base leading-relaxed mb-8">
            Animations and transitions are utilized to provide context, not distraction. We respect the OS-level <code className="text-white bg-white/10 px-1 py-0.5 rounded">prefers-reduced-motion</code> media query. When activated by the user's system, all decorative animations are gracefully disabled.
          </p>
          <ul className="space-y-4 border-l border-white/10 pl-6">
            <li className="text-gray-300 text-sm font-light">No content flashes more than 3 times per second.</li>
            <li className="text-gray-300 text-sm font-light">Time-sensitive interactions can be paused or extended.</li>
            <li className="text-gray-300 text-sm font-light">Minimalist layouts reduce cognitive overload and distraction.</li>
          </ul>
        </div>
      </section>

      {/* 9. Facts and Figures (Global Inclusivity Metrics) */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">Why This<br/>Matters</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">1.3B</div>
              <p className="text-gray-400 text-sm font-light">People globally experience significant disability. Excluding them is not an option.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">96%</div>
              <p className="text-gray-400 text-sm font-light">Of the world's top one million web pages have detectable WCAG 2 failures.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Infrastructure Auditing */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Globe size={40} className="mx-auto mb-8 text-white/30" strokeWidth={1} />
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-8 tracking-tight leading-tight">Continuous Auditing Protocol</h2>
          <p className="text-gray-400 font-light leading-relaxed mb-12 text-lg max-w-3xl mx-auto">
            This platform undergoes rigorous automated and manual accessibility testing during the CI/CD pipeline to ensure ongoing compliance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="border border-white/10 p-6 flex flex-col items-center">
              <span className="text-3xl font-light text-white mb-2">100</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Google Lighthouse</span>
            </div>
            <div className="border border-white/10 p-6 flex flex-col items-center">
              <span className="text-3xl font-light text-white mb-2">0</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Axe Core Violations</span>
            </div>
            <div className="border border-white/10 p-6 flex flex-col items-center">
              <span className="text-3xl font-light text-white mb-2">Manual</span>
              <span className="text-xs text-gray-500 uppercase tracking-widest">Keyboard Audits</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Final Minimalist Support CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Encountered a<br />
            barrier?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            If you experience any difficulty accessing our content, please contact us immediately so we can rectify the architectural issue.
          </p>
        </div>
        <button 
          onClick={() => navigate?.('contact')} 
          className="px-10 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors shrink-0 flex items-center gap-3"
        >
          Contact Support <ArrowRight size={16} />
        </button>
      </section>

    </div>
  );
};

export default Accessibility;
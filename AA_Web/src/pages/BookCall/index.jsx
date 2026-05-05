import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, ShieldCheck, Globe, 
  ArrowRight, CheckCircle, FileText, Lock, 
  Server, Layers, Phone, Plus
} from 'lucide-react';

const BookCall = ({ navigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // --- Real-Time Scheduling Logic ---
  const [activeTrack, setActiveTrack] = useState('architecture');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [bookingStep, setBookingStep] = useState(1); // 1: Date/Time, 2: Details, 3: Confirmation
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Generate next 7 available days dynamically
  const [availableDays, setAvailableDays] = useState([]);
  
  useEffect(() => {
    const days = [];
    let currentDate = new Date();
    while (days.length < 7) {
      currentDate.setDate(currentDate.getDate() + 1);
      // Skip Sundays (0) and Saturdays (6)
      if (currentDate.getDay() !== 0 && currentDate.getDay() !== 6) {
        days.push(new Date(currentDate));
      }
    }
    setAvailableDays(days);
  }, []);

  const timeSlots = ['09:00 UTC', '11:30 UTC', '14:00 UTC', '16:00 UTC'];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    
    const text = `*Meeting Request*\n\n*Client:* ${name}\n*Email:* ${email}\n*Track:* ${activeTrack}\n*Date:* ${selectedDate.toDateString()}\n*Time:* ${selectedTime}`;
    const encodedText = encodeURIComponent(text);

    // High-end simulated processing delay
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingStep(3); // Move to confirmation
      // Open WhatsApp to finalize the sync
      window.open(`https://wa.me/918329000424?text=${encodedText}`, '_blank');
    }, 1500);
  };

  const tracks = [
    { id: 'architecture', title: 'Enterprise Architecture', icon: <Server size={20}/>, desc: 'Discussing scalable backend systems, microservices, and database clustering.' },
    { id: 'security', title: 'Security & VAPT', icon: <ShieldCheck size={20}/>, desc: 'Scoping penetration tests, zero-trust migrations, and infrastructure hardening.' },
    { id: 'uiux', title: 'UI/UX Engineering', icon: <Layers size={20}/>, desc: 'Planning high-performance frontends, design systems, and WebGL integrations.' }
  ];

  const getChecklist = () => {
    switch(activeTrack) {
      case 'security': return [
        'Define the scope of the test (Staging vs Production endpoints).',
        'Ensure authorization/clearance for aggressive scanning is internally approved.',
        'Prepare existing architectural diagrams and previous audit reports.'
      ];
      case 'uiux': return [
        'Have existing brand guidelines (Logos, Typography, Color Matrix) ready.',
        'Compile a list of 2-3 benchmark applications in your specific industry.',
        'Outline your primary user demographic and conversion bottlenecks.'
      ];
      default: return [
        'Map out current infrastructure limitations and scalability bottlenecks.',
        'Define expected concurrent user loads and data processing requirements.',
        'Prepare high-level business objectives for the upcoming quarter.'
      ];
    }
  };

  const faqs = [
    { id: 'f1', q: "Are consultations billed?", a: "Initial 45-minute discovery and architectural scoping calls are complimentary for qualified enterprise inquiries." },
    { id: 'f2', q: "Will we sign an NDA beforehand?", a: "Yes. Standard mutual Non-Disclosure Agreements are routed digitally 24 hours prior to our scheduled block." },
    { id: 'f3', q: "What conferencing software is used?", a: "Meetings are hosted via secure, end-to-end encrypted Google Meet or Microsoft Teams links, depending on your corporate policy." },
    { id: 'f4', q: "Can I bring my technical lead?", a: "Absolutely. I highly encourage CTOs, Lead Engineers, or Security Heads to join the initial architectural discussion." }
  ];

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-[#f3f4f6] font-sans selection:bg-white selection:text-black pt-20">
      
      {/* 1. Minimalist Hero Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto border-b border-white/10 overflow-hidden">
        {/* Animated Temporal SVG Background */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex justify-center items-center">
          <svg viewBox="0 0 800 800" className="w-[800px] h-[800px]">
            <circle cx="400" cy="400" r="300" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 10" className="animate-[spin_120s_linear_infinite]"/>
            <circle cx="400" cy="400" r="200" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            <circle cx="400" cy="400" r="100" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="20 40" className="animate-[spin_60s_linear_infinite_reverse]"/>
            <line x1="400" y1="400" x2="400" y2="150" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" className="origin-[400px_400px] animate-[spin_43200s_linear_infinite]"/>
            <line x1="400" y1="400" x2="550" y2="400" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" className="origin-[400px_400px] animate-[spin_3600s_linear_infinite]"/>
            <circle cx="400" cy="400" r="4" fill="#ffffff" />
          </svg>
        </div>

        <div className="relative z-10">
          <p className="text-gray-500 text-xs mb-6 tracking-[0.3em] uppercase font-medium">Strategic Alignment</p>
          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tighter text-white mb-8 leading-[1.05]">
            Schedule<br />
            <span className="text-gray-500">Briefing.</span>
          </h1>
          <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            Reserve a secure, dedicated block of time to discuss your infrastructure, security requirements, or upcoming architectural build.
          </p>
        </div>
      </section>

      {/* 2. Consultation Tracks & 3. Pre-Requisite Protocol */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-semibold text-white mb-8 tracking-tight">1. Select Strategic Track</h2>
            <div className="flex flex-col gap-4">
              {tracks.map((track) => (
                <button 
                  key={track.id}
                  onClick={() => setActiveTrack(track.id)}
                  className={`text-left p-6 border transition-all duration-300 flex items-center justify-between group
                    ${activeTrack === track.id ? 'bg-white border-white text-black' : 'bg-[#141414] border-white/10 text-white hover:border-white/30'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`mt-1 transition-colors ${activeTrack === track.id ? 'text-black' : 'text-gray-500 group-hover:text-white'}`}>
                      {track.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{track.title}</h3>
                      <p className={`text-sm font-light leading-relaxed ${activeTrack === track.id ? 'text-gray-800' : 'text-gray-400'}`}>
                        {track.desc}
                      </p>
                    </div>
                  </div>
                  {activeTrack === track.id && <CheckCircle size={20} className="text-black shrink-0 ml-4" strokeWidth={1.5} />}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-[#141414] border border-white/10 p-8 h-full">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500 mb-8 border-b border-white/10 pb-4">
                Preparation Protocol
              </h3>
              <ul className="space-y-6">
                {getChecklist().map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-white font-mono text-xs mt-0.5 border border-white/20 px-1.5 py-0.5 rounded-sm shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-gray-300 text-sm font-light leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Scheduling Engine (Frontend Interactive) */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-b border-white/10 relative overflow-hidden">
        <h2 className="text-3xl font-semibold text-white tracking-tight mb-12">2. Secure a Time Block</h2>
        
        <div className="bg-[#141414] border border-white/10 shadow-2xl overflow-hidden relative min-h-[500px] flex flex-col">
          
          {/* Step 1: Calendar View */}
          {bookingStep === 1 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 flex-grow animate-in fade-in duration-500">
              {/* Date Picker */}
              <div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="flex items-center gap-3 mb-8">
                  <Calendar size={20} className="text-gray-500" strokeWidth={1.5} />
                  <h3 className="text-lg font-medium text-white tracking-tight">Select Date (Next 7 Days)</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {availableDays.map((date, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setSelectedDate(date)}
                      className={`p-4 border text-center transition-all duration-300 flex flex-col gap-1
                        ${selectedDate?.toDateString() === date.toDateString() ? 'bg-white border-white text-black' : 'bg-[#0d0d0d] border-white/10 text-white hover:border-white/30'}`}
                    >
                      <span className={`text-xs font-semibold uppercase tracking-widest ${selectedDate?.toDateString() === date.toDateString() ? 'text-gray-800' : 'text-gray-500'}`}>
                        {date.toLocaleDateString('en-US', { weekday: 'short' })}
                      </span>
                      <span className="text-xl font-light">
                        {date.getDate()}
                      </span>
                      <span className={`text-[10px] uppercase ${selectedDate?.toDateString() === date.toDateString() ? 'text-gray-800' : 'text-gray-600'}`}>
                        {date.toLocaleDateString('en-US', { month: 'short' })}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Picker */}
              <div className="p-8 md:p-12 bg-[#0d0d0d]">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Clock size={20} className="text-gray-500" strokeWidth={1.5} />
                    <h3 className="text-lg font-medium text-white tracking-tight">Select UTC Slot</h3>
                  </div>
                  <span className="text-[10px] font-mono text-gray-600 border border-white/10 px-2 py-1">45 MIN</span>
                </div>
                
                {selectedDate ? (
                  <div className="space-y-4 animate-in slide-in-from-right-4 duration-300">
                    <p className="text-xs text-gray-500 font-medium tracking-widest uppercase mb-6">
                      Available slots for {selectedDate.toDateString()}
                    </p>
                    {timeSlots.map((time, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setSelectedTime(time)}
                        className={`w-full p-4 border text-left transition-all duration-300 flex items-center justify-between group
                          ${selectedTime === time ? 'bg-white border-white text-black' : 'bg-[#141414] border-white/10 text-white hover:border-white/30'}`}
                      >
                        <span className="font-mono text-lg">{time}</span>
                        {selectedTime === time && <CheckCircle size={18} className="text-black" strokeWidth={1.5} />}
                      </button>
                    ))}
                    <div className="pt-8">
                      <button 
                        disabled={!selectedTime}
                        onClick={() => setBookingStep(2)}
                        className="w-full py-4 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        Confirm Slot <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center opacity-50 py-12">
                    <Calendar size={48} className="text-gray-600 mb-4" strokeWidth={0.5} />
                    <p className="text-sm text-gray-400 font-light">Please select a date to view available time slots.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Intake Form View */}
          {bookingStep === 2 && (
            <div className="p-8 md:p-12 animate-in slide-in-from-right-8 duration-500 max-w-3xl mx-auto w-full">
              <button onClick={() => setBookingStep(1)} className="text-xs text-gray-500 uppercase tracking-widest hover:text-white mb-8 transition-colors flex items-center gap-2">
                ← Modify Time Slot
              </button>
              <h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Finalize Briefing Details</h3>
              <p className="text-sm font-light text-gray-400 mb-10">
                Reserving <span className="text-white font-mono border border-white/20 px-1 py-0.5 rounded">{selectedTime}</span> on <span className="text-white border border-white/20 px-1 py-0.5 rounded">{selectedDate?.toDateString()}</span>.
              </p>
              
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                <div className="flex flex-col relative group">
                  <input type="text" name="name" required id="clientName" className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Full Name" />
                  <label htmlFor="clientName" className="absolute left-0 -top-5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white font-medium cursor-text">Authorized Representative Name</label>
                </div>
                <div className="flex flex-col relative group">
                  <input type="email" name="email" required id="clientEmail" className="w-full bg-transparent border-b border-white/20 pb-3 text-base text-white focus:outline-none focus:border-white transition-colors peer placeholder-transparent" placeholder="Corporate Email" />
                  <label htmlFor="clientEmail" className="absolute left-0 -top-5 text-xs text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-600 peer-placeholder-shown:top-0 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-white font-medium cursor-text">Corporate Email</label>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-white text-black text-sm font-semibold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4"
                >
                  {isSubmitting ? <><Server size={16} className="animate-pulse"/> Establishing Sync...</> : 'Execute Booking Request'}
                </button>
              </form>
            </div>
          )}

          {/* Step 3: Success / Confirmation View */}
          {bookingStep === 3 && (
            <div className="p-12 md:p-24 animate-in zoom-in-95 duration-500 flex flex-col items-center justify-center text-center h-full flex-grow">
              <CheckCircle size={64} className="text-white mb-6" strokeWidth={1} />
              <h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Request Transmitted</h3>
              <p className="text-lg font-light text-gray-400 max-w-lg leading-relaxed mb-8">
                Your briefing block has been reserved. You will receive a calendar invitation and encrypted meeting link at your corporate email shortly.
              </p>
              <div className="bg-[#0d0d0d] border border-white/10 p-6 inline-block text-left">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Confirmed Slot</p>
                <p className="text-white font-mono text-sm">{selectedDate?.toDateString()} @ {selectedTime}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Global Timezone Synchronization */}
      <section className="py-32 bg-[#141414] border-b border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-3xl font-semibold text-white tracking-tight leading-tight">Global Timezone<br/>Synchronization</h2>
            <p className="text-gray-400 font-light text-lg leading-relaxed">
              My core operational hours run on Indian Standard Time (IST). However, consultations are dynamically mapped and accepted globally.
            </p>
            <div className="space-y-4 border-l border-white/10 pl-6">
              <div>
                <p className="text-white font-medium">Pune, India (IST)</p>
                <p className="text-gray-500 text-xs font-mono">UTC +5:30 (Primary Node)</p>
              </div>
              <div>
                <p className="text-gray-400 font-medium">New York, USA (EST)</p>
                <p className="text-gray-600 text-xs font-mono">UTC -5:00 (Client Sync)</p>
              </div>
              <div>
                <p className="text-gray-400 font-medium">London, UK (GMT)</p>
                <p className="text-gray-600 text-xs font-mono">UTC +0:00 (Client Sync)</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center">
             {/* Custom Minimalist Timezone SVG */}
             <div className="w-full max-w-lg aspect-[16/9] border border-white/10 bg-[#0d0d0d] p-6 relative">
                <svg viewBox="0 0 800 450" className="w-full h-full opacity-60">
                  {/* Meridian Lines */}
                  <line x1="100" y1="0" x2="100" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="400" y1="0" x2="400" y2="450" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  <line x1="700" y1="0" x2="700" y2="450" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  {/* Sync Waves */}
                  <path d="M400 225 Q550 100 700 225 T400 225" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                  <path d="M400 225 Q250 350 100 225 T400 225" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.5" />
                  {/* IST Node */}
                  <circle cx="400" cy="225" r="8" fill="#ffffff" />
                  <circle cx="400" cy="225" r="24" fill="none" stroke="#ffffff" strokeWidth="1" className="animate-ping" style={{animationDuration: '3s'}}/>
                  {/* Peripheral Nodes */}
                  <circle cx="700" cy="225" r="4" fill="rgba(255,255,255,0.5)" />
                  <circle cx="100" cy="225" r="4" fill="rgba(255,255,255,0.5)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-between px-10 pointer-events-none">
                  <span className="text-[10px] text-gray-500 font-mono">-5H</span>
                  <span className="text-[10px] text-white font-mono bg-black px-2 py-1">IST CORE</span>
                  <span className="text-[10px] text-gray-500 font-mono">+5H</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 6. Facts & Figures & 7. 45-Min Agenda */}
      <section className="py-32 max-w-7xl mx-auto px-6 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-4">
            <h3 className="text-3xl text-white font-medium tracking-tight">Engagement<br/>Metrics</h3>
          </div>
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-16">
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">45<span className="text-3xl text-gray-500">m</span></div>
              <p className="text-gray-400 text-sm font-light">Strictly managed timeframe to respect executive scheduling.</p>
            </div>
            <div>
              <div className="text-6xl md:text-8xl font-light text-white mb-4 tracking-tighter">100<span className="text-3xl text-gray-500">%</span></div>
              <p className="text-gray-400 text-sm font-light">Confidentiality guaranteed. Zero data retention post-call unless scoped.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-4 mb-4">
            <h3 className="text-xl font-medium text-white tracking-tight">The 45-Minute Breakdown</h3>
          </div>
          {[
            { t: '00:00 - 00:10', label: 'Discovery', desc: 'Analyzing current architecture and business bottlenecks.' },
            { t: '00:10 - 00:25', label: 'Technical Review', desc: 'Evaluating tech stack viability and security posture.' },
            { t: '00:25 - 00:40', label: 'Solution Mapping', desc: 'Proposing architectural remedies and timeline projections.' },
            { t: '00:40 - 00:45', label: 'Next Steps', desc: 'SOW discussion and administrative wrap-up.' }
          ].map((agenda, i) => (
            <div key={i} className="bg-[#141414] border border-white/10 p-6">
              <span className="text-xs font-mono text-gray-500 mb-4 block">{agenda.t}</span>
              <h4 className="text-white font-medium mb-2 tracking-tight">{agenda.label}</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">{agenda.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Security & NDA Protocols & 9. Key Architect Profile */}
      <section className="py-32 bg-[#141414] border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Lock size={24} className="text-gray-500" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-white tracking-tight">Security & NDA Protocol</h3>
            </div>
            <p className="text-gray-400 font-light text-base leading-relaxed mb-6">
              Prior to discussing proprietary source code or infrastructure weaknesses, standard enterprise Non-Disclosure Agreements (NDAs) must be executed.
            </p>
            <ul className="space-y-4 border-l border-white/10 pl-6">
              <li className="text-sm font-light text-gray-300">Digital signatures facilitated via secure portal.</li>
              <li className="text-sm font-light text-gray-300">PGP encryption keys available for sensitive pre-call briefs.</li>
              <li className="text-sm font-light text-gray-300">Meetings hosted on enterprise-tier secure endpoints.</li>
            </ul>
          </div>

          <div>
             <div className="flex items-center gap-3 mb-8">
              <ShieldCheck size={24} className="text-gray-500" strokeWidth={1.5} />
              <h3 className="text-2xl font-semibold text-white tracking-tight">Lead Architect</h3>
            </div>
            <div className="border border-white/10 p-8 bg-[#0d0d0d]">
              <h4 className="text-xl font-medium text-white mb-1">Arun Ammisetty</h4>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-6">Principal Engineer & Security Researcher</p>
              <p className="text-sm font-light text-gray-400 leading-relaxed">
                Over 5 years of specialized experience in full-stack JavaScript architectures and offensive security (VAPT). Certified across multiple disciplines, providing direct, un-outsourced expertise to enterprise clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Technical Booking FAQ */}
      <section className="py-32 max-w-5xl mx-auto px-6 border-b border-white/10">
        <h2 className="text-4xl font-semibold text-center text-white mb-20 tracking-tight">Pre-Briefing FAQ</h2>
        <div className="grid grid-cols-1 gap-0">
          {faqs.map(faq => (
            <div key={faq.id} className="border-b border-white/10">
              <button 
                onClick={() => setActiveFaq(activeFaq === faq.id ? null : faq.id)} 
                className="w-full py-8 flex justify-between items-center text-left text-white hover:text-gray-300 transition-colors"
              >
                <span className="font-medium text-base pr-4 tracking-tight">{faq.q}</span>
                <Plus size={18} className={`shrink-0 text-gray-500 transition-transform duration-500 ${activeFaq === faq.id ? 'rotate-45 text-white' : ''}`} />
              </button>
              {activeFaq === faq.id && (
                <div className="pb-8 text-gray-400 font-light text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 pr-8">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 11. Alternative Channels CTA */}
      <section className="py-32 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tighter leading-tight mb-4">
            Require immediate<br />
            escalation?
          </h2>
          <p className="text-gray-400 font-light text-lg max-w-md leading-relaxed">
            If you are facing an active security incident or require zero-day mitigation, bypass the scheduler.
          </p>
        </div>
        <div className="flex gap-4 shrink-0 flex-wrap">
          <a href="tel:+918329000424" className="px-8 py-4 bg-white text-black font-medium text-sm hover:bg-gray-200 transition-colors flex items-center gap-3">
            <Phone size={16} /> Direct Line
          </a>
          <button onClick={() => navigate('contact')} className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors flex items-center gap-3">
            <FileText size={16} /> Standard Contact Form
          </button>
        </div>
      </section>

    </div>
  );
};

export default BookCall;
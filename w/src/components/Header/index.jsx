import React, { useState, useEffect, useRef } from 'react';
import { 
  X, ArrowUpRight, ChevronRight, Menu, 
  User, ShieldCheck, LogOut, Terminal 
} from 'lucide-react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';

const Header = ({ navigate, currentView, isMenuOpen, setIsMenuOpen }) => {
  const [user, setUser] = useState(null);
  const logoPressTimeoutRef = useRef(null);

  // 1. Real-time Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 2. Secret Admin Access Logic (3s Long Press)
  const handleLogoMouseDown = () => {
    logoPressTimeoutRef.current = setTimeout(() => {
      navigate('invoice');
      logoPressTimeoutRef.current = null;
    }, 3000);
  };

  const handleLogoMouseUp = () => {
    if (logoPressTimeoutRef.current) {
      clearTimeout(logoPressTimeoutRef.current);
      navigate('home');
    }
  };

  const handleAuthAction = () => {
    if (user) {
      navigate(user.email === 'dv3nt@duck.com' ? 'invoice' : 'client-portal');
    } else {
      navigate('contact');
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Blog', id: 'blog' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/10 h-16 lg:h-20 flex items-center justify-between px-6 lg:px-12 print:hidden font-sans">
      
      {/* Brand Section */}
      <div 
        onMouseDown={handleLogoMouseDown} 
        onMouseUp={handleLogoMouseUp} 
        onTouchStart={handleLogoMouseDown} 
        onTouchEnd={handleLogoMouseUp}
        className="flex items-center gap-2 cursor-pointer group select-none"
      >
        <span className="text-xl lg:text-2xl font-extrabold text-white tracking-tighter uppercase">
          Arun <span className="text-uber-blue">/</span> Ammisetty
        </span>
        <ArrowUpRight size={18} className="text-uber-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-10">
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => navigate(item.id)}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-colors hover:text-uber-blue ${
                  currentView === item.id ? 'text-uber-blue' : 'text-zinc-400'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="h-8 w-px bg-white/10 mx-2"></div>

        {/* Dynamic CTA Button */}
        <button 
          onClick={handleAuthAction}
          className="group flex items-center gap-3 px-6 py-2 bg-white text-black font-black uppercase text-[10px] tracking-widest hover:bg-uber-blue hover:text-white transition-all"
        >
          {user ? (
            <><Terminal size={14}/> Terminal</>
          ) : (
            <><User size={14}/> Get In Touch</>
          )}
          <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </nav>

      {/* Mobile Toggle */}
      <button 
        className="lg:hidden text-white p-2 hover:bg-white/5 transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div className="absolute top-16 lg:top-20 left-0 w-full h-[calc(100vh-64px)] bg-black flex flex-col p-8 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => { navigate(item.id); setIsMenuOpen(false); }}
                className="text-4xl font-extrabold text-left text-white tracking-tighter hover:text-uber-blue flex items-center justify-between group"
              >
                {item.label} <ChevronRight size={32} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))}
            
            <div className="h-px bg-white/10 w-full my-4"></div>
            
            <button 
              onClick={handleAuthAction}
              className="w-full py-5 bg-uber-blue text-white font-black uppercase text-sm tracking-[0.3em] flex items-center justify-center gap-3"
            >
              {user ? 'Access Terminal' : 'Get Started'} <ArrowUpRight size={20} />
            </button>
            
            {user && (
              <button 
                onClick={async () => { await signOut(auth); navigate('home'); setIsMenuOpen(false); }}
                className="text-zinc-500 font-bold uppercase text-xs tracking-widest flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <LogOut size={14} /> Terminate Session
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
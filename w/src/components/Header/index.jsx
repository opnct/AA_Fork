import React, { useRef, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ navigate, currentView, isMenuOpen, setIsMenuOpen }) => {
  const logoPressTimeoutRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  // High-end agency effect: transparent at top, blurred/dark when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'faq', label: 'FAQs' }
  ];

  const handleNavClick = (id) => {
    navigate(id);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 print:hidden ${
        scrolled ? 'bg-[#0d0d0d]/80 backdrop-blur-md border-b border-white/5 py-0' : 'bg-transparent border-b border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        
        {/* 1. Minimalist Logo (Left) */}
        <div 
          onMouseDown={handleLogoMouseDown} 
          onMouseUp={handleLogoMouseUp} 
          onTouchStart={handleLogoMouseDown} 
          onTouchEnd={handleLogoMouseUp}
          className="flex items-center cursor-pointer group select-none z-10"
        >
          <h1 className="text-xl font-medium tracking-tight text-white transition-opacity group-hover:opacity-70">
            Arun <span className="text-gray-500 font-light">/ Ammisetty</span>
          </h1>
        </div>

        {/* 2. Centered Navigation (Desktop) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 z-0">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavClick(item.id)} 
              className={`text-sm font-medium transition-colors ${
                currentView === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* 3. CTA & Mobile Toggle (Right) */}
        <div className="flex items-center gap-4 z-10">
          <button 
            onClick={() => handleNavClick('contact')} 
            className="hidden lg:block px-6 py-2 border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors rounded-sm"
          >
            Contact
          </button>

          {/* Mobile Hamburger Icon */}
          <button 
            className="lg:hidden text-gray-400 hover:text-white transition-colors" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* 4. Full-Screen Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full h-[calc(100vh-80px)] bg-[#0d0d0d] border-t border-white/5 flex flex-col overflow-y-auto animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col px-6 py-12 gap-8">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavClick(item.id)} 
                className={`text-left text-4xl font-light tracking-tighter transition-colors ${
                  currentView === item.id ? 'text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <div className="h-px w-full bg-white/5 my-4"></div>
            
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-left text-4xl font-light tracking-tighter text-white hover:text-gray-300 transition-colors"
            >
              Contact
            </button>

            {/* Mobile Footer Links */}
            <div className="mt-auto pt-12 flex flex-col gap-4 text-sm text-gray-500 font-medium">
              <button onClick={() => handleNavClick('resources')} className="text-left hover:text-white transition-colors">Resources Hub</button>
              <button onClick={() => handleNavClick('privacy')} className="text-left hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => handleNavClick('terms')} className="text-left hover:text-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
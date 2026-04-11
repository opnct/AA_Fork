import React, { useRef } from 'react';
import { X } from 'lucide-react';
import { services } from '../../data/content';

const Header = ({ navigate, currentView, isMenuOpen, setIsMenuOpen }) => {
  const logoPressTimeoutRef = useRef(null);

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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black h-20 flex items-center justify-between px-6 lg:px-12 print:hidden">
      <div 
        onMouseDown={handleLogoMouseDown} 
        onMouseUp={handleLogoMouseUp} 
        onTouchStart={handleLogoMouseDown} 
        onTouchEnd={handleLogoMouseUp}
        className="flex flex-col cursor-pointer group select-none"
      >
        <h1 className="text-2xl font-black uppercase leading-none tracking-tighter group-hover:opacity-70 transition-opacity">
          Arun <span className="text-blue-600">/</span> Ammisetty
        </h1>
      </div>

      <div className="hidden lg:flex gap-8 font-bold text-sm uppercase tracking-widest">
        <button onClick={() => navigate('home')} className={`hover:text-blue-600 ${currentView === 'home' ? 'text-blue-600' : ''}`}>Home</button>
        <button onClick={() => navigate('about')} className={`hover:text-blue-600 ${currentView === 'about' ? 'text-blue-600' : ''}`}>About</button>
        <button onClick={() => navigate('services')} className={`hover:text-blue-600 ${currentView === 'services' ? 'text-blue-600' : ''}`}>Services</button>
        <button onClick={() => navigate('projects')} className={`hover:text-blue-600 ${currentView === 'projects' ? 'text-blue-600' : ''}`}>Projects</button>
        <button onClick={() => navigate('blog')} className={`hover:text-blue-600 ${currentView === 'blog' ? 'text-blue-600' : ''}`}>Blog</button>
        <button onClick={() => navigate('contact')} className={`px-6 py-2 bg-black text-white hover:bg-blue-600 hover:text-black border-2 border-black transition-all ${currentView === 'contact' ? 'bg-blue-600 text-black' : ''}`}>Contact</button>
      </div>

      <button className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? (
           <X size={32} />
        ) : (
          <>
            <span className="block w-full h-1 bg-black group-hover:bg-blue-600 transition-colors"></span>
            <span className="block w-full h-1 bg-black group-hover:bg-blue-600 transition-colors"></span>
          </>
        )}
      </button>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full h-[calc(100vh-80px)] bg-white border-t-2 border-black flex flex-col overflow-y-auto">
          <div className="p-8 gap-6 flex flex-col font-black text-3xl uppercase tracking-widest pb-32">
            <button onClick={() => navigate('home')} className="text-left hover:text-blue-600">Home</button>
            <button onClick={() => navigate('about')} className="text-left hover:text-blue-600">About</button>
            <button onClick={() => navigate('services')} className="text-left hover:text-blue-600">Services</button>
            <div className="pl-6 flex flex-col gap-4 text-xl text-gray-500 border-l-4 border-gray-200">
              {services.map(service => (
                <button key={service.id} onClick={() => navigate('service-detail')} className="text-left hover:text-blue-600 font-bold">
                  {service.title}
                </button>
              ))}
            </div>
            <button onClick={() => navigate('projects')} className="text-left hover:text-blue-600">Projects</button>
            <button onClick={() => navigate('blog')} className="text-left hover:text-blue-600">Blog</button>
            <div className="h-px bg-gray-200 w-full my-2"></div>
            <button onClick={() => navigate('resources')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Resources Hub</button>
            <button onClick={() => navigate('faq')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">FAQ</button>
            <button onClick={() => navigate('privacy')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Privacy Policy</button>
            <button onClick={() => navigate('terms')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Terms of Service</button>
            <button onClick={() => navigate('sitemap')} className="text-left hover:text-blue-600 text-lg text-gray-500 font-bold">Site Map</button>
            <button onClick={() => navigate('contact')} className="text-left hover:text-blue-600 text-blue-600 mt-4">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

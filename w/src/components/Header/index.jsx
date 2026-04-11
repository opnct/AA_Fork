import React, { useState, useEffect, useRef } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { ChevronDown, Monitor, User, ShieldCheck, LogOut, Terminal as TerminalIcon } from 'lucide-react';

const Header = ({ navigate, setIsMenuOpen }) => {
  const [user, setUser] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const logoPressTimeoutRef = useRef(null);
  const menuRef = useRef(null);

  // 1. Firebase Auth Listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // 2. Click Outside handler for menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 3. Secret Admin Access (Long Press Logo)
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

  const toggleMenu = (menuName) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const handleAction = (route) => {
    navigate(route);
    setActiveMenu(null);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setActiveMenu(null);
    navigate('home');
  };

  const MenuItem = ({ label, items, menuName }) => (
    <div className="relative">
      <button
        onClick={() => toggleMenu(menuName)}
        className={`px-3 py-1 text-sm transition-colors hover:bg-editor-panel ${
          activeMenu === menuName ? 'bg-editor-panel text-editor-keyword' : 'text-editor-text'
        }`}
      >
        {label}
      </button>
      {activeMenu === menuName && (
        <div className="absolute left-0 top-full z-[100] w-56 border border-editor-border bg-editor-panel py-1 shadow-2xl animate-in fade-in zoom-in-95 duration-100">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={item.action}
              className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-editor-text hover:bg-editor-selection hover:text-white"
            >
              <span className="flex items-center gap-2">
                {item.icon} {item.label}
              </span>
              <span className="text-[10px] text-gray-500 font-mono">{item.shortcut}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-editor-border bg-editor-bg px-4 h-12 flex items-center justify-between print:hidden select-none font-mono">
      
      <div className="flex items-center gap-2" ref={menuRef}>
        {/* Window Icon/Title */}
        <div 
          onMouseDown={handleLogoMouseDown} 
          onMouseUp={handleLogoMouseUp} 
          onTouchStart={handleLogoMouseDown} 
          onTouchEnd={handleLogoMouseUp}
          className="flex items-center gap-2 pr-4 cursor-pointer border-r border-editor-border h-8 group"
        >
          <div className="w-5 h-5 bg-editor-blue rounded-sm flex items-center justify-center text-editor-bg font-black text-[10px]">AA</div>
          <span className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors">arun_portfolio.jsx</span>
        </div>

        {/* Notepad Style Menus */}
        <div className="hidden md:flex items-center">
          <MenuItem 
            label="File" 
            menuName="file"
            items={[
              { label: 'Home', action: () => handleAction('home'), shortcut: 'Alt+H' },
              { label: 'About', action: () => handleAction('about'), shortcut: 'Alt+A' },
              { label: 'Sitemap', action: () => handleAction('sitemap'), shortcut: 'Ctrl+P' },
              { label: 'Logout', action: handleLogout, shortcut: 'Ctrl+Q' }
            ]} 
          />
          <MenuItem 
            label="Edit" 
            menuName="edit"
            items={[
              { label: 'Services', action: () => handleAction('services'), shortcut: 'Alt+S' },
              { label: 'Projects', action: () => handleAction('projects'), shortcut: 'Alt+P' },
              { label: 'Guestbook', action: () => handleAction('guestbook'), shortcut: 'Alt+G' }
            ]} 
          />
          <MenuItem 
            label="View" 
            menuName="view"
            items={[
              { label: 'Blog', action: () => handleAction('blog'), shortcut: 'Alt+B' },
              { label: 'Status', action: () => handleAction('status'), shortcut: 'Alt+L' },
              { label: 'Resources', action: () => handleAction('resources'), shortcut: 'Alt+R' },
              { label: 'FAQ', action: () => handleAction('faq'), shortcut: 'Alt+F' }
            ]} 
          />
          <MenuItem 
            label="Terminal" 
            menuName="terminal"
            items={[
              { label: 'Security Scanner', action: () => handleAction('scanner'), icon: <ShieldCheck size={14}/>, shortcut: '`' },
              { label: 'Pricing Estimator', action: () => handleAction('estimator'), icon: <TerminalIcon size={14}/>, shortcut: 'Ctrl+E' },
              { label: 'ROI Calculator', action: () => handleAction('roi'), icon: <Monitor size={14}/>, shortcut: 'Ctrl+R' }
            ]} 
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Dynamic CTA / User Portal */}
        {user ? (
          <button 
            onClick={() => handleAction(user.email === 'dv3nt@duck.com' ? 'invoice' : 'client-portal')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-editor-variable hover:text-white transition-colors"
          >
            <User size={14} /> {user.email === 'dv3nt@duck.com' ? 'Admin' : 'Client Dashboard'}
          </button>
        ) : (
          <button 
            onClick={() => handleAction('contact')}
            className="px-5 py-1.5 bg-editor-blue text-editor-bg text-xs font-bold uppercase rounded-full hover:bg-white transition-all shadow-lg"
          >
            Contact.exe
          </button>
        )}

        {/* Simple Mobile Toggle (Fallback) */}
        <button className="md:hidden text-editor-text" onClick={() => setIsMenuOpen(true)}>
          <ChevronDown size={20} />
        </button>
      </div>

    </header>
  );
};

export default Header;
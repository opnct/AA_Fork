import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle, ArrowLeft } from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

// 20+ New Tools
import PricingEstimator from './pages/PricingEstimator';
import SecurityScanner from './pages/SecurityScanner';
import CvBuilder from './pages/CvBuilder';
import RoiCalculator from './pages/RoiCalculator';
import ClientPortal from './pages/ClientPortal';
import CaseStudies from './pages/CaseStudies';
import Testimonials from './pages/Testimonials';
import BugBounty from './pages/BugBounty';
import TechRadar from './pages/TechRadar';
import BookCall from './pages/BookCall';
import Faq from './pages/Faq';
import Newsletter from './pages/Newsletter';
import Training from './pages/Training';
import Resources from './pages/Resources';
import Glossary from './pages/Glossary';
import MediaKit from './pages/MediaKit';
import Partners from './pages/Partners';
import Status from './pages/Status';
import Changelog from './pages/Changelog';
import Accessibility from './pages/Accessibility';
import Sitemap from './pages/Sitemap';
import Guestbook from './pages/Guestbook';

// Existing Tools & Legal
import ContractGenerator from './pages/ContractGenerator';
import InvoiceGenerator from './pages/InvoiceGenerator';
import { PrivacyPolicy, TermsOfService, CookiePolicy, Disclaimer, AcceptableUse, RefundPolicy, Copyright, GDPR } from './pages/Legal';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [viewHistory, setViewHistory] = useState([]); // Global history stack
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [activeBlogPost, setActiveBlogPost] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isInvoiceAuthenticated, setIsInvoiceAuthenticated] = useState(false);

  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isLargeText, setIsLargeText] = useState(false);
  
  // Tool View toggle for authenticated state
  const [activeTool, setActiveTool] = useState('invoice');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView, activeService, activeBlogPost, activeProject]);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Standard Navigation with History Tracking
  const navigate = (view) => {
    if (view !== currentView) {
      setViewHistory(prev => [...prev, currentView]);
    }
    setCurrentView(view);
    setIsMenuOpen(false);
    if (view === 'services') setActiveService(null);
    if (view === 'blog') setActiveBlogPost(null);
    if (view === 'projects') setActiveProject(null);
  };

  // Specific Deep Link Navigation with History Tracking
  const openService = (service) => {
    setViewHistory(prev => [...prev, currentView]);
    setActiveService(service);
    setCurrentView('service-detail');
    setIsMenuOpen(false);
  };

  const openBlogPost = (post) => {
    setViewHistory(prev => [...prev, currentView]);
    setActiveBlogPost(post);
    setCurrentView('blog-detail');
  };

  const openProject = (project) => {
    setViewHistory(prev => [...prev, currentView]);
    setActiveProject(project);
    setCurrentView('project-detail');
  };

  // Global Back Navigation
  const goBack = () => {
    if (viewHistory.length > 0) {
      const previousView = viewHistory[viewHistory.length - 1];
      setViewHistory(prev => prev.slice(0, -1));
      setCurrentView(previousView);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`font-sans min-h-screen relative selection:bg-white selection:text-black ${isHighContrast ? 'filter contrast-125' : ''} ${isLargeText ? 'text-lg' : 'text-base'}`}>
      <Header navigate={navigate} currentView={currentView} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        {currentView === 'home' && <Home navigate={navigate} />}
        {currentView === 'about' && <About navigate={navigate} />}
        {currentView === 'services' && <Services navigate={navigate} openService={openService} />}
        {currentView === 'service-detail' && <ServiceDetail activeService={activeService} navigate={navigate} />}
        {currentView === 'projects' && <Projects navigate={navigate} openProject={openProject} />}
        {currentView === 'project-detail' && <ProjectDetail activeProject={activeProject} navigate={navigate} />}
        {currentView === 'contact' && <Contact navigate={navigate} />}
        {currentView === 'blog' && <Blog navigate={navigate} openBlogPost={openBlogPost} />}
        {currentView === 'blog-detail' && <BlogDetail activeBlogPost={activeBlogPost} navigate={navigate} />}
        
        {/* New Interactive Tools */}
        {currentView === 'estimator' && <PricingEstimator navigate={navigate} />}
        {currentView === 'scanner' && <SecurityScanner navigate={navigate} />}
        {currentView === 'cv-builder' && <CvBuilder navigate={navigate} />}
        {currentView === 'roi' && <RoiCalculator navigate={navigate} />}
        {currentView === 'client-portal' && <ClientPortal navigate={navigate} />}
        {currentView === 'case-studies' && <CaseStudies navigate={navigate} />}
        {currentView === 'testimonials' && <Testimonials navigate={navigate} />}
        {currentView === 'bug-bounty' && <BugBounty navigate={navigate} />}
        {currentView === 'tech-radar' && <TechRadar navigate={navigate} />}
        {currentView === 'book-call' && <BookCall navigate={navigate} />}
        {currentView === 'faq' && <Faq navigate={navigate} />}
        {currentView === 'newsletter' && <Newsletter navigate={navigate} />}
        {currentView === 'training' && <Training navigate={navigate} />}
        {currentView === 'resources' && <Resources navigate={navigate} />}
        {currentView === 'glossary' && <Glossary navigate={navigate} />}
        {currentView === 'media' && <MediaKit navigate={navigate} />}
        {currentView === 'partners' && <Partners navigate={navigate} />}
        {currentView === 'status' && <Status navigate={navigate} />}
        {currentView === 'changelog' && <Changelog navigate={navigate} />}
        {currentView === 'accessibility' && <Accessibility isHighContrast={isHighContrast} setIsHighContrast={setIsHighContrast} isLargeText={isLargeText} setIsLargeText={setIsLargeText} navigate={navigate} />}
        {currentView === 'sitemap' && <Sitemap navigate={navigate} />}
        {currentView === 'guestbook' && <Guestbook navigate={navigate} />}
        
        {/* Existing Locked Routes */}
        {currentView === 'invoice' && activeTool === 'invoice' && <InvoiceGenerator isAuthenticated={isInvoiceAuthenticated} setIsAuthenticated={setIsInvoiceAuthenticated} setActiveTool={setActiveTool} navigate={navigate} />}
        {currentView === 'invoice' && activeTool === 'contract' && <ContractGenerator navigate={navigate} />}
        {currentView === 'contract' && <ContractGenerator navigate={navigate} />}

        {/* Legal Routes */}
        {currentView === 'privacy' && <PrivacyPolicy navigate={navigate} />}
        {currentView === 'terms' && <TermsOfService navigate={navigate} />}
        {currentView === 'cookie-policy' && <CookiePolicy navigate={navigate} />}
        {currentView === 'disclaimer' && <Disclaimer navigate={navigate} />}
        {currentView === 'acceptable-use' && <AcceptableUse navigate={navigate} />}
        {currentView === 'refund-policy' && <RefundPolicy navigate={navigate} />}
        {currentView === 'copyright' && <Copyright navigate={navigate} />}
        {currentView === 'gdpr' && <GDPR navigate={navigate} />}
      </main>

      <Footer navigate={navigate} />

      {/* High-End Agency Minimalist Floating Buttons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex flex-col gap-4 z-50 print:hidden">
        
        {/* Global Back Button (Only visible if history exists) */}
        {viewHistory.length > 0 && (
          <button 
            onClick={goBack} 
            className="w-12 h-12 bg-[#141414]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl rounded-sm"
            aria-label="Go back to previous page"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
          </button>
        )}

        {/* Scroll to Top */}
        {showBackToTop && (
          <button 
            onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} 
            className="w-12 h-12 bg-[#141414]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl rounded-sm"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} strokeWidth={1.5} />
          </button>
        )}
        
        {/* Contact Links */}
        <a 
          href="tel:+918329000442" 
          className="w-12 h-12 bg-[#141414]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl rounded-sm"
          aria-label="Call directly"
        >
          <Phone size={20} strokeWidth={1.5} />
        </a>
        <a 
          href="https://wa.me/918329000424" 
          target="_blank" 
          rel="noreferrer" 
          className="w-12 h-12 bg-[#141414]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl rounded-sm group relative"
          aria-label="WhatsApp Message"
        >
          <MessageCircle size={20} strokeWidth={1.5} className="group-hover:scale-110 transition-transform duration-300" />
          {/* Subtle High-End Glow Effect */}
          <div className="absolute inset-0 rounded-sm bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-sm"></div>
        </a>
      </div>
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, MessageCircle } from 'lucide-react';

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

  const navigate = (view) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    if (view === 'services') setActiveService(null);
    if (view === 'blog') setActiveBlogPost(null);
    if (view === 'projects') setActiveProject(null);
  };

  const openService = (service) => {
    setActiveService(service);
    setCurrentView('service-detail');
    setIsMenuOpen(false);
  };

  const openBlogPost = (post) => {
    setActiveBlogPost(post);
    setCurrentView('blog-detail');
  };

  const openProject = (project) => {
    setActiveProject(project);
    setCurrentView('project-detail');
  };

  return (
    <div className={`font-sans text-black selection:bg-blue-200 min-h-screen relative ${isHighContrast ? 'bg-black text-white filter contrast-125' : 'bg-white'} ${isLargeText ? 'text-lg' : 'text-base'}`}>
      <Header navigate={navigate} currentView={currentView} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main>
        {currentView === 'home' && <Home navigate={navigate} />}
        {currentView === 'about' && <About navigate={navigate} />}
        {currentView === 'services' && <Services navigate={navigate} openService={openService} />}
        {currentView === 'service-detail' && <ServiceDetail activeService={activeService} navigate={navigate} />}
        {currentView === 'projects' && <Projects navigate={navigate} openProject={openProject} />}
        {currentView === 'project-detail' && <ProjectDetail activeProject={activeProject} navigate={navigate} />}
        {currentView === 'contact' && <Contact />}
        {currentView === 'blog' && <Blog navigate={navigate} openBlogPost={openBlogPost} />}
        {currentView === 'blog-detail' && <BlogDetail activeBlogPost={activeBlogPost} navigate={navigate} />}
        
        {/* New Interactive Tools */}
        {currentView === 'estimator' && <PricingEstimator />}
        {currentView === 'scanner' && <SecurityScanner />}
        {currentView === 'cv-builder' && <CvBuilder />}
        {currentView === 'roi' && <RoiCalculator />}
        {currentView === 'client-portal' && <ClientPortal />}
        {currentView === 'case-studies' && <CaseStudies />}
        {currentView === 'testimonials' && <Testimonials />}
        {currentView === 'bug-bounty' && <BugBounty />}
        {currentView === 'tech-radar' && <TechRadar />}
        {currentView === 'book-call' && <BookCall />}
        {currentView === 'faq' && <Faq />}
        {currentView === 'newsletter' && <Newsletter />}
        {currentView === 'training' && <Training />}
        {currentView === 'resources' && <Resources />}
        {currentView === 'glossary' && <Glossary />}
        {currentView === 'media' && <MediaKit />}
        {currentView === 'partners' && <Partners />}
        {currentView === 'status' && <Status />}
        {currentView === 'changelog' && <Changelog />}
        {currentView === 'accessibility' && <Accessibility isHighContrast={isHighContrast} setIsHighContrast={setIsHighContrast} isLargeText={isLargeText} setIsLargeText={setIsLargeText} />}
        {currentView === 'sitemap' && <Sitemap navigate={navigate} />}
        {currentView === 'guestbook' && <Guestbook />}
        
        {/* Existing Locked Routes */}
        {currentView === 'invoice' && activeTool === 'invoice' && <InvoiceGenerator isAuthenticated={isInvoiceAuthenticated} setIsAuthenticated={setIsInvoiceAuthenticated} setActiveTool={setActiveTool} />}
        {currentView === 'invoice' && activeTool === 'contract' && <ContractGenerator />}
        {currentView === 'contract' && <ContractGenerator />}

        {/* Legal Routes */}
        {currentView === 'privacy' && <PrivacyPolicy />}
        {currentView === 'terms' && <TermsOfService />}
        {currentView === 'cookie-policy' && <CookiePolicy />}
        {currentView === 'disclaimer' && <Disclaimer />}
        {currentView === 'acceptable-use' && <AcceptableUse />}
        {currentView === 'refund-policy' && <RefundPolicy />}
        {currentView === 'copyright' && <Copyright />}
        {currentView === 'gdpr' && <GDPR />}
      </main>

      <Footer navigate={navigate} isHighContrast={isHighContrast} />

      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40 print:hidden">
        {showBackToTop && (
          <button onClick={()=>window.scrollTo({top:0, behavior:'smooth'})} className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
            <ArrowUp size={24} />
          </button>
        )}
        <a href="tel:+918329000442" className="w-12 h-12 bg-blue-600 text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          <Phone size={24} />
        </a>
        <a href="https://wa.me/918329000442" target="_blank" rel="noreferrer" className="w-12 h-12 bg-green-500 text-white border-2 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          <MessageCircle size={24} />
        </a>
      </div>
    </div>
  );
};

export default App;

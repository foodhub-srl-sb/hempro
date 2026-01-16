
import React, { useState, useEffect } from 'react';
import { ViewType } from '../types';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (view: ViewType) => {
    onNavigate(view);
    setIsOpen(false);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks: { label: string; view: ViewType }[] = [
    { label: 'Panoramica', view: 'home' },
    { label: 'Risorse', view: 'resources' },
    { label: 'Partner', view: 'partners' },
    { label: 'Il Progetto', view: 'about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-[#fbf9f4]/80 backdrop-blur-xl shadow-[0_10px_40px_-15px_rgba(3,108,66,0.1)] border-b border-[#036C42]/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNav('home')}
          >
            <div className={`relative flex items-center justify-center rounded-xl transition-all duration-500 ${
              scrolled ? 'w-10 h-10 bg-[#036C42]' : 'w-12 h-12 bg-[#036C42]'
            } group-hover:bg-[#47A4B5] shadow-lg shadow-[#036C42]/10`}>
              <span className="text-white font-bold text-xl tracking-tighter">H</span>
              <div className="absolute -inset-1 bg-[#47A4B5]/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 -z-10"></div>
            </div>
            <div className="ml-4">
              <span className={`block font-serif font-bold tracking-tight text-[#036C42] transition-all duration-500 ${
                scrolled ? 'text-lg' : 'text-2xl'
              }`}>
                HEMPRO
              </span>
              {!scrolled && (
                <span className="block text-[8px] text-[#47A4B5] font-bold uppercase tracking-[0.3em] leading-none mt-1 animate-fade-in">
                  Puglia Research Hub
                </span>
              )}
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button 
                key={link.view}
                onClick={() => handleNav(link.view)}
                className={`relative px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 group ${
                  currentView === link.view ? 'text-[#036C42]' : 'text-gray-400 hover:text-[#036C42]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#47A4B5] transition-all duration-300 ${
                  currentView === link.view ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-50 group-hover:scale-100'
                }`}></span>
              </button>
            ))}

            <div className="w-px h-6 bg-gray-200 mx-4"></div>

            <button 
              onClick={() => handleNav('contacts')}
              className={`px-6 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 border ${
                currentView === 'contacts' 
                  ? 'bg-[#036C42] text-white border-[#036C42] shadow-lg shadow-[#036C42]/20' 
                  : 'text-[#036C42] border-[#036C42]/20 hover:border-[#036C42] hover:bg-[#036C42]/5'
              }`}
            >
              Contatti
            </button>
            
            <button 
              onClick={() => handleNav('resources')}
              className="ml-4 px-6 py-3 bg-[#47A4B5] text-white rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-[#036C42] transition-all duration-500 shadow-xl shadow-[#47A4B5]/20 hover:shadow-[#036C42]/20 flex items-center gap-2 group"
            >
              Hub Risorse
              <svg className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-3 rounded-xl transition-all duration-300 ${
                isOpen ? 'bg-[#036C42] text-white' : 'bg-[#036C42]/5 text-[#036C42]'
              }`}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? 'opacity-0 -translate-x-full' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <div className={`fixed inset-0 bg-[#036C42] z-[90] transition-all duration-700 lg:hidden flex flex-col items-center justify-center px-8 text-center ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'
      }`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="space-y-4 w-full">
          {navLinks.map((link, i) => (
            <button 
              key={link.view}
              onClick={() => handleNav(link.view)}
              className="block w-full py-4 text-3xl font-serif font-bold text-white hover:text-[#47A4B5] transition-colors animate-fade-in"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {link.label}
            </button>
          ))}
          <button 
            onClick={() => handleNav('contacts')}
            className="block w-full py-4 text-3xl font-serif font-bold text-white hover:text-[#47A4B5] transition-colors animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Contatti
          </button>
        </div>

        <div className="mt-16 pt-16 border-t border-white/10 w-full animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button 
            onClick={() => handleNav('resources')}
            className="w-full bg-[#47A4B5] text-white py-5 rounded-2xl text-xs font-bold uppercase tracking-[0.3em] shadow-2xl"
          >
            Consulta Hub Tecnico
          </button>
          <div className="mt-12 flex justify-center gap-6">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-[#47A4B5] transition-all cursor-pointer">
              <span className="text-[10px] font-bold">LN</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-[#47A4B5] transition-all cursor-pointer">
              <span className="text-[10px] font-bold">X</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
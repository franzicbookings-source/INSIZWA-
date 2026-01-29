
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Ekhaya' },
    { id: 'about', label: 'Mayelana' },
    { id: 'programs', label: 'Izinhlelo' },
    { id: 'events', label: 'Imicimbi' },
    { id: 'involved', label: 'Bamba Iqhaza' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // Fixed the background to be consistently solid dark (#4A2C2A) to ensure white text is always visible.
    <nav className={`fixed w-full z-50 transition-all duration-500 bg-[#4A2C2A] border-b border-white/5 ${
      scrolled ? 'py-3 shadow-2xl' : 'py-5 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center space-x-3 group text-left"
          >
            <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#4A2C2A] font-black border-2 border-white shadow-lg group-hover:rotate-[360deg] transition-all duration-1000">
              IN
            </div>
            <div className="hidden sm:block">
              <span className="block font-black text-xs md:text-sm text-white tracking-[0.2em] uppercase leading-none">Insizwa Nobunsizwa</span>
              <span className="block text-[9px] text-[#D4AF37] font-bold uppercase tracking-[0.4em] mt-1 opacity-95">Heritage NPO</span>
            </div>
          </button>
          
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative group ${
                  currentPage === link.id ? 'text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#D4AF37] transition-all duration-500 ${
                  currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => handleNav('involved')}
              className="bg-[#D4AF37] text-[#4A2C2A] px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 shadow-xl"
            >
              Support
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors"
              aria-label="Toggle Menu"
            >
              <i className={`fa-solid ${isOpen ? 'fa-xmark' : 'fa-bars-staggered'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-[#4A2C2A] z-40 transition-all duration-700 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#4A2C2A] font-black text-3xl mx-auto mb-4">IN</div>
            <h2 className="text-white font-black text-xl tracking-[0.2em] uppercase">Insizwa Nobunsizwa</h2>
          </div>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-xl font-bold uppercase tracking-[0.4em] ${
                currentPage === link.id ? 'text-[#D4AF37]' : 'text-white/80'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('involved')}
            className="w-full max-w-xs bg-[#D4AF37] text-[#4A2C2A] py-5 rounded-2xl font-black uppercase tracking-widest"
          >
            Donate Securely
          </button>
          <button onClick={() => setIsOpen(false)} className="text-white/30 uppercase text-xs tracking-widest mt-10">
            Close Menu
          </button>
        </div>
      </div>
    </nav>
  );
};

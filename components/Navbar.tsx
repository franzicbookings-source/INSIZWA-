import React, { useState, useEffect } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'events', label: 'Events' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic Styles
  // Default to site background color (#fcfbf7) and primary text color (#4A2C2A) for consistent visibility
  const navContainerStyle = scrolled
    ? 'bg-[#4A2C2A] text-white shadow-lg py-3'
    : 'bg-[#fcfbf7] text-[#4A2C2A] py-6';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navContainerStyle}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNav('home')}
          className="flex items-center gap-2 md:gap-3 cursor-pointer group"
        >
          <img 
            src="https://i.ibb.co/1YFr9Phz/27228-removebg-preview.png" 
            alt="Insizwa Nobunsizwa Logo" 
            className="w-10 h-10 md:w-14 md:h-14 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-serif font-black text-[0.85rem] sm:text-base md:text-xl uppercase tracking-tight sm:tracking-wide leading-none">
              Insizwa Nobunsizwa
            </span>
            <span className="text-[0.55rem] sm:text-[0.65rem] md:text-[0.7rem] text-[#D4AF37] font-bold uppercase tracking-[0.2em] md:tracking-[0.35em] leading-none mt-0.5 md:mt-1">
              Foundation
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-sm font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors ${currentPage === link.id ? 'text-[#D4AF37]' : ''}`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('involved')}
            className="bg-[#D4AF37] text-[#4A2C2A] px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors hover:shadow-lg"
          >
            Get Involved
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#4A2C2A] border-t border-white/10 shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`text-left text-sm font-bold uppercase tracking-widest py-2 hover:text-[#D4AF37] transition-colors ${currentPage === link.id ? 'text-[#D4AF37]' : 'text-white'}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('involved')}
              className="bg-[#D4AF37] text-[#4A2C2A] px-6 py-3 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-white transition-colors text-center"
            >
              Get Involved
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
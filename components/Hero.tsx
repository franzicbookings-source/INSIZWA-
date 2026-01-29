
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[100dvh] flex items-center justify-center overflow-hidden bg-[#4A2C2A]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-full object-cover scale-110 opacity-30 mix-blend-luminosity animate-pulse"
          style={{ animationDuration: '10s' }}
          alt="Zulu Heritage Background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A2C2A]/90 via-[#4A2C2A]/70 to-[#4A2C2A]"></div>
        <div className="zulu-pattern absolute inset-0 opacity-5"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="mb-4 md:mb-6 flex justify-center">
          <span className="flex items-center gap-2 md:gap-4 bg-black/40 backdrop-blur-md px-4 md:px-6 py-1.5 md:py-2 rounded-full border border-white/10">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
            <span className="text-white font-bold text-[8px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.4em]">Phakela Umthakathi Presents</span>
          </span>
        </div>
        
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-white mb-4 md:mb-6 leading-[0.9] md:leading-[0.85] tracking-tighter drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
          RESTORE <br/> 
          <span className="text-[#D4AF37] drop-shadow-[0_10px_30px_rgba(212,175,55,0.4)]">DIGNITY.</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-8 md:mb-12">
          <p className="text-lg md:text-3xl text-[#D4AF37] font-medium italic mb-4 md:mb-6 opacity-100 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            "Vuka Sizwe, Kubuyiswe Ubuntu"
          </p>
          <p className="text-xs md:text-lg text-white font-light leading-relaxed tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)] px-4">
            We are the guardians of Zulu honor. Guiding the next generation of men back to the discipline, 
            respect, and sacred culture that defines our nation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 px-4 sm:px-0">
          <button 
            onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
            className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-[#D4AF37] text-[#4A2C2A] font-black rounded-full hover:bg-white transition-all transform hover:-translate-y-1 shadow-2xl tracking-widest uppercase text-[10px]"
          >
            Enter the Journey
          </button>
          <button className="w-full sm:w-auto px-10 md:px-12 py-4 md:py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black rounded-full hover:bg-white hover:text-[#4A2C2A] transition-all tracking-widest uppercase text-[10px]">
            Our Mission
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-4 opacity-60">
        <span className="text-white text-[8px] md:text-[10px] uppercase tracking-[0.5em] font-bold">Scroll</span>
        <div className="w-px h-12 md:h-16 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
      </div>
    </div>
  );
};

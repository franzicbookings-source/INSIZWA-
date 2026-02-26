
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const heroImages = [
    "https://i.ibb.co/yn89TQLD/1771281355462.jpg",
    "https://i.ibb.co/Z7d8Z53/1771281352095.jpg",
    "https://i.ibb.co/qYkKz7cW/1771281344302.jpg",
    "https://i.ibb.co/LdNqH4R6/1771281335321.jpg",
    "https://i.ibb.co/RGKvM0Qf/1771281126588.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-[#1A0F0E] flex flex-col justify-end md:justify-center">
      {/* Background Slideshow */}
      {heroImages.map((img, index) => (
        <div 
          key={img}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img 
            src={img}
            className="w-full h-full object-cover opacity-60 scale-105"
            alt={`Hero Background ${index + 1}`}
          />
          {/* Mobile-optimized gradients: Stronger at bottom for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#4A2C2A]/60 via-transparent to-[#1A0F0E] md:to-[#1A0F0E]/80"></div>
          <div className="absolute inset-0 bg-black/20 mix-blend-multiply"></div>
        </div>
      ))}

      {/* Decorative Overlay Pattern */}
      <div className="zulu-pattern absolute inset-0 opacity-10 pointer-events-none z-10"></div>

      {/* Content - Centered on Mobile */}
      <div className={`relative z-20 w-full px-6 md:px-12 pb-32 md:pb-0 pt-24 md:pt-20 flex flex-col items-center text-center transition-all duration-1000 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Tagline */}
        <div className="mb-6 md:mb-10 flex items-center justify-center gap-3 md:gap-4">
           <span className="h-[2px] w-8 md:w-12 bg-[#D4AF37]"></span>
           <span className="text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
             Est. 2015 • KwaZulu-Natal
           </span>
           <span className="h-[2px] w-8 md:w-12 bg-[#D4AF37] block"></span>
        </div>
        
        {/* Main Heading - Scaled for Mobile */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white mb-6 md:mb-10 tracking-tighter leading-[1.1] md:leading-[0.85] max-w-5xl drop-shadow-2xl">
          Restoring the <br/> Spirit of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B6F30]">Ubuntu.</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-2xl font-light text-gray-200 max-w-xl md:max-w-2xl mb-8 md:mb-14 leading-relaxed mx-auto px-2">
          "Vuka Sizwe, Kubuyiswe Ubuntu." <br className="hidden md:block"/>
          Guiding young men back to dignity through discipline, culture, and brotherhood.
        </p>

        {/* Buttons - Optimized for Mobile (Compact, Auto width) */}
        <div className="flex flex-row flex-wrap justify-center gap-4 w-full px-4">
           <button 
             onClick={() => document.getElementById('pillars')?.scrollIntoView({ behavior: 'smooth' })}
             className="w-auto px-6 py-4 md:px-8 md:py-5 bg-[#D4AF37] text-[#4A2C2A] rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white transition-all shadow-[0_10px_30px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 md:gap-3 active:scale-95 whitespace-nowrap"
           >
             <span>Our Mission</span>
             <i className="fa-solid fa-arrow-down"></i>
           </button>
           <button 
             onClick={() => document.getElementById('join')?.scrollIntoView({ behavior: 'smooth' })}
             className="w-auto px-6 py-4 md:px-8 md:py-5 bg-white/5 border border-white/20 backdrop-blur-sm text-white rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-[#4A2C2A] transition-all flex items-center justify-center gap-2 md:gap-3 active:scale-95 whitespace-nowrap"
           >
             <span>Join Us</span>
             <i className="fa-solid fa-arrow-right"></i>
           </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/30 hidden md:block">
        <i className="fa-solid fa-chevron-down text-2xl"></i>
      </div>
    </div>
  );
};


import React from 'react';

interface SacredArchiveHomeProps {
  onNavigate: (page: string) => void;
}

export const SacredArchiveHome: React.FC<SacredArchiveHomeProps> = ({ onNavigate }) => {
  const images = [
    { src: "https://i.ibb.co/yn89TQLD/1771281355462.jpg", alt: "Warrior Focus" },
    { src: "https://i.ibb.co/Z7d8Z53/1771281352095.jpg", alt: "Community Gathering" },
    { src: "https://i.ibb.co/Mxrhs2rF/1771281319712.jpg", alt: "Leadership" },
    { src: "https://i.ibb.co/LdNqH4R6/1771281335321.jpg", alt: "Sacred Attire" },
    { src: "https://i.ibb.co/RGKvM0Qf/1771281126588.jpg", alt: "Young Generation" },
    { src: "https://i.ibb.co/qYkKz7cW/1771281344302.jpg", alt: "Cultural Dance" }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#1A0F0E] relative overflow-hidden">
      {/* Texture Background */}
      <div className="zulu-pattern absolute inset-0 opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-8 md:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16 reveal">
          <h2 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.4em] mb-4 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            Umlando Obonakalayo
            <span className="h-px w-8 bg-[#D4AF37]"></span>
          </h2>
          <h3 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-6 tracking-tighter">The Sacred Archive.</h3>
          <p className="text-white/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed px-2">
            A visual testament to the spirit of the Zulu nation. Witness the discipline, the unity, and the raw beauty of our heritage in motion.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8 mb-16 md:mb-16">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className="break-inside-avoid relative group rounded-3xl overflow-hidden cursor-pointer reveal shadow-2xl"
              onClick={() => onNavigate('events')}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-105" 
              />
              
              {/* Overlay Gradient - Minimal for hover effect */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon */}
              <div className="absolute top-6 right-6 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#D4AF37] hover:text-[#1A0F0E]">
                <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="text-center reveal">
           <button 
             onClick={() => onNavigate('events')}
             className="group relative inline-flex items-center gap-3 md:gap-4 px-6 md:px-10 py-5 overflow-hidden rounded-full bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-[#1A0F0E] transition-colors duration-300"
           >
             <span className="relative z-10">Explore Full Collection</span>
             <i className="fa-solid fa-images relative z-10"></i>
             <div className="absolute inset-0 bg-[#D4AF37] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
           </button>
        </div>
      </div>
    </section>
  );
};

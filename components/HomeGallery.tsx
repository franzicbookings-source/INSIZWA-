import React from 'react';

interface HomeGalleryProps {
  onNavigate: (page: string) => void;
}

export const HomeGallery: React.FC<HomeGalleryProps> = ({ onNavigate }) => {
  const images = [
    {
      id: 1,
      url: 'https://i.ibb.co/yn89TQLD/1771281355462.jpg',
      title: 'Warrior Spirit',
      category: 'Umgangela',
      className: 'md:col-span-2 md:row-span-2'
    },
    {
      id: 2,
      url: 'https://i.ibb.co/Z7d8Z53/1771281352095.jpg',
      title: 'The Gathering',
      category: 'Community',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 3,
      url: 'https://i.ibb.co/qYkKz7cW/1771281344302.jpg',
      title: 'Ancestral Rhythm',
      category: 'Culture',
      className: 'md:col-span-1 md:row-span-1'
    },
    {
      id: 4,
      url: 'https://i.ibb.co/LdNqH4R6/1771281335321.jpg',
      title: 'Sacred Attire',
      category: 'Heritage',
      className: 'md:col-span-2 md:row-span-1'
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-[#1A0F0E] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="zulu-pattern absolute inset-0 opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 reveal">
          <div>
            <h2 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-3">
               <span className="w-8 h-px bg-[#D4AF37]"></span>
               Igalari Yethu
            </h2>
            <h3 className="text-4xl md:text-7xl font-black tracking-tighter">
              Captured <span className="text-[#D4AF37]">Moments.</span>
            </h3>
          </div>
          <button 
            onClick={() => onNavigate('events')}
            className="group hidden md:flex items-center gap-3 text-white font-black uppercase text-[10px] tracking-[0.3em] hover:text-[#D4AF37] transition-colors"
          >
            View Full Archive
            <i className="fa-solid fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
          </button>
        </div>

        {/* Carousel / Grid Container */}
        {/* Mobile: Horizontal scroll with snap. Desktop: Grid */}
        <div className="
          flex md:grid 
          overflow-x-auto md:overflow-visible 
          snap-x snap-mandatory md:snap-none 
          gap-4 md:gap-6 
          -mx-6 px-6 md:mx-0 md:px-0 
          pb-8 md:pb-0
          md:grid-cols-4 md:grid-rows-2 md:h-[600px]
          scrollbar-hide
        ">
          {images.map((img, idx) => (
            <div 
              key={img.id} 
              className={`
                relative group overflow-hidden 
                rounded-[2rem] border-4 border-white/5 shadow-2xl reveal 
                flex-shrink-0 w-[85vw] md:w-auto h-[400px] md:h-auto 
                snap-center md:snap-align-none
                ${img.className}
              `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-[#D4AF37] text-[8px] font-black uppercase tracking-widest mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{img.category}</span>
                <h4 className="text-xl md:text-3xl font-black text-white">{img.title}</h4>
              </div>

              {/* Hover Overlay Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D4AF37]/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <i className="fa-solid fa-eye text-[#4A2C2A] text-lg md:text-xl"></i>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Swipe Hint (Visual Indicator for Mobile) */}
        <div className="md:hidden flex justify-center gap-2 mb-8 opacity-50">
           {images.map((_, idx) => (
              <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white"></div>
           ))}
        </div>

        {/* Mobile Call to Action */}
        <div className="mt-4 md:hidden text-center">
            <button 
                onClick={() => onNavigate('events')}
                className="w-full py-4 border border-[#D4AF37] rounded-full text-[#D4AF37] text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#1A0F0E] transition-all flex items-center justify-center gap-3"
            >
                Enter The Archive
                <i className="fa-solid fa-arrow-right"></i>
            </button>
        </div>
      </div>

      {/* Styles to hide scrollbar */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

import React, { useState } from 'react';

export const HomeVideo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Text Content */}
          <div className="reveal-left order-2 lg:order-1">
             <div className="flex items-center gap-4 mb-6 md:mb-6">
                <span className="h-px w-8 bg-[#D4AF37]"></span>
                <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em]">iBhunga Boys Boot Camp</span>
             </div>
             <h2 className="text-4xl md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-tight">
               Defining the <br/> <span className="text-[#D4AF37]">Modern Man.</span>
             </h2>
             <p className="text-white/80 text-lg md:text-xl font-bold leading-relaxed mb-6 italic">
               "Indoda ayizalwa, iyakhiwa." — A man is not born, he is built.
             </p>
             <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8 md:mb-10">
               We challenge young boys to rise above the noise. Through the <strong>iBhunga Boys Boot Camp</strong>, we teach them to "man up"—not with aggression, but with accountability. It is a journey of stripping away the boy to reveal the protector, the provider, and the leader within.
             </p>
             
             <div className="flex flex-wrap gap-4">
               <button onClick={() => document.getElementById('join')?.scrollIntoView({behavior: 'smooth'})} className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest border-b border-[#D4AF37] pb-1 hover:text-white hover:border-white transition-all">
                  Join The Brotherhood
               </button>
             </div>
          </div>

          {/* Video Player */}
          <div className="reveal-right order-1 lg:order-2">
             <div className="rounded-2xl md:rounded-[3rem] overflow-hidden shadow-2xl border-2 md:border-4 border-white/5 bg-black relative h-full group">
                <div style={{ position: 'relative', width: '100%', height: '0px', paddingBottom: '56.447%' }}>
                    {!isPlaying ? (
                        <div 
                           className="absolute inset-0 z-10 cursor-pointer bg-black/80 hover:bg-black/70 transition-colors duration-500"
                           onClick={() => setIsPlaying(true)}
                        >
                            {/* Play Button Overlay - Smaller on mobile as requested */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 md:w-20 md:h-20 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] transform group-hover:scale-110 transition-transform duration-300">
                                    <i className="fa-solid fa-play text-[#4A2C2A] text-sm md:text-3xl ml-0.5 md:ml-1"></i>
                                </div>
                            </div>
                            
                            {/* Label */}
                            <div className="absolute bottom-6 md:bottom-8 left-0 right-0 text-center">
                                <span className="text-white font-bold text-[10px] md:text-xs uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">Watch the Journey</span>
                            </div>
                        </div>
                    ) : (
                        <iframe 
                            allow="fullscreen; autoplay" 
                            allowFullScreen 
                            height="100%" 
                            src="https://streamable.com/e/8grm9m?autoplay=1" 
                            width="100%" 
                            style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
                        ></iframe>
                    )}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};


import React from 'react';

export const Founder: React.FC = () => {
  return (
    <section className="py-12 md:py-32 bg-white border-b border-[#4A2C2A]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-24">
          <div className="lg:w-1/2 relative w-full mb-8 lg:mb-0 reveal-left">
            <div className="absolute -inset-6 md:-inset-10 bg-[#D4AF37]/10 rounded-full blur-[60px] md:blur-[100px]"></div>
            <div className="relative z-10 border-4 md:border-8 border-white shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden transition-all duration-1000">
              <img 
                src="https://i.ibb.co/Mxrhs2rF/1771281319712.jpg" 
                alt="Phakela Umthakathi - Founder" 
                className="w-full h-auto aspect-[3/4] md:h-[700px] md:aspect-auto object-cover object-top transition-all duration-1000"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4A2C2A] to-transparent p-6 md:p-12 pt-20">
                 <h3 className="text-white text-3xl md:text-5xl font-black mb-1 md:mb-2 tracking-tighter">Phakela Umthakathi</h3>
                 <p className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[10px] md:text-sm">Founder</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 reveal-right">
            <h2 className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em] mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
              <span className="h-px w-6 md:w-8 bg-[#D4AF37]"></span>
              Meet The Founder
            </h2>
            <h3 className="text-3xl md:text-7xl font-black text-[#4A2C2A] mb-6 md:mb-8 leading-tight tracking-tighter">Guardian of <br/> <span className="text-[#D4AF37]">Zulu Honor.</span></h3>
            <div className="space-y-4 md:space-y-6 text-gray-500 text-sm md:text-xl leading-relaxed font-light">
              <p>
                <span className="font-bold text-[#4A2C2A]">Phakela Umthakathi</span> is a visionary strategist dedicated to the restoration of Zulu heritage.
              </p>
              <p>
                He recognized that crime and addiction could only be solved by returning to cultural values and disciplined living. His journey began in the vibrant yet challenged streets of Umlazi, where he first saw the need for a new breed of warriors.
              </p>
              <p>
                Today, he stands as a bridge between the ancient wisdom of the kings and the aspirations of the modern youth, teaching that the greatest battle is the one fought within oneself.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

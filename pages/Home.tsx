
import React from 'react';
import { Hero } from '../components/Hero';
import { Programs } from '../components/Programs';
import { GetInvolved } from '../components/GetInvolved';
import { Founder } from '../components/Founder';
import { SacredArchiveHome } from '../components/SacredArchiveHome';
import { HomeVideo } from '../components/HomeVideo';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#fcfbf7] min-h-screen overflow-x-hidden">
      <Hero />
      
      {/* SECTION 1: THE MANIFESTO & FILM (Unified Dark Section) */}
      <div className="bg-[#1A0F0E] text-white rounded-b-[2rem] md:rounded-b-[5rem] relative z-20 shadow-2xl pb-12 md:pb-20">
         <div className="zulu-pattern absolute inset-0 opacity-5 pointer-events-none"></div>
         
         {/* Introduction / Manifesto */}
         <section className="pt-20 md:pt-32 pb-8 md:pb-8 px-6 md:px-6 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-4 mb-6 md:mb-8 opacity-80 reveal-up">
               <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37]"></span>
               <h2 className="text-[#D4AF37] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] whitespace-nowrap">The Manifesto</h2>
               <span className="w-8 md:w-12 h-[1px] bg-[#D4AF37]"></span>
            </div>
            <h3 className="text-3xl md:text-6xl font-black mb-8 md:mb-10 leading-[1.1] reveal-scale delay-100 px-2">
              More Than An Organization,<br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F5E6D3]">It Is A Brotherhood.</span>
            </h3>
            <p className="text-white/60 text-base md:text-xl leading-relaxed font-light px-2 md:px-4 reveal-up delay-200">
              Phakela Umthakathi saw a generation drifting away. The stick fighting (Umgangela) is not violence—it is a conversation of respect, a dance of discipline that has turned boys into honorable men for centuries.
            </p>
         </section>

         {/* Video Component - Now blends seamlessly */}
         <HomeVideo />
      </div>

      {/* SECTION 2: THE FOUNDER (White - overlapping slightly) */}
      <div className="relative z-10 -mt-12 pt-12">
         <Founder />
      </div>

      {/* SECTION 3: THE THREE SHIELDS (Pillars) - Redesigned Clean Layout */}
      <section id="pillars" className="py-16 md:py-32 bg-[#fcfbf7]">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
               {/* Left: Title & Context */}
               <div className="lg:col-span-5 lg:sticky lg:top-32 reveal-left">
                  <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Izinsika Zethu</span>
                  <h3 className="text-3xl md:text-6xl font-black text-[#4A2C2A] mb-6 md:mb-8 leading-none tracking-tight">
                    The Three <br/> Shields.
                  </h3>
                  <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8 font-light">
                     Our philosophy rests on three immutable pillars. Like the legs of a Zulu cooking pot, if one breaks, the whole structure falls. We build men who are balanced, grounded, and strong.
                  </p>
                  <div className="h-1 w-24 bg-[#D4AF37]"></div>
               </div>

               {/* Right: The List (Staggered Animation) */}
               <div className="lg:col-span-7 space-y-8 md:space-y-12">
                  {[
                     { 
                       id: '01', 
                       icon: 'fa-drum', 
                       zulu: 'Isiko', 
                       eng: 'Culture', 
                       desc: 'Reviving the sacred roots of Zulu identity through ritual, song, and ancestral knowledge. Knowing where you come from is the only way to know where you are going.' 
                     },
                     { 
                       id: '02', 
                       icon: 'fa-shield-halved', 
                       zulu: 'Ukuzikhuza', 
                       eng: 'Discipline', 
                       desc: 'Mastery of self-control through Umgangela stick fighting and mental fortitude. It teaches us that true strength is not in aggression, but in restraint.' 
                     },
                     { 
                       id: '03', 
                       icon: 'fa-hand-fist', 
                       zulu: 'Ubumbano', 
                       eng: 'Brotherhood', 
                       desc: 'Forging an unbreakable chain of unity that protects our communities from within. We stand together, we fall together, we rise together.' 
                     }
                  ].map((item, idx) => (
                     <div 
                        key={item.id} 
                        className={`flex flex-col sm:flex-row gap-6 border-b border-[#4A2C2A]/10 pb-8 md:pb-12 last:border-0 last:pb-0 group reveal-up`}
                        style={{ transitionDelay: `${idx * 150}ms` }}
                     >
                        <div className="flex-shrink-0">
                           <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#fcfbf7] border border-[#4A2C2A]/10 flex items-center justify-center text-[#4A2C2A] text-xl md:text-2xl group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] transition-colors duration-500 shadow-sm group-hover:shadow-md group-hover:scale-110 transform transition-transform">
                              <i className={`fa-solid ${item.icon}`}></i>
                           </div>
                        </div>
                        <div>
                           <div className="flex items-baseline gap-3 mb-2">
                              <h4 className="text-xl md:text-2xl font-black text-[#4A2C2A]">{item.eng}</h4>
                              <span className="text-[#D4AF37] font-bold text-[10px] md:text-xs uppercase tracking-widest">{item.zulu}</span>
                           </div>
                           <p className="text-gray-600 text-sm md:text-base leading-relaxed font-light">{item.desc}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* SECTION 4: PROGRAMS (Seamless transition) */}
      <section className="bg-white py-16 md:py-32 border-t border-gray-100">
         <Programs />
      </section>

      {/* SECTION 5: ARCHIVE (Dark Section) */}
      <SacredArchiveHome onNavigate={onNavigate} />

      {/* SECTION 6: GET INVOLVED (Final White Section) */}
      <section id="join" className="bg-white">
         <GetInvolved />
      </section>
    </div>
  );
};

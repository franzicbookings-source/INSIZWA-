
import React from 'react';
import { Hero } from '../components/Hero';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="page-transition overflow-x-hidden">
      <Hero />
      
      {/* Ceremonial Slogan */}
      <section className="bg-[#4A2C2A] py-12 md:py-24 border-y-4 md:border-y-8 border-[#D4AF37] reveal">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-2xl md:text-7xl font-black italic tracking-tighter leading-tight md:leading-none mb-4 md:mb-6">
            "Isibindi neNhlonipho: <br className="hidden md:block" /> Indlela yamaQhawe"
          </h2>
          <div className="flex items-center justify-center gap-4 md:gap-6">
            <div className="h-px w-8 md:w-32 bg-[#D4AF37]/30"></div>
            <p className="text-[#D4AF37] text-[10px] md:text-sm uppercase tracking-[0.3em] md:tracking-[0.5em] font-black">
              Courage & Respect: The Way of Heroes
            </p>
            <div className="h-px w-8 md:w-32 bg-[#D4AF37]/30"></div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 md:py-40 bg-white relative">
        <div className="zulu-pattern absolute inset-0 opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-20">
            {[
              { 
                title: 'Culture', 
                icon: 'fa-drum', 
                zulu: 'Isiko',
                text: 'Reviving the sacred roots of Zulu identity through ritual and knowledge.' 
              },
              { 
                title: 'Discipline', 
                icon: 'fa-shield-halved', 
                zulu: 'Ukuzikhuza',
                text: 'Mastery of self-control, mental fortitude, and unwavering respect.' 
              },
              { 
                title: 'Brotherhood', 
                icon: 'fa-user-group', 
                zulu: 'Ubumbano',
                text: 'Forging an unbreakable chain of unity that protects our communities.' 
              }
            ].map((pillar, idx) => (
              <div 
                key={pillar.title} 
                className="relative group pt-8 md:pt-10 reveal"
                style={{ transitionDelay: `${idx * 200}ms` }}
              >
                <div className="absolute top-0 left-0 text-7xl md:text-9xl font-black text-[#4A2C2A]/5 select-none -translate-x-4 md:-translate-x-6">0{idx + 1}</div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4A2C2A] text-[#D4AF37] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-2xl group-hover:bg-[#D4AF37] group-hover:text-[#4A2C2A] transition-all duration-500">
                    <i className={`fa-solid ${pillar.icon} text-xl md:text-2xl`}></i>
                  </div>
                  <h3 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-2">{pillar.zulu}</h3>
                  <h4 className="text-2xl md:text-3xl font-black text-[#4A2C2A] mb-4 md:mb-6 uppercase tracking-tighter">{pillar.title}</h4>
                  <p className="text-gray-500 font-light leading-relaxed text-base md:text-lg">{pillar.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Preview */}
      <section className="bg-[#fcfbf7] py-16 md:py-40 border-t border-[#4A2C2A]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-32">
            <div className="lg:w-1/2 order-2 lg:order-1 reveal-left">
              <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.5em] block mb-4 md:mb-6">Umlando / Our Story</span>
              <h3 className="text-4xl md:text-8xl font-black text-[#4A2C2A] mb-6 md:mb-8 leading-[0.9] tracking-tighter">A Spark <br className="hidden md:block" /> Of Vision.</h3>
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8 md:mb-10 border-l-4 border-[#D4AF37] pl-6 md:pl-8 py-2 md:py-4">
                Phakela Umthakathi realized that the solution to our modern social ills wasn't in policing alone, but in cultural re-awakening. He sought to bring back the "Essence of Manhood" through traditional discipline.
              </p>
              <button 
                onClick={() => onNavigate('about')}
                className="group flex items-center gap-4 md:gap-6 text-[#4A2C2A] font-black uppercase text-[10px] tracking-[0.3em] hover:text-[#D4AF37] transition-all"
              >
                Explore history
                <div className="w-8 md:w-12 h-px bg-[#4A2C2A] group-hover:w-12 md:group-hover:w-20 group-hover:bg-[#D4AF37] transition-all"></div>
              </button>
            </div>
            <div className="lg:w-1/2 relative order-1 lg:order-2 w-full reveal-right">
               <div className="absolute -inset-6 md:-inset-10 bg-[#D4AF37]/10 rounded-full blur-[60px] md:blur-[100px]"></div>
               <div className="relative border-[0.5rem] md:border-[1rem] border-white shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-all duration-1000">
                  <img 
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1000" 
                    className="w-full h-[300px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    alt="Zulu Heritage"
                  />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight */}
      <section className="py-16 md:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#4A2C2A] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden relative shadow-2xl reveal">
            <div className="zulu-pattern absolute inset-0 opacity-10"></div>
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 md:p-24 relative z-10">
                <h3 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.6em] mb-4 md:mb-6">The Architect</h3>
                <h4 className="text-4xl md:text-8xl font-black text-white mb-6 md:mb-8 leading-none tracking-tighter">Phakela <br/> Umthakathi</h4>
                <p className="text-lg md:text-xl text-white/60 italic mb-8 md:mb-12 font-light leading-relaxed">
                  "Sifuna ukwakha isizukulwane esisha sezinsizwa ezihloniphayo, ezinesibindi, nezingakhohlwa lapho zivela khona."
                </p>
                <button 
                  onClick={() => onNavigate('about')}
                  className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-[#4A2C2A] font-black rounded-full uppercase tracking-widest text-[10px] hover:bg-[#D4AF37] transition-all"
                >
                  Read Bio
                </button>
              </div>
              <div className="lg:w-1/2 min-h-[300px] md:min-h-[500px] relative reveal-right">
                 <img 
                  src="https://images.unsplash.com/photo-1547039986-77e810a9967e?q=80&w=2070" 
                  className="absolute inset-0 w-full h-full object-cover grayscale"
                  alt="Traditional Zulu Leader"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A] via-[#4A2C2A]/20 to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-16 md:py-40 bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-24 reveal">
            <h3 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.6em] mb-4">Izinhlelo / Programs</h3>
            <h4 className="text-3xl md:text-7xl font-black text-[#4A2C2A] tracking-tighter">Forging Resilience.</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Tournaments', zulu: 'Umgangela', img: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1000' },
              { title: 'Mentorship', zulu: 'Isikhungo', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000' },
              { title: 'Education', zulu: 'Ukuvuselela', img: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1000' }
            ].map((p, idx) => (
              <div 
                key={p.title} 
                className="group cursor-pointer reveal" 
                onClick={() => onNavigate('programs')}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl mb-4 md:mb-8">
                  <img src={p.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={p.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A] via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 right-8">
                    <span className="text-[#D4AF37] text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] block mb-1 md:mb-2">{p.zulu}</span>
                    <h5 className="text-xl md:text-3xl font-black tracking-tighter uppercase text-white">{p.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Involved CTA */}
      <section className="py-16 md:py-40 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#fcfbf7] border-2 md:border-4 border-[#4A2C2A]/5 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-32 text-center relative overflow-hidden reveal">
            <div className="zulu-pattern absolute inset-0 opacity-5"></div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h4 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.6em] md:tracking-[0.8em] mb-4 md:mb-6">Bamba Iqhaza / Participate</h4>
              <h5 className="text-3xl md:text-8xl font-black text-[#4A2C2A] mb-6 md:mb-10 tracking-tighter leading-tight md:leading-none">Protect <br className="hidden md:block"/> Our Legacy.</h5>
              <p className="text-base md:text-2xl text-gray-500 font-light mb-8 md:mb-12 leading-relaxed">
                Your support enables us to provide safe environments for cultural restoration and direct mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => onNavigate('involved')}
                  className="w-full sm:w-auto px-10 md:px-16 py-4 md:py-6 bg-[#4A2C2A] text-white font-black rounded-full uppercase tracking-[0.2em] text-[10px] hover:bg-[#D4AF37] hover:text-[#4A2C2A] transition-all shadow-xl"
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


import React from 'react';

export const AboutPage: React.FC = () => {
  const values = [
    { title: 'Respect', zulu: 'Hlonipha', text: 'Honoring those before us.' },
    { title: 'Courage', zulu: 'Isibindi', text: 'Bravery over destruction.' },
    { title: 'Dignity', zulu: 'Isithunzi', text: 'Restoring Zulu honor.' },
    { title: 'Truth', zulu: 'Iqiniso', text: 'Living with integrity.' }
  ];

  return (
    <div className="bg-white page-transition overflow-x-hidden">
      {/* Header */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-16 bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto px-6 reveal">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-[#4A2C2A] tracking-tighter leading-none mb-4 md:mb-6">
            UMLANDO <span className="text-[#D4AF37]">WETHU.</span>
          </h1>
          <div className="h-px w-16 md:w-24 bg-[#D4AF37] mb-4 md:mb-6"></div>
          <p className="text-gray-400 text-[8px] md:text-xs uppercase tracking-[0.4em] md:tracking-[0.6em] font-black">Our Story & Heritage</p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-12 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
            <div className="lg:w-1/2 relative w-full mb-8 lg:mb-0 reveal-left">
              <div className="absolute -inset-6 md:-inset-10 bg-[#D4AF37]/10 rounded-full blur-[60px] md:blur-[100px]"></div>
              <div className="relative z-10 border-4 md:border-8 border-white shadow-2xl rounded-[2rem] md:rounded-[3rem] overflow-hidden rotate-2 hover:rotate-0 transition-transform duration-1000">
                <img 
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop" 
                  alt="Founder" 
                  className="w-full h-[350px] md:h-[700px] object-cover grayscale"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#4A2C2A] to-transparent p-6 md:p-12 pt-20">
                   <h3 className="text-white text-2xl md:text-5xl font-black mb-1 md:mb-2 tracking-tighter">Phakela Umthakathi</h3>
                   <p className="text-[#D4AF37] font-bold uppercase tracking-[0.3em] text-[8px] md:text-sm">Founder</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 reveal-right">
              <h2 className="text-[10px] font-black text-[#D4AF37] uppercase tracking-[0.4em] mb-4 md:mb-6 flex items-center gap-2 md:gap-4">
                <span className="h-px w-6 md:w-8 bg-[#D4AF37]"></span>
                Meet The Founder
              </h2>
              <h3 className="text-3xl md:text-7xl font-black text-[#4A2C2A] mb-6 md:mb-8 leading-tight tracking-tighter">Guardian of <br/> <span className="text-[#D4AF37]">Zulu Honor.</span></h3>
              <div className="space-y-4 md:space-y-6 text-gray-500 text-base md:text-xl leading-relaxed font-light">
                <p>
                  <span className="font-bold text-[#4A2C2A]">Phakela Umthakathi</span> is a visionary strategist dedicated to the restoration of Zulu heritage.
                </p>
                <p>
                  He recognized that crime and addiction could only be solved by returning to cultural values and disciplined living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-48 bg-[#4A2C2A] text-white relative">
        <div className="zulu-pattern absolute inset-0 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32">
            <div className="reveal-left">
              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-[#D4AF37] rounded-2xl flex items-center justify-center text-[#4A2C2A] text-2xl md:text-3xl shadow-xl">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <div>
                  <h4 className="text-[#D4AF37] font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-1">Umsebenzi</h4>
                  <h5 className="text-2xl md:text-5xl font-black tracking-tighter uppercase">Mission.</h5>
                </div>
              </div>
              <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed border-l-4 border-[#D4AF37] pl-6 md:pl-8">
                To reclaim the dignity of the Zulu man by restoring cultural discipline and fostering brotherhood.
              </p>
            </div>
            <div className="reveal-right">
              <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-8">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center text-[#D4AF37] text-2xl md:text-3xl border border-white/10">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <div>
                  <h4 className="text-[#D4AF37] font-black text-[8px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.6em] mb-1">Umbono</h4>
                  <h5 className="text-2xl md:text-5xl font-black tracking-tighter uppercase">Vision.</h5>
                </div>
              </div>
              <p className="text-lg md:text-2xl text-white/70 font-light leading-relaxed border-l-4 border-white/20 pl-6 md:pl-8">
                A generation of men who serve as the unbreakable shields of their families and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 md:py-48 bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20 reveal">
            <h3 className="text-3xl md:text-8xl font-black text-[#4A2C2A] tracking-tighter">Pillars of Honor.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((v, idx) => (
              <div 
                key={v.zulu} 
                className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-[#4A2C2A]/5 hover:border-[#D4AF37] transition-all group reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4A2C2A] text-[#D4AF37] rounded-xl md:rounded-2xl flex items-center justify-center mb-6 md:mb-8 shadow-xl">
                  <i className="fa-solid fa-shield-halved text-lg"></i>
                </div>
                <h4 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-widest mb-1">{v.zulu}</h4>
                <h5 className="text-2xl font-black text-[#4A2C2A] mb-2 tracking-tight">{v.title}</h5>
                <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

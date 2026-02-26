
import React from 'react';
import { Founder } from '../components/Founder';

export const AboutPage: React.FC = () => {
  const values = [
    { title: 'Respect', zulu: 'Hlonipha', icon: 'fa-hands-praying', text: 'Honoring those before us.' },
    { title: 'Courage', zulu: 'Isibindi', icon: 'fa-fire', text: 'Bravery over destruction.' },
    { title: 'Dignity', zulu: 'Isithunzi', icon: 'fa-user-shield', text: 'Restoring Zulu honor.' },
    { title: 'Truth', zulu: 'Iqiniso', icon: 'fa-scale-balanced', text: 'Living with integrity.' }
  ];

  const milestones = [
    {
      year: '2014',
      title: 'Cultural Roots',
      zulu: 'Izimpande Zamasiko',
      description: 'Before formal registration, Phakela Umthakathi was already a prominent figure in the Zulu cultural scene, participating in traditional events like Bhejane vs Phakel’umthakathi.'
    },
    {
      year: '2019',
      title: 'The University of Ubunsizwa',
      zulu: 'Isikhungo Sobunsizwa',
      description: 'The foundation gained significant public visibility, leveraging social media to promote the need for traditional mentorship and establishing the "University of Ubunsizwa" concept.'
    },
    {
      year: '2021',
      title: 'Expansion of the Shield',
      zulu: 'Ukwanda Kwesihlangu',
      description: 'Annual events expanded significantly, with the launch of the Ubhedu Indigenous and Cultural Festival and the seasonal iBhunga Boys Boot Camp drawing participants nationwide.'
    },
    {
      year: '2025',
      title: 'A Living Institution',
      zulu: 'Isikhungo Esiphilayo',
      description: 'Running registered educational programs with official inductions. Phakela Umthakathi remains a leading voice on platforms like Ukhozi FM, championing the cultural mission.'
    }
  ];

  return (
    <div className="bg-[#fcfbf7] page-transition overflow-x-hidden min-h-screen">
      
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-6 max-w-7xl mx-auto text-center">
        <div className="reveal">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 md:w-12 h-px bg-[#4A2C2A]/20"></span>
            <span className="text-[#D4AF37] text-[10px] md:text-xs uppercase tracking-[0.4em] font-black whitespace-nowrap">Our Story & Heritage</span>
            <span className="w-8 md:w-12 h-px bg-[#4A2C2A]/20"></span>
          </div>
          <h1 className="text-4xl sm:text-7xl md:text-[10rem] font-black text-[#4A2C2A] tracking-tighter leading-[0.9] md:leading-[0.85] mb-8 break-words">
            UMLANDO <br/> <span className="text-[#D4AF37]">WETHU.</span>
          </h1>
        </div>
      </section>

      {/* Founder Section */}
      <div className="relative z-10">
         <Founder />
      </div>

      {/* NEW DARK TIMELINE SECTION */}
      <section className="py-20 md:py-48 bg-[#1A0F0E] text-white relative rounded-t-[2rem] md:rounded-t-[5rem] -mt-12 z-20 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="zulu-pattern absolute inset-0 opacity-5 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-6 relative z-10">
          <div className="text-center mb-16 md:mb-40 reveal-up">
            <h3 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.8em] mb-4 md:mb-6">Umlando weSisekelo</h3>
            <h4 className="text-3xl md:text-8xl font-black text-white tracking-tighter">The Sacred Timeline.</h4>
          </div>

          <div className="relative">
            {/* The Vertical Thread */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4AF37] via-white/20 to-transparent reveal-scale"></div>

            <div className="space-y-16 md:space-y-48">
              {milestones.map((m, idx) => (
                <div key={m.year} className={`flex flex-col md:flex-row items-start md:items-center justify-center gap-8 md:gap-24 relative pl-12 md:pl-0 group`}>
                  
                  {/* Content */}
                  <div className={`w-full md:w-[45%] ${idx % 2 === 0 ? 'md:text-right md:order-1' : 'md:text-left md:order-3'} text-left reveal-up`}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B6F30] text-5xl md:text-9xl font-black leading-none mb-3 md:mb-4 block tracking-tighter opacity-30 group-hover:opacity-100 transition-opacity duration-500">{m.year}</span>
                    <h5 className="text-[#D4AF37] font-black text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3">{m.zulu}</h5>
                    <h6 className="text-2xl md:text-5xl font-black text-white mb-4 md:mb-6 tracking-tight leading-none break-words">{m.title}</h6>
                    <p className="text-white/50 font-light text-base md:text-xl leading-relaxed max-w-md md:ml-auto md:mr-0 group-hover:text-white/80 transition-colors">
                      {m.description}
                    </p>
                  </div>

                  {/* Node */}
                  <div className="absolute left-[0.65rem] md:left-auto md:relative z-10 md:order-2 reveal-scale mt-3 md:mt-0">
                    <div className="w-4 h-4 md:w-8 md:h-8 bg-[#1A0F0E] rounded-full border-4 border-[#D4AF37] shadow-[0_0_30px_rgba(212,175,55,0.6)] group-hover:scale-125 transition-transform duration-300"></div>
                  </div>

                  {/* Spacer */}
                  <div className={`hidden md:block w-[45%] ${idx % 2 === 0 ? 'order-3' : 'order-1'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Panel (Optimized for Mobile) */}
      <section className="bg-white">
          <div className="grid md:grid-cols-2">
             <div className="bg-[#fcfbf7] p-8 py-12 md:p-32 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#4A2C2A]/10 reveal-left">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#4A2C2A] text-[#D4AF37] rounded-full flex items-center justify-center text-xl md:text-3xl mb-6 md:mb-8">
                   <i className="fa-solid fa-bullseye"></i>
                </div>
                <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-3 md:mb-4">Umsebenzi / Mission</span>
                <p className="text-[#4A2C2A] text-xl md:text-4xl font-black leading-tight">
                   To reclaim the dignity of the Zulu man by restoring cultural discipline and fostering brotherhood.
                </p>
             </div>
             <div className="bg-white p-8 py-12 md:p-32 flex flex-col justify-center reveal-right">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D4AF37] text-[#4A2C2A] rounded-full flex items-center justify-center text-xl md:text-3xl mb-6 md:mb-8">
                   <i className="fa-solid fa-eye"></i>
                </div>
                <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-3 md:mb-4">Umbono / Vision</span>
                <p className="text-[#4A2C2A] text-xl md:text-4xl font-black leading-tight">
                   A generation of men who serve as the unbreakable shields of their families and communities.
                </p>
             </div>
          </div>
      </section>

      {/* Values Grid - Masonry style */}
      <section className="py-20 md:py-40 bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 md:mb-20 reveal-up">
            <h3 className="text-3xl md:text-7xl font-black text-[#4A2C2A] tracking-tighter">Pillars of Honor.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <div 
                key={v.zulu} 
                className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 group reveal-up border border-[#4A2C2A]/5 hover:border-[#D4AF37]"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <i className={`fa-solid ${v.icon} text-3xl md:text-4xl text-[#D4AF37] mb-6 md:mb-8 group-hover:scale-110 transition-transform block`}></i>
                <h4 className="text-[#4A2C2A]/40 font-black text-[10px] uppercase tracking-widest mb-2 break-words">{v.zulu}</h4>
                <h5 className="text-lg md:text-2xl font-black text-[#4A2C2A] mb-3 md:mb-4 tracking-tight break-words">{v.title}</h5>
                <p className="text-gray-500 font-light text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

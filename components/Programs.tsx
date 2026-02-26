
import React from 'react';
import { Program } from '../types';

export const Programs: React.FC = () => {
  const programs: Program[] = [
    {
      title: 'iBhunga Boys Boot Camp',
      zuluTitle: 'Ibhunga Labafana',
      description: 'A mentorship initiative for young boys, guiding them through the transition to manhood with discipline and respect.',
      icon: 'fa-campground',
      impactMetric: '500+ Young Men Mentored'
    },
    {
      title: 'Insizwa Nobunsizwa Foundation',
      zuluTitle: 'Isisekelo Sentuthuko',
      description: 'An umbrella organization focused on developing young men into responsible pillars of their community.',
      icon: 'fa-hand-holding-hand',
      impactMetric: 'Active Across KZN'
    },
    {
      title: 'Cultural & Heritage Festivals',
      zuluTitle: 'Imikhosi Yamasiko',
      description: 'Promotion of Ubhedu (traditional Zulu attire) and indigenous culture, such as the Ubhedu Indigenous and Cultural Festival.',
      icon: 'fa-drum',
      impactMetric: '2,000+ Annual Attendees'
    },
    {
      title: 'University of Ubunsizwa',
      zuluTitle: 'Imfundo Yobunsizwa',
      description: 'The Phakel\'umthakathi educational approach to teaching young men about Zulu culture, tradition, and manhood.',
      icon: 'fa-graduation-cap',
      impactMetric: 'Weekly Cultural Classes'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
        <div className="max-w-2xl reveal-left">
          <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Izinhlelo Zethu</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#4A2C2A] mb-4 leading-tight">Restoring Culture, <br/> Rebuilding Lives.</h2>
          <p className="text-gray-500 font-light text-base md:text-lg">
             We combine physical training with emotional intelligence and cultural wisdom to provide a holistic approach to manhood.
          </p>
        </div>
        <div className="hidden md:block pb-2 reveal-right">
           <div className="h-px w-32 bg-[#D4AF37]"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-12 md:gap-y-16">
        {programs.map((prog, idx) => (
          <div 
            key={prog.zuluTitle} 
            className="group flex flex-col sm:flex-row gap-6 reveal-up"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className="flex-shrink-0">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-[#F5F5DC] text-[#4A2C2A] rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300 shadow-sm group-hover:scale-110 transform transition-transform">
                  <i className={`fa-solid ${prog.icon} text-lg md:text-xl`}></i>
               </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="text-[#D4AF37] font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 truncate">{prog.zuluTitle}</h4>
              <h5 className="text-[#4A2C2A] font-black text-xl md:text-2xl mb-2 md:mb-3 leading-tight group-hover:text-[#D4AF37] transition-colors break-words">{prog.title}</h5>
              
              {prog.impactMetric && (
                <div className="mb-3 inline-flex items-center gap-2 py-1 px-3 bg-[#fcfbf7] border border-[#D4AF37]/30 rounded-full max-w-full">
                  <i className="fa-solid fa-trophy text-[#D4AF37] text-[10px] flex-shrink-0"></i>
                  <span className="text-[#4A2C2A] font-bold text-[10px] uppercase tracking-wider truncate">{prog.impactMetric}</span>
                </div>
              )}

              <p className="text-gray-600 leading-relaxed mb-4 text-sm md:text-base font-light break-words">
                {prog.description}
              </p>
              <button className="text-[#4A2C2A] font-bold text-[10px] md:text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all hover:text-[#D4AF37] w-auto">
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Clean Mobile-First CTA - Updated Buttons */}
      <div className="mt-16 md:mt-24 pt-12 border-t border-gray-100 text-center reveal-scale">
            <h4 className="text-[#4A2C2A] text-2xl md:text-4xl font-black mb-6 tracking-tight">
              Ready to join the movement?
            </h4>
            
            <div className="flex flex-row flex-wrap gap-4 justify-center items-center w-full px-4">
              <button className="w-auto group bg-[#4A2C2A] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#D4AF37] hover:text-[#4A2C2A] transition-all hover:shadow-xl">
                 Apply for Mentorship
              </button>
              <button className="w-auto group border border-[#4A2C2A]/20 text-[#4A2C2A] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#4A2C2A] hover:text-white transition-all">
                Become a Partner
              </button>
            </div>
      </div>
    </div>
  );
};

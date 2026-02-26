
import React from 'react';

export const ProgramsPage: React.FC = () => {
  const activities = [
    {
      id: '01',
      title: 'iBhunga Boys Boot Camp',
      zuluTitle: 'Ibhunga Labafana',
      description: 'A dedicated mentorship initiative for young boys, guiding them through the critical transition to manhood. Through rigorous training and council, we instill the values of respect, responsibility, and resilience early on.',
      img: 'https://i.ibb.co/d4gX49f8/FB-IMG-1771288540483.jpg'
    },
    {
      id: '02',
      title: 'Insizwa Nobunsizwa Foundation',
      zuluTitle: 'Isisekelo Sentuthuko',
      description: 'The umbrella organization driving our mission. We focus on the holistic development of young men, providing the structural support, resources, and guidance needed to turn wayward youth into community pillars.',
      img: 'https://i.ibb.co/RGKvM0Qf/1771281126588.jpg'
    },
    {
      id: '03',
      title: 'Cultural & Heritage Festivals',
      zuluTitle: 'Imikhosi Yamasiko',
      description: 'We host vibrant events like the Ubhedu Indigenous Festival, promoting traditional attire (Ubhedu) and celebrating the richness of our indigenous culture through song, food, and gathering.',
      img: 'https://i.ibb.co/hR6xb0tF/FB-IMG-1771290987799.jpg'
    },
    {
      id: '04',
      title: 'University of Ubunsizwa',
      zuluTitle: 'Imfundo Yobunsizwa',
      description: 'Our unique educational approach to teaching young men about Zulu culture, tradition, and manhood. We serve as a school of life, passing down wisdom and history that is not found in textbooks.',
      img: 'https://i.ibb.co/Z7d8Z53/1771281352095.jpg'
    }
  ];

  return (
    <div className="bg-[#fcfbf7] overflow-x-hidden min-h-screen">
      {/* Hero Section - Dark & Immersive */}
      <section className="bg-[#1A0F0E] text-white pt-32 pb-20 md:pt-48 md:pb-32 rounded-b-[2rem] md:rounded-b-[5rem] relative shadow-2xl">
        <div className="zulu-pattern absolute inset-0 opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-4 mb-6 opacity-60 reveal">
             <span className="w-8 md:w-16 h-px bg-[#D4AF37]"></span>
             <span className="text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Our Curriculum</span>
             <span className="w-8 md:w-16 h-px bg-[#D4AF37]"></span>
          </div>
          <h1 className="text-4xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-[0.9] mb-6 md:mb-8 reveal delay-100">
            Izinhlelo <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B6F30]">Zethu.</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-base md:text-xl font-light leading-relaxed reveal delay-200 px-2">
            We do not just teach culture; we live it. Our programs are designed to rebuild the modern man through ancient disciplines.
          </p>
        </div>
      </section>

      {/* Programs List - Editorial Layout */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-48">
          {activities.map((act, idx) => (
            <div key={act.id} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-24 reveal`}>
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                 {/* Decorative Circle */}
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-[#4A2C2A]/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-90 group-hover:scale-100 hidden md:block`}></div>
                 
                 <div className="relative overflow-hidden rounded-[2rem] md:rounded-[4rem] shadow-2xl reveal-scale">
                    <div className="absolute inset-0 bg-[#4A2C2A]/10 group-hover:bg-transparent transition-colors z-10"></div>
                    <img 
                      src={act.img} 
                      className="w-full h-[300px] md:h-[600px] object-cover transform transition-transform duration-1000 group-hover:scale-110" 
                      alt={act.title} 
                    />
                    {/* Chapter Number */}
                    <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20">
                       <span className="text-white font-black text-6xl md:text-8xl opacity-20">{act.id}</span>
                    </div>
                 </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 text-center lg:text-left reveal-up delay-100">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-3 md:mb-4">
                   <span className="text-[#D4AF37] font-bold text-[10px] md:text-xs uppercase tracking-[0.3em]">{act.zuluTitle}</span>
                   <div className="h-px w-12 bg-[#D4AF37]"></div>
                </div>
                
                <h3 className="text-2xl md:text-6xl font-black text-[#4A2C2A] mb-4 md:mb-8 leading-tight tracking-tight">
                  {act.title}
                </h3>
                
                <p className="text-sm md:text-xl text-gray-600 font-light leading-relaxed mb-6 md:mb-10 max-w-xl mx-auto lg:mx-0">
                  {act.description}
                </p>

                <button className="group inline-flex items-center gap-3 text-[#4A2C2A] font-black uppercase text-[10px] tracking-[0.3em] hover:text-[#D4AF37] transition-colors">
                  <span>Explore Program</span>
                  <i className="fa-solid fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#4A2C2A] text-white py-16 md:py-40 relative overflow-hidden rounded-t-[2rem] md:rounded-t-[5rem] -mt-12">
        <div className="zulu-pattern absolute inset-0 opacity-5"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 reveal-up">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#4A2C2A] text-2xl md:text-3xl mx-auto mb-6 md:mb-10 shadow-[0_0_40px_rgba(212,175,55,0.4)]">
             <i className="fa-solid fa-handshake"></i>
          </div>
          <h4 className="text-3xl md:text-7xl font-black mb-6 md:mb-8 tracking-tighter">Bring the Vision.</h4>
          <p className="text-white/60 text-base md:text-2xl font-light mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with us to roll out these programs across the nation. Your support builds the structure for our youth to climb.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <button className="px-8 py-5 bg-[#D4AF37] text-[#4A2C2A] rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-xl hover:scale-105 active:scale-95 transform">
              Inquire for Partnership
            </button>
            <button className="px-8 py-5 bg-transparent border border-white/20 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#4A2C2A] transition-all hover:scale-105 active:scale-95 transform">
              Download Prospectus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

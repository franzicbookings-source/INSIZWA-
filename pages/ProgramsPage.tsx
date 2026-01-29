
import React from 'react';

export const ProgramsPage: React.FC = () => {
  const activities = [
    {
      title: 'Umgangela Tournaments',
      description: 'Traditional Zulu stick fighting is a school of discipline. Young men learn to master their emotions and respect opponents.',
      img: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Men’s Workshops',
      description: 'Deep-dive dialogues led by Phakela Umthakathi address the wounds of modern men through brotherhood.',
      img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-[#fcfbf7] overflow-x-hidden">
      <section className="pt-24 md:pt-32 pb-12 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-[#4A2C2A] tracking-tighter leading-none mb-4 md:mb-6">
          Izinhlelo <span className="text-[#D4AF37]">Zethu</span>
        </h1>
        <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-[0.4em] font-black">Programs & Services</p>
      </header>

      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-40">
          {activities.map((act, idx) => (
            <div key={act.title} className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 md:gap-20`}>
              <div className="w-full lg:w-1/2">
                 <div className="relative group">
                    <div className="absolute -inset-4 bg-[#D4AF37] opacity-10 rounded-[2rem] md:rounded-[3rem]"></div>
                    <img src={act.img} className="relative rounded-[1.5rem] md:rounded-[3rem] shadow-2xl w-full h-[250px] md:h-[500px] object-cover" alt={act.title} />
                 </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-3xl md:text-6xl font-black text-[#4A2C2A] mb-6 md:mb-8 leading-tight">{act.title}</h3>
                <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed mb-8">
                  {act.description}
                </p>
                <div className="h-1 w-12 md:w-20 bg-[#D4AF37] mb-6"></div>
                <p className="text-[#D4AF37] font-black uppercase tracking-widest text-[10px] italic">Restore. Rebuild. Revive.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#4A2C2A] py-20 md:py-40 text-center text-white px-6">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-3xl md:text-7xl font-black mb-6 md:mb-10 text-[#D4AF37]">Bring the Vision.</h4>
          <p className="text-lg md:text-2xl text-gray-300 font-light mb-10 md:mb-12">
            Partner with us to roll out these programs across the nation.
          </p>
          <button className="w-full sm:w-auto bg-[#D4AF37] text-[#4A2C2A] px-12 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-2xl">
            Inquire for Partnership
          </button>
        </div>
      </section>
    </div>
  );
};

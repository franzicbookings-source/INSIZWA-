
import React from 'react';

export const InvolvedPage: React.FC = () => {
  return (
    <div className="bg-[#fcfbf7] min-h-screen page-transition overflow-x-hidden">
      <header className="pt-28 md:pt-32 pb-12 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-black text-[#4A2C2A] tracking-tighter leading-none mb-4 md:mb-6">
          BAMBA <span className="text-[#D4AF37]">IQHAZA.</span>
        </h1>
        <div className="h-px w-16 md:w-24 bg-[#D4AF37] mx-auto mb-4 md:mb-6"></div>
        <p className="text-gray-400 text-[10px] uppercase tracking-[0.6em] font-black">Guardian of the Nation</p>
      </header>

      <section className="py-16 md:py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center">
            <div>
              <h2 className="text-3xl md:text-7xl font-black text-[#4A2C2A] mb-6 md:mb-10 tracking-tighter">The Power of <br/> <span className="text-[#D4AF37]">The Shield.</span></h2>
              <p className="text-lg md:text-2xl text-gray-600 font-light leading-relaxed mb-8 md:mb-10 border-l-4 border-[#D4AF37] pl-6 md:pl-8">
                Your contribution directly funds cultural restoration and direct mentorship.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
                 <div className="p-6 md:p-8 bg-white rounded-[2rem] shadow-xl border border-[#4A2C2A]/5">
                    <i className="fa-solid fa-handshake text-[#D4AF37] text-2xl md:text-3xl mb-4"></i>
                    <h4 className="font-black text-[#4A2C2A] text-base md:text-lg uppercase">Mentorship</h4>
                 </div>
                 <div className="p-6 md:p-8 bg-white rounded-[2rem] shadow-xl border border-[#4A2C2A]/5">
                    <i className="fa-solid fa-shield-heart text-[#D4AF37] text-2xl md:text-3xl mb-4"></i>
                    <h4 className="font-black text-[#4A2C2A] text-base md:text-lg uppercase">Safety Gear</h4>
                 </div>
              </div>
            </div>

            <div className="bg-[#4A2C2A] p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
              <div className="zulu-pattern absolute inset-0 opacity-10"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl md:text-3xl font-black mb-8 uppercase tracking-tighter text-[#D4AF37]">Make a Pledge</h3>
                <div className="grid grid-cols-2 gap-3 md:gap-4 mb-8">
                  {['R100', 'R250', 'R500', 'R1000'].map(amt => (
                    <button key={amt} className="py-4 md:py-5 border-2 border-white/10 rounded-xl md:rounded-2xl font-black hover:bg-[#D4AF37] hover:text-[#4A2C2A] text-[10px] uppercase tracking-widest transition-all">
                      {amt}
                    </button>
                  ))}
                </div>
                <button className="w-full bg-[#D4AF37] text-[#4A2C2A] py-5 md:py-6 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white transition-all shadow-xl mb-6">
                  Donate Securely
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white text-center px-6">
        <div className="max-w-4xl mx-auto">
           <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Qhagamshelana</span>
           <h3 className="text-2xl md:text-5xl font-black text-[#4A2C2A] mb-8 tracking-tighter">Talk to the Elders.</h3>
           <a href="mailto:info@insizwa.org.za" className="text-lg md:text-5xl font-black text-[#D4AF37] break-all border-b-2 md:border-b-4 border-[#D4AF37] pb-2">info@insizwa.org.za</a>
        </div>
      </section>
    </div>
  );
};


import React from 'react';

export const GetInvolved: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          
          <div className="order-2 lg:order-1">
             <span className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Bamba Iqhaza</span>
             <h2 className="text-3xl md:text-6xl font-black text-[#4A2C2A] mb-6 md:mb-8 leading-tight">Support the <br/> Guardians.</h2>
             <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-8 md:mb-10 font-light">
               Insizwa Nobunsizwa is more than an NGO; it is a movement. Your support ensures that we can host 
               more tournaments, reach more schools, and provide a safe space for young men to find their path. 
               Join us in building a future where our culture is our greatest shield.
             </p>
             
             <div className="space-y-6 md:space-y-8 mb-10 md:mb-12 border-l-2 border-[#D4AF37]/20 pl-6">
               <div className="group">
                 <h5 className="font-black text-[#4A2C2A] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Fund a Tournament</h5>
                 <p className="text-gray-500 text-sm font-light">Help us provide equipment, prizes, and safety gear for Umgangela.</p>
               </div>
               <div className="group">
                 <h5 className="font-black text-[#4A2C2A] text-lg mb-1 group-hover:text-[#D4AF37] transition-colors">Sponsor a Mentor</h5>
                 <p className="text-gray-500 text-sm font-light">Directly support our workshop facilitators and elder guides.</p>
               </div>
             </div>

             <button className="bg-[#D4AF37] text-[#4A2C2A] px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-[#4A2C2A] hover:text-white transition-all shadow-xl">
               Donate Securely Now
             </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 bg-[#D4AF37]/20 rounded-full blur-3xl opacity-50"></div>
            <img 
              src="https://i.ibb.co/j9yqNQ3v/1771326991066.jpg" 
              alt="Zulu Culture" 
              className="relative w-full aspect-[4/5] object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl"
            />
          </div>
        </div>
    </div>
  );
};

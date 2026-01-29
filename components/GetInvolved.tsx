
import React from 'react';

export const GetInvolved: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#fdf9f4] border-2 zulu-border p-1 rounded-3xl shadow-2xl overflow-hidden">
        <div className="bg-white p-10 md:p-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
             <h2 className="text-[#D4AF37] font-bold text-sm uppercase tracking-widest mb-4">Bamba Iqhaza / Get Involved</h2>
             <h3 className="text-4xl md:text-5xl font-black text-[#4A2C2A] mb-8">Support the Guardians of our Heritage</h3>
             <p className="text-gray-600 text-lg leading-relaxed mb-8">
               Insizwa Nobunsizwa is more than an NGO; it is a movement. Your support ensures that we can host 
               more tournaments, reach more schools, and provide a safe space for young men to find their path. 
               Join us in building a future where our culture is our greatest shield.
             </p>
             
             <div className="space-y-4 mb-10">
               <div className="flex items-start space-x-4">
                 <div className="bg-[#D4AF37]/10 p-2 rounded-lg mt-1">
                   <i className="fa-solid fa-check text-[#D4AF37]"></i>
                 </div>
                 <div>
                   <h5 className="font-bold text-[#4A2C2A]">Fund a Tournament</h5>
                   <p className="text-gray-600 text-sm">Help us provide equipment, prizes, and safety gear for Umgangela.</p>
                 </div>
               </div>
               <div className="flex items-start space-x-4">
                 <div className="bg-[#D4AF37]/10 p-2 rounded-lg mt-1">
                   <i className="fa-solid fa-check text-[#D4AF37]"></i>
                 </div>
                 <div>
                   <h5 className="font-bold text-[#4A2C2A]">Sponsor a Mentor</h5>
                   <p className="text-gray-600 text-sm">Directly support our workshop facilitators and elder guides.</p>
                 </div>
               </div>
             </div>

             <button className="bg-[#4A2C2A] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-[#D4AF37] hover:text-[#4A2C2A] transition-all transform hover:scale-105 shadow-xl">
               Donate Securely Now
             </button>
          </div>

          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-[#D4AF37] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
            <img 
              src="https://images.unsplash.com/photo-1547039986-77e810a9967e?q=80&w=2070&auto=format&fit=crop" 
              alt="Zulu Culture" 
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover border-4 border-white"
            />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl border-l-8 border-[#D4AF37]">
              <p className="text-[#4A2C2A] font-bold italic">
                "It takes a village to raise a man, but it takes a culture to sustain him."
              </p>
              <p className="text-gray-500 text-sm mt-2">- Phakela Umthakathi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

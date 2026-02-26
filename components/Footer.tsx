import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4A2C2A] text-white pt-20 md:pt-32 pb-16 border-t-[1rem] border-[#D4AF37] relative overflow-hidden">
      <div className="zulu-pattern absolute inset-0 opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-20 mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#4A2C2A] font-black text-xl md:text-2xl border-4 border-white shadow-2xl flex-shrink-0">
                IN
              </div>
              <div>
                <span className="block text-xl md:text-2xl font-black uppercase tracking-tighter">Insizwa Nobunsizwa</span>
                <span className="block text-[8px] md:text-[10px] text-[#D4AF37] font-bold uppercase tracking-[0.4em] mt-1">Cultural Restoration Movement</span>
              </div>
            </div>
            <p className="text-white/40 max-w-md leading-relaxed mb-8 md:mb-10 font-light text-sm md:text-base">
              We are a registered Non-Profit Organization dedicated to the social reform of young men 
              through the reclamation of Zulu pride, discipline, and traditional knowledge.
            </p>
            <div className="flex space-x-4">
              {['facebook-f', 'instagram', 'x-twitter', 'youtube'].map((social) => (
                <a key={social} href="#" className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#4A2C2A] hover:border-[#D4AF37] transition-all duration-500">
                  <i className={`fa-brands fa-${social} text-base md:text-lg`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-black mb-6 md:mb-8 uppercase text-[10px] tracking-[0.5em]">The Registry</h4>
            <ul className="space-y-4 md:space-y-6">
              <li className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase tracking-widest mb-1">NPO Number</span>
                <span className="font-black text-lg text-white/80 tracking-tight">2024/NPO/123-456</span>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-white/30 uppercase tracking-widest mb-1">PBO Number</span>
                <span className="font-black text-lg text-white/80 tracking-tight">930012345</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#D4AF37] font-black mb-6 md:mb-8 uppercase text-[10px] tracking-[0.5em]">Headquarters</h4>
            <p className="text-white/60 font-light leading-relaxed mb-6 text-sm md:text-base">
              1240 Zulu Heritage Square,<br/> 
              KwaZulu-Natal, 4001<br/>
              South Africa
            </p>
            <p className="text-white/80 font-black tracking-widest text-sm">+27 (0) 31 456 7890</p>
          </div>
        </div>

        <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-white/20 text-[10px] uppercase font-bold tracking-[0.2em] md:tracking-[0.4em] gap-6 md:gap-0">
          <p className="text-center md:text-left">© 2024 Insizwa Nobunsizwa. Bayede!</p>
          <div className="flex space-x-6 md:space-x-10">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Governance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';

export const InvolvedPage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [customAmount, setCustomAmount] = useState('');

  const handleAmountSelect = (amt: string) => {
    setSelectedAmount(amt);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    if (e.target.value) {
      setSelectedAmount(null);
    }
  };

  const handleDonate = () => {
    const finalAmount = selectedAmount || customAmount;
    if (finalAmount) {
      // Integration logic would go here
      alert(`Proceeding to payment for ${finalAmount.startsWith('R') ? finalAmount : 'R' + finalAmount}`);
    }
  };

  return (
    <div className="bg-[#fcfbf7] min-h-screen page-transition overflow-x-hidden">
      
      {/* Hero */}
      <section className="pt-32 pb-12 px-4 md:px-6 max-w-7xl mx-auto text-center">
        <div className="reveal">
          <span className="text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block">Guardian of the Nation</span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-black text-[#4A2C2A] tracking-tighter leading-[0.9] md:leading-[0.85] mb-8">
            BAMBA <br/> <span className="text-[#D4AF37]">IQHAZA.</span>
          </h1>
          <p className="text-[#4A2C2A]/60 max-w-2xl mx-auto text-lg md:text-2xl font-light leading-relaxed">
            There is no bystander in the building of a nation. Pick up your shield and stand with us.
          </p>
        </div>
      </section>

      {/* Main Pledge Section */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-[#1A0F0E] rounded-[2rem] md:rounded-[5rem] overflow-hidden shadow-2xl relative text-white reveal-up">
            <div className="zulu-pattern absolute inset-0 opacity-5"></div>
            
            <div className="grid lg:grid-cols-2">
               {/* Left: Context */}
               <div className="p-8 md:p-24 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center">
                  <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 tracking-tight">The Power of <br/> <span className="text-[#D4AF37]">The Shield.</span></h2>
                  <p className="text-white/60 text-base md:text-xl font-light leading-relaxed mb-8 md:mb-12">
                    Your contribution is not just a donation; it is an investment in the moral fabric of our society. It funds:
                  </p>
                  
                  <div className="space-y-6">
                     <div className="flex items-start gap-4 md:gap-6 reveal-left delay-100">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A0F0E] flex-shrink-0">
                           <i className="fa-solid fa-handshake"></i>
                        </div>
                        <div>
                           <h4 className="text-lg md:text-xl font-black mb-1">Mentorship Programs</h4>
                           <p className="text-white/50 text-sm">Funding facilitators for our boot camps and workshops.</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-4 md:gap-6 reveal-left delay-200">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#1A0F0E] flex-shrink-0">
                           <i className="fa-solid fa-shield-halved"></i>
                        </div>
                        <div>
                           <h4 className="text-lg md:text-xl font-black mb-1">Safety Equipment</h4>
                           <p className="text-white/50 text-sm">Providing protective gear for Umgangela tournaments.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right: Donation Form */}
               <div className="p-6 md:p-24 bg-white/5 relative reveal-right">
                  <div className="absolute top-0 right-0 p-8 md:p-12 opacity-5 pointer-events-none">
                     <i className="fa-solid fa-hand-holding-heart text-7xl md:text-9xl"></i>
                  </div>
                  
                  <h3 className="text-[#D4AF37] font-black uppercase tracking-[0.2em] text-sm mb-6 md:mb-8">Make a Pledge</h3>
                  
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                     {['R100', 'R250', 'R500', 'R1000'].map(amt => (
                        <button 
                          key={amt} 
                          onClick={() => handleAmountSelect(amt)}
                          className={`py-4 md:py-6 border rounded-xl md:rounded-2xl font-black transition-all text-lg md:text-xl transform active:scale-95 ${selectedAmount === amt ? 'bg-[#D4AF37] text-[#1A0F0E] border-[#D4AF37]' : 'border-white/10 hover:bg-[#D4AF37] hover:text-[#1A0F0E] hover:border-[#D4AF37]'}`}
                        >
                           {amt}
                        </button>
                     ))}
                  </div>
                  
                  <input 
                    type="text" 
                    placeholder="Custom Amount (ZAR)" 
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full bg-black/20 border border-white/10 p-5 md:p-6 rounded-xl md:rounded-2xl text-white outline-none focus:border-[#D4AF37] mb-6 md:mb-8 font-bold text-sm md:text-base transition-colors" 
                  />
                  
                  <button 
                    onClick={handleDonate}
                    className="w-full py-5 md:py-6 bg-[#D4AF37] text-[#1A0F0E] rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-xs md:text-sm hover:bg-white transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-[1.02] active:scale-95 whitespace-nowrap"
                  >
                     Proceed to Secure Payment
                  </button>
                  
                  <p className="text-center text-white/30 text-[8px] md:text-[10px] uppercase tracking-widest mt-6">
                     Secured by PayFast • 18A Tax Certificate Available
                  </p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-32 text-center px-4 md:px-6">
         <div className="max-w-4xl mx-auto reveal-up">
            <span className="text-[#D4AF37] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-6 block">Qhagamshelana</span>
            <h3 className="text-3xl md:text-6xl font-black text-[#4A2C2A] mb-8 md:mb-12 tracking-tighter">Talk to the Elders.</h3>
            
            <a 
              href="mailto:info@insizwa.org.za" 
              className="block text-2xl sm:text-3xl md:text-7xl font-black text-[#D4AF37] hover:text-[#4A2C2A] transition-colors break-all leading-none mb-8 md:mb-12 hover:scale-105 transform duration-300"
            >
               info@insizwa.org.za
            </a>

            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-[#4A2C2A]/60">
               <div className="reveal-left delay-100">
                  <h4 className="font-bold text-[#4A2C2A] uppercase tracking-widest text-xs mb-2">Office</h4>
                  <p className="text-sm md:text-base">1240 Zulu Heritage Square<br/>KwaZulu-Natal, SA</p>
               </div>
               <div className="reveal-right delay-100">
                  <h4 className="font-bold text-[#4A2C2A] uppercase tracking-widest text-xs mb-2">Phone</h4>
                  <p className="text-sm md:text-base">+27 (0) 31 456 7890</p>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
};

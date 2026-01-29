
import React from 'react';
import { Value } from '../types';

export const About: React.FC = () => {
  const values: Value[] = [
    {
      title: 'Respect',
      zuluTitle: 'Hlonipha',
      description: 'The foundation of all Zulu culture. Respect for elders, for women, and for oneself.'
    },
    {
      title: 'Courage',
      zuluTitle: 'Isibindi',
      description: 'The strength to stand for what is right, even when the world pulls you otherwise.'
    },
    {
      title: 'Integrity',
      zuluTitle: 'Ubuqotho',
      description: 'Living a life of honesty and discipline that reflects the true spirit of manhood.'
    },
    {
      title: 'Unity',
      zuluTitle: 'Ubumbano',
      description: 'Building a brotherhood that protects the community and uplifts the vulnerable.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-xs font-bold text-[#D4AF37] uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            Mayelana Nathi / About Us
          </h2>
          <h3 className="text-5xl md:text-6xl font-black text-[#4A2C2A] mb-10 leading-[1.1]">
            Forging Men of <span className="text-[#D4AF37]">Honor</span> in a Changing World
          </h3>
          
          <div className="space-y-8 text-gray-700 leading-relaxed text-lg font-light">
            <p>
              Founded by the esteemed cultural figure <span className="font-bold text-[#4A2C2A] border-b-2 border-[#D4AF37]/30">Phakela Umthakathi</span>, 
              Insizwa Nobunsizwa was born out of a deep concern for our lost youth. In the streets of our townships and villages, 
              the traditional concept of manhood (Ubunsizwa) was being replaced by violence and drug abuse.
            </p>
            <p>
              We believe that to save the man, you must reconnect him with his spirit. Through the discipline of 
              <span className="italic font-normal text-[#4A2C2A]"> Umgangela</span> (stick fighting) and the wisdom of our ancestors, 
              we guide young men back to a path of dignity, providing mentorship and a sense of belonging.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-10">
            <div className="group">
              <h4 className="font-bold text-[#4A2C2A] text-2xl mb-2 flex items-center gap-2">
                Mission
                <div className="h-1 w-0 group-hover:w-8 bg-[#D4AF37] transition-all duration-300"></div>
              </h4>
              <p className="text-gray-600 font-light">To restore Zulu cultural pride and discipline to combat social ills.</p>
            </div>
            <div className="group">
              <h4 className="font-bold text-[#4A2C2A] text-2xl mb-2 flex items-center gap-2">
                Vision
                <div className="h-1 w-0 group-hover:w-8 bg-[#D4AF37] transition-all duration-300"></div>
              </h4>
              <p className="text-gray-600 font-light">A society where every young man is a pillar of strength and peace.</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 z-0 bg-[#D4AF37]/5 rounded-[3rem] -rotate-2"></div>
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val) => (
              <div key={val.zuluTitle} className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border-b-4 border-transparent hover:border-[#4A2C2A] hover:transform hover:-translate-y-3 transition-all duration-500">
                <div className="w-14 h-14 bg-[#4A2C2A] text-[#D4AF37] rounded-full flex items-center justify-center mb-6 shadow-xl">
                  <i className="fa-solid fa-shield-heart text-xl"></i>
                </div>
                <h5 className="text-[#D4AF37] font-bold text-xs uppercase tracking-widest mb-1">{val.zuluTitle}</h5>
                <h6 className="text-[#4A2C2A] font-bold text-2xl mb-3">{val.title}</h6>
                <p className="text-gray-500 text-base leading-relaxed font-light">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

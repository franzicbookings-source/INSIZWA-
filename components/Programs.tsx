
import React from 'react';
import { Program } from '../types';

export const Programs: React.FC = () => {
  const programs: Program[] = [
    {
      title: 'Traditional Tournaments',
      zuluTitle: 'Umgangela',
      description: 'Regulated stick fighting events that teach focus, respect for opponents, and controlled strength under pressure.',
      icon: 'fa-shield-halved'
    },
    {
      title: "Men's Mentorship",
      zuluTitle: 'Isikhungo Someluleko',
      description: 'One-on-one and group dialogues led by Phakela Umthakathi to address trauma, fatherhood, and purpose.',
      icon: 'fa-user-group'
    },
    {
      title: 'Conflict Resolution',
      zuluTitle: 'Ukubuyisana',
      description: 'Traditional mediation services to resolve community disputes and prevent violence through cultural diplomacy.',
      icon: 'fa-handshake'
    },
    {
      title: 'Cultural Preservation',
      zuluTitle: 'Ukuvuselela Amasiko',
      description: 'Education in Maskandi music, traditional attire, and the history of the Zulu nation for schools and communities.',
      icon: 'fa-drum'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-sm font-bold text-[#D4AF37] uppercase tracking-widest mb-4">Izinhlelo Zethu / Our Programs</h2>
        <h3 className="text-4xl md:text-5xl font-black text-[#4A2C2A] mb-6">Restoring Culture, Rebuilding Lives</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We combine physical training with emotional intelligence and cultural wisdom to provide a holistic approach to manhood.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {programs.map((prog) => (
          <div key={prog.zuluTitle} className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <i className={`fa-solid ${prog.icon} text-9xl text-[#4A2C2A]`}></i>
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#F5F5DC] text-[#4A2C2A] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors">
                <i className={`fa-solid ${prog.icon} text-2xl`}></i>
              </div>
              <h4 className="text-[#D4AF37] font-bold text-sm uppercase mb-1">{prog.zuluTitle}</h4>
              <h5 className="text-[#4A2C2A] font-bold text-2xl mb-4">{prog.title}</h5>
              <p className="text-gray-600 leading-relaxed mb-6">
                {prog.description}
              </p>
              <button className="text-[#4A2C2A] font-bold text-sm flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <span>Learn More</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 bg-[#4A2C2A] rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
        <div className="zulu-pattern absolute inset-0"></div>
        <div className="relative z-10">
          <h4 className="text-white text-3xl md:text-4xl font-black mb-6">Ready to join the movement?</h4>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            Whether you are a young man looking for guidance or a funder looking to make an impact, your journey starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D4AF37] text-[#4A2C2A] px-10 py-4 rounded-full font-bold hover:bg-white transition-all">
              Apply for Mentorship
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-[#4A2C2A] transition-all">
              Become a Partner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


import React, { useState } from 'react';
import { GoogleGenAI, Type } from '@google/genai';

export const WisdomSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [wisdom, setWisdom] = useState<{ advice: string; zuluProverb: string; meaning: string } | null>(null);
  const [category, setCategory] = useState('Conflict');

  const generateWisdom = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Act as a wise Zulu elder and mentor from Insizwa Nobunsizwa. 
        Provide a traditional Zulu proverb related to "${category}", its English meaning, and brief cultural advice for a young man (insizwa).`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              advice: { type: Type.STRING },
              zuluProverb: { type: Type.STRING },
              meaning: { type: Type.STRING }
            },
            required: ['advice', 'zuluProverb', 'meaning']
          }
        }
      });

      const data = JSON.parse(response.text);
      setWisdom(data);
    } catch (error) {
      console.error('Error generating wisdom:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-[#D4AF37] font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center gap-4">
            <span className="h-px w-8 bg-[#D4AF37]"></span>
            Ukuhlakanipha / Wisdom
          </h2>
          <h3 className="text-5xl md:text-6xl font-black mb-8 leading-tight">Consult the <span className="text-[#D4AF37]">Ancestors</span></h3>
          <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
            In our tradition, the youth seek counsel from the elders to navigate the complexities of life. 
            Choose a challenge you are facing, and let the ancestors guide you.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
            {['Conflict', 'Leadership', 'Discipline', 'Respect', 'Purpose', 'Courage'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`py-4 px-4 rounded-xl font-bold transition-all border-2 text-sm tracking-wide ${
                  category === cat ? 'bg-[#D4AF37] text-[#4A2C2A] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/20' : 'bg-transparent text-gray-500 border-white/10 hover:border-[#D4AF37]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={generateWisdom}
            disabled={loading}
            className="w-full py-6 bg-white text-[#4A2C2A] font-bold rounded-full text-lg hover:bg-[#D4AF37] transition-all disabled:opacity-50 flex items-center justify-center space-x-4 shadow-[0_20px_50px_rgba(255,255,255,0.05)] uppercase tracking-widest"
          >
            {loading ? (
              <i className="fa-solid fa-spinner fa-spin"></i>
            ) : (
              <>
                <i className="fa-solid fa-feather-pointed"></i>
                <span>Receive Counsel</span>
              </>
            )}
          </button>
        </div>

        <div className="relative min-h-[450px] flex items-center justify-center">
           {wisdom ? (
             <div className="w-full bg-gradient-to-br from-[#252525] to-[#121212] p-12 rounded-[2.5rem] border border-[#D4AF37]/20 animate-in fade-in zoom-in duration-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <i className="fa-solid fa-scroll text-[10rem]"></i>
                </div>
                <i className="fa-solid fa-quote-left text-[#D4AF37] text-6xl mb-8 opacity-30"></i>
                <h4 className="text-3xl md:text-4xl font-black text-[#D4AF37] mb-6 leading-tight italic">
                  "{wisdom.zuluProverb}"
                </h4>
                <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-bold mb-8 flex items-center gap-3">
                   <span className="h-px w-6 bg-gray-700"></span>
                   Meaning: {wisdom.meaning}
                </p>
                <div className="h-1 w-16 bg-[#D4AF37] mb-8 rounded-full"></div>
                <p className="text-gray-200 text-xl leading-relaxed italic font-light">
                  {wisdom.advice}
                </p>
             </div>
           ) : (
             <div className="text-center text-gray-700 border-2 border-dashed border-gray-800/50 p-24 rounded-[3rem] w-full flex flex-col items-center">
               <div className="w-24 h-24 bg-gray-800/20 rounded-full flex items-center justify-center mb-8">
                 <i className="fa-solid fa-wand-magic-sparkles text-4xl opacity-30"></i>
               </div>
               <p className="text-xl font-medium tracking-wide">Select a category and receive the elder's wisdom</p>
               <p className="text-gray-500 mt-2 font-light">Your path is waiting for direction.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

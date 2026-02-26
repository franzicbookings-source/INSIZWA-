
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Type, Modality } from '@google/genai';
import { PraisePoem } from '../types';

// Audio helpers as per guidelines
function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export const KnowledgeHub: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [userVirtues, setUserVirtues] = useState('');
  const [poem, setPoem] = useState<PraisePoem | null>(null);
  const [loadingPoem, setLoadingPoem] = useState(false);
  const [playingWord, setPlayingWord] = useState<string | null>(null);

  const audioCtxRef = useRef<AudioContext | null>(null);

  const glossary = [
    { word: 'Ubuntu', meaning: 'I am because we are. The essence of humanity.', zuluMeaning: 'Ubuntu buntu' },
    { word: 'Isithunzi', meaning: 'Dignity, moral weight, and the sacred shadow of a man.', zuluMeaning: 'Isithunzi sendoda' },
    { word: 'Hlonipha', meaning: 'The ritual of respect for elders, ancestors, and nature.', zuluMeaning: 'Ukuhlonipha' },
    { word: 'Isibindi', meaning: 'Courage. The strength to stand in the fire for truth.', zuluMeaning: 'Isibindi seqhawe' },
    { word: 'Ubumbano', meaning: 'Unity. The strength of the collective shield.', zuluMeaning: 'Ubumbano lwesizwe' },
  ];

  const handleSpeak = async (word: string) => {
    setPlayingWord(word);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: `Say with dignity and traditional Zulu emphasis: ${word}` }] }],
        config: {
          responseModalities: [Modality.AUDIO],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
          },
        },
      });

      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }

      const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      if (base64Audio) {
        const audioBuffer = await decodeAudioData(
          decode(base64Audio),
          audioCtxRef.current,
          24000,
          1,
        );
        const source = audioCtxRef.current.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtxRef.current.destination);
        source.onended = () => setPlayingWord(null);
        source.start();
      }
    } catch (e) {
      console.error("TTS Error:", e);
      setPlayingWord(null);
    }
  };

  const generatePoem = async () => {
    if (!userName || !userVirtues) return;
    setLoadingPoem(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `You are an Imbongi (Zulu Praise Singer). Compose a powerful short praise poem (Izibongo) for ${userName} who possesses the virtues of: ${userVirtues}. 
        Format your response as a JSON object with 'zulu', 'english', and 'title' (a warrior name based on virtues). 
        The poem should feel ancient, rhythmic, and honorable.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              zulu: { type: Type.STRING },
              english: { type: Type.STRING },
              title: { type: Type.STRING }
            },
            required: ['zulu', 'english', 'title']
          }
        }
      });
      setPoem(JSON.parse(response.text));
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingPoem(false);
    }
  };

  return (
    <div className="bg-[#1a0f0e] min-h-screen text-white page-transition">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="zulu-pattern absolute inset-0"></div>
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#D4AF37]/20 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Header */}
        <div className="text-center mb-24 md:mb-32 reveal">
          <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.8em] mb-6 block">Izikhungo Sokuhlakanipha</span>
          <h1 className="text-5xl md:text-[10rem] font-black tracking-tighter leading-none mb-8">
            KNOWLEDGE <br/> <span className="text-[#D4AF37]">HUB.</span>
          </h1>
          <div className="max-w-2xl mx-auto">
            <p className="text-white/40 text-lg md:text-2xl font-light leading-relaxed">
              Step into the sacred circle. Here, technology breathes life into our ancestors' voices. Learn the language, receive your name, and carry the shield.
            </p>
          </div>
        </div>

        {/* Imbongi Feature */}
        <section className="mb-32 md:mb-56">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <div className="reveal-left">
              <h2 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.5em] mb-4">Ukuphakanyiswa / Initiation</h2>
              <h3 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter">The Digital <br/> Imbongi.</h3>
              <p className="text-white/60 text-lg mb-10 font-light">
                Tell us your name and the virtues you wish to uphold. Our digital praise singer will compose a lineage of honor for you to carry.
              </p>
              
              <div className="space-y-6 max-w-md">
                <input 
                  type="text" 
                  placeholder="Your Name / Isibongo"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl outline-none focus:border-[#D4AF37] transition-all font-bold text-lg"
                />
                <textarea 
                  placeholder="Your Virtues (e.g. Loyalty, Resilience, Peace)"
                  value={userVirtues}
                  onChange={(e) => setUserVirtues(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 p-6 rounded-2xl outline-none focus:border-[#D4AF37] transition-all font-light text-lg h-32"
                />
                <button 
                  onClick={generatePoem}
                  disabled={loadingPoem || !userName || !userVirtues}
                  className="w-full py-6 bg-[#D4AF37] text-[#4A2C2A] font-black rounded-2xl uppercase tracking-widest text-xs hover:bg-white transition-all disabled:opacity-50 flex items-center justify-center gap-4"
                >
                  {loadingPoem ? <i className="fa-solid fa-spinner fa-spin"></i> : <><i className="fa-solid fa-feather-pointed"></i> Summon the Orator</>}
                </button>
              </div>
            </div>

            <div className="relative min-h-[500px] flex items-center justify-center reveal-right">
              {poem ? (
                <div className="w-full bg-gradient-to-br from-[#2a1a19] to-[#1a0f0e] p-10 md:p-16 rounded-[3rem] border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-all">
                    <i className="fa-solid fa-shield text-[15rem] rotate-12"></i>
                  </div>
                  <h4 className="text-[#D4AF37] font-black text-xs uppercase tracking-widest mb-4">Your Warrior Title:</h4>
                  <h5 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter text-white">{poem.title}</h5>
                  <div className="space-y-10">
                    <div>
                      <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-widest mb-4 block">Zulu Verse</span>
                      <p className="text-2xl md:text-3xl font-black italic text-white/90 leading-snug">"{poem.zulu}"</p>
                    </div>
                    <div className="h-px w-16 bg-[#D4AF37]/30"></div>
                    <div>
                      <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest mb-4 block">Translation</span>
                      <p className="text-lg md:text-xl font-light italic text-white/50 leading-relaxed">{poem.english}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full border-4 border-dashed border-white/5 rounded-[4rem] flex flex-col items-center justify-center text-center p-12">
                   <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mb-8">
                     <i className="fa-solid fa-scroll text-3xl opacity-20"></i>
                   </div>
                   <p className="text-white/20 font-black uppercase tracking-widest text-sm">Enter your details to reveal your praise poem</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Living Dictionary Section */}
        <section className="py-24 border-t border-white/5">
          <div className="text-center mb-20 reveal">
            <h2 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.8em] mb-4">Isichazamazwi Esiphilayo</h2>
            <h3 className="text-4xl md:text-8xl font-black tracking-tighter">The Living Dictionary.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glossary.map((item, idx) => (
              <div 
                key={item.word} 
                className="bg-white/5 border border-white/5 p-10 rounded-[2.5rem] hover:border-[#D4AF37]/50 transition-all group reveal"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-between items-start mb-8">
                  <h4 className="text-3xl md:text-4xl font-black text-white group-hover:text-[#D4AF37] transition-colors">{item.word}</h4>
                  <button 
                    onClick={() => handleSpeak(item.word)}
                    disabled={playingWord === item.word}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                      playingWord === item.word ? 'bg-[#D4AF37] text-[#4A2C2A]' : 'bg-white/10 text-white hover:bg-white hover:text-[#4A2C2A]'
                    }`}
                  >
                    <i className={`fa-solid ${playingWord === item.word ? 'fa-spinner fa-spin' : 'fa-volume-high'}`}></i>
                  </button>
                </div>
                <p className="text-white/40 font-light text-lg leading-relaxed mb-6">{item.meaning}</p>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">{item.zuluMeaning}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sacred Greeting Ritual */}
        <section className="mt-32 text-center reveal">
           <div className="max-w-4xl mx-auto p-12 md:p-24 bg-gradient-to-t from-black/40 to-transparent rounded-[4rem] border border-white/5">
              <h4 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[1em] mb-10">Bayede Salute</h4>
              <button 
                onClick={() => {
                  const el = document.getElementById('ritual-flash');
                  if (el) {
                    el.style.opacity = '1';
                    setTimeout(() => el.style.opacity = '0', 1000);
                  }
                  handleSpeak('Bayede!');
                }}
                className="group relative inline-block"
              >
                <div className="absolute inset-0 bg-[#D4AF37] blur-[40px] opacity-20 group-hover:opacity-60 transition-all duration-1000"></div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 border-4 border-[#D4AF37] rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-700 bg-[#1a0f0e]">
                  <span className="text-2xl md:text-4xl font-black text-[#D4AF37] tracking-[0.2em] group-hover:tracking-[0.4em] transition-all">BAYEDE!</span>
                </div>
              </button>
              <p className="mt-12 text-white/30 text-sm md:text-lg font-light italic">Click the shield to perform the Royal Salute. <br/> Feel the resonance of a thousand generations.</p>
           </div>
        </section>
      </div>

      {/* Ritual Visual Effect */}
      <div id="ritual-flash" className="fixed inset-0 bg-[#D4AF37]/10 pointer-events-none opacity-0 transition-opacity duration-1000 z-[100]"></div>
    </div>
  );
};


import React, { useState, useMemo } from 'react';
import { PastEvent } from '../types';

export const EventsPage: React.FC = () => {
  const [activeImage, setActiveImage] = useState<{url: string, eventId: string, index: number} | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEventImages, setSelectedEventImages] = useState<Record<string, string>>({});
  const [displayLimit, setDisplayLimit] = useState<number>(4);

  const categories = ['All', 'Tournament', 'Dialogue', 'Workshop'];

  const events: PastEvent[] = [
    {
      id: '7',
      title: 'iBhunga Boys Boot Camp Gathering',
      location: 'KwaNongoma, KwaMadlakazi, KZN',
      category: 'Workshop',
      description: 'A transformative mentorship gathering where young men engaged in rigorous training, dialogue, and cultural bonding, strengthening the brotherhood.',
      image: 'https://i.ibb.co/d4gX49f8/FB-IMG-1771288540483.jpg',
      images: [
        'https://i.ibb.co/d4gX49f8/FB-IMG-1771288540483.jpg',
        'https://i.ibb.co/Fkz22Vqb/FB-IMG-1771288505339.jpg',
        'https://i.ibb.co/TxQL7T2q/FB-IMG-1771288496529.jpg',
        'https://i.ibb.co/cBwrqks/FB-IMG-1771288483102.jpg',
        'https://i.ibb.co/nq3NBdfZ/FB-IMG-1771288419375.jpg',
        'https://i.ibb.co/Cpws4gQ1/FB-IMG-1771288426107.jpg',
        'https://i.ibb.co/sdQH95cF/FB-IMG-1771288428892.jpg',
        'https://i.ibb.co/tPWLRQML/FB-IMG-1771288467682.jpg'
      ]
    },
    {
      id: '1',
      title: 'Ubhedu Indigenous Festival',
      location: 'KwaNongoma, KwaMadlakazi, KZN',
      category: 'Tournament',
      description: 'A major cultural showcase featuring traditional music, dance, and indigenous games.',
      image: 'https://i.ibb.co/hR6xb0tF/FB-IMG-1771290987799.jpg',
      images: [
        'https://i.ibb.co/hR6xb0tF/FB-IMG-1771290987799.jpg',
        'https://i.ibb.co/YB8cfDgS/FB-IMG-1771290978486.jpg',
        'https://i.ibb.co/S4Vbrk6P/FB-IMG-1771290964605.jpg',
        'https://i.ibb.co/cX31QSfg/FB-IMG-1771290949281.jpg',
        'https://i.ibb.co/PvvjL6Dh/FB-IMG-1771290955444.jpg',
        'https://i.ibb.co/ZpJ2ktpT/FB-IMG-1771290941798.jpg',
        'https://i.ibb.co/zHB91Cq4/FB-IMG-1771290938372.jpg',
        'https://i.ibb.co/SDzWT7FS/FB-IMG-1771290908032.jpg',
        'https://i.ibb.co/cc2GT9GB/FB-IMG-1771290927132.jpg'
      ]
    },
    {
      id: '2',
      title: 'iBhunga Boys Boot Camp (Winter)',
      location: 'KwaNongoma, KwaMadlakazi, KZN',
      category: 'Workshop',
      description: 'The foundation flagship mentorship program teaching boys discipline and Zulu traditions during school holidays.',
      image: 'https://i.ibb.co/RGKvM0Qf/1771281126588.jpg',
      images: [
        'https://i.ibb.co/RGKvM0Qf/1771281126588.jpg',
        'https://i.ibb.co/qYkKz7cW/1771281344302.jpg',
        'https://i.ibb.co/Mxrhs2rF/1771281319712.jpg'
      ]
    },
    {
      id: '3',
      title: 'University of Ubunsizwa Induction',
      location: 'KwaNongoma, KwaMadlakazi, KZN',
      category: 'Workshop',
      description: 'Official intake ceremonies for the cultural education program, setting the path for the year ahead.',
      image: 'https://i.ibb.co/Z7d8Z53/1771281352095.jpg',
      images: [
        'https://i.ibb.co/Z7d8Z53/1771281352095.jpg',
        'https://i.ibb.co/Mxrhs2rF/1771281319712.jpg',
        'https://i.ibb.co/yn89TQLD/1771281355462.jpg'
      ]
    },
    {
      id: '4',
      title: 'Umgangela Tournament Series',
      location: 'KwaNongoma, KwaMadlakazi, KZN',
      category: 'Tournament',
      description: 'Competitive stick fighting events hosted to promote indigenous sports and discipline.',
      image: 'https://i.ibb.co/yn89TQLD/1771281355462.jpg',
      images: [
        'https://i.ibb.co/yn89TQLD/1771281355462.jpg',
        'https://i.ibb.co/LdNqH4R6/1771281335321.jpg',
        'https://i.ibb.co/qYkKz7cW/1771281344302.jpg'
      ]
    },
    {
      id: '5',
      title: 'Kuzibandlela & Umchambuso',
      location: 'KwaNongoma, KwaMadlakazi, KZN',
      category: 'Dialogue',
      description: 'Cultural gatherings and workshops focused on traditional Zulu lifestyle and rites of passage.',
      image: 'https://i.ibb.co/qYkKz7cW/1771281344302.jpg',
      images: [
        'https://i.ibb.co/qYkKz7cW/1771281344302.jpg',
        'https://i.ibb.co/Z7d8Z53/1771281352095.jpg',
        'https://i.ibb.co/RGKvM0Qf/1771281126588.jpg'
      ]
    },
    {
      id: '6',
      title: 'iBhunga Boys Boot Camp (Summer)',
      location: 'KwaNongoma, KwaMadlakazi, KZN',
      category: 'Workshop',
      description: 'Summer intake for the mentorship program, ensuring discipline during the festive season.',
      image: 'https://i.ibb.co/Mxrhs2rF/1771281319712.jpg',
      images: [
        'https://i.ibb.co/Mxrhs2rF/1771281319712.jpg',
        'https://i.ibb.co/RGKvM0Qf/1771281126588.jpg',
        'https://i.ibb.co/LdNqH4R6/1771281335321.jpg'
      ]
    }
  ];

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      if (selectedCategory !== 'All' && event.category !== selectedCategory) return false;
      return true;
    });
  }, [selectedCategory]);

  const displayedEvents = useMemo(() => {
    return filteredEvents.slice(0, displayLimit);
  }, [filteredEvents, displayLimit]);

  const allArchiveImages = useMemo(() => {
    return events.flatMap(e => e.images.map((img, i) => ({ url: img, eventId: e.id, index: i, title: e.title })));
  }, [events]);

  const handleThumbnailClick = (eventId: string, imageUrl: string) => {
    setSelectedEventImages(prev => ({ ...prev, [eventId]: imageUrl }));
  };

  const openLightbox = (url: string, eventId: string, index: number) => {
    setActiveImage({ url, eventId, index });
  };

  const navigateLightbox = (dir: number) => {
    if (!activeImage) return;
    const currentEvent = events.find(e => e.id === activeImage.eventId);
    if (!currentEvent) return;
    const newIdx = (activeImage.index + dir + currentEvent.images.length) % currentEvent.images.length;
    setActiveImage({
      url: currentEvent.images[newIdx],
      eventId: activeImage.eventId,
      index: newIdx
    });
  };

  const handleLoadMore = () => {
    setDisplayLimit(prev => prev + 2);
  };

  return (
    <div className="bg-[#fcfbf7] min-h-screen page-transition overflow-x-hidden">
      
      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 reveal">
           <div className="flex-1">
            <span className="text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.4em] mb-4 block">Sacred Archive & Living History</span>
            <h1 className="text-4xl sm:text-7xl md:text-[10rem] font-black text-[#4A2C2A] tracking-tighter leading-[0.9] md:leading-[0.85] mb-6 md:mb-8">
              IMICIMBI <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#8B6F30]">YETHU.</span>
            </h1>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('archive-section')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-[#1A0F0E] text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#4A2C2A] transition-all shadow-xl"
            >
              Browse Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Visual Highlights - Dark Section */}
      <section className="py-16 md:py-32 bg-[#1A0F0E] text-white relative overflow-hidden rounded-[2rem] md:rounded-[5rem] mx-4 shadow-2xl">
        <div className="zulu-pattern absolute inset-0 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-10 md:mb-16 reveal-up">
            <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-4 md:mb-6 block">Visual Documentation</span>
            <h2 className="text-3xl md:text-7xl font-black tracking-tighter leading-tight">
               Highlights <span className="text-[#D4AF37]">&</span> Moments.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 md:gap-16">
            
            {/* Video 1: iBhunga */}
            <div className="reveal-left flex flex-col items-center">
               <div className="rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.4)] bg-black w-full max-w-sm hover:scale-[1.02] transition-transform">
                   <div style={{ position: 'relative', width: '100%', height: '0px', paddingBottom: '177.778%' }}>
                        <iframe 
                            allow="fullscreen" 
                            allowFullScreen 
                            height="100%" 
                            src="https://streamable.com/e/bm3jpb" 
                            width="100%" 
                            style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
                        ></iframe>
                    </div>
                </div>
                <div className="mt-6 md:mt-8 text-center">
                   <h3 className="text-xl md:text-2xl font-black text-white mb-2">iBhunga Boys Boot Camp</h3>
                   <p className="text-white/40 text-sm font-light">Discipline and Transformation</p>
                </div>
            </div>

            {/* Video 2: Cultural Festival */}
            <div className="reveal-right flex flex-col items-center">
               <div className="rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.4)] bg-black w-full max-w-sm hover:scale-[1.02] transition-transform">
                   <div style={{ position: 'relative', width: '100%', height: '0px', paddingBottom: '177.778%' }}>
                        <iframe 
                            allow="fullscreen" 
                            allowFullScreen 
                            height="100%" 
                            src="https://streamable.com/e/gcvuej" 
                            width="100%" 
                            style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
                        ></iframe>
                    </div>
                </div>
                <div className="mt-6 md:mt-8 text-center">
                   <h3 className="text-xl md:text-2xl font-black text-white mb-2">Cultural & Heritage Festivals</h3>
                   <p className="text-white/40 text-sm font-light">Celebration of Ubhedu and Song</p>
                </div>
            </div>

          </div>
        </div>
      </section>

      {/* Events Filter & List */}
      <section className="py-16 md:py-48 bg-[#fcfbf7]">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Filters */}
          <div className="flex flex-col xl:flex-row justify-between items-end gap-8 md:gap-12 mb-10 md:mb-20 reveal">
            <div className="w-full xl:w-auto">
              <h2 className="text-3xl md:text-8xl font-black text-[#4A2C2A] tracking-tighter leading-tight">Past <br/> Gatherings.</h2>
            </div>
            
            <div className="w-full xl:w-auto flex flex-col gap-6">
               {/* Categories */}
               <div className="flex flex-wrap gap-2 md:gap-3">
                 {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setDisplayLimit(2); }}
                      className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                        selectedCategory === cat
                          ? 'bg-[#4A2C2A] text-[#D4AF37]'
                          : 'bg-white border border-[#4A2C2A]/10 text-gray-500 hover:border-[#D4AF37]'
                      }`}
                    >
                      {cat === 'All' ? 'Zonke' : cat}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          {/* List */}
          {displayedEvents.length > 0 ? (
            <div className="space-y-16 md:space-y-32">
              {displayedEvents.map((event, idx) => (
                <div key={event.id} className="group reveal-up">
                  <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
                    {/* Visuals */}
                    <div className="lg:col-span-7">
                        <div className="relative aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl mb-4 md:mb-6 cursor-pointer" onClick={() => openLightbox(selectedEventImages[event.id] || event.image, event.id, 0)}>
                           <img src={selectedEventImages[event.id] || event.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={event.title} />
                           <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/90 backdrop-blur px-3 py-2 md:px-4 md:py-2 rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#4A2C2A]">
                             {event.category}
                           </div>
                        </div>
                        {/* Thumbnails */}
                        <div className="flex gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
                            {event.images.map((img, i) => (
                              <div 
                                key={i}
                                onClick={() => handleThumbnailClick(event.id, img)} 
                                className={`w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden cursor-pointer border-2 transition-all flex-shrink-0 ${
                                  (selectedEventImages[event.id] || event.image) === img ? 'border-[#D4AF37]' : 'border-transparent opacity-60 hover:opacity-100'
                                }`}
                              >
                                <img src={img} className="w-full h-full object-cover" alt="" />
                              </div>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32">
                        <h3 className="text-2xl md:text-6xl font-black text-[#4A2C2A] mb-4 md:mb-8 leading-none tracking-tight">{event.title}</h3>
                        <p className="text-sm md:text-lg text-gray-500 font-light leading-relaxed mb-6 md:mb-10">{event.description}</p>
                        
                        <div className="flex items-center gap-2 mb-6 md:mb-8">
                           <i className="fa-solid fa-location-dot text-[#D4AF37]"></i>
                           <span className="text-[#4A2C2A] font-bold text-xs uppercase tracking-widest">{event.location}</span>
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="py-32 text-center opacity-50 reveal">
                <p>No events found matching your criteria.</p>
             </div>
          )}
          
          {displayLimit < filteredEvents.length && (
            <div className="mt-20 md:mt-32 text-center reveal-scale">
               <button onClick={handleLoadMore} className="bg-[#4A2C2A] text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-[#D4AF37] hover:text-[#4A2C2A] transition-all">
                  Load More Archives
               </button>
            </div>
          )}
        </div>
      </section>

      {/* Archive Grid */}
      <section id="archive-section" className="py-20 md:py-40 bg-[#1A0F0E] relative">
        <div className="zulu-pattern absolute inset-0 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-6 relative z-10">
           <div className="text-center mb-16 md:mb-20 reveal-up">
              <h2 className="text-white text-3xl md:text-8xl font-black tracking-tighter">The Full Archive.</h2>
           </div>
           
           <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {allArchiveImages.map((item, idx) => (
                 <div 
                   key={`${item.eventId}-${idx}`} 
                   className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in reveal-scale"
                   onClick={() => openLightbox(item.url, item.eventId, item.index)}
                 >
                    <img src={item.url} alt="" className="w-full h-auto transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <i className="fa-solid fa-expand text-white text-2xl"></i>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <button className="absolute top-8 right-8 text-white/50 hover:text-white text-4xl z-50">
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
             <img src={activeImage.url} className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" alt="" />
             
             <button 
               className="absolute left-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center"
               onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
             >
                <i className="fa-solid fa-chevron-left"></i>
             </button>
             <button 
               className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center"
               onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
             >
                <i className="fa-solid fa-chevron-right"></i>
             </button>
          </div>
        </div>
      )}
    </div>
  );
};

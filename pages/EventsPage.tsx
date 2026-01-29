
import React, { useState, useMemo } from 'react';
import { PastEvent, VideoAsset } from '../types';

export const EventsPage: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);
  const [activeImage, setActiveImage] = useState<{url: string, eventId: string, index: number} | null>(null);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [selectedEventImages, setSelectedEventImages] = useState<Record<string, string>>({});
  const [displayLimit, setDisplayLimit] = useState<number>(2);

  const events: PastEvent[] = [
    {
      id: '1',
      title: 'Umgangela Peace 2023',
      date: 'Sep 24, 2023',
      location: 'Umlazi, KZN',
      category: 'Tournament',
      description: 'Regulated competition celebrating discipline and mutual respect among the youth.',
      image: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=2070',
      images: [
        'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1000',
        'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1000',
        'https://images.unsplash.com/photo-1547039986-77e810a9967e?q=80&w=1000',
        'https://images.unsplash.com/photo-1560032918-6086f68c5b0f?q=80&w=1000'
      ]
    },
    {
      id: '2',
      title: 'Heritage Dialogue',
      date: 'Jun 16, 2023',
      location: 'Durban Hub',
      category: 'Dialogue',
      description: 'A deep dive into Zulu oral traditions and the role of manhood in modern society.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
      images: [
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000',
        'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1000',
        'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000',
        'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1000'
      ]
    },
    {
      id: '3',
      title: 'Youth Leadership Workshop',
      date: 'Mar 12, 2023',
      location: 'Pietermaritzburg',
      category: 'Workshop',
      description: 'Empowering the next generation with traditional leadership principles and ethical values.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070',
      images: [
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000',
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000'
      ]
    },
    {
      id: '4',
      title: 'Cultural Festival 2022',
      date: 'Dec 15, 2022',
      location: 'Eshowe, KZN',
      category: 'Tournament',
      description: 'A grand celebration of Zulu art, music, and martial skills under the summer sun.',
      image: 'https://images.unsplash.com/photo-1547039986-77e810a9967e?q=80&w=2070',
      images: [
        'https://images.unsplash.com/photo-1547039986-77e810a9967e?q=80&w=1000',
        'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1000'
      ]
    }
  ];

  const videos: VideoAsset[] = [
    {
      id: 'v1',
      title: 'The Essence of Manhood',
      thumbnail: 'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?q=80&w=1000',
      videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      duration: '08:42'
    }
  ];

  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      const eventDate = new Date(event.date).getTime();
      const start = startDate ? new Date(startDate).getTime() : null;
      const end = endDate ? new Date(endDate).getTime() : null;
      if (start && eventDate < start) return false;
      if (end && eventDate > end) return false;
      return true;
    });
  }, [startDate, endDate]);

  const displayedEvents = useMemo(() => {
    return filteredEvents.slice(0, displayLimit);
  }, [filteredEvents, displayLimit]);

  const allArchiveImages = useMemo(() => {
    return events.flatMap(e => e.images.map((img, i) => ({ url: img, eventId: e.id, index: i, title: e.title })));
  }, [events]);

  const activeVideo = videos.find(v => v.id === activeVideoId);

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
      {/* Editorial Header */}
      <header className="pt-28 md:pt-40 pb-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 reveal">
           <div className="flex-1">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black text-[#4A2C2A] tracking-tighter leading-[0.85] mb-6">
              IMICIMBI <br/> <span className="text-[#D4AF37]">YETHU.</span>
            </h1>
            <div className="h-px w-24 bg-[#D4AF37] mb-6"></div>
            <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.6em] font-black">Sacred Archive & Living History</p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => document.getElementById('archive-section')?.scrollIntoView({behavior: 'smooth'})}
              className="bg-[#4A2C2A] text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#4A2C2A] transition-all shadow-xl"
            >
              Browse Gallery
            </button>
          </div>
        </div>
      </header>

      {/* Featured Video Section */}
      <section className="py-16 md:py-32 bg-[#111111] relative overflow-hidden">
        <div className="zulu-pattern absolute inset-0 opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="reveal-left">
              <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.4em] mb-4 block">Visual Documentation</span>
              <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
                Watch the <br className="hidden md:block"/> Spirit Awake.
              </h2>
              <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
                Our cinematic archives capture the raw energy and discipline of traditional Zulu gatherings. Every frame is a testament to our enduring legacy.
              </p>
            </div>
            
            {videos.map(vid => (
              <div key={vid.id} className="group relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden aspect-video border-4 border-white/5 cursor-pointer shadow-[0_40px_100px_rgba(0,0,0,0.4)] reveal-right" onClick={() => setActiveVideoId(vid.id)}>
                <img src={vid.thumbnail} className="w-full h-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-110" alt={vid.title} />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-32 md:h-32 bg-white text-[#4A2C2A] rounded-full flex items-center justify-center shadow-2xl transition-all group-hover:scale-110 group-hover:bg-[#D4AF37]">
                    <i className="fa-solid fa-play text-2xl md:text-4xl ml-2"></i>
                  </div>
                </div>
                <div className="absolute bottom-10 left-10 right-10">
                   <p className="text-[#D4AF37] font-black text-[10px] uppercase tracking-widest mb-2">Now Playing</p>
                   <h3 className="text-2xl md:text-3xl font-black text-white">{vid.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Timeline with Integrated Galleries */}
      <section className="py-24 md:py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20 reveal">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-8xl font-black text-[#4A2C2A] tracking-tighter leading-[0.9]">Sacred <br/> Landmarks.</h2>
              <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.4em] mt-6 flex items-center gap-4">
                <span className="h-px w-8 bg-[#D4AF37]"></span>
                Chronicles of our journey
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch gap-4 bg-[#fcfbf7] p-4 rounded-[2rem] border border-[#4A2C2A]/5 shadow-inner">
               <div className="px-4">
                  <label className="text-[8px] font-black uppercase text-gray-400 mb-1 block">Timeline Start</label>
                  <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="bg-transparent text-xs font-black outline-none border-b border-[#4A2C2A]/10 focus:border-[#D4AF37] py-1" />
               </div>
               <div className="px-4">
                  <label className="text-[8px] font-black uppercase text-gray-400 mb-1 block">Timeline End</label>
                  <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="bg-transparent text-xs font-black outline-none border-b border-[#4A2C2A]/10 focus:border-[#D4AF37] py-1" />
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            {displayedEvents.map((event, idx) => (
              <div 
                key={event.id} 
                className="group flex flex-col reveal"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                {/* Main Hero Media Area */}
                <div className="relative aspect-video rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl mb-8">
                  <img 
                    src={selectedEventImages[event.id] || event.image} 
                    className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 cursor-zoom-in" 
                    alt={event.title}
                    onClick={() => openLightbox(selectedEventImages[event.id] || event.image, event.id, 0)}
                  />
                  <div className="absolute top-6 left-6 bg-[#D4AF37] text-[#4A2C2A] px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {event.category}
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-white text-[10px] font-black border border-white/20">
                    {event.images.length} PHOTOS
                  </div>
                </div>

                {/* VISIBLE GALLERY THUMBNAILS */}
                <div className="flex gap-3 overflow-x-auto pb-4 mb-8 scrollbar-hide">
                  {event.images.map((img, i) => (
                    <button 
                      key={i} 
                      onClick={() => handleThumbnailClick(event.id, img)}
                      className={`flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-2xl overflow-hidden border-4 transition-all duration-500 ${
                        (selectedEventImages[event.id] || event.image) === img 
                          ? 'border-[#D4AF37] scale-105 shadow-xl' 
                          : 'border-transparent opacity-50 grayscale hover:opacity-100 hover:grayscale-0'
                      }`}
                    >
                      <img src={img} className="w-full h-full object-cover" alt={`Gallery ${i}`} />
                    </button>
                  ))}
                </div>

                <div className="px-4">
                  <div className="flex items-center gap-4 mb-4">
                    <p className="text-[#D4AF37] font-black text-xs uppercase tracking-widest">{event.date}</p>
                    <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                    <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">{event.location}</p>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-black text-[#4A2C2A] mb-6 tracking-tighter leading-none">{event.title}</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed mb-8 max-w-xl">
                    {event.description}
                  </p>
                  <button className="flex items-center gap-3 text-[#4A2C2A] font-black uppercase text-[10px] tracking-[0.3em] hover:text-[#D4AF37] transition-all group/link">
                    Full Event Report
                    <div className="w-12 h-px bg-[#4A2C2A] group-hover/link:w-20 group-hover/link:bg-[#D4AF37] transition-all"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {displayLimit < filteredEvents.length && (
            <div className="mt-20 text-center reveal">
              <button 
                onClick={handleLoadMore}
                className="group relative px-12 py-5 bg-[#4A2C2A] text-white font-black rounded-full uppercase tracking-widest text-[10px] hover:bg-[#D4AF37] hover:text-[#4A2C2A] transition-all duration-500 shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Discover More Archives
                  <i className="fa-solid fa-plus transition-transform group-hover:rotate-180"></i>
                </span>
                <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* DEDICATED GALLERY SECTION: THE SACRED ARCHIVE */}
      <section id="archive-section" className="py-24 md:py-48 bg-[#fcfbf7] border-t border-[#4A2C2A]/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal">
            <h2 className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.8em] mb-4">Umlando Obonakalayo</h2>
            <h3 className="text-4xl md:text-8xl font-black text-[#4A2C2A] tracking-tighter mb-8">The Sacred Archive.</h3>
            <div className="h-px w-32 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {allArchiveImages.map((item, idx) => (
              <div 
                key={`${item.eventId}-${idx}`} 
                className="relative group rounded-[2rem] overflow-hidden cursor-zoom-in shadow-lg hover:shadow-2xl transition-all duration-700 break-inside-avoid reveal"
                onClick={() => openLightbox(item.url, item.eventId, item.index)}
                style={{ transitionDelay: `${(idx % 6) * 100}ms` }}
              >
                <img src={item.url} alt={item.title} className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A2C2A] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-all duration-500 flex flex-col justify-end p-8">
                  <span className="text-[#D4AF37] text-[8px] font-black uppercase tracking-widest mb-1">{item.title}</span>
                  <p className="text-white font-bold text-xs uppercase tracking-widest">View Master Record</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Immersive Viewer */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[100] bg-[#4A2C2A] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500"
          onClick={() => setActiveImage(null)}
        >
          {/* Controls */}
          <button 
            className="absolute top-8 right-8 text-white/40 hover:text-white text-4xl z-50 transition-transform hover:rotate-90"
            onClick={() => setActiveImage(null)}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#4A2C2A] rounded-full flex items-center justify-center transition-all z-50 shadow-2xl"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
          >
            <i className="fa-solid fa-chevron-left text-xl md:text-3xl"></i>
          </button>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-20 md:h-20 bg-white/5 hover:bg-[#D4AF37] text-white hover:text-[#4A2C2A] rounded-full flex items-center justify-center transition-all z-50 shadow-2xl"
            onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
          >
            <i className="fa-solid fa-chevron-right text-xl md:text-3xl"></i>
          </button>

          <div 
            className="relative w-full max-w-6xl max-h-full flex items-center justify-center animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage.url} 
              className="max-w-full max-h-[85vh] object-contain rounded-2xl md:rounded-[3rem] shadow-[0_0_150px_rgba(0,0,0,0.8)] border-4 border-white/5" 
              alt="Lightbox" 
            />
            <div className="absolute -bottom-16 left-0 right-0 text-center">
              <span className="text-[#D4AF37] font-black text-[10px] uppercase tracking-[0.5em]">Frame {activeImage.index + 1} of the Archive</span>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {activeVideoId && activeVideo && (
        <div className="fixed inset-0 z-[100] bg-[#4A2C2A]/98 backdrop-blur-3xl flex items-center justify-center p-4">
          <button onClick={() => setActiveVideoId(null)} className="absolute top-8 right-8 text-white text-4xl hover:text-[#D4AF37] transition-all">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="w-full max-w-6xl aspect-video rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-8 border-white/5">
            <iframe src={`${activeVideo.videoUrl}?autoplay=1`} className="w-full h-full" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowLeft, Play, Image as ImageIcon, Video, Upload, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

interface CaseDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

interface ShootMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  tag: string;
}

// Default 6 brand shoot cards per project
const DEFAULT_SHOOT_MEDIA: Record<string, ShootMedia[]> = {
  'amorshots': [
    {
      id: 'amor-1',
      type: 'image',
      url: '/images/amor01.jpg',
      title: '',
      tag: ''
    },
    {
      id: 'amor-2',
      type: 'image',
      url: '/images/amor22.JPG',
      title: '',
      tag: ''
    },
    {
      id: 'amor-3',
      type: 'image',
      url: '/images/amor02.jpg',
      title: '',
      tag: ''
    },
    {
      id: 'amor-4',
      type: 'video',
      url: '/videos/amornew.mp4',
      title: '',
      tag: ''
    },
    {
      id: 'amor-5',
      type: 'image',
      url: '/images/amor33.jpg',
      title: '',
      tag: ''
    },
    {
      id: 'amor-6',
      type: 'video',
      url: '/videos/amor13.mp4',
      title: '',
      tag: ''
    }
  ],
  'bannabizz': [
    {
      id: 'bannabizz-1',
      type: 'image',
      url: '/images/amber.png',
      title: '',
      tag: ''
    },
    {
      id: 'bannabizz-2',
      type: 'video',
      url: '/videos/BANNABIZZu.mp4',
      title: '',
      tag: ''
    },
    {
      id: 'bannabizz-3',
      type: 'image',
      url: '/images/aksa.png',
      title: '',
      tag: ''
    },
    {
      id: 'bannabizz-4',
      type: 'video',
      url: '/videos/bannabizzdisha.mp4',
      title: '',
      tag: ''
    },
    {
      id: 'bannabizz-5',
      type: 'image',
      url: '/images/shopbannabizz.png',
      title: '',
      tag: ''
    },
    {
      id: 'bannabizz-6',
      type: 'video',
      url: '/videos/bannabizzAI.mp4',
      title: '',
      tag: ''
    }
  ],
  'kavira': [
    {
      id: 'kavira-1',
      type: 'image',
      url: '/images/kavira01.jpg',
      title: '',
      tag: ''
    },
    {
      id: 'kavira-2',
      type: 'image',
      url: '/images/kavira03.JPG',
      title: '',
      tag: ''
    },
    {
      id: 'kavira-3',
      type: 'image',
      url: '/images/kavira06.png',
      title: '',
      tag: ''
    },
    {
      id: 'kavira-4',
      type: 'video',
      url: '/videos/reelkavira1.mp4',
      title: '',
      tag: ''
    },
    {
      id: 'kavira-5',
      type: 'image',
      url: '/images/kaviracover.png',
      title: '',
      tag: ''
    },
    {
      id: 'kavira-6',
      type: 'video',
      url: '/videos/reelkavira2.mp4',
      title: '',
      tag: ''
    }
  ],
  'pestpro': [
    {
      id: 'pestpro-1',
      type: 'image',
      url: '/images/pestpro01.PNG',
      title: '',
      tag: ''
    },
    {
      id: 'pestpro-2',
      type: 'video',
      url: '/videos/Video-25361.mp4',
      title: '',
      tag: ''
    },
    {
      id: 'pestpro-3',
      type: 'image',
      url: '/images/pestpro02.PNG',
      title: 'Serum Texture Macro #03',
      tag: ''
    },
    {
      id: 'pestpro-4',
      type: 'video',
      url: '/videos/Pest pro Reel ( Final ).mp4',
      title: '',
      tag: ''   
    },
    {
      id: 'pestpro-5',
      type: 'image',
      url: '/images/1.png',
      title: '',
      tag: ''
    },
    {
      id: 'pestpro-6',
      type: 'video',
      url: '/videos/pestpronew.mp4',
      title: '',
      tag: ''
    }
  ]
};

// Generic fallback cards for any new custom project
const FALLBACK_SHOOT_MEDIA: ShootMedia[] = [
  {
    id: 'f-1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    title: 'Brand Shoot #01',
    tag: 'EDITORIAL STILLS'
  },
  {
    id: 'f-2',
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    title: 'Brand Campaign Film #02',
    tag: 'MOTION REEL'
  },
  {
    id: 'f-3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=800',
    title: 'Macro Detail Shoot #03',
    tag: 'TEXTURE STILLS'
  },
  {
    id: 'f-4',
    type: 'video',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    title: 'Atmospheric Scene #04',
    tag: 'CINEMATIC REEL'
  },
  {
    id: 'f-5',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    title: 'Studio Lighting #05',
    tag: 'STUDIO SET'
  },
  {
    id: 'f-6',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800',
    title: 'Behind The Scenes #06',
    tag: 'BTS STILLS'
  }
];

export default function CaseDetailsModal({ project, onClose }: CaseDetailsModalProps) {
  const [mediaItems, setMediaItems] = useState<ShootMedia[]>([]);
  const [activeMediaIndex, setActiveMediaIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      const defaults = DEFAULT_SHOOT_MEDIA[project.id] || FALLBACK_SHOOT_MEDIA;
      setMediaItems(defaults);
      setActiveMediaIndex(null);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  // Custom File Upload Handler (Pictures & Videos)
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    const isVideo = file.type.startsWith('video/');
    const fileUrl = URL.createObjectURL(file);

    const newMedia: ShootMedia = {
      id: `custom-${Date.now()}`,
      type: isVideo ? 'video' : 'image',
      url: fileUrl,
      title: file.name.split('.')[0] || 'Uploaded Shoot Media',
      tag: isVideo ? 'CUSTOM VIDEO' : 'CUSTOM PHOTO'
    };

    setMediaItems((prev) => [newMedia, ...prev.slice(0, 5)]); // Maintain 6 total cards
  };

  const handleNextMedia = () => {
    if (activeMediaIndex === null) return;
    setActiveMediaIndex((activeMediaIndex + 1) % mediaItems.length);
  };

  const handlePrevMedia = () => {
    if (activeMediaIndex === null) return;
    setActiveMediaIndex((activeMediaIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  const currentMedia = activeMediaIndex !== null ? mediaItems[activeMediaIndex] : null;

  return (
    <AnimatePresence>
      <motion.div
        id="case-modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-50 flex justify-end bg-neutral-950/70 backdrop-blur-sm overflow-y-auto"
      >
        {/* Full screen panel sliding in from the right */}
        <motion.div
          id="case-modal-panel"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 220 }}
          className="w-full max-w-[1200px] min-h-screen bg-[#fcfcfc] dark:bg-[#121212] text-neutral-900 dark:text-neutral-50 border-l border-neutral-100 dark:border-neutral-900 shadow-2xl relative flex flex-col font-sans selection:bg-neutral-800 dark:selection:bg-neutral-800 selection:text-white"
        >
          {/* Header Bar */}
          <div id="case-modal-header" className="sticky top-0 z-20 flex justify-between items-center py-4 px-4 sm:px-6 md:px-12 bg-[#fcfcfc]/90 dark:bg-[#121212]/90 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-900">
            <span className="font-sans text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest truncate max-w-[200px] sm:max-w-none">
              STUDIO ARCHIVE // CASE STUDY: {project.id}
            </span>
            
            {/* Close Button */}
            <button
              id="case-modal-close-btn"
              onClick={onClose}
              className="group flex items-center gap-1.5 font-sans text-xs font-bold text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 transition-colors uppercase cursor-pointer shrink-0"
            >
              CLOSE
              <span className="flex items-center justify-center w-7 h-7 rounded-none border border-neutral-200 dark:border-neutral-800 bg-[#fcfcfc] dark:bg-neutral-900 group-hover:bg-neutral-900 dark:group-hover:bg-[#fcfcfc] group-hover:text-neutral-50 dark:group-hover:text-neutral-955 transition-all">
                <X size={11} />
              </span>
            </button>
          </div>

          {/* Immersive Scrollable Content */}
          <div id="case-modal-scroll" className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-12 space-y-8 sm:space-y-12 md:space-y-16">
            
            {/* Case Title & Subtitle */}
            <div id="case-meta-header" className="space-y-4 max-w-4xl border-b border-neutral-100 dark:border-neutral-900 pb-6 sm:pb-8">
              <span className="font-sans text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.25em] block">
                {project.categoryLabel}
              </span>
              <h1 id="case-title" className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-[-0.03em] uppercase leading-[0.95] text-neutral-900 dark:text-neutral-50 break-words">
                {project.title}
              </h1>
              <p id="case-subtitle" className="text-base sm:text-xl font-normal text-neutral-900/70 dark:text-neutral-50/70 max-w-2xl font-sans">
                {project.subtitle}
              </p>
            </div>

            {/* Huge Full Bleed Hero Media */}
            <div id="case-hero-media" className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-900">
              <img
                id="case-hero-image"
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-0"
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{ backgroundColor: project.accentColor }}
              />
            </div>

            {/* Case metadata Grid */}
            <div id="case-meta-grid" className="grid grid-cols-2 md:grid-cols-4 gap-6 font-sans border-y border-neutral-200 dark:border-neutral-800 py-8 my-2">
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">CLIENT</span>
                <span className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-50">{project.client}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">ROLE</span>
                <span className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-50">BRAND ARCHITECTURE</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">SERVICES</span>
                <span className="flex flex-col font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-50 leading-relaxed">
                  {project.services.map((serv, i) => (
                    <span key={i}>{serv}</span>
                  ))}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-bold text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">YEAR // TIMELINE</span>
                <span className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-50">{project.year} // 12 WEEKS</span>
              </div>
            </div>

            {/* Brief Narrative split column: Overview / Challenge / Solution */}
            <div id="case-narrative" className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
              {/* Left Column: Project Brief & Challenge */}
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-4">
                  <h3 className="font-sans text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.2em]">
                    01 / BRIEF OVERVIEW
                  </h3>
                  <p id="case-overview" className="text-base sm:text-lg text-neutral-900/80 dark:text-neutral-50/80 font-normal font-sans leading-relaxed">
                    {project.overview}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-sans text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.2em]">
                    02 / THE CHALLENGE
                  </h3>
                  <p id="case-challenge" className="text-base sm:text-lg text-neutral-900/80 dark:text-neutral-50/80 font-normal font-sans leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </div>

              {/* Right Column: Creative Direction & Brand DNA */}
              <div className="lg:col-span-5 space-y-10">
                <div className="space-y-4">
                  <h3 className="font-sans text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.2em]">
                    03 / SOLUTION & OUTCOME
                  </h3>
                  <p id="case-solution" className="text-base sm:text-lg text-neutral-900/80 dark:text-neutral-50/80 font-normal font-sans leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Brand Guidelines & Color Palettes Section */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-sans text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.2em]">
                    04 / BRAND COLOR SYSTEM
                  </h3>
                  <div className="flex items-center gap-4">
                    {project.colors.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-2">
                        <div
                          className="w-10 h-10 rounded-none border border-neutral-200 dark:border-neutral-800"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-sans text-xs font-semibold text-neutral-600 dark:text-neutral-300 tracking-wider">
                          {color.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* BRAND SHOOT & MEDIA GALLERY SECTION (Replaces System Specification) */}
            <div id="brand-shoot-gallery-section" className="border border-neutral-200 dark:border-neutral-800 p-4 sm:p-6 md:p-8 bg-neutral-100/30 dark:bg-neutral-900/20 font-sans space-y-6">
              
              {/* Gallery Header */}
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
                <div>
                  <span className="font-sans text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-[0.25em] block">
                    05 / BRAND SHOOT & MEDIA GALLERY
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-50 mt-1">
                    SHOOT STILLS & CAMPAIGN FILMS
                  </h3>
                </div>
              </div>

              {/* 6 Small Display Cards (3 in a line, 2 rows) */}
              <div id="shoot-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {mediaItems.slice(0, 6).map((item, idx) => (
                  <div
                    id={`shoot-card-${idx}`}
                    key={item.id}
                    onClick={() => setActiveMediaIndex(idx)}
                    className="group relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer flex flex-col justify-between transition-all duration-300 hover:border-neutral-900 dark:hover:border-neutral-100"
                  >
                    {/* Media preview (Image or Video) */}
                    {item.type === 'video' ? (
                      <div className="relative w-full h-full overflow-hidden">
                        <video
                          src={item.url}
                          muted
                          loop
                          playsInline
                          autoPlay
                          className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-neutral-950/80 text-white p-1.5 border border-neutral-700/50">
                          <Video size={12} />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full h-full overflow-hidden">
                        <img
                          src={item.url}
                          alt={item.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        />
                        <div className="absolute top-2 right-2 bg-neutral-950/80 text-white p-1.5 border border-neutral-700/50">
                          <ImageIcon size={12} />
                        </div>
                      </div>
                    )}

                    {/* Bottom Info Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent p-3 text-neutral-50 flex justify-between items-end">
                      <div>
                        <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-neutral-300 uppercase block">
                          [ 0{idx + 1} ] • {item.tag}
                        </span>
                        <h4 className="font-sans text-xs sm:text-sm font-bold uppercase tracking-tight line-clamp-1">
                          {item.title}
                        </h4>
                      </div>

                      <span className="p-1.5 bg-neutral-100 text-neutral-950 rounded-none group-hover:bg-neutral-950 group-hover:text-white border border-neutral-100 transition-colors">
                        <Maximize2 size={11} />
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-xs font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest pt-2">
                <span>6 SHOOT DISPLAY CARDS LOADED</span>
                <span>CLICK ANY CARD TO VIEW HIGH-RES MEDIA</span>
              </div>
            </div>

            {/* Bottom Actions Footer */}
            <div className="border-t border-neutral-100 dark:border-neutral-900 pt-8 flex justify-between items-center font-sans text-xs font-bold text-neutral-600 dark:text-neutral-400">
              <button
                id="case-modal-back-btn"
                onClick={onClose}
                className="flex items-center gap-1.5 text-neutral-600 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 transition-colors uppercase cursor-pointer"
              >
                <ArrowLeft size={12} /> BACK TO GRID
              </button>
              <span className="text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold text-xs">
                IKAYA MEDIA ©2026 ALL RIGHTS RESERVED
              </span>
            </div>

          </div>
        </motion.div>

        {/* LIGHTBOX / MEDIA VIEWER MODAL */}
        <AnimatePresence>
          {currentMedia && (
            <motion.div
              id="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-neutral-950/90 backdrop-blur-md"
            >
              <div id="lightbox-container" className="relative w-full max-w-5xl bg-neutral-950 text-neutral-50 border border-neutral-800 p-6 md:p-8 flex flex-col gap-6 font-sans">
                
                {/* Lightbox Header Bar */}
                <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                      SHOOT MEDIA VIEWER // {currentMedia.tag}
                    </span>
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight mt-0.5">
                      {currentMedia.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setActiveMediaIndex(null)}
                    className="p-2 border border-neutral-700 hover:border-neutral-100 bg-neutral-900 hover:bg-neutral-100 hover:text-neutral-950 transition-all cursor-pointer"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Main Media Showcase (Full Picture or Video Player) */}
                <div className="relative aspect-[16/9] w-full max-h-[65vh] bg-neutral-900 border border-neutral-800 flex items-center justify-center overflow-hidden">
                  {currentMedia.type === 'video' ? (
                    <video
                      src={currentMedia.url}
                      controls
                      autoPlay
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={currentMedia.url}
                      alt={currentMedia.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain"
                    />
                  )}
                </div>

                {/* Lightbox Footer & Navigation Controls */}
                <div className="flex justify-between items-center border-t border-neutral-800 pt-4">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={handlePrevMedia}
                      className="flex items-center gap-1 px-3 py-1.5 border border-neutral-800 hover:border-neutral-100 bg-neutral-900 text-xs font-bold uppercase cursor-pointer transition-colors"
                    >
                      <ChevronLeft size={14} /> PREV
                    </button>
                    <button
                      onClick={handleNextMedia}
                      className="flex items-center gap-1 px-3 py-1.5 border border-neutral-800 hover:border-neutral-100 bg-neutral-900 text-xs font-bold uppercase cursor-pointer transition-colors"
                    >
                      NEXT <ChevronRight size={14} />
                    </button>
                  </div>

                  <span className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase">
                    ITEM {(activeMediaIndex ?? 0) + 1} OF {mediaItems.length}
                  </span>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </AnimatePresence>
  );
}

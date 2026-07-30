import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, Quote } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  philosophy: string;
  quote: string;
  skills: string[];
}

export default function About() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isFounderBioOpen, setIsFounderBioOpen] = useState(false);

  const stats = [
    { num: '2026', label: 'ESTABLISHED', detail: 'Founded in Jaipur'},
    { num: '12+', label: 'CLIENTS', detail: 'Amor Shots, BannaBizz, Kavira' },
    { num: '40+', label: 'TESTIMONIALS', detail: 'From pre-seed tech to heritage fashion' },
    { num: '94%', label: 'PARTNERSHIP RETENTION', detail: 'Securing long-term strategic relationships' }
  ];

const TEAM: TeamMember[] = [
    {
      id: 'elitsa-petrova',
      name: 'Daksh Pratap Singh Tanwar',
      role: 'Chief Officer of Operations (COO)',
      bio: 'Runs the engine room of the agency — client operations, delivery pipelines, and resource allocation — so every campaign ships on time and on standard.',
      philosophy: 'A brand is not a logo; it is a gut feeling, engineered with precision.',
      quote: 'Simplicity is the ultimate sophistication.',
      skills: ['OPERATIONS', 'PROCESS DESIGN', 'TEAM MANAGEMENT']
    },
    {

      id: 'maxence-ikaya',
      name: 'Saksham Kumar Jangir',
      role: 'Head of AI Automations',
      bio: 'Builds the automation and AI infrastructure behind performance marketing — from lead workflows to reporting pipelines — so campaigns run leaner and faster.',
      philosophy: 'Code is dynamic paint. It must be polished until it reflects light.',
      quote: 'Performance is an aesthetic discipline.',
      skills: ['AI AUTOMATION', 'PERFORMANCE MARKETING', 'WORKFLOW SYSTEMS']
    },
    {
      id: 'arthur-vance',
      name: 'Jatin Sharma',
      role: 'Sales Officer',
      bio: 'Drives new business from first conversation to signed contract, building the pipeline and relationships that fuel the agency\'s growth.',
      philosophy: 'White space is not empty space; it is the oxygen that lets form breathe.',
      quote: 'Contrast creates visual consciousness.',
      skills: ['SALES STRATEGY', 'CLIENT ACQUISITION', 'NEGOTIATION']
    },
    {
      id: 'yuki-tanaka',
      name: 'Rashi Duggal',
      role: 'Creative Director',
      bio: 'Shapes the creative vision across every client account, turning strategy into campaigns, concepts, and content that carry a distinct voice.',
      philosophy: 'Motion must always have a physical, natural or emotional cause.',
      quote: 'Excellent ease of use is invisible.',
      skills: ['CREATIVE DIRECTION', 'BRAND STORYTELLING', 'CAMPAIGN CONCEPTS']
    },
    {
      id: 'sophia-rossi',
      name: 'Anurag',
      role: 'Cinematographer and Editor',
      bio: 'Shoots and cuts the agency\'s film and video work, shaping raw footage into polished visual stories through framing, pacing, and color.',
      philosophy: 'First construct the mathematical grid, then liberate the soul.',
      quote: 'The grid is a liberating constraint.',
      skills: ['CINEMATOGRAPHY', 'VIDEO EDITING', 'COLOR GRADING']
    },
    {
      id: 'marcus-lindqvist',
      name: 'Saksham',
      role: 'Videographer',
      bio: 'Captures the footage behind client shoots and campaigns, from on-site production to short-form content built for social platforms.',
      philosophy: 'Strategy without form is vapor. Form without strategy is purely decorative.',
      quote: 'Know precisely what to exclude.',
      skills: ['VIDEOGRAPHY', 'SHORT-FORM CONTENT', 'ON-SITE PRODUCTION']
    }
  ];

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="about"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto border-b border-neutral-100 dark:border-neutral-900 select-none"
    >
      {/* Background grid helper lines */}
      <div className="absolute left-4 sm:left-6 md:left-12 top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900/30 pointer-events-none" />
      <div className="absolute right-4 sm:right-6 md:right-12 top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900/30 pointer-events-none" />

      {/* Main Grid split */}
      <div id="about-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pl-0 md:pl-6">
        
        {/* Left: About Intro */}
        <div id="about-left" className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div>
            <span className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] block mb-3">
              03 / STUDIO STORY
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-sans font-bold tracking-[-0.03em] uppercase text-neutral-900 dark:text-neutral-50">
              WHO WE ARE
            </h2>
          </div>

          <h3 id="about-tagline" className="text-lg sm:text-xl md:text-2xl font-normal font-sans text-neutral-800 dark:text-neutral-200 leading-snug">
            We are a full-service marketing agency. We shape brand strategy, content, and performance into growth that sticks.
          </h3>
        </div>

        {/* Right: Detailed Story Philosophy */}
        <div id="about-right" className="lg:col-span-7 space-y-6 sm:space-y-8 font-sans font-normal text-neutral-900/70 dark:text-neutral-50/70 text-sm sm:text-base leading-relaxed">
          <p id="about-p1">
            Ikaya Media was founded with a single mandate: to end marketing waste and replace it with intent-driven growth. In an age of noise, the brands that endure are those with the courage to choose strategy over spend.
          </p>
          <p id="about-p2">
            We partner exclusively with authentic, quality-driven businesses — bringing together brand strategy, high-impact creative, and precision performance marketing under one cohesive studio. Before a customer spends their money, they spend their trust. We make sure yours is earned.
          </p>
        </div>

      </div>

      {/* Structured Stats Row Grid */}
      <div id="about-stats-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12 mt-16 sm:mt-20 md:mt-28 border-t border-neutral-100 dark:border-neutral-900 pt-8 sm:pt-12 pl-0 md:pl-6">
        {stats.map((stat, idx) => (
          <div id={`stat-box-${idx}`} key={idx} className="space-y-3 font-sans group">
            {/* Num statistic */}
            <span id={`stat-num-${idx}`} className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold tracking-[-0.03em] uppercase text-neutral-900 dark:text-neutral-50 group-hover:text-neutral-900/60 dark:group-hover:text-neutral-50/60 transition-colors block">
              {stat.num}
            </span>
            
            {/* Label */}
            <div className="flex flex-col gap-1.5 text-neutral-500 dark:text-neutral-400">
              <span id={`stat-label-${idx}`} className="font-bold uppercase tracking-[0.15em] text-[10px] text-neutral-900/85 dark:text-neutral-50/85">
                {stat.label}
              </span>
              <span id={`stat-detail-${idx}`} className="font-sans font-normal text-neutral-900/50 dark:text-neutral-50/50 text-[11px] leading-normal">
                {stat.detail}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Meet Our Founder & Team Roster Section */}
      <div id="team-section" className="mt-28 md:mt-36 border-t border-neutral-100 dark:border-neutral-900 pt-16 pl-0 md:pl-6 space-y-12">
        
        {/* Section Header */}
        <div id="team-header" className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-neutral-100 dark:border-neutral-900 pb-8">
          <div>
            <span className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] block mb-3">
              03.1 / HUMAN STRUCTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-[-0.03em] uppercase text-neutral-900 dark:text-neutral-50">
              FOUNDER & RESIDENTS
            </h2>
          </div>
          <p className="text-xs text-neutral-900/50 dark:text-neutral-50/50 uppercase tracking-[0.15em] font-sans font-bold">
            CLICK CARDS TO DISCOVER CREATIVE PERSPECTIVES
          </p>
        </div>

        {/* Master Team Grid Split */}
        <div id="team-master-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Founder Section Column (Left) */}
          <div id="founder-column" className="lg:col-span-5 space-y-6 lg:sticky lg:top-28 lg:h-fit">
            <span className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] block">
              MEET OUR FOUNDER
            </span>
            
            {/* Resized Founder Frame & Photo - Interactive Click Target */}
            <div
              id="founder-photo-frame"
              onClick={() => setIsFounderBioOpen(!isFounderBioOpen)}
              className="relative w-full max-w-[360px] aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 cursor-pointer group shadow-sm transition-all duration-300 hover:border-neutral-900 dark:hover:border-neutral-100"
            >
              <img
                id="founder-photo"
                src="/images/ikaya media founder.jpeg"
                alt="Adhayan Sharma"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out scale-100 group-hover:scale-105"
              />
              
              {/* Overlay Prompt */}
              <div className="absolute inset-0 bg-neutral-950/40 group-hover:bg-neutral-950/20 transition-colors flex flex-col justify-between p-3 text-neutral-50">
                <span className="text-[8px] font-bold uppercase tracking-[0.2em] bg-neutral-950/70 px-2 py-1 w-max border border-neutral-700/50">
                  {isFounderBioOpen ? 'CLOSE BIO' : 'CLICK PHOTO FOR BIO'}
                </span>
                <div>
                  <span className="font-sans text-[8px] font-bold tracking-[0.2em] uppercase text-neutral-300 block">FOUNDER</span>
                  <h4 className="font-sans text-sm font-bold tracking-tight uppercase">ADHAYAN SHAMRA</h4>
                </div>
              </div>
            </div>

            {/* Clickable Badge */}
            <button
              onClick={() => setIsFounderBioOpen(!isFounderBioOpen)}
              className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-900 dark:text-neutral-50 hover:underline flex items-center gap-2 cursor-pointer pt-1"
            >
              <span>{isFounderBioOpen ? '– HIDE FOUNDER PROFILE' : '+ VIEW FOUNDER DESCRIPTION'}</span>
            </button>

            {/* Founder Bio and Description - Toggleable on Click */}
            <AnimatePresence>
              {isFounderBioOpen && (
                <motion.div
                  id="founder-details"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="space-y-6 overflow-hidden border-t border-neutral-100 dark:border-neutral-900 pt-4"
                >
                  <p className="text-sm text-neutral-900/80 dark:text-neutral-50/80 font-sans font-normal leading-relaxed">
                    Adhayan Sharma founded Ikaya Media with a clear vision: to make marketing simple, impactful, and growth-driven. He leads the agency's creative direction, strategic positioning, and brand philosophy, ensuring every partnership is built on authenticity, measurable results, and long-term success.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Team Residents Column (Right) */}
          <div id="residents-column" className="lg:col-span-7 space-y-6">
            <span className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em] block">
              meet our team
            </span>

            {/* Grid of Team Cards */}
            <div id="team-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TEAM.map((member, index) => {
                const isExpanded = expandedId === member.id;
                return (
                  <div
                    id={`team-card-${member.id}`}
                    key={member.id}
                    onClick={() => toggleExpand(member.id)}
                    className={`p-6 border text-left transition-all duration-300 relative overflow-hidden flex flex-col justify-between cursor-pointer select-none ${
                      isExpanded
                        ? 'border-neutral-950 bg-neutral-950/[0.02] dark:border-neutral-100 dark:bg-neutral-100/[0.02] shadow-sm'
                        : 'border-neutral-100 hover:border-neutral-300 dark:border-neutral-900/60 dark:hover:border-neutral-800 bg-transparent'
                    }`}
                  >
                    <div>
                      {/* Top Row: Index and Plus/Minus sign */}
                      <div className="flex justify-between items-center font-sans">
                        <span className="text-[10px] font-bold text-neutral-900/30 dark:text-neutral-50/30">
                          [ 0{index + 1} ]
                        </span>
                        
                        <div className="text-neutral-900 dark:text-neutral-50">
                          {isExpanded ? <Minus size={12} /> : <Plus size={12} />}
                        </div>
                      </div>

                      {/* Name & Title */}
                      <h3 className="font-sans text-lg font-bold uppercase tracking-[-0.01em] text-neutral-900 dark:text-neutral-50 mt-6 leading-tight">
                        {member.name}
                      </h3>
                      <p className="font-sans text-[10px] font-bold text-neutral-900/50 dark:text-neutral-50/50 uppercase tracking-[0.15em] mt-1.5">
                        {member.role}
                      </p>
                    </div>

                    {/* Smooth expanding container */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          id={`team-card-expanded-${member.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-neutral-100 dark:border-neutral-900/60 space-y-4">
                            {/* Bio */}
                            <p className="text-xs text-neutral-900/65 dark:text-neutral-50/65 leading-relaxed font-sans font-normal">
                              {member.bio}
                            </p>

                            {/* Philosophy */}
                            {/* Skills Tag Row */}
                            <div className="space-y-1.5 pt-1">
                              <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                SPECIALTIES
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {member.skills.map((skill) => (
                                  <span
                                    key={skill}
                                    className="text-[8px] font-bold px-2 py-0.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-900/60 dark:text-neutral-50/60 uppercase tracking-wider"
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

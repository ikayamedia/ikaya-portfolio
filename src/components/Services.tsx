import { useState } from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data';

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('strategy');

  return (
    <section
      id="services"
      className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto border-b border-neutral-100 dark:border-neutral-900"
    >
      {/* Background grid helper lines */}
      <div className="absolute left-4 sm:left-6 md:left-12 top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900/30 pointer-events-none" />
      <div className="absolute right-4 sm:right-6 md:right-12 top-0 bottom-0 w-[1px] bg-neutral-100 dark:bg-neutral-900/30 pointer-events-none" />

      {/* Main Container */}
      <div id="services-container" className="pl-0 md:pl-6 space-y-8 sm:space-y-12">
        
        {/* Horizontal Header Row: Capabilities Title + Description in a horizontal line */}
        <div id="services-horizontal-header" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start pb-8 sm:pb-12 border-b border-neutral-100 dark:border-neutral-900">
          {/* Left Title */}
          <div className="md:col-span-6 space-y-2">
            <span className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] block">
              02 / EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-sans font-bold tracking-[-0.03em] uppercase text-neutral-900 dark:text-neutral-50 leading-none">
              CAPABILITIES
            </h2>
          </div>

          {/* Right Description horizontally aligned with the top of CAPABILITIES */}
          <div className="md:col-span-6 md:pt-[1.25rem]">
            <p id="services-overview-p" className="text-sm sm:text-base md:text-lg text-neutral-900/70 dark:text-neutral-50/70 font-normal leading-relaxed font-sans">
              We partner exclusively with authentic, quality-driven businesses, ensuring that our reputation for honesty becomes your brand's greatest asset. If we’re talking about it, the market trusts it.
            </p>
          </div>
        </div>

        {/* 4 Cards of Capabilities arranged 2 in a line */}
        <div id="services-cards-grid" className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
          {SERVICES.map((serv, index) => {
            const isActive = activeTab === serv.id;
            return (
              <div
                id={`service-card-${serv.id}`}
                key={serv.id}
                onMouseEnter={() => setActiveTab(serv.id)}
                className={`p-5 sm:p-6 md:p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? 'border-neutral-950 bg-neutral-950/[0.02] text-neutral-900 dark:border-neutral-100 dark:bg-neutral-100/[0.02] dark:text-neutral-50 shadow-sm'
                    : 'border-neutral-100 text-neutral-900/60 hover:text-neutral-900 hover:border-neutral-300 dark:border-neutral-900/80 dark:hover:border-neutral-700 dark:hover:text-neutral-100 bg-transparent'
                }`}
              >
                {/* Horizontal highlight line */}
                {isActive && (
                  <motion.div
                    id={`service-active-line-${serv.id}`}
                    layoutId="services-highlight"
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-neutral-900 dark:bg-neutral-100"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}

                <div>
                  {/* Service Card Index & Category Subtitle */}
                  <div id={`service-header-${serv.id}`} className="flex justify-between items-center mb-6">
                    <span id={`service-subtitle-${serv.id}`} className="font-sans text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.2em]">
                      [ 0{index + 1} ] • {serv.subtitle}
                    </span>
                    <span className="text-xs font-sans text-neutral-400 dark:text-neutral-600">✦</span>
                  </div>

                  {/* Main Service Title */}
                  <h3 id={`service-title-${serv.id}`} className="text-xl md:text-2xl font-sans font-bold tracking-[-0.02em] uppercase text-neutral-900 dark:text-neutral-50 mb-6">
                    {serv.title}
                  </h3>
                </div>

                {/* Bullets List Grid (2 per card) */}
                <div id={`service-items-grid-${serv.id}`} className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-neutral-100/80 dark:border-neutral-900/60 font-sans text-[11px] font-semibold uppercase tracking-wider text-neutral-900/65 dark:text-neutral-50/65">
                  {serv.items.map((item, itemIdx) => (
                    <div id={`service-item-bullet-${serv.id}-${itemIdx}`} key={itemIdx} className="flex items-center gap-2 group-hover:text-neutral-900 dark:group-hover:text-neutral-50 transition-colors">
                      <span className="w-1.5 h-1.5 bg-neutral-900/80 dark:bg-neutral-100/80 rounded-none shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

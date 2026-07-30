import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Text rows for elegant stagger animation
  const lines = [
    "WE CRAFT TIMELESS",
    "BRAND SYSTEMS &",
    "DIGITAL SYSTEMS."
  ];

  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto overflow-hidden select-none"
    >
      {/* Background Grid Lines - Pure CSS & SVG layout */}
      <div id="hero-grid-lines" className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Grid lines */}
        <div className="absolute left-4 sm:left-6 md:left-12 top-0 bottom-0 w-[1px] bg-neutral-200/40 dark:bg-neutral-900/40" />
        <div className="absolute left-[33%] top-0 bottom-0 w-[1px] bg-neutral-200/20 dark:bg-neutral-900/20 hidden md:block" />
        <div className="absolute left-[66%] top-0 bottom-0 w-[1px] bg-neutral-200/20 dark:bg-neutral-900/20 hidden md:block" />
        <div className="absolute right-4 sm:right-6 md:right-12 top-0 bottom-0 w-[1px] bg-neutral-200/40 dark:bg-neutral-900/40" />
        
        {/* Horizontal dividing lines */}
        <div className="absolute left-0 right-0 bottom-24 h-[1px] bg-neutral-200/40 dark:bg-neutral-900/40" />
      </div>

      {/* Big Display Headline & Quote */}
      <div id="hero-headline-container" className="relative z-10 my-auto pt-6 sm:pt-8 md:pt-0 pl-0 md:pl-6 w-full">
        {/* Horizontal Quote Banner */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            id="hero-quote"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-bold tracking-[-0.03em] uppercase leading-[1.02] sm:leading-[0.95] text-neutral-900 dark:text-neutral-50 break-words"
          >
            Your audience isn't ignoring you
             your marketing is.
          </motion.h1>
        </div>

        {/* Horizontal Description Row Underneath */}
        <motion.div
          id="hero-intro-paragraph"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-full mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-100 dark:border-neutral-900 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-baseline font-sans"
        >
          <div className="md:col-span-3">
            <span className="text-[10px] font-bold text-neutral-400 dark:text-neutral-500 uppercase tracking-[0.25em] block">
              OVERVIEW
            </span>
          </div>
          <div className="md:col-span-9">
            <p className="text-sm sm:text-lg md:text-xl font-normal text-neutral-900/75 dark:text-neutral-50/75 leading-relaxed">
              Ikaya media is a marketing brand where , we don't just sell services; we build brands. We believe that marketing should be an investment, not an expense. Our mission is to bridge the gap between your vision and the right audience, positioning your product in the ideal marketplace for maximum growth.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Actions Row */}
      <div id="hero-actions-row" className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center pt-8 border-t border-neutral-100 dark:border-neutral-900">
        <motion.div
          id="hero-creed-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="font-mono text-[9px] tracking-widest text-neutral-400 dark:text-neutral-500 uppercase mb-4 sm:mb-0"
        >
          SCROLL TO EXPLORE ARCHIVES •
        </motion.div>

        {/* Scroll down button */}
        <motion.button
          id="hero-scroll-btn"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, repeat: Infinity, repeatType: 'reverse', duration: 1 }}
          onClick={scrollToWork}
          className="flex items-center gap-2 group font-sans text-[11px] uppercase font-bold tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-neutral-50 transition-colors"
        >
          Portfolio Cases
          <span className="flex items-center justify-center w-7 h-7 rounded-none border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 group-hover:bg-neutral-900 dark:group-hover:bg-neutral-100 group-hover:text-neutral-50 dark:group-hover:text-neutral-950 transition-all">
            <ArrowDown size={11} />
          </span>
        </motion.button>
      </div>
    </section>
  );
}

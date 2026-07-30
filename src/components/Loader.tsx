import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

const DISCIPLINES = [
  'IKAYA MEDIA',
  'BRAND STRATEGY',
  'VISUAL SYSTEMS',
  'DIGITAL EXPERIENCES',
  'CREATIVE DEVELOPMENT',
  'IKAYA MEDIA'
];

export default function Loader({ onComplete }: LoaderProps) {
  const [count, setCount] = useState(0);
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Fast numeric counting animation
    let start = 0;
    const end = 100;
    const duration = 2400; // ms
    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      
      // Rotate disciplines throughout the count
      if (start % 18 === 0 && disciplineIndex < DISCIPLINES.length - 1) {
        setDisciplineIndex(prev => Math.min(prev + 1, DISCIPLINES.length - 1));
      }

      if (start >= end) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 600); // Wait for fade out animation
        }, 300);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [onComplete, disciplineIndex]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loader-container"
          className="fixed inset-0 z-50 flex flex-col justify-between bg-neutral-950 p-6 md:p-12 font-mono text-neutral-100 selection:bg-neutral-800"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Top Line */}
          <div className="flex justify-between items-start text-xs border-b border-neutral-900 pb-4">
            <span id="loader-brand-label">IKAYA MEDIA ©2026</span>
            <span id="loader-location-label" className="text-neutral-500">Jaipur</span>
          </div>

          {/* Centered Rotating Discipline */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="overflow-hidden h-20 md:h-32 flex items-center">
              <motion.h1
                id="loader-discipline-text"
                key={disciplineIndex}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-100%' }}
                transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight uppercase"
              >
                {DISCIPLINES[disciplineIndex]}
              </motion.h1>
            </div>
            <p id="loader-subtitle" className="text-xs text-neutral-500 mt-2 tracking-widest uppercase">
              REDEFINING VISUAL STANDARDS
            </p>
          </div>

          {/* Bottom Line (Counter & Progress Bar) */}
          <div className="border-t border-neutral-900 pt-6">
            <div className="flex justify-between items-end mb-2">
              <span id="loader-meta-loading" className="text-xs text-neutral-500 tracking-wider">SYSTEM INITIALIZATION</span>
              <span id="loader-counter" className="text-4xl sm:text-6xl md:text-8xl font-sans font-semibold tracking-tight tabular-nums">
                {count.toString().padStart(3, '0')}
              </span>
            </div>
            
            {/* Dynamic loading progress line */}
            <div id="loader-progress-bar-bg" className="w-full h-[1px] bg-neutral-900 overflow-hidden">
              <motion.div
                id="loader-progress-bar-fill"
                className="h-full bg-neutral-100"
                initial={{ width: 0 }}
                animate={{ width: `${count}%` }}
                transition={{ ease: 'linear', duration: 0.02 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

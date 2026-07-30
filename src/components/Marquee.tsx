import { motion } from 'motion/react';

const MARQUEE_TEXTS = [
  'BRAND CONSULTANCY',
  'EVENTS',
  'PR & SHOOTS',
  'DIGITAL MARKETING',
  'SOCIAL MEDIA',
  'CREATIVE DIRECTION',
  'SEO & AUTOMATIONS'
];

export default function Marquee() {
  // Join texts with modern bullet separation
  const content = [...MARQUEE_TEXTS, ...MARQUEE_TEXTS, ...MARQUEE_TEXTS];

  return (
    <div
      id="marquee-outer-container"
      className="relative w-full overflow-hidden bg-neutral-950 py-5 md:py-6 border-y border-neutral-900"
    >
      <div id="marquee-inner-wrapper" className="flex whitespace-nowrap overflow-hidden">
        {/* Repeating slide containers for seamless infinite motion */}
        <div id="marquee-slide-animate" className="flex gap-16 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {content.map((text, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span className="font-sans font-bold text-3xl sm:text-4xl md:text-5xl text-neutral-100 tracking-tight select-none">
                {text}
              </span>
              <span className="text-lg text-neutral-700 font-sans select-none">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Styled animation keyframe injected directly inside the component style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>
  );
}

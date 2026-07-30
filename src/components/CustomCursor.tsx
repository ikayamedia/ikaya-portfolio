import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState<'none' | 'button' | 'view' | 'dark' | 'light'>('none');
  const [isVisible, setIsVisible] = useState(false);

  // Position of cursor
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for tail
  const springConfig = { damping: 30, stiffness: 350, mass: 0.5 };
  const tailX = useSpring(mouseX, springConfig);
  const tailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide cursor if mobile/touch device
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target or parent is interactive
      const isInteractive = target.closest('button, a, input, select, textarea');
      const isWorkCard = target.closest('[data-cursor="view"]');
      const isDarkArea = target.closest('[data-cursor="dark"]');
      const isLightArea = target.closest('[data-cursor="light"]');

      if (isWorkCard) {
        setHoverType('view');
      } else if (isInteractive) {
        setHoverType('button');
      } else if (isDarkArea) {
        setHoverType('dark');
      } else if (isLightArea) {
        setHoverType('light');
      } else {
        setHoverType('none');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  // Render responsive circles
  return (
    <>
      {/* Absolute center dot */}
      <motion.div
        id="custom-cursor-dot"
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-neutral-900 dark:bg-neutral-100 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />

      {/* Trailing larger halo */}
      <motion.div
        id="custom-cursor-halo"
        className="fixed top-0 left-0 rounded-full border border-neutral-900/40 dark:border-neutral-100/40 pointer-events-none z-50 flex items-center justify-center font-mono text-[9px] tracking-widest font-semibold uppercase mix-blend-difference"
        animate={{
          width: hoverType === 'view' ? 76 : hoverType === 'button' ? 36 : 22,
          height: hoverType === 'view' ? 76 : hoverType === 'button' ? 36 : 22,
          backgroundColor: hoverType === 'view' ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0)',
          borderColor: hoverType === 'view' ? '#ffffff' : hoverType === 'button' ? '#ffffff' : 'rgba(150, 150, 150, 0.4)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
        style={{
          x: tailX,
          y: tailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {hoverType === 'view' && (
          <motion.span
            id="cursor-view-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-neutral-950 font-sans tracking-tight leading-none text-xs font-semibold"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </>
  );
}

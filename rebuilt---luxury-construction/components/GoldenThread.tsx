import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const GoldenThread: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div 
      className="fixed left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-rebuilt-gold to-transparent z-40 origin-top pointer-events-none hidden md:block"
      style={{ scaleY }}
    />
  );
};
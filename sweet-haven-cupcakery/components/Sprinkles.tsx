import React from 'react';
import { motion } from 'framer-motion';

export const Sprinkles: React.FC = () => {
  const colors = ['#E8A0BF', '#D4A574', '#A8D5BA', '#2C1810'];
  const sprinkles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {sprinkles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full opacity-60"
          style={{
            backgroundColor: colors[i % colors.length],
            width: Math.random() * 8 + 4 + 'px',
            height: Math.random() * 8 + 4 + 'px',
            left: Math.random() * 100 + '%',
            top: -20,
          }}
          animate={{
            y: ['0vh', '100vh'],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
};
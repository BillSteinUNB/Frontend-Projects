import React, { useEffect, useRef } from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/Button';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen pt-24 pb-12 overflow-hidden flex flex-col md:flex-row">
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-rebuilt-gold to-transparent opacity-50" />
      <div className="absolute top-[15%] right-[5%] w-32 h-32 border border-white/5 rounded-full" />
      <div className="absolute -bottom-20 -left-20 text-[12rem] font-bold text-white/[0.02] font-sans select-none pointer-events-none">
        REBUILT
      </div>

      {/* Left Content Block */}
      <div className="w-full md:w-[45%] flex flex-col justify-center px-6 md:px-16 lg:px-24 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-rebuilt-gold"></span>
            <span className="text-rebuilt-gold text-xs font-mono tracking-widest uppercase">#1 Construction Agency</span>
          </div>
          
          <h1 className="font-display italic text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] text-white mb-8">
            Let's realize <br />
            <span className="text-white/90 not-italic font-sans font-light tracking-tighter">your best</span> <br />
            legacy.
          </h1>

          <p className="font-sans text-white/60 text-lg leading-relaxed max-w-md mb-10 border-l border-white/10 pl-6">
            Turn your construction dreams into reality with our expert team & innovative solutions. We don't build structures; we build 150 years of history.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button>
              Get Started <ArrowRight size={18} />
            </Button>
            <Button variant="ghost" icon={<Play size={16} fill="currentColor" />}>
              Watch Showreel
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Right Image Block */}
      <div className="w-full md:w-[55%] relative min-h-[50vh] md:min-h-screen mt-8 md:mt-0">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 md:inset-y-12 md:right-12 bg-rebuilt-slate overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Skyscraper Architecture" 
            className="w-full h-full object-cover opacity-80 scale-105 hover:scale-100 transition-transform duration-[2s] ease-out-expo"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rebuilt-void via-transparent to-transparent opacity-60" />
        </motion.div>

        {/* Floating Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-12 left-6 md:-left-12 max-w-sm bg-white/10 backdrop-blur-md border border-white/10 p-6 md:p-8"
        >
          <div className="flex gap-1 text-rebuilt-gold mb-4 text-xs">
            {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
          </div>
          <p className="font-display italic text-xl text-white mb-6 leading-snug">
            "REBUILT transformed our vision into an architectural masterpiece. Precision unmatched in the industry."
          </p>
          <div className="flex items-center justify-between border-t border-white/10 pt-4">
            <div>
              <p className="text-xs font-bold tracking-widest text-white uppercase">Victoria Chen</p>
              <p className="text-[10px] text-white/50 uppercase tracking-wider mt-1">CEO, Meridian Dev</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
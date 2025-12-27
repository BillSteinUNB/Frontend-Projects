import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FLAVORS } from '../constants';

export const Flavors: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollXProgress } = useScroll({ container: containerRef });

  return (
    <section id="flavors" className="py-24 bg-vanilla relative">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="font-serif italic text-5xl text-chocolate mb-2">Signature Creations</h2>
        <p className="font-sans text-chocolate/60">Recipes perfected over three generations</p>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-scroll pb-16 px-6 gap-8 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {FLAVORS.map((flavor, index) => (
          <motion.div
            key={index}
            className="min-w-[320px] md:min-w-[400px] snap-center group perspective-1000"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative bg-white/40 backdrop-blur-xl rounded-3xl p-6 border border-white shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl h-full flex flex-col">
              
              {/* Image Area */}
              <div className="relative h-64 mb-6 overflow-visible flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-2xl" />
                <motion.img 
                  src={flavor.image} 
                  alt={flavor.name}
                  className="w-48 h-48 object-cover rounded-full shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                  style={{ zIndex: 10 }}
                />
                
                {/* Badges */}
                <div className="absolute top-0 right-0 flex flex-col gap-2">
                  {flavor.badges?.map(badge => (
                    <span key={badge} className="bg-strawberry text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="text-center flex-grow">
                <h3 className="font-serif text-xl font-bold text-chocolate mb-1">{flavor.name}</h3>
                <p className="font-hand text-lg text-caramel mb-4">{flavor.tagline}</p>
                <p className="font-sans text-sm text-chocolate/70 leading-relaxed mb-6">
                  {flavor.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-chocolate/5">
                <span className="font-serif text-2xl text-chocolate font-bold">{flavor.price}</span>
                <button className="bg-chocolate text-vanilla w-10 h-10 rounded-full flex items-center justify-center hover:bg-strawberry transition-colors shadow-lg">
                  <Plus size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer for end of list */}
        <div className="min-w-[50px]" />
      </div>
      
      {/* Scroll Hint */}
      <div className="flex justify-center mt-4 gap-2 md:hidden">
         <span className="font-sans text-xs text-chocolate/40 uppercase tracking-widest">Swipe to explore</span>
      </div>
    </section>
  );
};
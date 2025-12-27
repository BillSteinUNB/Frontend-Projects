import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-vanilla overflow-hidden">
      <div className="container mx-auto px-6 mb-12 flex items-end justify-between">
        <h2 className="font-serif italic text-5xl text-chocolate">Sweet Words</h2>
        <p className="hidden md:block font-sans text-chocolate/50">Scroll for more love &rarr;</p>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-vanilla to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-vanilla to-transparent z-10" />
        
        <motion.div 
          className="flex gap-8 w-fit px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <div 
              key={i} 
              className={`w-[350px] md:w-[450px] flex-shrink-0 bg-white p-8 rounded-3xl shadow-sm border border-chocolate/5 ${
                 i % 2 === 0 ? 'rotate-1' : '-rotate-1'
              }`}
            >
              <div className="text-strawberry mb-4">
                <Quote size={32} />
              </div>
              <p className="font-serif text-xl text-chocolate mb-6 leading-relaxed">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-caramel/20 rounded-full flex items-center justify-center font-bold text-caramel">
                    {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold font-sans text-chocolate text-sm">{t.author}</p>
                  <p className="text-xs text-chocolate/50 uppercase tracking-wider">{t.role}</p>
                </div>
                <div className="ml-auto flex text-yellow-400 text-xs">
                    {'★'.repeat(t.rating)}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
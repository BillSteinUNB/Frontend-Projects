import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Sprinkles } from './Sprinkles';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-vanilla">
      <div className="absolute inset-0 bg-grain opacity-50" />
      <Sprinkles />
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <motion.div 
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-caramel font-bold tracking-widest text-xs uppercase">Est. 2009 · Corner of Main & Maple</span>
          </motion.div>

          <h1 className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-chocolate leading-[0.9] mb-8">
            Baked with <span className="text-strawberry">Love</span>,<br />
            Frosted with <span className="text-caramel">Joy</span>
          </h1>

          <p className="font-sans text-lg md:text-xl text-chocolate/70 mb-10 max-w-md leading-relaxed">
            Three generations of secret recipes, one unforgettable bite. Experience the nostalgia of grandma's kitchen in every artisan cupcake.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-chocolate text-vanilla px-8 py-4 rounded-full font-bold font-sans flex items-center justify-center gap-2 hover:bg-strawberry hover:scale-105 transition-all shadow-lg group">
              Order for Pickup <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/50 backdrop-blur-sm border border-chocolate/10 text-chocolate px-8 py-4 rounded-full font-bold font-sans hover:bg-white transition-colors">
              Explore Flavors
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-chocolate/80 bg-white/60 w-fit p-3 rounded-2xl backdrop-blur-sm">
            <div className="flex text-caramel">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="border-l border-chocolate/20 pl-4">
              4.9 · 2,847 Reviews · Best of City 2024
            </span>
          </div>
        </motion.div>

        {/* Right Content - Visual */}
        <div className="relative h-[500px] lg:h-[700px] flex items-center justify-center">
          {/* Background Orb */}
          <motion.div 
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-strawberry/20 to-caramel/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Main Hero Image */}
          <motion.div
            className="relative z-10 w-full max-w-[500px]"
            initial={{ opacity: 0, y: 100, rotate: 10 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, type: "spring" }}
          >
            <motion.img 
              src="https://picsum.photos/id/488/800/800" 
              alt="Artisan Cupcake" 
              className="w-full h-auto object-cover rounded-3xl shadow-2xl rotate-3 border-8 border-white"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Handwriting Annotation */}
            <motion.div 
              className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-4 shadow-xl rotate-[-6deg] max-w-[200px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="font-hand text-2xl text-chocolate leading-none text-center">
                Grandma Rose's <br/> <span className="text-strawberry">Original Recipe!</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
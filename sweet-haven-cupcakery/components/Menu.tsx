import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '../constants';

export const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Classic');
  const categories = ['Classic', 'Seasonal', 'Dozen Boxes', 'Mini Bites'];

  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-grain opacity-30" />
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-serif italic text-5xl text-chocolate mb-8">The Full Menu</h2>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-6 py-2 rounded-full font-sans font-bold text-sm transition-colors ${
                  activeCategory === cat ? 'text-white' : 'text-chocolate/60 hover:text-chocolate'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-strawberry rounded-full shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square mb-4 overflow-hidden rounded-2xl bg-vanilla">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {item.isSeasonal && (
                    <span className="absolute top-2 right-2 bg-mint text-chocolate text-[10px] font-bold px-2 py-1 rounded-full">
                      LIMITED TIME
                    </span>
                  )}
                  {/* Quick Add Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <button className="bg-white text-chocolate px-4 py-2 rounded-full font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      Add to Order
                    </button>
                  </div>
                </div>
                
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif font-bold text-chocolate text-lg leading-tight group-hover:text-strawberry transition-colors">
                      {item.name}
                    </h3>
                    <p className="font-sans text-xs text-chocolate/60 mt-1">{item.description}</p>
                  </div>
                  <span className="font-sans font-bold text-caramel">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
            <p className="font-hand text-2xl text-chocolate/60 rotate-2">
                Questions about allergies? <span className="text-strawberry underline cursor-pointer">Give us a ring!</span>
            </p>
        </div>
      </div>
    </section>
  );
};
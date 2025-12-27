import React from 'react';
import { motion } from 'framer-motion';

export const OurStory: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            className="font-serif italic text-5xl text-chocolate mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h2>
          <div className="w-24 h-1 bg-strawberry mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image Grid */}
          <div className="lg:col-span-7 relative h-[600px] hidden md:block">
             {/* Photo 1 */}
             <motion.div 
              className="absolute top-0 left-0 w-80 h-96 bg-gray-100 p-3 shadow-xl transform -rotate-3 z-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
             >
                <img src="https://picsum.photos/id/250/400/500" className="w-full h-full object-cover filter sepia-[0.3]" alt="Vintage Kitchen" />
                <p className="font-hand text-center mt-2 text-xl text-gray-600">The first kitchen, 1956</p>
             </motion.div>

             {/* Photo 2 */}
             <motion.div 
              className="absolute bottom-10 right-10 w-72 h-80 bg-white p-3 shadow-xl transform rotate-3 z-20"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
             >
                <img src="https://picsum.photos/id/306/400/500" className="w-full h-full object-cover" alt="Modern Shop" />
                <p className="font-hand text-center mt-2 text-xl text-gray-600">Opening Day, 2009</p>
             </motion.div>

             {/* Decorative Elements */}
             <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-strawberry/10 rounded-full blur-3xl -z-10" />
          </div>

          {/* Text Content */}
          <div className="lg:col-span-5">
             <motion.div
               className="space-y-8"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
             >
               <div className="relative pl-8 border-l-2 border-caramel/30">
                 <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-caramel" />
                 <h3 className="font-serif text-2xl text-chocolate mb-2">The Beginning</h3>
                 <p className="font-sans text-chocolate/70 leading-relaxed">
                   It started with Grandma Rose's wooden spoon and a dream. In her small kitchen, she perfected the art of the crumb, believing that a cupcake wasn't just a treat, but a way to say "I love you."
                 </p>
               </div>

               <div className="relative pl-8 border-l-2 border-caramel/30">
                 <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-strawberry" />
                 <h3 className="font-serif text-2xl text-chocolate mb-2">The Dream</h3>
                 <p className="font-sans text-chocolate/70 leading-relaxed">
                   In 2009, her daughter Sarah opened Sweet Haven on the corner of Main & Maple. We promised to never cut corners: real butter, farm-fresh eggs, and frosting whipped by hand every morning.
                 </p>
               </div>

               <div className="relative pl-8 border-l-2 border-caramel/30">
                 <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-mint" />
                 <h3 className="font-serif text-2xl text-chocolate mb-2">Today</h3>
                 <p className="font-sans text-chocolate/70 leading-relaxed">
                   Three generations later, we're still baking small batches with big hearts. 50,000+ cupcakes later, we're proud to be [City]'s sweetest spot.
                 </p>
               </div>

               <div className="pt-4">
                 <p className="font-serif italic text-3xl text-chocolate text-center lg:text-left">"Every cupcake tells a story."</p>
               </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
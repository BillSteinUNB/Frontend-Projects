import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Project Management',
    desc: 'End-to-end oversight for billion-dollar developments.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Innovation Services',
    desc: 'Integrating smart tech and sustainable materials.',
    image: 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'General Contracting',
    desc: 'The backbone of our 150-year legacy.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Design & Build',
    desc: 'Seamless architectural vision and execution.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'Site Supervision',
    desc: 'Uncompromising quality control standards.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop'
  }
];

export const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <section id="services" className="py-24 md:py-32 bg-rebuilt-void relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16">
        
        {/* Left List */}
        <div className="w-full lg:w-1/2 z-10">
          <div className="mb-16">
            <span className="text-rebuilt-gold font-mono text-xs tracking-widest uppercase mb-4 block">Our Capabilities</span>
            <h2 className="font-display text-4xl md:text-5xl text-white">
              Engineering <span className="italic text-rebuilt-gold">tomorrow.</span>
            </h2>
          </div>

          <div className="flex flex-col">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                onMouseEnter={() => setActiveService(index)}
                className="group relative border-t border-white/10 py-8 cursor-pointer transition-colors duration-500 hover:border-rebuilt-gold/50"
              >
                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline gap-8">
                    <span className={`font-mono text-sm transition-colors duration-300 ${activeService === index ? 'text-rebuilt-gold' : 'text-white/30'}`}>
                      ({service.id})
                    </span>
                    <h3 className={`font-sans text-2xl md:text-3xl font-light transition-all duration-300 ${activeService === index ? 'text-white translate-x-2' : 'text-white/60'}`}>
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpRight 
                    className={`transition-all duration-300 ${activeService === index ? 'opacity-100 text-rebuilt-gold rotate-45' : 'opacity-0'}`} 
                  />
                </div>
                <div className={`overflow-hidden transition-all duration-500 ${activeService === index ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                  <p className="text-white/40 pl-14 max-w-md font-sans text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>

        {/* Right Image Reveal */}
        <div className="hidden lg:block w-1/2 relative h-[600px]">
          <div className="absolute inset-0 bg-white/5 border border-white/10 p-2">
            <AnimatePresence mode='wait'>
              <motion.img
                key={activeService}
                initial={{ opacity: 0, scale: 1.1, filter: 'grayscale(100%)' }}
                animate={{ opacity: 1, scale: 1, filter: 'grayscale(0%)' }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 pointer-events-none" 
              style={{ 
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
              }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};
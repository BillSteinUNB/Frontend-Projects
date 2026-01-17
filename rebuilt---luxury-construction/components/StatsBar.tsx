import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "4.9", label: "#RATE AGENCY" },
  { value: "850+", label: "#TOTAL PROJECTS" },
  { value: "$5.87B", label: "#TOTAL REVENUE" },
];

export const StatsBar: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-rebuilt-void relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="flex flex-col items-center justify-center py-8 md:py-0"
            >
              <span className="font-sans font-bold text-5xl md:text-6xl text-white tracking-tighter mb-2">
                {stat.value}
              </span>
              <span className="font-mono text-rebuilt-gold text-xs tracking-widest uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
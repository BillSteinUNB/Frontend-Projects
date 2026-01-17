import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "The Vertex Tower",
    location: "Jakarta, Indonesia",
    tags: ["#DESIGN", "#48 WEEKS"],
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2070&auto=format&fit=crop",
    className: "md:mt-0"
  },
  {
    id: 2,
    title: "Museum of Light",
    location: "Copenhagen, Denmark",
    tags: ["#CULTURE", "#SUSTAINABLE"],
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop",
    className: "md:mt-24"
  },
  {
    id: 3,
    title: "Apex Logistics Hub",
    location: "Nevada, USA",
    tags: ["#INDUSTRIAL", "#SCALE"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1932&auto=format&fit=crop",
    className: "md:-mt-24"
  },
  {
    id: 4,
    title: "Serenity Resort",
    location: "Kyoto, Japan",
    tags: ["#HOSPITALITY", "#LUXURY"],
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    className: "md:mt-0"
  }
];

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 bg-rebuilt-void">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <span className="text-rebuilt-gold font-mono text-xs tracking-widest uppercase mb-4 block">- OUR PROJECTS -</span>
            <h2 className="font-display text-4xl md:text-6xl text-white max-w-xl">
              Building excellence through <span className="italic text-white/50">every detail.</span>
            </h2>
          </div>
          <div className="flex gap-4 mt-8 md:mt-0">
            <button className="w-12 h-12 rounded-sm border border-white/10 text-white flex items-center justify-center hover:bg-rebuilt-gold hover:text-rebuilt-void hover:border-rebuilt-gold transition-all">
              ←
            </button>
            <button className="w-12 h-12 rounded-sm border border-white/10 text-white flex items-center justify-center hover:bg-rebuilt-gold hover:text-rebuilt-void hover:border-rebuilt-gold transition-all">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`group cursor-pointer ${project.className}`}
            >
              <div className="premium-card-wrapper mb-6 aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                <div className="premium-card-content overflow-hidden w-full h-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-rebuilt-void/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4 group-hover:border-rebuilt-gold transition-colors duration-500">
                <div>
                  <h3 className="text-2xl font-sans font-medium text-white mb-1 group-hover:text-rebuilt-gold transition-colors">{project.title}</h3>
                  <p className="text-sm font-mono text-white/50">{project.location}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-mono border border-white/20 px-2 py-1 rounded-full text-white/70 uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Team: React.FC = () => {
  return (
    <section className="py-24 bg-rebuilt-charcoal relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" 
        style={{ backgroundImage: 'radial-gradient(#E8B54A 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-rebuilt-gold font-mono text-xs tracking-widest uppercase block mb-4">THE EXPERTS</span>
          <h2 className="font-display text-4xl text-white">Meet the <span className="italic">visionaries</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Jacob M. Arthur', role: 'Founder', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop' },
            { name: 'Esther Howard', role: 'Head of Engineering', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop' },
            { name: 'Jenny Wilson', role: 'Head of QA', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop' }
          ].map((member, i) => (
            <div key={i} className="group relative">
              <div className="aspect-[3/4] overflow-hidden bg-rebuilt-slate mb-4 border border-white/5">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:scale-105 mix-blend-luminosity hover:mix-blend-normal"
                />
              </div>
              <h3 className="font-sans font-bold text-white uppercase tracking-tight text-lg group-hover:text-rebuilt-gold transition-colors">{member.name}</h3>
              <p className="font-mono text-xs text-white/50 uppercase tracking-widest mt-1">{member.role}</p>
            </div>
          ))}

          {/* CTA Card */}
          <a href="#team" className="group flex flex-col justify-between bg-rebuilt-void border border-white/10 p-8 aspect-[3/4] hover:border-rebuilt-gold/50 transition-all duration-300">
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-rebuilt-gold group-hover:text-rebuilt-void transition-all">
              <ArrowRight size={20} />
            </div>
            <div>
              <p className="font-display italic text-3xl text-white mb-2 leading-none">Do you want to see all members?</p>
              <span className="font-mono text-xs text-rebuilt-gold uppercase tracking-widest border-b border-rebuilt-gold/30 pb-1 group-hover:border-rebuilt-gold transition-all">Click Here</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
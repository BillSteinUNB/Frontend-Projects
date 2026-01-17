import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-32 pb-12 text-white relative overflow-hidden">
      {/* Giant Watermark */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[20vw] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        REBUILT
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-32 mb-24">
          
          {/* Left CTA */}
          <div className="lg:w-1/2">
            <span className="text-rebuilt-gold font-mono text-xs tracking-widest uppercase mb-6 block">- LOOKING FOR THE BEST CONSTRUCTOR?</span>
            <h2 className="font-display text-5xl md:text-7xl mb-12 leading-none">
              Let's work with <br />
              <span className="text-white/50 italic">us.</span>
            </h2>
            <button className="group flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-rebuilt-gold transition-colors">
              <span className="border-b border-white group-hover:border-rebuilt-gold pb-1 transition-colors">Hire Us Now</span>
              <ArrowUpRight className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Info */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-6">Office Address</h4>
              <p className="font-sans text-lg text-white/80 leading-relaxed">
                2118 Thornridge Cir,<br />
                Syracuse, Connecticut<br />
                United States 35624
              </p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Email</h4>
                <a href="mailto:hello@rebuilt.io" className="font-sans text-lg hover:text-rebuilt-gold transition-colors">hello@rebuilt.io</a>
              </div>
              <div>
                <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Phone</h4>
                <a href="tel:+622891028103" className="font-sans text-lg hover:text-rebuilt-gold transition-colors">+62 2891028103</a>
              </div>
            </div>

            <div className="md:col-span-2">
              <button className="w-full py-6 border border-white/10 hover:bg-rebuilt-gold hover:text-rebuilt-void hover:border-rebuilt-gold transition-all uppercase tracking-widest text-sm font-bold flex items-center justify-between px-8 group">
                Schedule Meeting
                <ArrowUpRight className="group-hover:rotate-45 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-white/40 uppercase tracking-wide">
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
          </div>
          <p>© 2024 REBUILT. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};
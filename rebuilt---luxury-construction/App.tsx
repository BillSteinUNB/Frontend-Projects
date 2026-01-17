import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Team } from './components/Team';
import { Footer } from './components/Footer';
import { GoldenThread } from './components/GoldenThread';

const App: React.FC = () => {
  // Smooth scroll implementation helper
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <main className="bg-rebuilt-void text-white min-h-screen selection:bg-rebuilt-gold selection:text-black">
      <GoldenThread />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <StatsBar />
        
        <div className="relative">
          {/* About Section text block */}
          <section id="about" className="py-24 bg-rebuilt-void border-b border-white/5">
            <div className="container mx-auto px-6 md:px-12">
              <div className="max-w-4xl">
                <span className="text-rebuilt-gold font-mono text-xs tracking-widest uppercase mb-6 block">- ABOUT US -</span>
                <p className="font-display text-3xl md:text-5xl leading-tight text-white mb-8">
                  Crafting your vision. Turning <span className="italic text-rebuilt-gold">innovative</span> ideas into lasting & <span className="italic text-rebuilt-gold">sustainable</span> structures, with years of expertise and unwavering precision.
                </p>
                <p className="font-sans text-white/60 text-lg max-w-2xl leading-relaxed">
                  Founded on the principles of brutalist honesty and refined luxury, REBUILT has defined the skyline of modern metropolises for over a century. We do not just pour concrete; we orchestrate environments.
                </p>
              </div>
            </div>
          </section>

          <Services />
          <Projects />
          <Team />
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default App;
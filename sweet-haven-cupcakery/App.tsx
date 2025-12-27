import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OurStory } from './components/OurStory';
import { Flavors } from './components/Flavors';
import { Menu } from './components/Menu';
import { Testimonials } from './components/Testimonials';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-vanilla min-h-screen text-chocolate selection:bg-strawberry/30">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen key="splash" />
        ) : (
          <div key="main">
            <Navbar />
            <main>
              <Hero />
              <OurStory />
              <Flavors />
              <Menu />
              <Testimonials />
              <Location />
              
              {/* Order CTA Band */}
              <section className="py-20 bg-gradient-to-r from-strawberry to-pink-300 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grain opacity-20" />
                <div className="container mx-auto px-6 relative z-10">
                  <h2 className="font-serif italic text-4xl md:text-6xl text-chocolate mb-6">Ready for something sweet?</h2>
                  <div className="flex justify-center gap-4">
                    <button className="bg-chocolate text-vanilla px-10 py-4 rounded-full font-bold font-sans text-lg hover:scale-105 transition-transform shadow-xl">
                      Order Now
                    </button>
                  </div>
                </div>
              </section>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
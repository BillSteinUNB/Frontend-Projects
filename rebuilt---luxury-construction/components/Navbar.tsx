import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-white/5 
        ${isScrolled ? 'bg-rebuilt-void/80 backdrop-blur-xl py-4' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <button onClick={() => scrollTo('#home')} className="z-50 relative group">
            <span className="font-sans font-bold text-2xl tracking-widest text-white group-hover:text-rebuilt-gold transition-colors">
              REBUILT
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12 bg-white/5 px-8 py-3 rounded-sm border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="text-sm font-medium uppercase tracking-widest text-white/70 hover:text-rebuilt-gold transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-rebuilt-gold transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <button 
              className="flex items-center gap-2 bg-rebuilt-charcoal border border-white/10 px-5 py-2.5 rounded-full text-xs font-bold tracking-widest text-white hover:border-rebuilt-gold hover:text-rebuilt-gold transition-all group"
            >
              <Phone size={14} className="group-hover:rotate-12 transition-transform" />
              <span>CONTACT US</span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden z-50 text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-rebuilt-void z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-out-expo ${isMobileOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollTo(item.href)}
            className="text-3xl font-display italic text-white hover:text-rebuilt-gold transition-colors"
          >
            {item.label}
          </button>
        ))}
        <button className="mt-8 px-8 py-3 bg-rebuilt-gold text-rebuilt-void font-bold tracking-widest uppercase">
          Get a Quote
        </button>
      </div>
    </>
  );
};
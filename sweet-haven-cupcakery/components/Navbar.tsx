import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Our Story', href: '#story' },
    { name: 'Flavors', href: '#flavors' },
    { name: 'Menu', href: '#menu' },
    { name: 'Visit Us', href: '#location' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-6xl transition-all duration-300 rounded-full ${
          isScrolled
            ? 'bg-vanilla/90 backdrop-blur-md shadow-lg py-3 px-6'
            : 'bg-transparent py-5 px-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl pt-1">🧁</span>
            <span className="font-serif font-bold text-xl md:text-2xl text-chocolate tracking-tight group-hover:text-strawberry transition-colors">
              Sweet Haven
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative font-sans text-sm font-medium text-chocolate hover:text-strawberry transition-colors group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-strawberry group-hover:w-full group-hover:left-0 transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden md:flex items-center gap-2 bg-chocolate text-vanilla px-6 py-2 rounded-full font-sans font-bold text-sm hover:bg-strawberry hover:scale-105 transition-all duration-300 shadow-md">
              Order Now <ShoppingBag size={16} />
            </button>
            
            <button 
              className="md:hidden text-chocolate p-2"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-chocolate/20 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-vanilla p-8 flex flex-col shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <span className="font-serif text-2xl text-chocolate font-bold">Menu</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-chocolate hover:text-strawberry">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {links.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    className="font-serif text-3xl text-chocolate hover:text-strawberry hover:pl-4 transition-all"
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  className="mt-8 w-full bg-strawberry text-white py-4 rounded-xl font-bold font-sans text-lg shadow-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Order Online
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
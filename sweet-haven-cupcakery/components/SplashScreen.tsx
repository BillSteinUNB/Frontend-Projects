import React from 'react';
import { motion } from 'framer-motion';

export const SplashScreen: React.FC = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-vanilla text-chocolate"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-32 h-32 mb-8">
        {/* Cupcake Base */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-12 bg-caramel rounded-b-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        {/* Frosting */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-16 bg-strawberry rounded-full shadow-inner"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
        />
        {/* Cherry */}
        <motion.div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9, type: "spring" }}
        />
      </div>

      <motion.h1
        className="text-2xl font-serif italic text-chocolate"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        Sweet Haven Cupcakery
      </motion.h1>
      
      <motion.p
        className="mt-2 text-sm font-sans text-chocolate/60 tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        Freshly baked with love...
      </motion.p>
    </motion.div>
  );
};
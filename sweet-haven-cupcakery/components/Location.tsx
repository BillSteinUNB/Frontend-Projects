import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-chocolate text-vanilla relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Info */}
        <div className="space-y-12">
           <div>
             <h2 className="font-serif italic text-5xl mb-6">Find Us</h2>
             <p className="font-sans text-white/80 text-lg max-w-md">
               Come smell the vanilla. We're located in the heart of the historic district, just past the old fountain.
             </p>
           </div>

           <div className="grid gap-8">
             <div className="flex gap-6 items-start">
               <div className="p-4 bg-white/10 rounded-full">
                 <MapPin className="text-caramel" />
               </div>
               <div>
                 <h4 className="font-bold text-xl mb-1">Visit The Shop</h4>
                 <p className="text-white/70">123 Bakery Lane, Sweetville</p>
                 <p className="text-white/50 text-sm mt-1">Street parking available</p>
               </div>
             </div>

             <div className="flex gap-6 items-start">
               <div className="p-4 bg-white/10 rounded-full">
                 <Phone className="text-caramel" />
               </div>
               <div>
                 <h4 className="font-bold text-xl mb-1">Call Us</h4>
                 <p className="text-white/70">(555) 123-4567</p>
                 <p className="text-white/50 text-sm mt-1">For custom orders & catering</p>
               </div>
             </div>
           </div>

           {/* Hours Card */}
           <div className="bg-vanilla text-chocolate p-8 rounded-2xl max-w-md shadow-2xl rotate-1 transform hover:rotate-0 transition-transform duration-300">
             <div className="text-center border-b-2 border-chocolate/10 pb-4 mb-4">
               <h3 className="font-serif font-bold text-2xl tracking-widest">HOURS</h3>
             </div>
             <div className="space-y-3 font-sans font-medium">
               <div className="flex justify-between">
                 <span>Mon - Fri</span>
                 <span>7:00am - 7:00pm</span>
               </div>
               <div className="flex justify-between">
                 <span>Saturday</span>
                 <span>8:00am - 8:00pm</span>
               </div>
               <div className="flex justify-between text-chocolate/50">
                 <span>Sunday</span>
                 <span>9:00am - 5:00pm</span>
               </div>
             </div>
           </div>
        </div>

        {/* Map/Image */}
        <div className="h-[600px] w-full bg-white/5 rounded-3xl overflow-hidden relative group">
           <img 
             src="https://picsum.photos/id/437/800/1000" 
             alt="Storefront" 
             className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
           />
           <div className="absolute inset-0 flex items-center justify-center">
             <button className="bg-vanilla text-chocolate px-6 py-3 rounded-full font-bold shadow-lg hover:scale-110 transition-transform">
               Get Directions
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};
import React from 'react';
import { Instagram, Facebook, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-cocoa text-vanilla pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <span className="font-serif font-bold text-2xl tracking-tight">
              Sweet Haven
            </span>
            <p className="text-white/60 text-sm leading-relaxed">
              Baking memories since 2009. We use only the finest ingredients to create joy in every bite.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-strawberry transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-strawberry transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-strawberry transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-6 text-caramel">Explore</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#menu" className="hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#story" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#flavors" className="hover:text-white transition-colors">Flavors</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

           {/* Services */}
           <div>
            <h4 className="font-bold mb-6 text-caramel">Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Weddings & Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Corporate Gifts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wholesale</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Catering</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6 text-caramel">Get Sweet Updates</h4>
            <p className="text-xs text-white/50 mb-4">Join our list for seasonal specials and birthday treats.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-strawberry"
              />
              <button className="bg-strawberry text-chocolate font-bold py-2 rounded-lg text-sm hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
          <p>&copy; 2024 Sweet Haven Cupcakery. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span>Made with</span>
            <Heart size={12} className="text-strawberry fill-strawberry" />
            <span>in React</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
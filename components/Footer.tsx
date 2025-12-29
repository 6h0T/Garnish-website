import React from 'react';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-stone-400 py-16 border-t border-stone-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
          
          <div className="text-center md:text-left">
            <h3 className="font-serif text-3xl text-garnish-gold mb-6 italic">The Garnish Bar</h3>
            <p className="font-sans text-sm tracking-wide mb-6 max-w-xs mx-auto md:mx-0">
              An experience curated by bartenders. <br/> Cocktails, Whiskey, Food, Music.
            </p>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="hover:text-garnish-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-garnish-gold transition-colors"><Mail size={20} /></a>
            </div>
          </div>

          <div className="text-center md:text-right space-y-4">
             <div className="flex items-center justify-center md:justify-end gap-3 group">
                <span className="text-sm font-sans uppercase tracking-widest group-hover:text-stone-200 transition-colors">123 Cocktail Ave, City Center</span>
                <MapPin className="text-garnish-green" size={18} />
             </div>
             <div className="flex items-center justify-center md:justify-end gap-3 group">
                <span className="text-sm font-sans uppercase tracking-widest group-hover:text-stone-200 transition-colors">+1 (555) 012-3456</span>
                <Phone className="text-garnish-green" size={18} />
             </div>
             <div className="pt-4">
               <p className="text-xs text-stone-600 font-sans">
                 © 2024 The Garnish Bar. All rights reserved.
               </p>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
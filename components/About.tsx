import React from 'react';
import { Users, Wine, UtensilsCrossed } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-garnish-dark relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1 relative">
             <div className="absolute -inset-4 border border-garnish-gold/20 z-0"></div>
             <img 
               src="https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=2068&auto=format&fit=crop" 
               alt="Bartender crafting a cocktail"
               className="w-full h-auto object-cover grayscale contrast-125 relative z-10 shadow-2xl"
             />
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-serif text-5xl md:text-6xl text-garnish-sage italic">
              Craftsmanship <br/>
              <span className="not-italic text-garnish-gold text-4xl md:text-5xl">in Every Detail</span>
            </h2>
            
            <p className="font-sans text-stone-300 leading-8 text-lg font-light">
              At <strong className="text-white">The Garnish Bar</strong>, we blur the line between service and artistry. 
              Uniquely, our entire service team is composed of trained bartenders. From the moment you 
              are seated to your final sip, you are guided by an expert in flavors and spirits.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
              <div className="flex flex-col items-center text-center space-y-2 p-4 border border-stone-800 hover:border-garnish-gold transition-colors">
                <Wine className="text-garnish-gold mb-2" size={32} />
                <span className="font-serif text-2xl text-stone-200">40</span>
                <span className="text-xs uppercase tracking-widest text-stone-500">Signature Cocktails</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 border border-stone-800 hover:border-garnish-gold transition-colors">
                <Users className="text-garnish-gold mb-2" size={32} />
                <span className="font-serif text-2xl text-stone-200">250</span>
                <span className="text-xs uppercase tracking-widest text-stone-500">Whiskey Labels</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-4 border border-stone-800 hover:border-garnish-gold transition-colors">
                <UtensilsCrossed className="text-garnish-gold mb-2" size={32} />
                <span className="font-serif text-2xl text-stone-200">Full</span>
                <span className="text-xs uppercase tracking-widest text-stone-500">Kitchen Menu</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
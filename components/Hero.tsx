import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
          alt="Dark moody bar atmosphere"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-garnish-dark/70 via-garnish-dark/40 to-garnish-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-sans text-garnish-gold tracking-[0.3em] text-sm md:text-base mb-6 uppercase animate-fade-in-up">
          Est. 2024
        </p>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-stone-100 italic leading-none mb-8 drop-shadow-2xl">
          The <br/>
          <span className="not-italic text-garnish-sage/90">Garnish Bar</span>
        </h1>
        <div className="w-24 h-1 bg-garnish-gold mx-auto mb-8"></div>
        <p className="font-sans text-stone-300 text-lg md:text-xl tracking-wide font-light max-w-2xl mx-auto leading-relaxed">
          Cocktails. Whiskey Club. Restaurant.
          <br />
          <span className="text-sm text-stone-400 mt-2 block">Where every server is a bartender.</span>
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-stone-400">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};
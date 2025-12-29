import React from 'react';

export const MenuPreview: React.FC = () => {
  return (
    <section id="menu" className="relative py-24 overflow-hidden">
      {/* 
        This background mimics the "Cracked" texture from the user's reference image 
        using a sage green base and a pseudo-element for texture 
      */}
      <div className="absolute inset-0 bg-garnish-sage z-0">
        {/* CSS Pattern for cracked effect simulation */}
        <div className="absolute inset-0 opacity-20" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%231a3c34' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
             }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Typography from Image Reference */}
        <div className="text-center mb-20">
          <span className="font-serif text-7xl md:text-9xl text-garnish-green italic font-medium tracking-tight" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
             Comidas & <br className="md:hidden" />
             <span className="ml-4">Bebidas</span>
          </span>
          <p className="mt-6 text-garnish-green/80 font-sans tracking-[0.2em] uppercase font-bold text-sm">
            Tapas • Snacks • Matured Meats • Burgers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left Column: Drinks */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-4xl text-garnish-green border-b border-garnish-green/30 pb-4 mb-8 inline-block">
                The Cellar
              </h3>
              <ul className="space-y-6">
                <li className="group cursor-pointer">
                   <div className="flex justify-between items-baseline">
                     <span className="font-serif text-2xl text-garnish-green/90 group-hover:text-garnish-green italic transition-colors">House Cocktails</span>
                     <span className="text-sm font-sans text-garnish-green/60">40 Varieties</span>
                   </div>
                   <p className="text-garnish-green/70 text-sm mt-1 font-sans">Crafted by our expert team.</p>
                </li>
                <li className="group cursor-pointer">
                   <div className="flex justify-between items-baseline">
                     <span className="font-serif text-2xl text-garnish-green/90 group-hover:text-garnish-green italic transition-colors">Whiskey Club</span>
                     <span className="text-sm font-sans text-garnish-green/60">250 Labels</span>
                   </div>
                   <p className="text-garnish-green/70 text-sm mt-1 font-sans">From Japanese rare finds to Kentucky classics.</p>
                </li>
                <li className="group cursor-pointer">
                   <div className="flex justify-between items-baseline">
                     <span className="font-serif text-2xl text-garnish-green/90 group-hover:text-garnish-green italic transition-colors">National Gin</span>
                     <span className="text-sm font-sans text-garnish-green/60">Curated Selection</span>
                   </div>
                   <p className="text-garnish-green/70 text-sm mt-1 font-sans">Featured in our Tuesday special.</p>
                </li>
              </ul>
            </div>
            
            <div className="bg-garnish-green p-6 text-garnish-sage shadow-lg transform -rotate-1">
              <h4 className="font-serif text-2xl italic mb-2">Bartender's Choice</h4>
              <p className="font-sans text-sm leading-relaxed opacity-90">
                "The Penicillin" - Our Saturday emblem. Blended Scotch, Lemon, Honey-Ginger syrup, Islay float.
              </p>
            </div>
          </div>

          {/* Right Column: Food */}
          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-4xl text-garnish-green border-b border-garnish-green/30 pb-4 mb-8 inline-block">
                The Kitchen
              </h3>
              <div className="grid grid-cols-1 gap-8">
                 <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-garnish-green/10 flex-shrink-0 flex items-center justify-center rounded-full">
                       <span className="font-serif text-2xl text-garnish-green">01</span>
                    </div>
                    <div>
                       <h5 className="font-serif text-2xl text-garnish-green font-bold">Matured Meats</h5>
                       <p className="font-sans text-garnish-green/70 text-sm mt-2 leading-relaxed">
                         Premium cuts aged to perfection for depth of flavor. Served with rustic sides.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-garnish-green/10 flex-shrink-0 flex items-center justify-center rounded-full">
                       <span className="font-serif text-2xl text-garnish-green">02</span>
                    </div>
                    <div>
                       <h5 className="font-serif text-2xl text-garnish-green font-bold">Gourmet Burgers</h5>
                       <p className="font-sans text-garnish-green/70 text-sm mt-2 leading-relaxed">
                         House blends, brioche buns, and artisanal toppings designed to pair with whiskey.
                       </p>
                    </div>
                 </div>

                 <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-garnish-green/10 flex-shrink-0 flex items-center justify-center rounded-full">
                       <span className="font-serif text-2xl text-garnish-green">03</span>
                    </div>
                    <div>
                       <h5 className="font-serif text-2xl text-garnish-green font-bold">Tapas & Snacks</h5>
                       <p className="font-sans text-garnish-green/70 text-sm mt-2 leading-relaxed">
                         Small plates for sharing. Perfect accompaniment for our tasting flights.
                       </p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
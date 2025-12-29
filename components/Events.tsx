import React from 'react';
import { Calendar, Disc, GlassWater, Clock, Music } from 'lucide-react';
import { WeeklyEvent } from '../types';

const events: WeeklyEvent[] = [
  {
    day: "Mondays",
    title: "Whiskey Tastings",
    description: "Explore the depths of our 250 label collection with guided flights.",
    hashtags: ["#lunesdecata"],
    icon: <GlassWater size={24} />
  },
  {
    day: "Tuesdays",
    title: "National Gin Menu",
    description: "A special menu of 4 unique cocktails featuring different national gins.",
    hashtags: ["#martesdegin"],
    icon: <GlassWater size={24} />
  },
  {
    day: "Wednesdays",
    title: "Classics Night",
    description: "Honoring the timeless recipes that started it all.",
    hashtags: ["#wednesdayofclassics"],
    icon: <Calendar size={24} />
  },
  {
    day: "Thursdays",
    title: "Live DJ & Vinyl",
    description: "Live DJ sets every week. Plus, once a month: #panyvinilo.",
    hashtags: ["#livedj", "#panyvinilo"],
    icon: <Music size={24} />
  },
  {
    day: "Friday",
    title: "Happy Hour",
    description: "Monday to Friday until 11 PM. Start your weekend right.",
    hashtags: ["#happyhour"],
    icon: <Clock size={24} />
  },
  {
    day: "Saturdays",
    title: "The Great Penicillin",
    description: "Our emblem cocktail in promotion all night long.",
    hashtags: ["#penicillin"],
    icon: <Disc size={24} />
  },
];

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-stone-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="font-sans text-garnish-gold tracking-[0.2em] text-sm uppercase mb-4">Weekly Rituals</h3>
          <h2 className="font-serif text-5xl md:text-6xl text-stone-100 italic">The Agenda</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="group relative bg-garnish-dark p-8 border border-stone-800 hover:border-garnish-green transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-garnish-green transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-serif text-3xl text-garnish-sage italic">{event.day}</h4>
                <div className="text-garnish-gold opacity-50 group-hover:opacity-100 transition-opacity">
                  {event.icon}
                </div>
              </div>
              
              <h5 className="font-sans text-lg font-bold text-stone-200 uppercase tracking-wide mb-3">
                {event.title}
              </h5>
              
              <p className="font-sans text-stone-400 text-sm leading-relaxed mb-6 border-b border-stone-800 pb-6">
                {event.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {event.hashtags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-garnish-gold/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Concept', href: '#about' },
  { label: 'Weekly Rituals', href: '#events' },
  { label: 'The Menu', href: '#menu' },
  { label: 'Location', href: '#footer' },
];

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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'bg-garnish-dark/90 backdrop-blur-md py-4 border-b border-garnish-green/30' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-garnish-gold uppercase relative group">
          The Garnish Bar
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-garnish-gold transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-sans text-sm tracking-[0.2em] uppercase text-stone-300 hover:text-garnish-gold transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-stone-200 hover:text-garnish-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full bg-garnish-dark border-b border-garnish-green/30 md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-6 px-6 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-sans text-lg tracking-[0.15em] uppercase text-stone-300 hover:text-garnish-gold transition-colors duration-300 py-2 border-b border-garnish-green/20 last:border-0"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
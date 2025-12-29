import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { MenuPreview } from './components/MenuPreview';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-garnish-dark text-stone-200 selection:bg-garnish-green selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuPreview />
        <Events />
      </main>
      <Footer />
    </div>
  );
}

export default App;
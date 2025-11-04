import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="text-sm font-semibold tracking-tight">webrnawa.com</a>
          <nav className="hidden gap-6 text-sm text-gray-300 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#portfolio" className="hover:text-white">Portfolio</a>
            <a href="#resume" className="hover:text-white">Resume</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Portfolio />
        <Resume />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} webrnawa.com — Built with love, PR craft, and a bit of Web3.
        </div>
      </footer>
    </div>
  );
}

export default App;

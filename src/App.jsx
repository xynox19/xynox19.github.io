import React from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <main className="font-mono bg-gradient-to-br from-blue-900 to-purple-800 text-slate-100 min-h-screen">
      <header className="text-center py-10 bg-slate-900 shadow-md sticky top-0 z-50">
        <h1 className="text-4xl font-bold">Saanvi Sethi</h1>
        <p className="text-sm">✮ ⋆ ˚｡𖦹Computer Science Portfolio⋆｡°✩𓆝</p>
        <nav className="mt-4 flex justify-center gap-4 text-sm">
          <a href="#about">About</a>
          <a href="#cv">CV</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <div className="max-w-4xl mx-auto p-6 space-y-16">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}

export default App;

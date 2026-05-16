// src/App.jsx
import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './style.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <div className="app">
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="container">
        <About />
        <section className="section cv" id="cv">
          <h2>Curriculum Vitae</h2>
          <a className="cv-link" href="cv.pdf" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </section>
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;

// App.jsx
import { useState, useEffect } from 'react';
import Header from './src/components/Header';
import About from './src/components/About';
import Experience from './src/components/Experience';
import Projects from './src/components/Projects';
import Contact from './src/components/Contact';
import '.public//style.css';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="app">
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <main className="container">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
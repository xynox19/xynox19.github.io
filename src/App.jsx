import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="app">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀ Light Mode' : ' Dark Mode'}
      </button>
      <h1>Hello, I'm Saanvi!</h1>
    </div>
  );
}

export default App;

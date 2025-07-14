// components/Header.jsx
export default function Header({ toggleTheme, currentTheme }) {
  return (
    <header>
      <h1>Saanvii Sethi</h1>
      <p>✮ ⋆ ˚｡𖦹Computer Science Portfolio⋆｡°✩𓆝</p>
      <nav>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button 
          id="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {currentTheme === 'dark' ? '☽' : '☀'}
        </button>
      </nav>
    </header>
  );
}
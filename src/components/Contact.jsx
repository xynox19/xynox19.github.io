// components/Contact.jsx
export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact</h2>
      <div className="socials">
        <a href="https://github.com/xynox19" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/saanvi-sethi-cs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="mailto:saanvi.sethi19@gmail.com" aria-label="Email">
          <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Email" />
        </a>
      </div>
    </section>
  );
}
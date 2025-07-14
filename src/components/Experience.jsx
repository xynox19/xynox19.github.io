// components/Experience.jsx
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <section className="section experience" id="experience">
      <h2>Work Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">
            <h3>{exp.position} @ {exp.company}</h3>
            <p className="meta">{exp.date} | {exp.location}</p>
            <ul>
              {exp.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
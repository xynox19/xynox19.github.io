// components/Projects.jsx
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section className="section projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
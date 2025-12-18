import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
                {project.techs.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                ))}
            </div>
            <Link to={`/projects/${project.id}`} className="project-link">
                Voir le projet →
            </Link>
        </article>
    );
}
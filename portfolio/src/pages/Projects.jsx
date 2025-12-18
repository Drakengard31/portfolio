import { useNavigate } from "react-router-dom";
import { projects } from "../data/project";

export default function Projects() {
    const navigate = useNavigate();

    return (
        <div className="projects-container">
            <h2 className="projects-title">Mes projets</h2>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => navigate(`/projects/${project.id}`)}
                        className="project-card-grid"
                    >
                        <div className="project-image-container">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="project-image"
                            />
                            <div className="project-overlay">
                                <h3 className="project-title-overlay">{project.title}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
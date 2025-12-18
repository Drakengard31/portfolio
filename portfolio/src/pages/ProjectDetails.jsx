import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/project";
import { ArrowLeft } from "lucide-react";

export default function ProjectDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="not-found-container">
                <h2 className="not-found-title">404</h2>
                <p className="not-found-text">Projet non trouvé</p>
                <button onClick={() => navigate("/projects")} className="home-link">
                    Retour aux projets
                </button>
            </div>
        );
    }

    return (
        <div className="project-details-container">
            <button
                onClick={() => navigate("/projects")}
                className="back-button"
            >
                <ArrowLeft className="back-icon" />
                Retour
            </button>

            <div className="project-details-card">
                <h2 className="project-details-title">{project.title}</h2>

                <img
                    src={project.image}
                    alt={project.title}
                    className="project-details-image"
                />

                <div className="project-content">
                    <p>{project.longDescription}</p>

                    <div className="project-section">
                        <h3>La mission :</h3>
                        <p>{project.mission}</p>
                    </div>

                    <div className="project-section">
                        <h3>Compétences acquises :</h3>
                        <p>{project.competences}</p>
                    </div>

                    <div className="project-section">
                        <h3>Technologies utilisées :</h3>
                        <div className="tech-tags">
                            {project.technologies.map((tech, idx) => (
                                <span key={idx} className="tech-tag">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="project-links">
                        <a href={project.github} className="project-link-btn github-link">
                            Code GitHub
                        </a>
                        <a href={project.demo} className="project-link-btn demo-link">
                            Démo du site
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
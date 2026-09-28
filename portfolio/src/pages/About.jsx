import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
    return (
        <div className="about-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-image-container">
                        <img src="/1000001915.jpg" alt="Portrait de Luc Dimitri" className="profile-image-placeholder" />
                        <div className="profile-info">
                            <h3 className="profile-name">Luc Dimitri</h3>
                            <p className="profile-title">Développeur Frontend React — Disponible immédiatement</p>
                        </div>
                    </div>

                    <div className="profile-content">
                        <p className="profile-paragraph">
                            Développeur frontend diplômé d'OpenClassrooms (Bac +2), je conçois des interfaces
                            web modernes, responsives et accessibles avec React, Redux et JavaScript ES6+.
                            Disponible en full remote, hybride ou sur site près de Commercy (55).
                        </p>

                        <p className="profile-paragraph">
                            Reconverti après 6 ans en restauration, j'ai choisi le développement web par
                            passion réelle pour le code — j'explorais déjà HTML et JavaScript avant même ma
                            formation. Aujourd'hui j'approfondis Node.js et Express avec un objectif clair :
                            devenir développeur fullstack JavaScript.
                        </p>
                    </div>
                </div>

                <div className="profile-footer">
                    <Link to="/projects" className="download-cv-btn">
                        Voir mes projets
                    </Link>
                    <a href="https://github.com/Drakengard31" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Github className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/dimitri-luc-03909b3a2/" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Linkedin className="social-icon" />
                    </a>
                    <a href="mailto:lucdimitri31@gmail.com" className="social-link">
                        <Mail className="social-icon" />
                    </a>
                    <a href={"/docs/CV_Dimitri_Luc.pdf"} download className="download-cv-btn">
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </div>
    );
}
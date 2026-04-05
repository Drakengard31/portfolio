import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
    return (
        <div className="about-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-image-container">
                        <img src="/1000001915.jpg" alt="Luc Dimitri" className="profile-image-placeholder" />
                        <div className="profile-info">
                            <h3 className="profile-name">Luc Dimitri</h3>
                            <p className="profile-title">Développeur Frontend React Junior — Disponible immédiatement</p>
                        </div>
                    </div>

                    <div className="profile-content">
                        <p className="profile-paragraph">
                            Développeur frontend diplômé d'OpenClassrooms (Bac +2, février 2025), je conçois des
                            interfaces web modernes, responsives et accessibles avec React, Redux et JavaScript ES6+.
                            Disponible en full remote, hybride ou sur site près de Commercy (55).
                        </p>

                        <p className="profile-paragraph">
                            Reconverti après 6 ans en restauration, j'ai choisi le développement web par passion réelle
                            pour le code — j'explorais déjà HTML et JavaScript avant même de commencer ma formation.
                            Cette reconversion m'a appris à apprendre vite, à m'organiser et à livrer des projets
                            concrets.
                        </p>

                        <p className="profile-paragraph">
                            Aujourd'hui j'élargis ma stack vers le fullstack en apprenant Node.js et Express, avec
                            l'objectif de devenir développeur fullstack JavaScript. Chaque projet que je construis
                            est une occasion d'aller plus loin.
                        </p>
                    </div>
                </div>

                <div className="profile-footer">
                    <a href="https://github.com/Drakengard31" className="social-link">
                        <Github className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/dimitri-luc-03909b3a2/" className="social-link">
                        <Linkedin className="social-icon" />
                    </a>
                    <a href="mailto:lucdimitri31@gmail.com" className="social-link">
                        <Mail className="social-icon" />
                    </a>
                    <a
                        href={"/docs/CV_Dimitri_Luc_Developpeur_Frontend_React_Junior.docx"}
                        download
                        className="download-cv-btn"
                    >
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </div>
    );
}
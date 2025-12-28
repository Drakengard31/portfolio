import { Github, Linkedin, Mail } from "lucide-react";

export default function About() {
    return (
        <div className="about-container">
            <div className="profile-card">
                <div className="profile-header">
                    <div className="profile-image-container">
                        <div className="profile-image-placeholder">L</div>
                        <div className="profile-info">
                            <h3 className="profile-name">Luc Dimitri</h3>
                            <p className="profile-title">Développeur front-end</p>
                        </div>
                    </div>

                    <div className="profile-content">
                        <p className="profile-paragraph">
                            Passionné par les nouvelles technologies, j'ai choisi de me reconvertir professionnellement
                            après 6 années passées chez McDonald's et de suivre ma passion pour la programmation.
                        </p>

                        <p className="profile-paragraph">
                            Avant même de commencer ma formation, je m'intéressais déjà au développement et j'avais
                            exploré quelques bases en Python, bien que de manière très limitée.
                        </p>

                        <p className="profile-paragraph">
                            Afin de me développer dans le domaine du développement web, j'ai intégré la formation
                            intégrateur web niveau Bac +2 d'OpenClassrooms au cours de laquelle j'ai acquis des
                            compétences solides en HTML, CSS, JavaScript et React.
                        </p>

                        <p className="profile-paragraph">
                            Je suis très enthousiaste à l'idée de découvrir de nouvelles opportunités et de développer
                            de nouvelles compétences dans le domaine du développement web. J'ai choisi de travailler
                            avec React Router car je comprends mieux quand le code est bien organisé et structuré.
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
                        href={"/docs/cv Dimitri.odt"}
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
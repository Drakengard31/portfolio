import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-section">
                    <div className="logo-circle">L</div>
                    <span className="logo-name">Luc Dimitri</span>
                </div>

                <div className="nav-links">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        A PROPOS
                    </NavLink>
                    <NavLink
                        to="/skills"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        COMPETENCES
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        PROJETS
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        CONTACT
                    </NavLink>
                </div>


            </div>
        </header>
    );
}
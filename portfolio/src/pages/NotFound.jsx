import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-text">Page non trouvée</p>
            <Link to="/" className="home-link">
                Retour à l'accueil
            </Link>
        </div>
    );
}
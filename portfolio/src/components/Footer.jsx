export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <p className="footer-text">
                    Tous droits réservés © {new Date().getFullYear()} - Luc Dimitri
                </p>
            </div>
        </footer>
    );
}
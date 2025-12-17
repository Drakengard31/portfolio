import { useState } from "react";
import { Send } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        firstName: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.firstName && formData.email && formData.message) {
            alert("Message envoyé avec succès ! (Démo)");
            setFormData({ name: "", firstName: "", email: "", message: "" });
        } else {
            alert("Veuillez remplir tous les champs");
        }
    };

    return (
        <div className="contact-container">
            <div className="contact-card">
                <h2 className="contact-title">Contact</h2>

                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label className="form-label">Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Prénom</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            className="form-textarea"
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        <Send className="submit-icon" />
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
}
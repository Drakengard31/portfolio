import { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        firstName: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_5ay5uj8",      // Service ID
                "template_oyw7sbm",     // Template ID
                {
                    name: formData.name,
                    firstName: formData.firstName,
                    email: formData.email,
                    message: formData.message,
                },
                "TjAgYg3OeLxuYmqO_"      // Public Key
            )
            .then(() => {
                alert("Message envoyé avec succès 🚀");
                setFormData({
                    name: "",
                    firstName: "",
                    email: "",
                    message: ""
                });
            })
            .catch((error) => {
                console.error(error);
                alert("Erreur lors de l'envoi ❌");
            })
            .finally(() => {
                setLoading(false);
            });
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

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={loading}
                    >
                        <Send className="submit-icon" />
                        {loading ? "Envoi..." : "Envoyer"}
                    </button>
                </form>
            </div>
        </div>
    );
}

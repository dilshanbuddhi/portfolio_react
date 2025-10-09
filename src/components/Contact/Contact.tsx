import { motion, Variants } from "framer-motion";
import { Container } from "./styles";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log("Form submitted:", formData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container id="contact">
            <motion.div
                className="contact-header"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h2>Get In Touch</h2>
                <p>Let's work together on your next project</p>
            </motion.div>

            <div className="contact-content">
                <motion.div
                    className="contact-info"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.div
                        className="info-card"
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="icon-wrapper">
                            <Mail size={24} />
                        </div>
                        <h3>Email</h3>
                        <a href="mailto:Dilshanbuddhi40@gmail.com">
                            Dilshanbuddhi40@gmail.com
                        </a>
                    </motion.div>

                    <motion.div
                        className="info-card"
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="icon-wrapper">
                            <Phone size={24} />
                        </div>
                        <h3>Phone</h3>
                        <a href="tel:+94782960721">+94 78 296 0721</a>
                    </motion.div>

                    <motion.div
                        className="info-card"
                        variants={cardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                    >
                        <div className="icon-wrapper">
                            <MapPin size={24} />
                        </div>
                        <h3>Location</h3>
                        <p>Kaluthara, Sri Lanka</p>
                    </motion.div>
                </motion.div>

                <motion.form
                    className="contact-form"
                    onSubmit={handleSubmit}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <motion.div className="form-group" variants={itemVariants}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div className="form-group" variants={itemVariants}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </motion.div>

                    <motion.div className="form-group" variants={itemVariants}>
            <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
            />
                    </motion.div>

                    <motion.button
                        type="submit"
                        className="submit-btn"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                        <Send size={20} />
                    </motion.button>
                </motion.form>
            </div>
        </Container>
    );
}
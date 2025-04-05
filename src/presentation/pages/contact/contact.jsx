import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";


export default function Contact() {
const [formData, setFormData] = useState({ name: "", email: "", message: "" });
const [success, setSuccess] = useState(null);
const [loading, setLoading] = useState(false); 

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  console.log(formData);
};

const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  emailjs
    .send(
      "service_43x0zqt", // Remplace par ton SERVICE ID
      "template_9gvelt8", // Remplace par ton TEMPLATE ID
      formData,
      "yR1XJua8jPS5TzyHs" // Remplace par ton PUBLIC KEY
    )
    .then(
      () => {
        setSuccess("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      },
      (error) => {
        setSuccess("Échec de l'envoi du message.");
        console.error("Erreur:", error);
      }
    ).finally(() => {
      setLoading(false); // Réinitialise le loading après l'envoi
    });
};


  return (
    <section id="contact" className="min-h-screen flex flex-col items-center px-6 py-10 bg-gradient-to-b from-white to-blue-50">
      <motion.h2
        className="text-4xl font-bold text-blue-900 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Contactez-moi
      </motion.h2>
      {success && <p className="text-center text-green-500">{success}</p>}

      <motion.form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg max-w-md w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <label className="block mb-2 text-blue-900">Nom</label>
        <input type="text" name="name" className="w-full p-2 text-black border border-gray-300 rounded mb-4" placeholder="Votre nom" value={formData.name} onChange={handleChange} />

        <label className="block mb-2 text-blue-900">Email</label>
        <input type="email" name="email" className="w-full p-2 border text-black border-gray-300 rounded mb-4" placeholder="Votre email" value={formData.email} onChange={handleChange} />

        <label className="block mb-2 text-blue-900">Message</label>
        <textarea className="w-full p-2 border text-black border-gray-300 rounded mb-4" name="message" placeholder="Votre message" value={formData.message} onChange={handleChange}></textarea>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
          disabled={loading} // Désactive le bouton pendant le chargement
        >
          {loading ? (
            <span className="flex justify-center items-center">
              <svg className="w-5 h-5 animate-spin mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" strokeWidth="2"></circle>
                <path d="M4 12a8 8 0 1 0 16 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              Envoi...
            </span>
          ) : (
            "Envoyer"
          )}
        </button>
      </motion.form>
    </section>
  );
}

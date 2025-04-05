import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      year: "Juin 2023 - Août 2023",
      title: "Développeur Fullstack",
      company: "Commune Urbaine Ambalavao",
      description: "Conception et réalisation d'une application web pour la gestion d'impôt foncier sur les propriété bâties || Django et React JS.",
    },
    {
      year: "Juin 2024 - Septembre 2024",
      title: "Développeur Fullstack",
      company: "ESN Sidina-MANAO Fianarantsoa",
      description: "Conception et réalisation d'une application web pour la création et partage des questionnaires || Django et React JS.",
    },
    {
      year: "Mars 2025",
      title: "Développeur Backend",
      company: "Hackathon Accès Banque",
      description: "Gestion des achats en Entreprise || Django.",
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex flex-col items-center px-6 py-10 bg-white">
      <motion.h2 
        className="text-4xl font-bold text-blue-900 mb-6"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Expériences
      </motion.h2>

      <div className="max-w-3xl w-full space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-blue-700">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} • {exp.year}</p>
            <p className="mt-2 text-gray-700">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { FaDatabase, FaPaintBrush, FaCode, FaLaptopCode } from "react-icons/fa";

const skillsData = [
  {
    icon: <FaPaintBrush className="text-3xl text-blue-600" />,
    title: "Design",
    subtitle: "Des interfaces modernes et intuitives.",
    tools: "Figma, Adobe XD, Photoshop, Canvas",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-blue-600" />,
    title: "Frontend",
    subtitle: "Expériences utilisateur dynamiques.",
    tools: "React.js, Angular, Tailwind, Bootstrap",
  },
  {
    icon: <FaCode className="text-3xl text-blue-600" />,
    title: "Backend",
    subtitle: "Systèmes robustes et performants.",
    tools: "Laravel, Django, Express.js, CodeIgniter",
  },
  {
    icon: <FaDatabase className="text-3xl text-blue-600" />,
    title: "Base de données",
    subtitle: "Données gérées avec précision.",
    tools: "MySQL, PostgreSQL, SQLite, MongoDB",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6 bg-gradient-to-b from-white to-blue-50">
      <motion.h2
        className="text-4xl font-bold text-center text-blue-900 mb-12"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: false }}
      >
        Compétences
      </motion.h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            <div className="flex-shrink-0">{skill.icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-blue-800">{skill.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{skill.subtitle}</p>
              <p className="text-sm text-gray-800">{skill.tools}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

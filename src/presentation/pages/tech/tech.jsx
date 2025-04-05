import { motion } from "framer-motion";
import { SiCodeigniter, SiDjango, SiLaravel, SiReact, SiSpringboot, SiMysql, SiPostgresql, SiSqlite } from "react-icons/si";

export default function Skills() {
  const technologies = [
    { name: "Django", level: 90, icon: <SiDjango size={30} className="text-green-600" /> },
    { name: "Laravel", level: 85, icon: <SiLaravel size={30} className="text-red-500" /> },
    { name: "CodeIgniter", level: 80, icon: <SiCodeigniter size={30} className="text-orange-500" /> },
    { name: "React Js", level: 90, icon: <SiReact size={30} className="text-blue-500" /> },
  ];

  const databases = [
    { name: "MySQL", level: 90, icon: <SiMysql size={30} className="text-blue-700" /> },
    { name: "PostgreSQL", level: 85, icon: <SiPostgresql size={30} className="text-blue-500" /> },
    { name: "SQLite", level: 80, icon: <SiSqlite size={30} className="text-gray-600" /> },
  ];

  return (
    <section id="skills" className="min-h-screen flex flex-col items-center px-6 py-10 bg-white">
      <motion.h2 
        className="text-4xl font-bold text-blue-900 mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
      >
        Compétences
      </motion.h2>

      {/* Conteneur en flex-row sur grand écran et flex-col sur mobile */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-5xl">
        
        {/* Section Technologies */}
        <motion.div 
          className="flex-1 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Technologies</h3>
          <div className="space-y-6">
            {technologies.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Section Bases de données */}
        <motion.div 
          className="flex-1 bg-blue-50 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-blue-800 mb-4 text-center">Bases de données</h3>
          <div className="space-y-6">
            {databases.map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Composant réutilisable pour la barre de progression
function SkillBar({ skill }) {
  return (
    <motion.div
      className="bg-white p-4 rounded-lg shadow-sm"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center space-x-4">
        {skill.icon}
        <h3 className="text-lg font-semibold text-blue-700">{skill.name}</h3>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
        <motion.div
          className="h-2 bg-blue-500 rounded-full"
          initial={{ width: "0%" }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: false }}
          transition={{ duration: 1.2 }}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </motion.div>
  );
}

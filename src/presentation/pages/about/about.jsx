import React from 'react'
import image from '../../../assets/quels-sont-les-merites-des-pc-portables-en-2024.webp'
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section id="about" className="py-16 px-6 bg-gradient-to-b from-white via-blue-50 to-white text-gray-900"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Texte à gauche */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">À propos de moi</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Je suis <span className="font-semibold text-blue-700">SYLLA Guerra</span>, un développeur backend passionné.
            J'aime créer des applications performantes et sécurisées avec <span className="font-semibold">Django, Laravel et CodeIgniter</span>.
            Mon objectif est de toujours optimiser le code et d'améliorer l'expérience utilisateur.
          </p>
        </div>

        {/* Icônes des compétences à droite */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="">
            <img src={image} alt="Django" className="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About
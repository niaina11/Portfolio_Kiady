import React from "react";
import me from "../../../assets/kiady1.png";
import spring from "../../../assets/spring.png";
import laravel from "../../../assets/laravel.png";
import django from "../../../assets/django.png";
import { motion } from "framer-motion";
import { SiCodeigniter, SiDjango, SiLaravel } from "react-icons/si";

export default function Portfolio() {
  return (
    <div className="bg-gradient-to-r from-white via-blue-200 to-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center flex flex-col md:flex-row items-center">
          {/* Photo */}
          <motion.img
            src={me}
            alt="Profile"
            className=" shadow-lg mx-auto rounded-full w-64 h-70 sm:w-100 sm:h-120 object-cover"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Texte de présentation */}
          <motion.div initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }} // Animation à chaque scroll
            transition={{ duration: 0.6, ease: "easeOut" }}>
            <h1 className="text-2xl sm:text-1xl font-semibold text-blue-900 mt-6 mb-4">
              SYLLA RAZAFINDRAKOTO Andrianasolo Guerra
            </h1>
            <p className="text-lg sm:text-l text-gray-600 max-w-3xl mx-auto mb-8">
              Je suis un développeur full-stack passionné par la création
              d'applications web modernes. Je me spécialise dans le développement
              backend avec des frameworks comme <strong>Django</strong>,
              <strong>Laravel</strong> et <strong>CodeIgniter</strong>.
              Actuellement, je travaille sur des projets qui intègrent ces technologies
              pour offrir des solutions robustes et évolutives.
            </p>

            {/* Logos des frameworks backend */}
            <div className="flex justify-center space-x-6 mb-8">
              <SiDjango size={30} className="text-green-600" />
              <SiLaravel size={30} className="text-red-500" />
              <SiCodeigniter size={30} className="text-orange-500" />
            </div>

            <a
              href="https://drive.google.com/file/d/1-PUAffOU1g7bh_d7ojb0iAgGEDD92QZX/view?usp=sharing"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition"
            >
              Télécharger mon CV
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import React, { Component } from 'react'
import {motion} from "framer-motion";
import image from '../../../assets/front.jpg'
import image2 from '../../../assets/images2jpeg.jpeg'
import image3 from '../../../assets/images3.jpeg'

const projects = [
    {
      title: "Gestion d'État Civil",
      description: "Application permettant de gérer les documents d'état civil.",
      image: image,
      technologies: ["Django", "React", "PostgreSQL"],
      link: "#"
    },
    {
      title: "E-commerce & Livraison",
      description: "Plateforme de vente en ligne avec système de livraison intégré.",
      image: image2,
      technologies: ["Laravel", "Vue.js", "MySQL"],
      link: "#"
    },
    {
      title: "Prise de Rendez-vous Médical",
      description: "Application permettant de prendre des rendez-vous avec des médecins.",
      image: image3,
      technologies: ["Spring Boot", "Angular", "MongoDB"],
      link: "#"
    }
  ];
  
  export default function Projects() {
    return (
      <motion.section id="projects" className="py-16 px-6 bg-gradient-to-b from-white via-blue-50 to-white text-gray-900" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-10">Mes Projets</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <motion.img src={project.image} alt={project.title} className="w-full h-48 object-cover"
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  whileHover={{ scale: 1.1, boxShadow: "0px 4px 20px rgba(0, 0, 255, 0.4)" }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-800">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="flex space-x-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tech}</span>
                    ))}
                  </div>
                  <a href={project.link} className="block mt-4 text-blue-600 font-semibold hover:underline">Voir le projet</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    );
  }
  
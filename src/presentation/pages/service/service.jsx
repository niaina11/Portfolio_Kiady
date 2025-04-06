import { useEffect, useState } from "react";
import { FaCode, FaServer, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("services");
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.section
            id="services"
            className="py-16 bg-gradient-to-b from-white to-blue-50 text-gray-900"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 , ease: "easeInOut" }}
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl text-blue-900 font-bold mb-6">Mes Services</h2>
                <p className="text-gray-600 mb-12">Je conçois et développe des solutions web modernes, performantes et sur mesure.</p>

                <motion.div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    } transition-all duration-1000 ease-in-out`}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Développeur Backend */}
                    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <FaServer className="text-blue-600 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold">Développeur Backend</h3>
                        <p className="text-gray-600 mt-2">API sécurisées, gestion de bases de données et logique métier robuste.</p>
                    </div>

                    {/* Développeur Full-stack */}
                    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <FaCode className="text-green-600 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold">Développeur Full-stack</h3>
                        <p className="text-gray-600 mt-2">Solutions complètes du frontend au backend, avec une architecture bien pensée.</p>
                    </div>

                    {/* Développeur Frontend */}
                    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <FaLaptopCode className="text-pink-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold">Développeur Frontend</h3>
                        <p className="text-gray-600 mt-2">Interfaces modernes et réactives avec une excellente expérience utilisateur.</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

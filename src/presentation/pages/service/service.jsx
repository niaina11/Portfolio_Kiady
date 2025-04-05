import { useEffect, useState } from "react";
import { FaLaravel, FaPython, FaJava, FaPhp } from "react-icons/fa";
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
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl text-blue-900 font-bold mb-6">Mes Services</h2>
                <p className="text-gray-600 mb-12">Je développe des applications backend performantes et sécurisées.</p>

                <motion.div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        } transition-all duration-1000 ease-in-out`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    {/* Django */}
                    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <FaPython className="text-blue-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold">Développement Django</h3>
                        <p className="text-gray-600 mt-2">Création d'API performantes et sécurisées avec Django et DRF.</p>
                    </div>

                    {/* Laravel */}
                    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <FaLaravel className="text-red-500 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold">Développement Laravel</h3>
                        <p className="text-gray-600 mt-2">Conception d'applications robustes avec Laravel et MySQL.</p>
                    </div>

                    {/* Spring Boot */}
                    <div className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
                        <FaPhp className="text-purple-600 text-5xl mb-4" />
                        <h3 className="text-xl font-semibold">Développement CodeIgniter</h3>
                        <p className="text-gray-600 mt-2">Création d'applications web légères et performantes avec CodeIgniter.</p>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X, Facebook, MessageCircle } from "lucide-react";
import logo from "../../../assets/logoKiady.png"; // Assurez-vous d'importer votre logo ici

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Détecte quand 60% de la section est visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-blue-900 flex justify-center items-center">
            <img src={logo} alt="" width={30} /> SYLLA Guerra
          </div>
          
          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-6">
            {[
              { to: "home", label: "Acceuil" },
              { to: "about", label: "À Propos" },
              { to: "services", label: "Services" },
              { to: "tech", label: "Technologie" },
              { to: "project", label: "Projets" },
              { to: "experience", label: "Expériences" },
              { to: "contact", label: "Contact" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                className={`cursor-pointer text-blue-900 hover:text-blue-700 relative transition-all ${
                  activeSection === to ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-900">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          {["home", "about", "services", "contact"].map((to) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              className="block px-1 py-2 text-blue-900 hover:bg-blue-100 cursor-pointer"
            >
              {to.charAt(0).toUpperCase() + to.slice(1)}
            </Link>
          ))}
        </div>
      )}

      {/* Icône de contact en bas à droite */}
      <div className="fixed bottom-4 right-4 flex flex-col items-end space-y-2">
        {showContacts && (
          <div className="flex flex-col space-y-2 bg-white p-2 shadow-lg rounded-lg animate-fadeIn">
            <a href="https://web.facebook.com/kiady.nellio" target="_blank" rel="noopener noreferrer" className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
              <Facebook size={24} />
            </a>
            <a href="https://wa.me/261341647584?text=Bonjour,%20je%20souhaite%20discuter%20avec%20vous." target="_blank" rel="noopener noreferrer" className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600">
              <MessageCircle size={24} />
            </a>
          </div>
        )}
      </div>
        {/* <button onClick={() => setShowContacts(!showContacts)} className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600">
          📞
        </button> */}
    </nav>
  );
}

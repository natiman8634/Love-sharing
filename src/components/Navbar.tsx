import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    if (element) {
      // Offset for the fixed navbar (approx 80px)
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMenuOpen(false); // Close mobile menu after selection
  };

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, "home")} 
          className="flex items-center gap-3"
        >
          <img src={logo} alt="Lovesharing Logo" className="h-10 w-auto object-contain" />
          <span className="text-xl font-bold text-gray-800">Lovesharing</span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          <li><a href="#home" onClick={(e) => scrollToSection(e, "home")} className="hover:text-red-600 transition-colors">Home</a></li>
          <li><a href="#purpose" onClick={(e) => scrollToSection(e, "purpose")} className="hover:text-red-600 transition-colors">Purpose</a></li>
          <li><a href="#teams" onClick={(e) => scrollToSection(e, "teams")} className="hover:text-red-600 transition-colors">Our-Teams</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-red-600 transition-colors">About-Us</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="hover:text-red-600 transition-colors">Contact</a></li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button className="md:hidden text-2xl text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg animate-in slide-in-from-top duration-300">
          <ul className="flex flex-col items-center gap-6 py-8 font-semibold text-gray-700">
            <li><a href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a></li>
            <li><a href="#purpose" onClick={(e) => scrollToSection(e, "purpose")}>Purpose</a></li>
            <li><a href="#teams" onClick={(e) => scrollToSection(e, "teams")}>Our-Teams</a></li>
            <li><a href="#about" onClick={(e) => scrollToSection(e, "about")}>About-Us</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
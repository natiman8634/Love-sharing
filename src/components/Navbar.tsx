import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Lovesharing Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-gray-800">
            Lovesharing
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-semibold text-gray-700">
          <li><a href="#home" className="hover:text-red-600">Home</a></li>
          <li><a href="#teams" className="hover:text-red-600">Our-Teams</a></li>
          <li><a href="#about" className="hover:text-red-600">About-Us</a></li>
          <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 font-semibold">
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#teams" onClick={() => setMenuOpen(false)}>Our-Teams</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About-Us</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
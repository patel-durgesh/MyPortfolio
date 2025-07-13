import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleClose = () => setMenuOpen(false);

  const navItems = ["home", "about", "experience", "projects", "contact"];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div
          className="cursor-pointer transition duration-300 hover:scale-110"
          onClick={() => {
            scroll.scrollToTop();
            handleClose();
          }}
        >
          <img src={Logo} alt="Logo" className="w-10" />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <div className="hidden md:flex space-x-6">
          {navItems.map((sec) => (
            <Link
              key={sec}
              to={sec}
              smooth
              duration={500}
              className="cursor-pointer hover:text-emerald-600 transition"
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden flex flex-col items-center space-y-6 py-6 bg-white transition-all duration-300 shadow-md ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        {navItems.map((sec) => (
          <Link
            key={sec}
            to={sec}
            smooth
            duration={500}
            onClick={handleClose}
            className="cursor-pointer text-lg hover:text-emerald-600 transition"
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

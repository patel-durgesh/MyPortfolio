import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../../public/Logo.jpg";

const Navbar = () => (
  <nav className="fixed w-full bg-white shadow-sm z-50">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <div
        className="cursor-pointer transition duration-300 hover:scale-110"
        onClick={() => scroll.scrollToTop()}
      >
        <img src={Logo} alt="" className="w-10" />
      </div>
      <div className="space-x-6">
        {["home", "about", "experience", "projects", "contact"].map((sec) => (
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
  </nav>
);

export default Navbar;

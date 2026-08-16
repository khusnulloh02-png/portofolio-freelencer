import { Link, useLocation } from "react-router-dom";
import { Menu, X, Code2, MessageCircle } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const igDmUrl = "https://wa.me/082321041561";

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Karya Saya", path: "/projects" },
  ];

  return (
    <nav className="fixed w-full z-50 glass-effect transition-all duration-300 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            <span className="font-bold text-lg sm:text-xl tracking-tight text-secondary">
              M. Khusnulloh
            </span>
          </Link>

          {/* Desktop & Tablet Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  location.pathname === link.path
                    ? "text-primary font-semibold"
                    : "text-slate-600"
                } hover:text-primary transition-colors text-sm lg:text-base`}
              >
                {link.name}
              </Link>
            ))}

            {/* Tombol DM Instagram */}
            <a
              href={igDmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:text-white text-blue-700 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-medium text-sm lg:text-base hover:bg-blue-700 transition-all shadow-md hover:shadow-primary/30 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Konsultasi Gratis</span>
            </a>
          </div>

          {/* Mobile Menu Button (HP) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-base font-medium ${
                location.pathname === link.path
                  ? "bg-blue-50 text-primary font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <a
            href={igDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full bg-primary text-blue-700 hover:text-white  px-4 py-3 rounded-xl font-medium text-base hover:bg-blue-700 transition-all shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Konsultasi Gratis via IG</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

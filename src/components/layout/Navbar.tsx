import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Nos Labels", path: "/labels" },
    { name: "Annuaire", path: "/eleveurs" },
    { name: "Services", path: "/services" },
    { name: "Actualités", path: "/actualites" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 inset-x-0 z-50 bg-paper border-b border-border h-[70px] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-10 flex justify-between items-center">
        {/* LOGO AREA */}
        <Link to="/" className="group flex items-center">
          <span className="font-serif text-[20px] font-bold tracking-[1px] text-ink uppercase">
            CMMM
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex gap-[24px] items-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-sans text-[13px] uppercase tracking-[1px] font-medium text-ink hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6 text-ink" />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-paper px-10 py-12 flex flex-col border-b border-border"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif text-[20px] font-bold tracking-[1px] text-ink uppercase">CMMM</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8 text-ink" />
              </button>
            </div>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-sans text-[16px] font-medium uppercase tracking-[1px] text-ink hover:text-gold transition-colors border-b border-border pb-4"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

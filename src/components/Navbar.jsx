import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, PhoneCall, Activity } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/doctors", label: "Doctors" },
    { to: "/departments", label: "Departments" },
    { to: "/services", label: "Services" },
    { to: "/gallery", label: "Gallery" },
    { to: "/careers", label: "Careers" },
    { to: "/blog", label: "Blog" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <nav className="glass-nav sticky top-0 z-40 w-full transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <div className="bg-primary p-2.5 rounded-2xl text-white shadow-lg shadow-primary/30 flex items-center justify-center animate-pulse-subtle">
              <Activity className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl tracking-tight text-slate-900 leading-none">ST. MARINA</span>
              <span className="text-[10px] text-primary font-bold tracking-widest uppercase">International Hospital</span>
            </div>
          </Link>

          {/* Desktop NavLinks */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `font-heading font-semibold text-sm transition-all duration-200 relative py-1 hover:text-primary ${
                    isActive
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                      : "text-slate-600"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Call to Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/emergency"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-2xl font-semibold text-xs flex items-center space-x-1.5 transition-all shadow-md shadow-red-500/20 hover:scale-105"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>EMERGENCY</span>
            </Link>
            <Link
              to="/appointment"
              className="bg-gradient-primary hover:opacity-95 text-white px-5 py-2.5 rounded-2xl font-bold text-xs shadow-md shadow-primary/20 hover:scale-105 transition-all"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <Link
              to="/emergency"
              className="bg-red-500 text-white p-2.5 rounded-xl flex items-center justify-center shadow-md"
              aria-label="Emergency Call"
            >
              <PhoneCall className="w-5 h-5 animate-pulse" />
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden border-t border-slate-100 bg-white ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-heading font-semibold text-base transition-colors ${
                  isActive
                    ? "bg-slate-50 text-primary border-l-4 border-primary"
                    : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
            <Link
              to="/emergency"
              onClick={closeMenu}
              className="bg-red-500 text-white py-3 rounded-2xl font-semibold text-sm flex items-center justify-center space-x-1.5 shadow-md shadow-red-500/20"
            >
              <PhoneCall className="w-4 h-4 animate-bounce" />
              <span>Emergency</span>
            </Link>
            <Link
              to="/appointment"
              onClick={closeMenu}
              className="bg-gradient-primary text-white py-3 rounded-2xl font-semibold text-sm flex items-center justify-center shadow-md"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}


import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  BsList,
  BsXLg,
  BsBriefcaseFill,
} from "react-icons/bs";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
    { name: "About", path: "/about" },
  ];

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
      isActive ? "text-blue-600" : "text-slate-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-xl bg-blue-600 p-2 text-white shadow-sm shadow-blue-200">
            <BsBriefcaseFill size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Job<span className="text-blue-600">Portal</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/login"
            className="rounded-lg border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-sm shadow-blue-200 transition-all hover:bg-blue-700"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <BsXLg size={24} /> : <BsList size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex flex-col gap-2 border-t border-slate-200 pt-4">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-center text-sm font-medium text-slate-700 transition-colors hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="w-full rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition-colors hover:bg-blue-700"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
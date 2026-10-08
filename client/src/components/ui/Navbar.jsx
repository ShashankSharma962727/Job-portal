import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  BsList,
  BsXLg,
  BsBriefcaseFill,
  BsBoxArrowRight,
  BsPerson,
  BsChevronDown,
} from "react-icons/bs";
import { useAuth } from "../../Context/AuthContext";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const isLoggedIn = isAuthenticated;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Jobs", path: "/jobs" },
  ];

  const linkClass = ({ isActive }) =>
    `block rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 ${
      isActive
        ? "bg-blue-50 text-blue-700"
        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
    }`;

  const userName =
    user?.firstname || user?.firstName || user?.name || "Account";

  const userInitial = userName.charAt(0).toUpperCase();

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
    setIsProfileOpen(false);
    navigate("/login");
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-200">
            <BsBriefcaseFill size={21} />
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900">
            Job<span className="text-blue-600">Portal</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={linkClass}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-3 md:flex">
          {!isLoggedIn ? (
            <>
              {/* Login */}
              <Link
                to="/login"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                to="/signup"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
              >
                Sign up
              </Link>
            </>
          ) : (
            /* Logged In Profile */
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsProfileOpen((prev) => !prev)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 pr-3 transition hover:border-blue-200 hover:bg-slate-50"
                aria-expanded={isProfileOpen}
                aria-label="Open profile menu"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                  {userInitial}
                </div>

                <span className="max-w-28 truncate text-sm font-semibold text-slate-700">
                  {userName}
                </span>

                <BsChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
                  <div className="border-b border-slate-100 px-4 py-3">
                    <p className="text-xs text-slate-500">Welcome back</p>

                    <p className="mt-1 truncate text-sm font-semibold text-slate-800">
                      {userName}
                    </p>
                  </div>

                  <div className="p-2">
                    {user?.role === "candidate" ? (
                      <Link
                        to="/profile"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        <BsPerson size={17} />
                        Profile
                      </Link>
                    ) : user?.role === "recruiter" ? (
                      <Link
                        to="/recruiter"
                        onClick={() => setIsProfileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                      >
                        <BsPerson size={17} />
                        Recruiter dashboard
                      </Link>
                    ) : null}

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-50"
                    >
                      <BsBoxArrowRight size={17} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <BsXLg size={23} /> : <BsList size={25} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {/* Mobile Navigation */}
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMobileMenu}
                className={linkClass}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Auth */}
            <div className="mt-2 border-t border-slate-200 pt-4">
              {!isLoggedIn ? (
                <div className="flex flex-col gap-3">
                  <Link
                    to="/login"
                    onClick={closeMobileMenu}
                    className="rounded-lg border border-slate-300 px-4 py-2.5 text-center text-sm font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    onClick={closeMobileMenu}
                    className="rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {/* User Info */}
                  <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                      {userInitial}
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs text-slate-500">Welcome back</p>

                      <p className="truncate text-sm font-semibold text-slate-800">
                        {userName}
                      </p>
                    </div>
                  </div>

                  {/* Profile */}
                  {user?.role === "candidate" ? (
                    <Link
                      to="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      <BsPerson size={17} />
                      Profile
                    </Link>
                  ) : user?.role === "recruiter" ? (
                    <Link
                      to="/recruiter"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      <BsPerson size={17} />
                      Recruiter dashboard
                    </Link>
                  ) : null}

                  {/* Logout */}
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    <BsBoxArrowRight size={17} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

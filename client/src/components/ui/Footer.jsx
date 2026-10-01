
import React from "react";
import { Link } from "react-router-dom";
import {
  BsBriefcaseFill,
  BsLinkedin,
  BsGithub,
  BsInstagram,
  BsEnvelope,
  BsArrowUp,
} from "react-icons/bs";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-auto border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex w-fit items-center gap-2">
            <div className="rounded-xl bg-blue-600 p-2 text-white">
              <BsBriefcaseFill size={22} />
            </div>

            <span className="text-xl font-bold text-slate-900">
              Job<span className="text-blue-600">Portal</span>
            </span>
          </Link>

          <p className="max-w-xs text-sm leading-6 text-slate-500">
            Find your dream job and take the next step in your
            career. Connecting talented people with great
            opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-base font-semibold text-slate-900">
            Quick Links
          </h3>

          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li>
              <Link to="/" className="transition-colors hover:text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link to="/jobs" className="transition-colors hover:text-blue-600">
                Browse Jobs
              </Link>
            </li>

            <li>
              <Link to="/about" className="transition-colors hover:text-blue-600">
                About Us
              </Link>
            </li>

            <li>
              <Link to="/register" className="transition-colors hover:text-blue-600">
                Create Account
              </Link>
            </li>
          </ul>
        </div>

        {/* Job Seekers */}
        <div>
          <h3 className="mb-4 text-base font-semibold text-slate-900">
            For Job Seekers
          </h3>

          <ul className="flex flex-col gap-3 text-sm text-slate-500">
            <li>
              <Link to="/jobs" className="transition-colors hover:text-blue-600">
                Find Jobs
              </Link>
            </li>

            <li>
              <Link to="/login" className="transition-colors hover:text-blue-600">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register" className="transition-colors hover:text-blue-600">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact and Social */}
        <div>
          <h3 className="mb-4 text-base font-semibold text-slate-900">
            Connect With Us
          </h3>

          <a
            href="mailto:support@jobportal.com"
            className="mb-4 flex w-fit items-center gap-2 text-sm text-slate-500 transition-colors hover:text-blue-600"
          >
            <BsEnvelope size={17} />
            support@jobportal.com
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-slate-200 p-2.5 text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <BsLinkedin size={19} />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg border border-slate-200 p-2.5 text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <BsGithub size={19} />
            </a>

            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-lg border border-slate-200 p-2.5 text-slate-500 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <BsInstagram size={19} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-center sm:px-6 md:flex-row lg:px-8">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="flex items-center gap-1 text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
          >
            Back to top
            <BsArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
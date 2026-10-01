
import React from "react";
import { Link } from "react-router-dom";
import {
  BsArrowLeft,
  BsSearch,
  BsPeople,
  BsBriefcase,
} from "react-icons/bs";

import ApplicantCard from "../components/ui/Recruiter/ApplicantCard";

const applicants = [
  {
    id: 1,
    name: "Aarav Sharma",
    initials: "AS",
    role: "Frontend Developer",
    email: "aarav@example.com",
    location: "Delhi, India",
    experience: "Fresher",
    skills: ["React", "JavaScript", "HTML", "CSS"],
    status: "Pending",
    appliedDate: "Sep 28, 2026",
    resumeUrl: "",
  },
  {
    id: 2,
    name: "Priya Verma",
    initials: "PV",
    role: "Frontend Developer",
    email: "priya@example.com",
    location: "Noida, India",
    experience: "1 year",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    status: "Shortlisted",
    appliedDate: "Sep 27, 2026",
    resumeUrl: "",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    initials: "RK",
    role: "Frontend Developer",
    email: "rahul@example.com",
    location: "Lucknow, India",
    experience: "2 years",
    skills: ["React", "Node.js", "MongoDB"],
    status: "Rejected",
    appliedDate: "Sep 26, 2026",
    resumeUrl: "",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    initials: "SG",
    role: "Frontend Developer",
    email: "sneha@example.com",
    location: "Agra, India",
    experience: "Fresher",
    skills: ["HTML", "CSS", "React"],
    status: "Hired",
    appliedDate: "Sep 25, 2026",
    resumeUrl: "",
  },
];

const Applicants = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-7">
        {/* Header */}
        <div>
          <Link
            to="/recruiter/jobs"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <BsArrowLeft />
            Back to Manage Jobs
          </Link>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-blue-600">
                Recruiter Dashboard
              </p>
              <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
                Applicants
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Review candidates who applied for your job.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3">
              <BsPeople className="text-blue-600" size={20} />
              <span className="text-sm font-semibold text-slate-700">
                4 Applicants
              </span>
            </div>
          </div>
        </div>

        {/* Job information */}
        <section className="rounded-2xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
              <BsBriefcase size={23} />
            </div>

            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                Applicants for
              </p>
              <h2 className="mt-1 text-lg font-bold text-slate-900">
                Frontend Developer
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Your Company · Bangalore · Full-time
              </p>
            </div>

            <span className="w-fit rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
              Active
            </span>
          </div>
        </section>

        {/* Search and filter UI */}
        <section className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <BsSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search applicants by name or email..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <select
            defaultValue="all"
            className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-48"
          >
            <option value="all">All applicants</option>
            <option value="Pending">Pending</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Rejected">Rejected</option>
            <option value="Hired">Hired</option>
          </select>
        </section>

        {/* Applicants list */}
        <div className="space-y-4">
          {applicants.map((applicant) => (
            <ApplicantCard key={applicant.id} applicant={applicant} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Applicants;
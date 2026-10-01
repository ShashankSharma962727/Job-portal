import React from "react";
import { Link } from "react-router-dom";
import {
  BsPersonCircle,
  BsArrowUpRight,
  BsGeoAlt,
} from "react-icons/bs";

const applicants = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Frontend Developer",
    experience: "Fresher",
    date: "Today",
    initials: "AS",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    name: "Priya Verma",
    role: "UI/UX Designer",
    experience: "1 year",
    date: "Yesterday",
    initials: "PV",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: 3,
    name: "Rahul Kumar",
    role: "Backend Developer",
    experience: "2 years",
    date: "Yesterday",
    initials: "RK",
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    role: "Frontend Developer",
    experience: "Fresher",
    date: "2 days ago",
    initials: "SG",
    color: "bg-orange-100 text-orange-700",
  },
];

const RecentApplicants = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 p-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Applicants
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Candidates who recently applied.
          </p>
        </div>

        <Link
          to="/recruiter/jobs"
          className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View all <BsArrowUpRight />
        </Link>
      </div>

      <div className="divide-y divide-slate-100">
        {applicants.map((applicant) => (
          <div
            key={applicant.id}
            className="flex items-center gap-3 p-4 transition hover:bg-slate-50"
          >
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold ${applicant.color}`}
            >
              {applicant.initials}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-slate-900">
                {applicant.name}
              </h3>
              <p className="mt-1 truncate text-xs text-slate-500">
                {applicant.role}
              </p>
              <p className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                <BsGeoAlt /> {applicant.experience}
              </p>
            </div>

            <div className="shrink-0 text-right">
              <p className="text-xs text-slate-400">{applicant.date}</p>
              <button
                type="button"
                className="mt-2 rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentApplicants;
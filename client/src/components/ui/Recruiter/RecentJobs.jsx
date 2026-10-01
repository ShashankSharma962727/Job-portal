import React from "react";
import { Link } from "react-router-dom";
import {
  BsBriefcase,
  BsGeoAlt,
  BsPeople,
  BsArrowUpRight,
  BsThreeDots,
} from "react-icons/bs";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    type: "Full-time",
    location: "Bangalore, India",
    applicants: 48,
    status: "Active",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Backend Developer",
    type: "Remote",
    location: "Remote",
    applicants: 32,
    status: "Active",
    posted: "5 days ago",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    type: "Full-time",
    location: "Delhi, India",
    applicants: 24,
    status: "Closed",
    posted: "1 week ago",
  },
];

const RecentJobs = () => {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Jobs
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Manage your recently posted jobs.
          </p>
        </div>

        <Link
          to="/recruiter/jobs"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
        >
          View all <BsArrowUpRight />
        </Link>
      </div>

      <div className="divide-y divide-slate-100">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BsBriefcase size={22} />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="font-semibold text-slate-900">
                {job.title}
              </h3>

              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <BsGeoAlt /> {job.location}
                </span>
                <span>{job.type}</span>
                <span className="inline-flex items-center gap-1">
                  <BsPeople /> {job.applicants} applicants
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 sm:justify-end">
              <div className="text-left sm:text-right">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    job.status === "Active"
                      ? "bg-green-50 text-green-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {job.status}
                </span>
                <p className="mt-2 text-xs text-slate-400">
                  {job.posted}
                </p>
              </div>

              <button
                type="button"
                aria-label={`More options for ${job.title}`}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100"
              >
                <BsThreeDots size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentJobs;
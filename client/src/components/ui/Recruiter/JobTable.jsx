
import React from "react";
import { Link } from "react-router-dom";
import {
  BsPeople,
  BsPencilSquare,
  BsTrash3,
  BsThreeDots,
  BsBriefcase,
  BsGeoAlt,
} from "react-icons/bs";

const jobs = [
  {
    id: "1",
    title: "Frontend Developer",
    location: "Bangalore, India",
    type: "Full-time",
    salary: "5-8 LPA",
    applicants: 48,
    status: "Active",
    posted: "Sep 25, 2026",
  },
  {
    id: "2",
    title: "Backend Developer",
    location: "Remote",
    type: "Remote",
    salary: "6-10 LPA",
    applicants: 32,
    status: "Active",
    posted: "Sep 22, 2026",
  },
  {
    id: "3",
    title: "UI/UX Designer",
    location: "Delhi, India",
    type: "Full-time",
    salary: "4-7 LPA",
    applicants: 24,
    status: "Closed",
    posted: "Sep 18, 2026",
  },
  {
    id: "4",
    title: "MERN Stack Developer",
    location: "Noida, India",
    type: "Full-time",
    salary: "5-9 LPA",
    applicants: 56,
    status: "Active",
    posted: "Sep 15, 2026",
  },
];

const JobTable = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Desktop table */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[750px] text-left">
          <thead className="bg-slate-50">
            <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500">
              <th className="px-5 py-4 font-semibold">Job</th>
              <th className="px-5 py-4 font-semibold">Applicants</th>
              <th className="px-5 py-4 font-semibold">Status</th>
              <th className="px-5 py-4 font-semibold">Posted Date</th>
              <th className="px-5 py-4 text-right font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {jobs.map((job) => (
              <tr key={job.id} className="transition hover:bg-slate-50">
                <td className="px-5 py-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <BsBriefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {job.title}
                      </h3>
                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <BsGeoAlt /> {job.location}
                      </p>
                      <p className="mt-1 text-xs text-slate-400">
                        {job.type} · {job.salary}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-5">
                  <Link
                    to={`/recruiter/jobs/${job.id}/applicants`}
                    className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-800"
                  >
                    <BsPeople />
                    {job.applicants}
                  </Link>
                </td>

                <td className="px-5 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      job.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {job.status}
                  </span>
                </td>

                <td className="px-5 py-5 text-sm text-slate-500">
                  {job.posted}
                </td>

                <td className="px-5 py-5">
                  <div className="flex items-center justify-end gap-2">
                    <Link
                      to={`/recruiter/jobs/${job.id}/edit`}
                      aria-label={`Edit ${job.title}`}
                      className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                    >
                      <BsPencilSquare />
                    </Link>
                    <button
                      type="button"
                      aria-label={`Delete ${job.title}`}
                      className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                    >
                      <BsTrash3 />
                    </button>
                    <button
                      type="button"
                      aria-label={`More options for ${job.title}`}
                      className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100"
                    >
                      <BsThreeDots />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="divide-y divide-slate-100 md:hidden">
        {jobs.map((job) => (
          <div key={job.id} className="space-y-4 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <BsBriefcase size={20} />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-slate-900">
                  {job.title}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                  <BsGeoAlt /> {job.location}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  {job.type} · {job.salary}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  job.status === "Active"
                    ? "bg-green-50 text-green-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {job.status}
              </span>
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 pt-3">
              <div>
                <Link
                  to={`/recruiter/jobs/${job.id}/applicants`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600"
                >
                  <BsPeople /> {job.applicants} Applicants
                </Link>
                <p className="mt-1 text-xs text-slate-400">
                  Posted {job.posted}
                </p>
              </div>

              <div className="flex gap-2">
                <Link
                  to={`/recruiter/jobs/${job.id}/edit`}
                  aria-label={`Edit ${job.title}`}
                  className="rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  <BsPencilSquare />
                </Link>
                <button
                  type="button"
                  aria-label={`Delete ${job.title}`}
                  className="rounded-lg border border-slate-200 p-2.5 text-slate-600 hover:bg-red-50 hover:text-red-600"
                >
                  <BsTrash3 />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 px-5 py-4 text-xs text-slate-500">
        Showing {jobs.length} jobs
      </div>
    </div>
  );
};

export default JobTable;
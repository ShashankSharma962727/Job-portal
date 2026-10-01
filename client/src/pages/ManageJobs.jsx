
import React from "react";
import { Link } from "react-router-dom";
import {
  BsPlusLg,
  BsBriefcase,
  BsSearch,
  BsFilter,
} from "react-icons/bs";

import JobTable from "../components/ui/Recruiter/JobTable";

const ManageJobs = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-7">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Recruiter Dashboard
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Manage Jobs
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              View and manage all your job postings in one place.
            </p>
          </div>

          <Link
            to="/recruiter/jobs/create"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <BsPlusLg />
            Post a New Job
          </Link>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Total Jobs
              </p>
              <span className="rounded-lg bg-blue-50 p-2.5 text-blue-600">
                <BsBriefcase size={20} />
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">12</h2>
            <p className="mt-1 text-xs text-slate-400">
              All your job postings
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Active Jobs
              </p>
              <span className="rounded-lg bg-green-50 p-2.5 text-green-600">
                <BsBriefcase size={20} />
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">8</h2>
            <p className="mt-1 text-xs text-slate-400">
              Currently accepting applications
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">
                Total Applicants
              </p>
              <span className="rounded-lg bg-purple-50 p-2.5 text-purple-600">
                <BsBriefcase size={20} />
              </span>
            </div>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">248</h2>
            <p className="mt-1 text-xs text-slate-400">
              Across all posted jobs
            </p>
          </div>
        </div>

        {/* Search and filters - UI only */}
        <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <BsSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by job title..."
              className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="relative sm:w-48">
            <BsFilter className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <select
              defaultValue="all"
              className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-600 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="all">All Jobs</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Job list */}
        <JobTable />
      </div>
    </main>
  );
};

export default ManageJobs;
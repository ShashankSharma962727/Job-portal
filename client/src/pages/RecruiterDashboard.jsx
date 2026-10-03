import React from "react";
import { Link } from "react-router-dom";
import { BsPlusLg, BsArrowRight } from "react-icons/bs";

import RecruiterStats from "../components/ui/Recruiter/RecruiterSats";
import RecentJobs from "../components/ui/Recruiter/RecentJobs";
import RecentApplicants from "../components/ui/Recruiter/RecentApplications";

const RecruiterDashboard = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-7">
        {/* Page heading */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Recruiter Dashboard
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Welcome back, Recruiter!
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Here's what's happening with your job postings.
            </p>
          </div>

          <Link
            to="/recruiter/createjob"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <BsPlusLg /> Post a Job
          </Link>
        </div>

        {/* Statistics */}
        <RecruiterStats />

        {/* Quick action banner */}
        <div className="flex flex-col justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-600 p-6 text-white sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold">
              Find the right talent for your team
            </h2>
            <p className="mt-2 max-w-xl text-sm text-blue-100">
              Post a new job and connect with candidates who match your requirements.
            </p>
          </div>

          <Link
            to="/recruiter/jobs/create"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 sm:self-auto"
          >
            Create Job <BsArrowRight />
          </Link>
        </div>

        {/* Recent activity */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-2">
          <RecentJobs />
          <RecentApplicants />
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
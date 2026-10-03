
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft, BsPlusCircle } from "react-icons/bs";

import JobForm from "../components/ui/Recruiter/JobForm";

const CreateJob = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-7">
          <Link
            to="/recruiter/dashboard"
            className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
          >
            <BsArrowLeft />
            Back to Dashboard
          </Link>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-600">
                <BsPlusCircle />
                Recruiter
              </div>
              <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Create a Job
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Fill in the details below to create a new job posting.
              </p>
            </div>

            <span className="w-fit rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
              New Job Posting
            </span>
          </div>
        </div>

        {/* Form and preview */}
        <div>
          <JobForm />
        </div>
      </div>
    </main>
  );
};

export default CreateJob;
import React from "react";
import { Link } from "react-router-dom";
import {
  BsArrowLeft,
  BsBriefcaseFill,
  BsBuilding,
  BsGeoAlt,
  BsCurrencyRupee,
  BsClock,
  BsInfoCircle,
  BsCheckCircle,
  BsSave,
} from "react-icons/bs";

const EditJob = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          to="/recruiter/jobs"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-blue-600"
        >
          <BsArrowLeft />
          Back to My Jobs
        </Link>

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-600">
              <BsBriefcaseFill />
              Job Management
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Edit Job
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Update your job details and manage your job posting.
            </p>
          </div>

          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 ring-1 ring-amber-200">
            <BsClock />
            Editing job
          </span>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

              <div className="border-b border-slate-100 px-5 py-5 sm:px-8">
                <h2 className="text-lg font-semibold text-slate-900">
                  Job Information
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Update the information below.
                </p>
              </div>

              <div className="space-y-6 p-5 sm:p-8">

                {/* Job title */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Frontend Developer"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Company and location */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <BsBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Company name"
                        className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Location <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <BsGeoAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. Noida, India"
                        className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>
                  </div>
                </div>

                {/* Job type and experience */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Job Type <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10">
                      <option value="">Select job type</option>
                      <option>Full Time</option>
                      <option>Part Time</option>
                      <option>Internship</option>
                      <option>Contract</option>
                      <option>Remote</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Experience Required
                    </label>
                    <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10">
                      <option value="">Select experience</option>
                      <option>Fresher</option>
                      <option>0-1 Years</option>
                      <option>1-2 Years</option>
                      <option>2-3 Years</option>
                      <option>3-5 Years</option>
                      <option>5+ Years</option>
                    </select>
                  </div>
                </div>

                {/* Salary */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Salary Range
                  </label>
                  <div className="relative">
                    <BsCurrencyRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. 4-8 LPA"
                      className="w-full rounded-xl border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Required Skills
                  </label>
                  <input
                    type="text"
                    placeholder="React, JavaScript, HTML, CSS"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                  <p className="mt-2 text-xs text-slate-400">
                    Separate skills with commas.
                  </p>
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Job Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Describe the role and what the candidate will do..."
                    className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Responsibilities
                  </label>
                  <textarea
                    rows={4}
                    placeholder="List the main responsibilities..."
                    className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Requirements */}
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Requirements
                  </label>
                  <textarea
                    rows={4}
                    placeholder="List the qualifications and requirements..."
                    className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Actions */}
                <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
                  <Link
                    to="/recruiter/jobs"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
                  >
                    Cancel
                  </Link>

                  <button
                    type="button"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    <BsSave />
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-5">

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="mb-4 flex items-center gap-2">
                <BsInfoCircle className="text-blue-600" size={20} />
                <h3 className="font-semibold text-slate-900">
                  Editing Tips
                </h3>
              </div>

              <ul className="space-y-4 text-sm leading-5 text-slate-600">
                <li className="flex gap-3">
                  <BsCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                  Use a clear and specific job title.
                </li>
                <li className="flex gap-3">
                  <BsCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                  Keep salary and location information accurate.
                </li>
                <li className="flex gap-3">
                  <BsCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                  Mention the important skills required.
                </li>
                <li className="flex gap-3">
                  <BsCheckCircle className="mt-0.5 shrink-0 text-blue-600" />
                  Review the description before saving.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Keep your listing updated
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Accurate job details help candidates understand the role
                and decide whether to apply.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-semibold text-slate-900">
                Need to cancel?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Return to your job listings without saving your changes.
              </p>
              <Link
                to="/recruiter/jobs"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Back to My Jobs <BsArrowLeft className="rotate-180" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default EditJob;

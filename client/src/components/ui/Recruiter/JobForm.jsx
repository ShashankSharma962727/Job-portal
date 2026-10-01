
import React from "react";
import {
  BsBriefcase,
  BsGeoAlt,
  BsCurrencyRupee,
  BsClock,
  BsPlusCircle,
} from "react-icons/bs";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const labelClass = "mb-2 block text-sm font-semibold text-slate-700";

const JobForm = () => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-7 border-b border-slate-100 pb-5">
        <h2 className="text-xl font-bold text-slate-900">
          Job Information
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Enter the details of the job you want to post.
        </p>
      </div>

      <form className="space-y-6">
        {/* Job title */}
        <div>
          <label className={labelClass}>Job Title *</label>
          <div className="relative">
            <BsBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="e.g. Frontend Developer"
              className={`${inputClass} pl-11`}
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className={labelClass}>Company Name *</label>
          <input
            type="text"
            placeholder="Enter company name"
            className={inputClass}
          />
        </div>

        {/* Location and job type */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Location *</label>
            <div className="relative">
              <BsGeoAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. Bangalore"
                className={`${inputClass} pl-11`}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Job Type *</label>
            <div className="relative">
              <BsClock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <select className={`${inputClass} appearance-none pl-11`}>
                <option value="">Select job type</option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Internship</option>
                <option>Contract</option>
                <option>Remote</option>
              </select>
            </div>
          </div>
        </div>

        {/* Salary and experience */}
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Salary (per year)</label>
            <div className="relative">
              <BsCurrencyRupee className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="e.g. 5-8 LPA"
                className={`${inputClass} pl-11`}
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Experience Required</label>
            <select className={inputClass} defaultValue="">
              <option value="">Select experience</option>
              <option>Fresher</option>
              <option>0-1 years</option>
              <option>1-2 years</option>
              <option>2-3 years</option>
              <option>3-5 years</option>
              <option>5+ years</option>
            </select>
          </div>
        </div>

        {/* Skills */}
        <div>
          <label className={labelClass}>Required Skills *</label>
          <input
            type="text"
            placeholder="e.g. React, JavaScript, Node.js"
            className={inputClass}
          />
          <p className="mt-2 text-xs text-slate-400">
            Separate skills with commas.
          </p>
        </div>

        {/* Description */}
        <div>
          <label className={labelClass}>Job Description *</label>
          <textarea
            rows={5}
            placeholder="Describe the role and what the candidate will do..."
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Responsibilities */}
        <div>
          <label className={labelClass}>Responsibilities</label>
          <textarea
            rows={4}
            placeholder={"List the main responsibilities...\nExample: Build responsive web applications"}
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Requirements */}
        <div>
          <label className={labelClass}>Requirements</label>
          <textarea
            rows={4}
            placeholder={"List the job requirements...\nExample: Knowledge of React and JavaScript"}
            className={`${inputClass} resize-y`}
          />
        </div>

        {/* Form actions */}
        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <BsPlusCircle />
            Post Job
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobForm;
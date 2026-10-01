
import React from "react";
import {
  BsPersonCircle,
  BsGeoAlt,
  BsBriefcase,
  BsEnvelope,
  BsFileEarmarkPdf,
  BsThreeDots,
} from "react-icons/bs";
import ApplicantStatus from "./ApplicantStatus";

const ApplicantCard = ({ applicant }) => {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
        {/* Avatar */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700">
          {applicant.initials || <BsPersonCircle />}
        </div>

        {/* Candidate details */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-bold text-slate-900">
              {applicant.name}
            </h3>
            <ApplicantStatus status={applicant.status} />
          </div>

          <p className="mt-1 text-sm font-medium text-slate-600">
            {applicant.role}
          </p>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <BsEnvelope />
              {applicant.email}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BsGeoAlt />
              {applicant.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BsBriefcase />
              {applicant.experience}
            </span>
          </div>

          {/* Skills */}
          <div className="mt-4">
            <p className="mb-2 text-xs font-semibold text-slate-600">
              Skills
            </p>
            <div className="flex flex-wrap gap-2">
              {applicant.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Resume and date */}
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
            <p className="text-xs text-slate-400">
              Applied on {applicant.appliedDate}
            </p>

            <a
              href={applicant.resumeUrl || "#"}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
            >
              <BsFileEarmarkPdf />
              View Resume
            </a>
          </div>
        </div>

        {/* Actions */}
        <button
          type="button"
          aria-label="More applicant options"
          className="self-end rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 sm:self-start"
        >
          <BsThreeDots size={20} />
        </button>
      </div>

      {/* Status controls */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <span className="text-xs font-medium text-slate-500">
          Update application status
        </span>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="rounded-lg border border-blue-200 px-3 py-2 text-xs font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Shortlist
          </button>
          <button
            type="button"
            className="rounded-lg border border-green-200 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-50"
          >
            Hire
          </button>
          <button
            type="button"
            className="rounded-lg border border-red-200 px-3 py-2 text-xs font-semibold text-red-700 transition hover:bg-red-50"
          >
            Reject
          </button>
        </div>
      </div>
    </article>
  );
};

export default ApplicantCard;
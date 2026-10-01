
import React from "react";
import {
  BsFileEarmarkPdfFill,
  BsCloudArrowUp,
  BsTrash3,
  BsDownload,
} from "react-icons/bs";

const ResumeCard = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-bold text-slate-900">My Resume</h2>
        <p className="mt-1 text-sm text-slate-500">
          Upload your resume to help recruiters learn more about you.
        </p>
      </div>

      <div className="rounded-xl border-2 border-dashed border-blue-200 bg-blue-50/50 p-6 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <BsCloudArrowUp size={24} />
        </div>
        <h3 className="mt-3 text-sm font-semibold text-slate-800">
          Upload your resume
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          PDF, DOC or DOCX (Max. 5 MB)
        </p>
        <label className="mt-4 inline-flex cursor-pointer items-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
          Choose File
          <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
        </label>
      </div>

      <div className="mt-5 flex flex-col gap-3 rounded-xl border border-slate-200 p-4 sm:flex-row sm:items-center">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
          <BsFileEarmarkPdfFill size={22} />
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-slate-800">
            John_Doe_Resume.pdf
          </p>
          <p className="mt-1 text-xs text-slate-500">
            1.2 MB · Uploaded recently
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Download resume"
            className="rounded-lg border border-slate-200 p-2.5 text-slate-600 transition hover:bg-slate-50"
          >
            <BsDownload />
          </button>
          <button
            type="button"
            aria-label="Remove resume"
            className="rounded-lg border border-red-100 p-2.5 text-red-500 transition hover:bg-red-50"
          >
            <BsTrash3 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeCard;
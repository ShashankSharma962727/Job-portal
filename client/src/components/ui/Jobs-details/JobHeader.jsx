
import {
  BsGeoAlt,
  BsBriefcase,
  BsCurrencyRupee,
  BsClock,
  BsBookmark,
  BsSend,
} from "react-icons/bs";

const JobHeader = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-3xl font-bold text-blue-600">
          G
        </div>

        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Full Time
          </span>

          <h1 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
            Frontend Developer
          </h1>

          <p className="mt-1 text-base font-medium text-slate-600">
            Google
          </p>
        </div>

        <button
          type="button"
          aria-label="Save job"
          className="self-start rounded-lg border border-slate-200 p-3 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
        >
          <BsBookmark size={19} />
        </button>
      </div>

      <div className="mt-7 grid grid-cols-1 gap-4 border-b border-slate-100 pb-6 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-2">
          <BsGeoAlt className="shrink-0 text-lg text-blue-600" />
          <span>Bangalore, India</span>
        </div>

        <div className="flex items-center gap-2">
          <BsBriefcase className="shrink-0 text-lg text-blue-600" />
          <span>0–2 years</span>
        </div>

        <div className="flex items-center gap-2">
          <BsCurrencyRupee className="shrink-0 text-lg text-blue-600" />
          <span>8–12 LPA</span>
        </div>

        <div className="flex items-center gap-2">
          <BsClock className="shrink-0 text-lg text-blue-600" />
          <span>Posted 2 days ago</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <BsSend />
          Apply Now
        </button>

        <button
          type="button"
          className="flex items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
        >
          <BsBookmark />
          Save Job
        </button>
      </div>
    </div>
  );
};

export default JobHeader;
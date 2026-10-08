
import { Link } from "react-router-dom";
import {
  BsGeoAlt,
  BsBriefcase,
  BsCurrencyRupee,
  BsBookmark,
} from "react-icons/bs";

const Jobcard = ({ job }) => {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
            {job.company?.charAt(0)}
          </div>

          <div>
            <h3 className="font-semibold text-slate-900">
              {job.title}
            </h3>
            <p className="text-sm text-slate-500">
              {job.company}
            </p>
          </div>
        </div>

        <button
          type="button"
          aria-label="Save job"
          className="rounded-lg p-2 text-slate-400 transition hover:bg-blue-50 hover:text-blue-600"
        >
          <BsBookmark size={18} />
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          {job.jobtype}
        </span>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {job.experience}
        </span>
      </div>

      <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-600">
        {job.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500">
        <span className="flex items-center gap-1.5">
          <BsGeoAlt className="text-blue-600" />
          {job.location}
        </span>

        <span className="flex items-center gap-1.5">
          <BsCurrencyRupee className="text-blue-600" />
          {job.salary}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <span className="text-xs text-slate-400">
          {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "Recently posted"}
        </span>

        <Link
          to={`/jobs/${job._id}`}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Jobcard;
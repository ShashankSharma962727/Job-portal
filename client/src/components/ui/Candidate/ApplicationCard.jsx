
import {
  BsGeoAlt,
  BsCalendar3,
  BsBriefcase,
  BsCurrencyRupee,
  BsArrowUpRight,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const ApplicationCard = ({ application }) => {
  const statusStyles = {
    Pending: "bg-amber-50 text-amber-700 ring-amber-200",
    Shortlisted: "bg-green-50 text-green-700 ring-green-200",
    Rejected: "bg-red-50 text-red-700 ring-red-200",
    Hired: "bg-blue-50 text-blue-700 ring-blue-200",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 hover:shadow-md sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl font-bold text-blue-600">
            {application.company?.charAt(0)}
          </div>

          <div>
            <h2 className="text-base font-bold text-slate-900 sm:text-lg">
              {application.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              {application.company}
            </p>
          </div>
        </div>

        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
            statusStyles[application.status] ||
            "bg-slate-100 text-slate-600 ring-slate-200"
          }`}
        >
          {application.status}
        </span>
      </div>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-500">
        <span className="flex items-center gap-2">
          <BsGeoAlt className="text-blue-600" />
          {application.location}
        </span>

        <span className="flex items-center gap-2">
          <BsBriefcase className="text-blue-600" />
          {application.jobType}
        </span>

        <span className="flex items-center gap-2">
          <BsCurrencyRupee className="text-blue-600" />
          {application.salary}
        </span>
      </div>

      <div className="mt-5 flex flex-col justify-between gap-3 border-t border-slate-100 pt-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <BsCalendar3 className="text-blue-600" />
          Applied on {application.appliedDate}
        </div>

        <Link
          to={`/jobs/${application.jobId}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
        >
          View Job
          <BsArrowUpRight />
        </Link>
      </div>
    </div>
  );
};

export default ApplicationCard;
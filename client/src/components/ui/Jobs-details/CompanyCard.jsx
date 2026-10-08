
import { BsArrowUpRight } from "react-icons/bs";

const CompanyCard = ({job}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900">
        About Company
      </h2>

      <div className="mt-5 flex items-center gap-3">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-2xl font-bold text-blue-600">
          G
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">{job?.company}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {job?.company}
          </p>
        </div>
      </div>

      <a
        href="#company"
        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
      >
        View Company Profile
        <BsArrowUpRight />
      </a>
    </div>
  );
};

export default CompanyCard;
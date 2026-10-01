
import { BsArrowUpRight } from "react-icons/bs";

const CompanyCard = () => {
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
          <h3 className="font-semibold text-slate-900">Google</h3>
          <p className="mt-1 text-sm text-slate-500">
            Technology
          </p>
        </div>
      </div>

      <p className="mt-5 border-t border-slate-100 pt-5 text-sm leading-6 text-slate-600">
        Google is a technology company focused on internet-related
        services and products.
      </p>

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
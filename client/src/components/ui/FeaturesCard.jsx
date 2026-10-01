
import { MapPin, IndianRupee, BriefcaseBusiness } from "lucide-react";

const FeaturesCard = () => {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/60">

      {/* Company and Job Title */}
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-100">
          <BriefcaseBusiness size={24} />
        </div>

        <div className="min-w-0">
          <h2 className="truncate text-lg font-bold text-slate-900">
            Frontend Developer
          </h2>
          <p className="text-sm font-medium text-slate-500">
            Google
          </p>
        </div>
      </div>

      {/* Job Details */}
      <div className="mb-5 flex flex-col gap-3">
        <p className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={17} className="shrink-0 text-slate-400" />
          Bangalore, India
        </p>

        <p className="flex items-center gap-2 text-sm font-semibold text-green-600">
          <IndianRupee size={17} />
          8–12 LPA
        </p>

        <div>
          <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
            Full Time
          </span>
        </div>
      </div>

      {/* Apply Button */}
      <button
        type="button"
        onClick={() => alert("Applying for this job!")}
        className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 active:scale-[0.98]"
      >
        Apply Now
        <span aria-hidden="true">→</span>
      </button>
    </article>
  );
};

export default FeaturesCard;
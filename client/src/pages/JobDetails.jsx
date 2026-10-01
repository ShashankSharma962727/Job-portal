import JobHeader from "../components//ui/Jobs-details/JobHeader";
import JobDescription from "../components/ui/Jobs-details/JobDescription";
import CompanyCard from "../components/ui/Jobs-details/CompanyCard";
import JobOverview from "../components/ui/Jobs-details/JobOverview";
import { BsShieldCheck, BsBriefcaseFill, BsSend } from "react-icons/bs";

const JobDetails = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
          <span>Home</span>
          <span>/</span>
          <span>Jobs</span>
          <span>/</span>
          <span className="font-medium text-slate-800">Job Details</span>
        </div>

        {/* Main layout */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <JobHeader />
            <JobDescription />
          </div>

          <aside className="flex flex-col gap-6 lg:col-span-1">
            <CompanyCard />
            <JobOverview />

            {/* Important notice */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex items-center gap-2 font-semibold text-blue-700">
                <BsShieldCheck size={20} />
                Important
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Review the job requirements before applying. Make sure your
                profile is up to date.
              </p>
            </div>
          </aside>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 flex flex-col items-center justify-between gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600">
              <BsBriefcaseFill />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Ready to take the next step?
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Apply for this opportunity and take your career forward.
              </p>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            <BsSend />
            Apply Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default JobDetails;


import { Link } from "react-router-dom";
import { BsSearch, BsArrowRight } from "react-icons/bs";
import DashboardStats from "../components/ui/Candidate/DashboardStats";
import RecentApplications from "../components/ui/Candidate/RecentApplications";
import ProfileSummary from "../components/ui/Candidate/ProfileSummary";

const CandidateDashboard = () => {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Welcome */}
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Candidate Dashboard
            </p>
            <h1 className="mt-1 text-2xl font-bold text-slate-900 sm:text-3xl">
              Welcome back, John!
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Here's what's happening with your job search.
            </p>
          </div>

          <Link
            to="/jobs"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            <BsSearch />
            Find Jobs
          </Link>
        </div>

        {/* Stats */}
        <DashboardStats />

        {/* Main content */}
        <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            <RecentApplications />

            {/* Recommended jobs banner */}
            <div className="flex flex-col justify-between gap-4 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Looking for more opportunities?
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Explore jobs that match your skills and interests.
                </p>
              </div>

              <Link
                to="/jobs"
                className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Browse Jobs <BsArrowRight />
              </Link>
            </div>
          </div>

          {/* Profile sidebar */}
          <aside className="lg:col-span-1">
            <ProfileSummary />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default CandidateDashboard;
import { Link } from "react-router-dom";
import DashboardStats from "../components/ui/Recruiter/DashboardStats";
import { useEffect, useState } from "react";
import api from "../api";

const RecruiterDashboard = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchMyJobs = async () => {
      try {
        const response = await api.get("/jobs/myjobs");

        setJobs(response.data.jobs);
      } catch (error) {
        console.log(error.message)
      }
    }

    fetchMyJobs();
  },[])
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800">
          Recruiter Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your jobs and applications.
        </p>
      </div>

      {/* Stats */}
      <DashboardStats jobs={jobs}/>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-slate-800 mb-4">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <Link
            to="/recruiter/jobs/create"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-5 transition"
          >
            <h3 className="text-lg font-semibold">
              Create Job
            </h3>

            <p className="text-blue-100 text-sm mt-1">
              Post a new job vacancy
            </p>
          </Link>

          <Link
            to="/recruiter/jobs"
            className="bg-white hover:bg-slate-50 border rounded-xl p-5 transition"
          >
            <h3 className="text-lg font-semibold text-slate-800">
              Manage Jobs
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              View and manage your jobs
            </p>
          </Link>

          <Link
            to="/recruiter/profile"
            className="bg-white hover:bg-slate-50 border rounded-xl p-5 transition"
          >
            <h3 className="text-lg font-semibold text-slate-800">
              My Profile
            </h3>

            <p className="text-slate-500 text-sm mt-1">
              View your recruiter profile
            </p>
          </Link>

        </div>
      </div>

      {/* Welcome */}
      <div className="mt-8 bg-white rounded-xl border p-6">
        <h2 className="text-xl font-semibold text-slate-800">
          Welcome Recruiter
        </h2>

        <p className="mt-2 text-slate-500">
          From here you can create jobs, manage jobs and view applicants.
        </p>
      </div>

    </div>
  );
};

export default RecruiterDashboard;
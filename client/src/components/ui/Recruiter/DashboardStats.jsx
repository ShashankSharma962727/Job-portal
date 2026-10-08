const DashboardStats = ({jobs}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">

      <div className="bg-white rounded-xl border p-6">
        <p className="text-slate-500">My Jobs</p>
        <h2 className="text-3xl font-bold text-blue-600 mt-2">
          {jobs.length}
        </h2>
      </div>

      <div className="bg-white rounded-xl border p-6">
        <p className="text-slate-500">Applications</p>
        <h2 className="text-3xl font-bold text-indigo-600 mt-2">
          -
        </h2>
      </div>

      <div className="bg-white rounded-xl border p-6">
        <p className="text-slate-500">Active Jobs</p>
        <h2 className="text-3xl font-bold text-green-600 mt-2">
          {jobs.length}
        </h2>
      </div>

    </div>
  );
};

export default DashboardStats;
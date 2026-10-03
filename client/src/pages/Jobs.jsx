
import { useEffect, useState } from "react";
import { BsSearch, BsBriefcase } from "react-icons/bs";
import JobCard from "../components/ui/Jobcard";
import api from "../api";


const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      try {
        const response = await api.get("/jobs");
        setJobs(response?.data?.jobs);
      } catch (error) {
        console.log(error.message);
      }
    }

    getJobs();
  },[])

  return (
    <>
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Find your next opportunity
          </p>
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Explore Jobs
          </h1>
          <p className="mt-2 text-slate-500">
            Discover jobs that match your skills and career goals.
          </p>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-4">

          <section className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">
                Available Jobs
              </h2>
            </div>
            {
              jobs.map((job) => {
                return <JobCard key={job._id} job={job} />
              })
            }
          </section>
        </div>
      </div>
    </main>
    </>
  );
};

export default Jobs;
import { useEffect, useState } from "react";
import RecruiterJobCard from "../components/ui/Recruiter/RecruiterJobCard";
import api from "../api";

const RecruiterJobs = () => {
  const [myJobs, setMyjobs] = useState([])

  useEffect(() => {
    const getJobs = async () => {
      try {
        const res = await api.get("/jobs/myjobs")
        setMyjobs(res.data.jobs);
      } catch (error) {
        console.log(error.message)
      }
    }

    getJobs();
  },[]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            My Jobs
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your posted jobs.
          </p>
        </div>

        <a
          href="/recruiter/jobs/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg"
        >
          Create Job
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {
          myJobs.map((e) => {
            return <RecruiterJobCard key={e._id} job={e}/>
          })
        }
      </div>

    </div>
  );
};

export default RecruiterJobs;

import { useEffect, useState } from "react";
import { BsBriefcase, BsSearch } from "react-icons/bs";
import ApplicationCard from "../components/ui/Candidate/ApplicationCard";
import api from "../api";

const MyApplications = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [myApplications, setMyApplications] = useState([]);

  useEffect(() => {
    const getMyApplications = async () => {
      try {
        const res = await api.get("/application/my")

      setMyApplications(res?.data?.application)
      console.log(res?.data?.application)
      } catch (error) {
        console.log(error.message)
      }
    }

    getMyApplications();
  },[])
 
  const filters = [
    "all",
    "applied",
    "shortlisted",
    "rejected",
    "hired",
  ];

  const filteredApplications =
    activeFilter === "all"
      ? myApplications
      : myApplications.filter(
          (application) => application.status === activeFilter
        );

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Candidate Dashboard
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            My Applications
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Track and manage all your job applications in one place.
          </p>
        </div>

        {/* Summary */}
        <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50 p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-blue-600 shadow-sm">
              <BsBriefcase />
            </div>
            <div>
              <p className="text-sm text-slate-600">
                Total Applications
              </p>
              <h2 className="text-2xl font-bold text-slate-900">
                {myApplications.length}
              </h2>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-6 flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Applications list */}
        <div className="flex flex-col gap-4">
          {filteredApplications.length > 0 ? (
            filteredApplications.map((application) => (
              <ApplicationCard
                key={application._id}
                application={application}
              />
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <BsSearch className="mx-auto mb-3 text-3xl text-slate-300" />
              <h3 className="font-semibold text-slate-800">
                No applications found
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                There are no applications in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyApplications;

import { useState } from "react";
import { BsBriefcase, BsSearch } from "react-icons/bs";
import ApplicationCard from "../components/ui/Candidate/ApplicationCard";

const MyApplications = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Pending",
    "Shortlisted",
    "Rejected",
    "Hired",
  ];

  const applications = [
    {
      id: 1,
      jobId: "1",
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      jobType: "Full Time",
      salary: "8-12 LPA",
      appliedDate: "28 Sep 2026",
      status: "Shortlisted",
    },
    {
      id: 2,
      jobId: "2",
      title: "MERN Stack Developer",
      company: "Tech Solutions",
      location: "Noida",
      jobType: "Full Time",
      salary: "5-8 LPA",
      appliedDate: "26 Sep 2026",
      status: "Pending",
    },
    {
      id: 3,
      jobId: "3",
      title: "React Developer Intern",
      company: "Startup India",
      location: "Remote",
      jobType: "Internship",
      salary: "15-20K/month",
      appliedDate: "24 Sep 2026",
      status: "Rejected",
    },
    {
      id: 4,
      jobId: "4",
      title: "Backend Developer",
      company: "Amazon",
      location: "Hyderabad",
      jobType: "Full Time",
      salary: "6-10 LPA",
      appliedDate: "22 Sep 2026",
      status: "Hired",
    },
  ];

  const filteredApplications =
    activeFilter === "All"
      ? applications
      : applications.filter(
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
                {applications.length}
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
                key={application.id}
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
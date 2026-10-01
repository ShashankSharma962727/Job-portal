
import { useState } from "react";
import { BsSearch, BsBriefcase } from "react-icons/bs";
import JobCard from "../components/ui/Jobcard";
import JobFilters from "../components/ui/JobFilters";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";

const sampleJobs = [
  {
    _id: "1",
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "8-12 LPA",
    jobType: "Full Time",
    experience: "0-1 years",
    description:
      "Build responsive user interfaces using React, JavaScript, HTML and CSS.",
    postedAt: "2 days ago",
  },
  {
    _id: "2",
    title: "MERN Stack Developer",
    company: "Tech Solutions",
    location: "Noida",
    salary: "5-8 LPA",
    jobType: "Full Time",
    experience: "Fresher",
    description:
      "Work with MongoDB, Express, React and Node.js to build web applications.",
    postedAt: "1 day ago",
  },
  {
    _id: "3",
    title: "React Developer Intern",
    company: "Startup India",
    location: "Remote",
    salary: "15-20K/month",
    jobType: "Internship",
    experience: "Fresher",
    description:
      "Join our frontend team and learn to build modern applications with React.",
    postedAt: "3 days ago",
  },
  {
    _id: "4",
    title: "Backend Developer",
    company: "Amazon",
    location: "Hyderabad",
    salary: "6-10 LPA",
    jobType: "Full Time",
    experience: "0-1 years",
    description:
      "Develop REST APIs and backend services using Node.js and databases.",
    postedAt: "5 days ago",
  },
  {
    _id: "5",
    title: "Junior Web Developer",
    company: "WebWorks",
    location: "Delhi",
    salary: "3-5 LPA",
    jobType: "Part Time",
    experience: "Fresher",
    description:
      "Create and maintain websites using modern web development technologies.",
    postedAt: "4 days ago",
  },
  {
    _id: "6",
    title: "Full Stack Developer",
    company: "Innovate Labs",
    location: "Pune",
    salary: "7-10 LPA",
    jobType: "Full Time",
    experience: "1-3 years",
    description:
      "Build full-stack applications and collaborate with the product team.",
    postedAt: "6 days ago",
  },
];

const Jobs = () => {
  const [jobs, setJobs] = useState(sampleJobs);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    jobType: "",
    experience: "",
  });

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());

    const matchesLocation = job.location
      .toLowerCase()
      .includes(filters.location.toLowerCase());

    const matchesJobType =
      !filters.jobType || job.jobType === filters.jobType;

    const matchesExperience =
      !filters.experience || job.experience === filters.experience;

    return (
      matchesSearch &&
      matchesLocation &&
      matchesJobType &&
      matchesExperience
    );
  });

  return (
    <>
    <Navbar/>
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

        {/* Search bar */}
        <div className="mb-8 flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:flex-row">
          <div className="flex flex-1 items-center gap-3 px-2">
            <BsSearch className="shrink-0 text-lg text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Job title or company"
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <button
            type="button"
            onClick={() => {}}
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:py-2"
          >
            Search Jobs
          </button>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <JobFilters
              filters={filters}
              setFilters={setFilters}
            />
          </aside>

          <section className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-slate-900">
                Available Jobs
              </h2>
              <span className="text-sm text-slate-500">
                {filteredJobs.length} jobs found
              </span>
            </div>

            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                {filteredJobs.map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <BsBriefcase className="mx-auto mb-3 text-3xl text-slate-300" />
                <h3 className="font-semibold text-slate-800">
                  No jobs found
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  Try changing your search or filters.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
    <Footer/>
    </>
  );
};

export default Jobs;

import { Link } from "react-router-dom";
import {
  BsArrowRight,
  BsGeoAlt,
  BsCalendar3,
} from "react-icons/bs";

const applications = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    date: "28 Sep 2026",
    status: "Shortlisted",
  },
  {
    id: 2,
    title: "MERN Stack Developer",
    company: "Tech Solutions",
    location: "Noida",
    date: "26 Sep 2026",
    status: "Pending",
  },
  {
    id: 3,
    title: "React Developer Intern",
    company: "Startup India",
    location: "Remote",
    date: "24 Sep 2026",
    status: "Rejected",
  },
];

const statusStyles = {
  Shortlisted: "bg-green-50 text-green-700",
  Pending: "bg-amber-50 text-amber-700",
  Rejected: "bg-red-50 text-red-700",
};

const RecentApplications = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-5">
        <div>
          <h2 className="text-lg font-bold text-slate-900">
            Recent Applications
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Keep track of your latest job applications.
          </p>
        </div>

        <Link
          to="/candidate/applications"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
        >
          View all <BsArrowRight />
        </Link>
      </div>

      <div className="divide-y divide-slate-100">
        {applications.map((application) => (
          <div
            key={application.id}
            className="flex flex-col gap-4 p-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-lg font-bold text-blue-600">
                {application.company.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {application.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {application.company}
                </p>

                <div className="mt-2 flex flex-wrap gap-3 text-xs text-slate-500">
                  <span className="flex items-center gap-1">
                    <BsGeoAlt /> {application.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <BsCalendar3 /> {application.date}
                  </span>
                </div>
              </div>
            </div>

            <div className="sm:text-right">
              <span
                className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[application.status]}`}
              >
                {application.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentApplications;
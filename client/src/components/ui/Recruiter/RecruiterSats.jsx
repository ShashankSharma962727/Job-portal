import React from "react";
import {
  BsBriefcase,
  BsPeople,
  BsPersonCheck,
  BsEye,
} from "react-icons/bs";

const stats = [
  {
    title: "Total Jobs",
    value: "12",
    change: "4 active jobs",
    icon: BsBriefcase,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Total Applicants",
    value: "248",
    change: "Across all jobs",
    icon: BsPeople,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Shortlisted",
    value: "36",
    change: "Candidates shortlisted",
    icon: BsPersonCheck,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Job Views",
    value: "1,840",
    change: "Total job views",
    icon: BsEye,
    color: "bg-orange-100 text-orange-600",
  },
];

const RecruiterStats = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}
              >
                <Icon size={22} />
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">{stat.change}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RecruiterStats;
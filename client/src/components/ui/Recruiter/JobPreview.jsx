
import React from "react";
import {
  BsBriefcase,
  BsGeoAlt,
  BsCurrencyRupee,
  BsClock,
  BsBuilding,
  BsCheckCircle,
} from "react-icons/bs";

const JobPreview = () => {
  const skills = ["React", "JavaScript", "HTML", "CSS"];

  return (
    <div className="space-y-5">
      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-900">
            Job Preview
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Example of how your job listing may appear.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-4">
          <div className="flex items-start gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <BsBuilding size={23} />
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-slate-900">
                Frontend Developer
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Your Company
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
              <BsGeoAlt /> Bangalore
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
              <BsBriefcase /> Full-time
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
              <BsCurrencyRupee /> 5-8 LPA
            </span>
          </div>

          <div className="mt-5 border-t border-slate-100 pt-4">
            <h4 className="text-sm font-semibold text-slate-800">
              Required Skills
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 border-t border-slate-100 pt-4">
            <h4 className="text-sm font-semibold text-slate-800">
              About the role
            </h4>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              We are looking for a passionate Frontend Developer
              to join our team and help build modern web applications.
            </p>
          </div>

          <div className="mt-5 rounded-xl bg-blue-50 p-3 text-center text-sm font-semibold text-blue-700">
            Apply Now
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-green-200 bg-green-50 p-5">
        <div className="flex items-start gap-3">
          <BsCheckCircle className="mt-0.5 shrink-0 text-green-600" size={20} />
          <div>
            <h3 className="text-sm font-semibold text-green-800">
              Tips for a good job post
            </h3>
            <ul className="mt-3 space-y-2 text-xs leading-5 text-green-800">
              <li>• Use a clear and specific job title.</li>
              <li>• Mention the required skills.</li>
              <li>• Include salary and experience details.</li>
              <li>• Write a clear job description.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobPreview;
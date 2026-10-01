import React from "react";
import { Link } from "react-router-dom";
import {
  BsPersonCircle,
  BsBuilding,
  BsEnvelope,
  BsGeoAlt,
  BsGlobe,
  BsPencilSquare,
  BsBriefcaseFill,
} from "react-icons/bs";

const RecruiterProfile = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">
            Recruiter Profile
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Manage your personal and company details.
          </p>
        </div>

        {/* Profile Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <BsPersonCircle className="text-6xl text-blue-600" />

            <div className="flex-1">
              <h2 className="text-xl font-bold text-slate-900">
                Rahul Sharma
              </h2>
              <p className="text-sm text-slate-500">Recruiter</p>
              <p className="mt-1 text-sm text-slate-500">
                Tech Solutions Pvt. Ltd.
              </p>
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700">
              <BsPencilSquare />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Personal Information */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-5 text-lg font-semibold text-slate-900">
            Personal Information
          </h3>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <p className="text-xs text-slate-400">Full Name</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                <BsPersonCircle className="text-slate-400" />
                Rahul Sharma
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Email</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                <BsEnvelope className="text-slate-400" />
                rahul@example.com
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Location</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                <BsGeoAlt className="text-slate-400" />
                Noida, India
              </p>
            </div>

            <div>
              <p className="text-xs text-slate-400">Website</p>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium">
                <BsGlobe className="text-slate-400" />
                techsolutions.com
              </p>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-slate-900">
            <BsBuilding className="text-blue-600" />
            Company Information
          </h3>

          <h4 className="font-medium text-slate-800">
            Tech Solutions Pvt. Ltd.
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            A technology company focused on modern software development
            and digital solutions.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/recruiter/jobs"
            className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            <BsBriefcaseFill />
            Manage Jobs
          </Link>

          <Link
            to="/recruiter/jobs/create"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white hover:bg-blue-700"
          >
            Post a Job
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruiterProfile;
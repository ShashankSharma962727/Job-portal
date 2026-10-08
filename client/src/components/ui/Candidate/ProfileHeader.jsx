import React from "react";
import {
  BsPersonFill,
  BsCameraFill,
  BsPencilSquare,
  BsBriefcase,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ user, onEditProfile }) => {
  const navigate = useNavigate();

  const firstName = user?.firstname || "John";
  const lastName = user?.lastname || "Doe";
  const email = user?.email || "john.doe@example.com";

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Top Profile Section */}
      <div className="p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          {/* Profile Image */}
          <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 ring-4 ring-blue-50">
            <BsPersonFill size={52} />

            <button
              type="button"
              aria-label="Change profile photo"
              className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-md transition hover:bg-blue-700"
            >
              <BsCameraFill size={14} />
            </button>
          </div>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                Fresher
              </span>

              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                Open to opportunities
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              {firstName} {lastName}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {email}
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
              Passionate candidate looking for opportunities to build
              modern applications and grow professionally.
            </p>
          </div>

          {/* Profile Completion */}
          <div className="w-full rounded-xl bg-slate-50 p-4 sm:w-44">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-600">
                Profile
              </span>

              <span className="font-bold text-blue-600">
                75%
              </span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
              <div className="h-full w-3/4 rounded-full bg-blue-600" />
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Complete your profile
            </p>
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="border-t border-slate-100 px-6 py-6 sm:px-8">
        <h3 className="text-base font-bold text-slate-900">
          Profile Information
        </h3>

        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <InfoItem
            label="First Name"
            value={firstName}
          />

          <InfoItem
            label="Last Name"
            value={lastName}
          />

          <InfoItem
            label="Email Address"
            value={email}
          />

          <InfoItem
            label="Phone Number"
            value={user?.phone || "Not added"}
          />

          <InfoItem
            label="Location"
            value={user?.location || "Not added"}
          />

          <InfoItem
            label="Experience"
            value={user?.experience || "Fresher"}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-3 border-t border-slate-100 bg-slate-50/70 px-6 py-5 sm:flex-row sm:justify-end sm:px-8">
        <button
          type="button"
          onClick={() => navigate("/profile/my-applications")}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          <BsBriefcase />
          My Applications
        </button>

        <button
          type="button"
          onClick={onEditProfile}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
        >
          <BsPencilSquare />
          Edit Profile
        </button>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => {
  return (
    <div className="rounded-xl border border-slate-100 bg-slate-50/70 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-800">
        {value}
      </p>
    </div>
  );
};

export default ProfileHeader;

import React from "react";
import { BsPerson, BsBriefcase, BsGeoAlt } from "react-icons/bs";

const ProfileForm = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-slate-900">
          Personal Information
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Update your personal details and professional information.
        </p>
      </div>

      <form className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              First Name
            </label>
            <div className="relative">
              <BsPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Enter first name"
                defaultValue="John"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Enter last name"
              defaultValue="Doe"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              defaultValue="john.doe@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Location
            </label>
            <div className="relative">
              <BsGeoAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="City, Country"
                defaultValue="Mathura, India"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Experience
            </label>
            <div className="relative">
              <BsBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <select
                defaultValue="Fresher"
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option>Fresher</option>
                <option>Less than 1 year</option>
                <option>1-2 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Professional Bio
          </label>
          <textarea
            rows={4}
            placeholder="Write a short introduction about yourself..."
            defaultValue="Passionate fresher looking for opportunities to build modern web applications."
            className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Skills
          </label>
          <input
            type="text"
            placeholder="e.g. React, Node.js, MongoDB"
            defaultValue="React, JavaScript, Node.js, MongoDB"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          <p className="mt-2 text-xs text-slate-400">
            Separate skills with commas.
          </p>
        </div>

        <div className="flex justify-end border-t border-slate-100 pt-5">
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
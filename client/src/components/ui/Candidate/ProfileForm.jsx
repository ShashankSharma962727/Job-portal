import React, { useState } from "react";
import {
  BsPerson,
  BsBriefcase,
  BsGeoAlt,
  BsArrowLeft,
} from "react-icons/bs";

const ProfileForm = ({ user, onCancel }) => {
  const [formData, setFormData] = useState({
    firstname: user?.firstname || "",
    lastname: user?.lastname || "",
    email: user?.email || "",
    phone: user?.phone || "",
    location: user?.location || "",
    experience: user?.experience || "Fresher",
    bio: user?.bio || "",
    skills: user?.skills || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Profile:", formData);

    // Yahan API call laga sakte ho
    // await updateProfile(formData)
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Edit Profile
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Update your personal and professional information.
          </p>
        </div>

        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
        >
          <BsArrowLeft />
          Back to Profile
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-base font-bold text-slate-900">
            Personal Information
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Keep your contact information up to date.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {/* First Name */}
          <FormField label="First Name">
            <div className="relative">
              <BsPerson className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="Enter first name"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </FormField>

          {/* Last Name */}
          <FormField label="Last Name">
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Enter last name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </FormField>

          {/* Email */}
          <FormField label="Email Address">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </FormField>

          {/* Phone */}
          <FormField label="Phone Number">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </FormField>

          {/* Location */}
          <FormField label="Location">
            <div className="relative">
              <BsGeoAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="City, Country"
                className="w-full rounded-xl border border-slate-200 py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </FormField>

          {/* Experience */}
          <FormField label="Experience">
            <div className="relative">
              <BsBriefcase className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />

              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              >
                <option>Fresher</option>
                <option>Less than 1 year</option>
                <option>1-2 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </div>
          </FormField>
        </div>

        {/* Bio */}
        <FormField label="Professional Bio">
          <textarea
            rows={4}
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Write a short introduction about yourself..."
            className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </FormField>

        {/* Skills */}
        <FormField label="Skills">
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="e.g. React, Node.js, MongoDB"
            className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />

          <p className="mt-2 text-xs text-slate-400">
            Separate skills with commas.
          </p>
        </FormField>

        {/* Buttons */}
        <div className="flex flex-col-reverse gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-xl border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

const FormField = ({ label, children }) => {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      {children}
    </div>
  );
};

export default ProfileForm;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const CreateJob = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    jobtype: "",
    salary: "",
    experience: "",
    skills: "",
    description: "",
    responsibilities: "",
    requirements: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        salary: Number(formData.salary),
        experience: Number(formData.experience),
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      };

      const res = await api.post("/jobs", payload);

      console.log("Job Created: ", res.data);
      alert("Job created successfully!");

      setFormData({
        title: "",
        company: "",
        location: "",
        jobtype: "",
        salary: "",
        experience: "",
        skills: "",
        description: "",
        responsibilities: "",
        requirements: "",
      });
      navigate("/recruiter");
    } catch (error) {
      console.error("Create Job Error:", error);
      console.error("Backend Response:", error.response?.data);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-600 mb-2">
            Recruiter Dashboard
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Create a New Job
          </h1>

          <p className="text-slate-500 mt-2">
            Add the details below to publish a new job opportunity.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden"
        >
          {/* Basic Information */}
          <div className="p-6 md:p-8 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800">
              Basic Information
            </h2>

            <p className="text-sm text-slate-500 mt-1 mb-6">
              Provide the basic details about the position.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Job Title */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Developer"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Google"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Bengaluru, India"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Job Type */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Job Type
                </label>

                <select
                  name="jobtype"
                  defaultValue=""
                  value={formData.jobtype}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 bg-white outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Select job type
                  </option>
                  <option value="Full-time">Full Time</option>
                  <option value="Part-time">Part Time</option>
                  <option value="Remote">Remote</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>

              {/* Salary */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Salary
                </label>

                <input
                  type="number"
                  name="salary"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="e.g. 80000"
                  min="0"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Experience (Years)
                </label>

                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="e.g. 2"
                  min="0"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Skills */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Skills
                </label>

                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  placeholder="e.g. React, JavaScript, Node.js, MongoDB"
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />

                <p className="text-xs text-slate-400 mt-2">
                  Separate multiple skills with commas.
                </p>
              </div>
            </div>
          </div>

          {/* Job Description */}
          <div className="p-6 md:p-8 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800">
              Job Description
            </h2>

            <p className="text-sm text-slate-500 mt-1 mb-6">
              Explain what the candidate will be working on.
            </p>

            <textarea
              name="description"
              rows="6"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a detailed description of the job..."
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Responsibilities */}
          <div className="p-6 md:p-8 border-b border-slate-200">
            <h2 className="text-lg font-semibold text-slate-800">
              Responsibilities
            </h2>

            <p className="text-sm text-slate-500 mt-1 mb-6">
              Mention the key responsibilities for this role.
            </p>

            <textarea
              name="responsibilities"
              rows="6"
              value={formData.responsibilities}
              onChange={handleChange}
              placeholder={`e.g.
Build and maintain web applications
Collaborate with the development team
Write clean and reusable code`}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Requirements */}
          <div className="p-6 md:p-8">
            <h2 className="text-lg font-semibold text-slate-800">
              Requirements
            </h2>

            <p className="text-sm text-slate-500 mt-1 mb-6">
              Mention the qualifications and requirements for candidates.
            </p>

            <textarea
              name="requirements"
              rows="6"
              value={formData.requirements}
              onChange={handleChange}
              placeholder={`e.g.
Bachelor's degree in Computer Science
2+ years of development experience
Strong knowledge of JavaScript`}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 outline-none resize-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Footer */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 md:px-8 py-5 flex flex-col sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate("/recruiter/jobs")}
              className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:bg-white transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-7 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-sm"
            >
              Create Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;

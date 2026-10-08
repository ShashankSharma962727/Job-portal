import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";

const EditJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
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

  useEffect(() => {
    const loadJob = async () => {
      try {
        const response = await api.get(`/jobs/${id}`);
        const job = response.data.job;

        setFormData({
          title: job.title || "",
          company: job.company || "",
          location: job.location || "",
          jobtype: job.jobtype || "",
          salary: job.salary ?? "",
          experience: job.experience ?? "",
          skills: Array.isArray(job.skills) ? job.skills.join(", ") : "",
          description: job.description || "",
          responsibilities: job.responsibilities || "",
          requirements: job.requirements || "",
        });
      } catch (error) {
        setErrorMessage(
          error.response?.data?.message || "Unable to load this job.",
        );
      } finally {
        setLoading(false);
      }
    };

    loadJob();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSaving(true);

    try {
      await api.put(`/jobs/${id}`, {
        ...formData,
        salary: Number(formData.salary),
        experience: Number(formData.experience),
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });

      navigate("/recruiter/jobs");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Unable to update this job.",
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-sm text-slate-500">Loading job...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-slate-800">Edit Job</h1>
        <p className="mt-2 text-slate-500">Update the details of this job.</p>

        {errorMessage && (
          <div
            role="alert"
            className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {errorMessage}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5 rounded-xl border bg-white p-6"
        >
          {[
            ["title", "Job Title"],
            ["company", "Company"],
            ["location", "Location"],
            ["salary", "Salary"],
            ["experience", "Experience (Years)"],
            ["skills", "Skills"],
          ].map(([name, label]) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                {label}
              </label>
              <input
                id={name}
                name={name}
                type={name === "salary" || name === "experience" ? "number" : "text"}
                min={name === "salary" || name === "experience" ? 0 : undefined}
                value={formData[name]}
                onChange={handleChange}
                required={name !== "skills"}
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="jobtype"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Job Type
            </label>
            <select
              id="jobtype"
              name="jobtype"
              value={formData.jobtype}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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

          {["description", "responsibilities", "requirements"].map((name) => (
            <div key={name}>
              <label
                htmlFor={name}
                className="mb-2 block text-sm font-medium capitalize text-slate-700"
              >
                {name}
              </label>
              <textarea
                id={name}
                name={name}
                rows="5"
                value={formData[name]}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          ))}

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate("/recruiter/jobs")}
              className="rounded-lg border border-slate-300 px-5 py-3 font-medium text-slate-700 hover:bg-slate-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Update Job"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditJob;

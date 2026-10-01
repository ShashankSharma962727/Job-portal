
import { BsSliders } from "react-icons/bs";

const JobFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      location: "",
      jobType: "",
      experience: "",
    });
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-semibold text-slate-900">
          <BsSliders className="text-blue-600" />
          Filters
        </h2>

        <button
          type="button"
          onClick={clearFilters}
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Clear all
        </button>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <label
            htmlFor="location"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Location
          </label>
          <input
            id="location"
            name="location"
            value={filters.location}
            onChange={handleChange}
            placeholder="e.g. Bangalore"
            className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label
            htmlFor="jobType"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Job Type
          </label>
          <select
            id="jobType"
            name="jobType"
            value={filters.jobType}
            onChange={handleChange}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">All types</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="experience"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Experience
          </label>
          <select
            id="experience"
            name="experience"
            value={filters.experience}
            onChange={handleChange}
            className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          >
            <option value="">Any experience</option>
            <option value="Fresher">Fresher</option>
            <option value="0-1 years">0-1 years</option>
            <option value="1-3 years">1-3 years</option>
            <option value="3+ years">3+ years</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
import { Link } from "react-router-dom";

const RecruiterJobCard = ({job}) => {
  return (
    <div className="bg-white border rounded-xl p-6 shadow-sm">

      <h2 className="text-xl font-semibold text-slate-800">
        {job.title}
      </h2>

      <p className="text-slate-500 mt-2">
        {job.jobtype}
      </p>

      <p className="text-slate-600 mt-3">
        {job.location}
      </p>

      <div className="flex gap-3 mt-6">

        <Link
          to={`/recruiter/jobs/${job._id}/edit`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Edit
        </Link>

        <Link
          to={`/recruiter/jobs/${job._id}/applicants`}
          className="px-4 py-2 bg-slate-800 text-white rounded-lg"
        >
          Applicants
        </Link>

      </div>

    </div>
  );
};

export default RecruiterJobCard;
import { useState } from "react";
import api from "../../../api";

const ApplicantCard = ({ applicant }) => {

  const [status, setStatus] = useState(applicant?.status || "");
  const [updating, setUpdating] = useState(false);

  const updateStatus = async (stat) => {
    if (updating || status === stat) return;

    setUpdating(true);

    try {
      await api.patch(`/application/status/${applicant._id}`, { status: stat });
      setStatus(stat);
    } catch (error) {
      console.log(error);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div className="bg-white border rounded-xl p-5 flex justify-between items-center">
      {/* Applicant Info */}
      <div>
        <h2 className="font-semibold text-lg text-slate-800">
          {applicant?.applicant?.firstname}{" "}
          {applicant?.applicant?.lastname}
        </h2>

        <p className="text-slate-500">
          {applicant?.applicant?.email}
        </p>

        <p className="text-sm text-slate-400 mt-1">
          Status:{" "}
          <span className="font-medium text-slate-700">
            {status}
          </span>
        </p>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => updateStatus("shortlisted")}
          disabled={updating || status === "shortlisted"}
          className="bg-green-600 hover:bg-green-700 disabled:bg-green-300 text-white px-4 py-2 rounded-lg"
        >
          {status === "shortlisted" ? "Shortlisted" : "Shortlist"}
        </button>

        <button
          onClick={() => updateStatus("rejected")}
          disabled={updating || status === "rejected"}
          className="bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white px-4 py-2 rounded-lg"
        >
          {status === "rejected" ? "Rejected" : "Reject"}
        </button>
      </div>
    </div>
  );
};

export default ApplicantCard;

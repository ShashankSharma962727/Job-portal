
import React from "react";

const ApplicantStatus = ({ status = "Pending" }) => {
  const styles = {
    Pending: "bg-amber-50 text-amber-700 ring-amber-200",
    Shortlisted: "bg-blue-50 text-blue-700 ring-blue-200",
    Rejected: "bg-red-50 text-red-700 ring-red-200",
    Hired: "bg-green-50 text-green-700 ring-green-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
        styles[status] || styles.Pending
      }`}
    >
      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
};

export default ApplicantStatus;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

const ApplicantDetails = () => {
  const { id } = useParams();
  const [application, setApplication] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const loadApplication = async () => {
    try {
      const response = await api.get(`/application/${id}`);
      setApplication(response.data.application);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Unable to load application.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplication();
  }, [id]);

  const updateStatus = async (status) => {
    setUpdating(true);
    setErrorMessage("");

    try {
      const response = await api.patch(`/application/status/${id}`, { status });
      setApplication(response.data.application);
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Unable to update application.",
      );
    } finally {
      setUpdating(false);
    }
  };

  if (loading) {
    return <div className="mx-auto max-w-3xl px-4 py-8 text-sm text-slate-500">Loading application...</div>;
  }

  if (!application) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <p className="text-red-600">{errorMessage || "Application not found."}</p>
      </div>
    );
  }

  const applicant = application.applicant;
  const job = application.job;

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800">Applicant Details</h1>
      <p className="mt-2 text-slate-500">Review the application and update its status.</p>

      {errorMessage && (
        <div className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      <div className="mt-8 space-y-5 rounded-xl border bg-white p-6">
        <div>
          <h2 className="text-xl font-semibold">
            {applicant?.firstname} {applicant?.lastname}
          </h2>
          <p className="mt-2 text-slate-500">{applicant?.email}</p>
        </div>

        <div className="border-t pt-5">
          <p className="text-sm text-slate-500">Applied for</p>
          <p className="mt-1 font-semibold text-slate-800">{job?.title}</p>
          <p className="mt-1 text-sm text-slate-500">{job?.company}</p>
        </div>

        <div className="border-t pt-5">
          <p className="text-sm text-slate-500">Current status</p>
          <p className="mt-1 font-semibold capitalize text-slate-800">
            {application.status}
          </p>
        </div>

        {application.coverLetter && (
          <div className="border-t pt-5">
            <p className="text-sm text-slate-500">Cover letter</p>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-slate-700">
              {application.coverLetter}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-3 border-t pt-5">
          <button
            type="button"
            disabled={updating || application.status === "shortlisted"}
            onClick={() => updateStatus("shortlisted")}
            className="rounded-lg bg-green-600 px-5 py-2.5 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Shortlist
          </button>
          <button
            type="button"
            disabled={updating || application.status === "rejected"}
            onClick={() => updateStatus("rejected")}
            className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Reject
          </button>
          <button
            type="button"
            disabled={updating || application.status === "hired"}
            onClick={() => updateStatus("hired")}
            className="rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Mark Hired
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetails;

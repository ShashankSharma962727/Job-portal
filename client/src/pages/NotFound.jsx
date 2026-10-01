import React from "react";
import { Link } from "react-router-dom";
import { BsExclamationCircle } from "react-icons/bs";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          <BsExclamationCircle size={40} />
        </div>

        <h1 className="text-6xl font-extrabold text-slate-900">
          404
        </h1>

        <h2 className="mt-4 text-xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Sorry, the page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

import { Link } from "react-router-dom";
import {
  BsPerson,
  BsPencilSquare,
  BsGeoAlt,
  BsEnvelope,
  BsBriefcase,
} from "react-icons/bs";

const ProfileSummary = () => {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-slate-900">
          My Profile
        </h2>

        <Link
          to="/candidate/profile"
          aria-label="Edit profile"
          className="rounded-lg p-2 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
        >
          <BsPencilSquare size={18} />
        </Link>
      </div>

      <div className="mt-5 flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
          <BsPerson />
        </div>

        <h3 className="mt-3 text-lg font-semibold text-slate-900">
          John Doe
        </h3>
        <p className="text-sm text-slate-500">
          Frontend Developer
        </p>
      </div>

      <div className="mt-6 space-y-4 border-t border-slate-100 pt-5">
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <BsEnvelope className="text-blue-600" size={17} />
          <span>john@example.com</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <BsGeoAlt className="text-blue-600" size={17} />
          <span>Bangalore, India</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600">
          <BsBriefcase className="text-blue-600" size={17} />
          <span>Fresher</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="font-medium text-slate-700">
            Profile completion
          </span>
          <span className="font-semibold text-blue-600">75%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full w-3/4 rounded-full bg-blue-600" />
        </div>
      </div>

      <Link
        to="/candidate/profile"
        className="mt-5 block w-full rounded-lg border border-blue-600 px-4 py-2.5 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
      >
        Complete Profile
      </Link>
    </section>
  );
};

export default ProfileSummary;

import { BsCameraFill, BsPersonFill } from "react-icons/bs";

const ProfileHeader = ({user}) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-blue-100 text-4xl font-bold text-blue-700">
          <BsPersonFill />
          <button
            type="button"
            aria-label="Change profile photo"
            className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow"
          >
            <BsCameraFill size={13} />
          </button>
        </div>

        <div className="flex-1">
          <p className="text-sm font-medium text-blue-600">
            Candidate Profile
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            {user.firstname} {user.lastname}
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {user.email}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
              Fresher
            </span>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              Open to opportunities
            </span>
          </div>
        </div>

        <div className="w-full rounded-xl bg-slate-50 p-4 sm:w-44">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-slate-600">Profile</span>
            <span className="font-bold text-blue-600">75%</span>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-3/4 rounded-full bg-blue-600" />
          </div>
          <p className="mt-2 text-xs text-slate-500">
            Complete your profile
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
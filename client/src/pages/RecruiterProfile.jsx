import { useAuth } from "../Context/AuthContext";

const RecruiterProfile = () => {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="text-3xl font-bold text-slate-800">Recruiter Profile</h1>

      <div className="mt-8 rounded-xl border bg-white p-6">
        <h2 className="text-xl font-semibold text-slate-900">
          {user?.firstname} {user?.lastname}
        </h2>

        <p className="mt-2 text-slate-500">{user?.email}</p>

        {user?.company?.name ? (
          <p className="mt-4 font-medium text-slate-700">{user.company.name}</p>
        ) : (
          <p className="mt-4 text-slate-500">Company information not added.</p>
        )}

        {user?.company?.website && (
          <a
            href={user.company.website}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
          >
            {user.company.website}
          </a>
        )}

        {user?.company?.description && (
          <p className="mt-4 text-sm leading-6 text-slate-600">
            {user.company.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default RecruiterProfile;

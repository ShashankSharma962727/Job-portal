const JobDescription = ({ job }) => {
  const responsibilities = job?.responsibilities
    ? job.responsibilities.split(/\r?\n/).map((item) => item.trim()).filter(Boolean)
    : [];

  const requirements = job?.requirements
    ? job.requirements.split(/\r?\n/).map((item) => item.trim()).filter(Boolean)
    : [];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <section>
        <h2 className="text-xl font-bold text-slate-900">Job Description</h2>
        <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">
          {job?.description || "No description provided."}
        </p>
      </section>

      <section className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-lg font-semibold text-slate-900">Responsibilities</h3>
        {responsibilities.length > 0 ? (
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600 marker:text-blue-600">
            {responsibilities.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">No responsibilities provided.</p>
        )}
      </section>

      <section className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-lg font-semibold text-slate-900">Requirements</h3>
        {requirements.length > 0 ? (
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600 marker:text-blue-600">
            {requirements.map((item, index) => (
              <li key={`${item}-${index}`}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="mt-3 text-sm text-slate-500">No requirements provided.</p>
        )}
      </section>

      <section className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-lg font-semibold text-slate-900">Skills</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {job?.skills?.length ? (
            job.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
              >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-sm text-slate-500">No skills listed.</span>
          )}
        </div>
      </section>
    </div>
  );
};

export default JobDescription;

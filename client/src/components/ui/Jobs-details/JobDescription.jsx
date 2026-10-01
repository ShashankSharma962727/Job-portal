
const JobDescription = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <section>
        <h2 className="text-xl font-bold text-slate-900">
          Job Description
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          We are looking for a skilled Frontend Developer to join
          our team and build modern, user-friendly web applications.
          You will work with designers and backend developers to
          create high-quality digital experiences.
        </p>
      </section>

      <section className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Responsibilities
        </h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600 marker:text-blue-600">
          <li>Build responsive and reusable UI components using React.</li>
          <li>Develop user-facing features and improve performance.</li>
          <li>Collaborate with designers to implement UI/UX designs.</li>
          <li>Write clean, maintainable and well-documented code.</li>
          <li>Test and debug applications across different devices.</li>
        </ul>
      </section>

      <section className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Requirements
        </h3>
        <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-slate-600 marker:text-blue-600">
          <li>Knowledge of HTML, CSS, JavaScript and React.</li>
          <li>Understanding of responsive web design.</li>
          <li>Familiarity with Git and modern frontend tools.</li>
          <li>Good problem-solving and communication skills.</li>
          <li>Freshers with relevant projects can apply.</li>
        </ul>
      </section>

      <section className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-lg font-semibold text-slate-900">
          Skills
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "REST APIs"].map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-7 border-t border-slate-100 pt-6">
        <h3 className="text-lg font-semibold text-slate-900">
          About the Role
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          This is a full-time, on-site role based in Bangalore.
          You will help build user interfaces, develop new features
          and ensure a smooth experience across devices.
        </p>
      </section>
    </div>
  );
};

export default JobDescription;

import FeaturesCard from "./FeaturesCard";

const Features = () => {
  return (
    <section className="w-full bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">

        {/* Section Heading */}
        <div className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Explore opportunities
          </span>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Featured Opportunities
          </h1>
          <p className="text-sm text-slate-500 sm:text-base">
            Discover the latest job openings from top companies.
          </p>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
          <FeaturesCard />
        </div>

      </div>
    </section>
  );
};

export default Features;

import { Input } from "@base-ui/react/input";
import { IoSearch, IoLocationSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <main className="w-full bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10">

        {/* Hero Heading */}
        <div className="flex max-w-3xl flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600">
            Find opportunities that matter
          </span>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Find Your Dream Job{" "}
            <span className="text-blue-600">Today.</span>
          </h1>

          <p className="max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover exciting career opportunities, connect with top
            companies, and take the next step toward your dream career.
          </p>
        </div>

        {/* Search Box */}
        <div className="grid w-full max-w-5xl grid-cols-1 gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-blue-100/60 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto]">

          {/* Job Search */}
          <div className="flex h-12 min-w-0 items-center gap-3 rounded-xl border border-slate-200 px-4 transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
            <IoSearch className="shrink-0 text-xl text-slate-400" />
            <Input
              className="h-full w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:outline-none"
              placeholder="Job title or keyword"
            />
          </div>

          {/* Location Search */}
          <div className="flex h-12 min-w-0 items-center gap-3 rounded-xl border border-slate-200 px-4 transition-all focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
            <IoLocationSharp className="shrink-0 text-xl text-slate-400" />
            <Input
              className="h-full w-full border-0 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:outline-none"
              placeholder="Enter location"
            />
          </div>

          {/* Search Button */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 text-sm font-semibold text-white shadow-md shadow-blue-200 transition-all hover:bg-blue-700 active:scale-[0.98] lg:w-auto"
          >
            <IoSearch className="text-lg" />
            Search Jobs
          </button>
        </div>

        {/* Popular Searches */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="font-medium text-slate-500">
            Popular:
          </span>
          {["Frontend Developer", "React", "Backend", "Remote"].map(
            (item) => (
              <span
                key={item}
                className="cursor-pointer rounded-full border border-slate-200 bg-white px-3 py-1.5 text-slate-600 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {item}
              </span>
            )
          )}
        </div>

      </div>
    </main>
  );
};

export default Hero;

import {
  BsBriefcase,
  BsBuilding,
  BsBarChart,
  BsMortarboard,
  BsCurrencyRupee,
  BsGeoAlt,
  BsGlobe,
} from "react-icons/bs";

const overviewItems = [
  { label: "Job Type", value: "Full Time", icon: BsBriefcase },
  { label: "Department", value: "Engineering", icon: BsBuilding },
  { label: "Experience", value: "0–2 years", icon: BsBarChart },
  { label: "Education", value: "Bachelor's Degree", icon: BsMortarboard },
  { label: "Salary", value: "₹8–12 LPA", icon: BsCurrencyRupee },
  { label: "Location", value: "Bangalore, India", icon: BsGeoAlt },
  { label: "Work Model", value: "On-site", icon: BsGlobe },
];

const JobOverview = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-bold text-slate-900">
        Job Overview
      </h2>

      <div>
        {overviewItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`flex items-start gap-3 py-4 ${
                index !== overviewItems.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >
              <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-lg text-blue-600">
                <Icon />
              </div>

              <div>
                <p className="text-sm text-slate-500">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-slate-800">
                  {item.value}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobOverview;
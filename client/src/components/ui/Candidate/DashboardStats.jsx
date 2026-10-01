
import {
  BsBriefcase,
  BsClock,
  BsCheckCircle,
  BsXCircle,
} from "react-icons/bs";

const stats = [
  {
    title: "Total Applications",
    value: "24",
    icon: BsBriefcase,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Pending",
    value: "12",
    icon: BsClock,
    color: "bg-amber-50 text-amber-600",
  },
  {
    title: "Shortlisted",
    value: "8",
    icon: BsCheckCircle,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Rejected",
    value: "4",
    icon: BsXCircle,
    color: "bg-red-50 text-red-600",
  },
];

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {stat.title}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {stat.value}
                </h2>
              </div>

              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color}`}>
                <Icon size={22} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
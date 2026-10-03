import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "candidate",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const { confirmPassword, ...userData } = formData;

  try {
    const response = await api.post(
      "/auth/register",
      userData
    );

    console.log("Register successful:", response.data);
    alert("Registration successful!");

    navigate("/login");

  } catch (error) {
    console.log(error.response?.data || error.message);
    alert(error.response?.data?.message || "Registration failed");
  }
};

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 sm:p-8">
        {/* Header */}
        <div className="mb-6 space-y-2 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
            J
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            Create an Account
          </h1>

          <p className="text-sm text-slate-500">
            Join us and find your next opportunity
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="firstname"
                className="text-sm font-medium text-slate-700"
              >
                First Name
              </label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                placeholder="John"
                value={formData.firstname}
                onChange={handleChange}
                autoComplete="given-name"
                required
                className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="lastname"
                className="text-sm font-medium text-slate-700"
              >
                Last Name
              </label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                placeholder="Doe"
                value={formData.lastname}
                onChange={handleChange}
                autoComplete="family-name"
                className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              required
              className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {/* Passwords */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={6}
                required
                className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="confirmPassword"
                className="text-sm font-medium text-slate-700"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
                minLength={6}
                required
                className="h-11 rounded-lg border border-slate-300 px-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Role */}
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-slate-700">
              Register as
            </span>

            <div className="grid grid-cols-2 gap-3">
              <label
                className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm transition-colors ${
                  formData.role === "candidate"
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="candidate"
                  checked={formData.role === "candidate"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Candidate
              </label>

              <label
                className={`flex cursor-pointer items-center gap-2 rounded-lg border p-3 text-sm transition-colors ${
                  formData.role === "recruiter"
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={formData.role === "recruiter"}
                  onChange={handleChange}
                  className="accent-blue-600"
                />
                Recruiter
              </label>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 h-11 w-full rounded-lg bg-blue-600 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold text-blue-600 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;

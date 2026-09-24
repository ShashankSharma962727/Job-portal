import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button, Input } from "@base-ui/react";
import { Label } from "@/components/ui/label";
import React from "react";

const Login = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-8">
      <Card className="w-full max-w-md border-slate-800 bg-slate-900 shadow-xl">
        <CardHeader className="flex flex-col items-center justify-center pb-6">
          <CardTitle className="text-2xl font-semibold tracking-tight text-white">
            Welcome Back
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form className="space-y-5">

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-slate-200">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                name="email"
                required
                className="h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm text-slate-200">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                required
                className="h-10 w-full rounded-md border border-slate-700 bg-slate-950 px-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* Role */}
            <div className="space-y-2">
              <Label className="text-sm text-slate-200">
                Select role
              </Label>

              <div className="grid grid-cols-2 gap-3">
                {/* Candidate */}
                <label
                  htmlFor="candidate"
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
                >
                  <input
                    id="candidate"
                    name="role"
                    type="radio"
                    value="candidate"
                    defaultChecked
                    className="h-4 w-4 accent-indigo-600"
                  />
                  Candidate
                </label>

                {/* Recruiter */}
                <label
                  htmlFor="recruiter"
                  className="flex cursor-pointer items-center gap-2 rounded-md border border-slate-700 bg-slate-950 px-3 py-2.5 text-sm text-slate-300 transition hover:border-slate-600 hover:bg-slate-800"
                >
                  <input
                    id="recruiter"
                    name="role"
                    type="radio"
                    value="recruiter"
                    className="h-4 w-4 accent-indigo-600"
                  />
                  Recruiter
                </label>
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="h-10 w-full rounded-md bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-500"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </main>
  );
};

export default Login;

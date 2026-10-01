
import React from "react";
import ProfileHeader from "../components/ui/Candidate/ProfileHeader";
import ProfileForm from "../components/ui/Candidate/ProfileForm";
import ResumeCard from "../components/ui/Candidate/ResumeCard";

const CandidateProfile = () => {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            My Profile
          </h1>
          <p className="mt-2 text-sm text-slate-500">
            Manage your personal information and resume.
          </p>
        </div>

        <ProfileHeader />

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ProfileForm />
          </div>
          <div>
            <ResumeCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;
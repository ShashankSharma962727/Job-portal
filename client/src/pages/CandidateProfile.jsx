import React, { useState } from "react";
import ProfileHeader from "../components/ui/Candidate/ProfileHeader";
import ProfileForm from "../components/ui/Candidate/ProfileForm";
import { useAuth } from "../Context/AuthContext";

const CandidateProfile = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        {/* Page Header */}
        <div>
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            View and manage your personal profile information.
          </p>
        </div>

        {/* Profile */}
        {!isEditing ? (
          <ProfileHeader
            user={user}
            onEditProfile={() => setIsEditing(true)}
          />
        ) : (
          <ProfileForm
            user={user}
            onCancel={() => setIsEditing(false)}
          />
        )}
      </div>
    </div>
  );
};

export default CandidateProfile;
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface ProfileData {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  skillsIHave: string[];
  topSkills: string[];
  whatImGoodAt: string;
  location: string;
  preferredWork: "online" | "offline" | "both";
}

const CreateProfile: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    email: "",
    password: "",
    profilePicture: "",
    skillsIHave: [],
    topSkills: [],
    whatImGoodAt: "",
    location: "",
    preferredWork: "both",
  });

  const [currentSkill, setCurrentSkill] = useState("");

  const addSkill = () => {
    if (
      currentSkill.trim() &&
      !profileData.skillsIHave.includes(currentSkill.trim())
    ) {
      setProfileData((prev) => ({
        ...prev,
        skillsIHave: [...prev.skillsIHave, currentSkill.trim()],
      }));
      setCurrentSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setProfileData((prev) => ({
      ...prev,
      skillsIHave: prev.skillsIHave.filter((s) => s !== skill),
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileData((prev) => ({
          ...prev,
          profilePicture: e.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      profileData.name &&
      profileData.email &&
      profileData.password &&
      profileData.skillsIHave.length > 0
    ) {
      // Set top skills to first 3 skills
      const finalData = {
        ...profileData,
        topSkills: profileData.skillsIHave.slice(0, 3),
      };
      localStorage.setItem("userProfile", JSON.stringify(finalData));
      localStorage.setItem("isAuthenticated", "true");
      navigate("/feed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-green-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">ST</span>
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Join SkillTrade
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Create your profile to start trading skills
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Profile Picture */}
            <div className="flex justify-center">
              <div className="relative">
                <div
                  className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden cursor-pointer hover:bg-gray-300 transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {profileData.profilePicture ? (
                    <img
                      src={profileData.profilePicture}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      className="w-8 h-8 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 bg-green-600 text-white rounded-full p-1 hover:bg-green-700 transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 5v14m-7-7h14" />
                  </svg>
                </button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </div>
            </div>

            {/* Name */}
            <div>
              <input
                type="text"
                required
                value={profileData.name}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, name: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Full name"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                required
                value={profileData.email}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Email address"
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                required
                value={profileData.password}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Password"
              />
            </div>

            {/* Location */}
            <div>
              <input
                type="text"
                value={profileData.location}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="Location (optional)"
              />
            </div>

            {/* Skills */}
            <div>
              <div className="flex space-x-2 mb-2">
                <input
                  type="text"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addSkill())
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500"
                  placeholder="Add your skills (e.g. React, Design, Marketing)"
                />
                <Button
                  type="button"
                  onClick={addSkill}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  Add
                </Button>
              </div>
              {profileData.skillsIHave.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {profileData.skillsIHave.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center space-x-1"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-green-600 hover:text-green-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bio */}
            <div>
              <textarea
                value={profileData.whatImGoodAt}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    whatImGoodAt: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-green-500 focus:border-green-500 h-20 resize-none"
                placeholder="Tell us what you're great at (optional)"
              />
            </div>

            {/* Work Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Work Preference
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "online", label: "Online" },
                  { value: "offline", label: "In-person" },
                  { value: "both", label: "Both" },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() =>
                      setProfileData((prev) => ({
                        ...prev,
                        preferredWork: option.value as any,
                      }))
                    }
                    className={cn(
                      "py-2 px-3 text-sm font-medium rounded-md border transition-colors",
                      profileData.preferredWork === option.value
                        ? "bg-green-600 text-white border-green-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 text-sm font-medium"
              disabled={
                !profileData.name ||
                !profileData.email ||
                !profileData.password ||
                profileData.skillsIHave.length === 0
              }
            >
              Join SkillTrade
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center">
          <p className="text-xs text-gray-600">
            By joining, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;

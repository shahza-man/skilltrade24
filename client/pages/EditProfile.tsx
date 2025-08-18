import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type ExperienceLevel = "beginner" | "intermediate" | "advanced" | "expert";
type Availability = "full_time" | "part_time" | "project_based";

interface ProfileData {
  name: string;
  email: string;
  profilePicture: string;
  bio: string;
  location: string;
  skillsOffered: string[];
  workWanted: string;
  experienceLevel: ExperienceLevel;
  availability: Availability;
  topSkills: string[];
}

const EditProfile: React.FC = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentSkill, setCurrentSkill] = useState("");
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "",
    email: "",
    profilePicture: "",
    bio: "",
    location: "",
    skillsOffered: [],
    workWanted: "",
    experienceLevel: "intermediate",
    availability: "project_based",
    topSkills: [],
  });

  useEffect(() => {
    // Load existing profile data
    const userData = localStorage.getItem("userProfile");
    const isAuth = localStorage.getItem("isAuthenticated");

    if (!isAuth || !userData) {
      navigate("/create-profile");
      return;
    }

    const existingData = JSON.parse(userData);
    setProfileData({
      name: existingData.name || "",
      email: existingData.email || "",
      profilePicture: existingData.profilePicture || "",
      bio: existingData.whatImGoodAt || existingData.bio || "",
      location: existingData.location || "",
      skillsOffered: existingData.skillsIHave || [],
      workWanted: existingData.workWanted || "",
      experienceLevel: existingData.experienceLevel || "intermediate",
      availability: existingData.preferredWork || "project_based",
      topSkills: existingData.topSkills || [],
    });
  }, [navigate]);

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

  const addSkill = () => {
    if (
      currentSkill.trim() &&
      !profileData.skillsOffered.includes(currentSkill.trim())
    ) {
      setProfileData((prev) => ({
        ...prev,
        skillsOffered: [...prev.skillsOffered, currentSkill.trim()],
      }));
      setCurrentSkill("");
    }
  };

  const removeSkill = (skill: string) => {
    setProfileData((prev) => ({
      ...prev,
      skillsOffered: prev.skillsOffered.filter((s) => s !== skill),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Update localStorage with new profile data
    const updatedProfile = {
      name: profileData.name,
      email: profileData.email,
      profilePicture: profileData.profilePicture,
      whatImGoodAt: profileData.bio,
      bio: profileData.bio,
      location: profileData.location,
      skillsIHave: profileData.skillsOffered,
      workWanted: profileData.workWanted,
      experienceLevel: profileData.experienceLevel,
      preferredWork: profileData.availability,
      topSkills: profileData.skillsOffered.slice(0, 3), // First 3 skills as top skills
    };

    localStorage.setItem("userProfile", JSON.stringify(updatedProfile));
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/profile")}
                className="text-gray-600 hover:text-green-600 transition-colors p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-900">Edit Profile</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-8 px-4">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Profile Picture Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Profile Photo
            </h2>
            <div className="flex items-center space-x-6">
              <div className="relative">
                <img
                  src={
                    profileData.profilePicture ||
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                  }
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-gray-200 object-cover"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="absolute bottom-0 right-0 bg-green-600 text-white rounded-full p-2 hover:bg-green-700 transition-colors shadow-lg"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
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
              <div>
                <h3 className="text-md font-medium text-gray-900">
                  Update your profile photo
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose a clear, professional photo that represents you well
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => fileInputRef.current?.click()}
                  className="mt-3 border-green-500 text-green-600 hover:bg-green-50"
                >
                  Change Photo
                </Button>
              </div>
            </div>
          </div>

          {/* Basic Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Basic Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={profileData.name}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <input
                type="text"
                value={profileData.location}
                onChange={(e) =>
                  setProfileData((prev) => ({
                    ...prev,
                    location: e.target.value,
                  }))
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="City, Country"
              />
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              About Me
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bio / Professional Summary
              </label>
              <textarea
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData((prev) => ({ ...prev, bio: e.target.value }))
                }
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                placeholder="Tell us about yourself, your background, and what drives your passion for skill trading..."
              />
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Skills I Offer
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Add your skills *
              </label>
              <div className="flex space-x-2 mb-4">
                <input
                  type="text"
                  value={currentSkill}
                  onChange={(e) => setCurrentSkill(e.target.value)}
                  onKeyPress={(e) =>
                    e.key === "Enter" && (e.preventDefault(), addSkill())
                  }
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Type a skill and press Enter"
                />
                <Button
                  type="button"
                  onClick={addSkill}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Add
                </Button>
              </div>
              {profileData.skillsOffered.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {profileData.skillsOffered.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium flex items-center space-x-2"
                    >
                      <span>{skill}</span>
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="text-green-600 hover:text-green-800 font-bold"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Work Preferences */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Work Preferences
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What type of work are you looking for?
                </label>
                <textarea
                  value={profileData.workWanted}
                  onChange={(e) =>
                    setProfileData((prev) => ({
                      ...prev,
                      workWanted: e.target.value,
                    }))
                  }
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 resize-none"
                  placeholder="Describe the type of projects, collaborations, or skill exchanges you're interested in..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Experience Level *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {(
                    [
                      "beginner",
                      "intermediate",
                      "advanced",
                      "expert",
                    ] as ExperienceLevel[]
                  ).map((level) => (
                    <button
                      key={level}
                      type="button"
                      onClick={() =>
                        setProfileData((prev) => ({
                          ...prev,
                          experienceLevel: level,
                        }))
                      }
                      className={cn(
                        "py-3 px-4 text-sm font-medium rounded-lg border transition-colors capitalize",
                        profileData.experienceLevel === level
                          ? "bg-green-600 text-white border-green-600"
                          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50",
                      )}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Availability *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(
                    [
                      { value: "full_time", label: "Full Time" },
                      { value: "part_time", label: "Part Time" },
                      { value: "project_based", label: "Project Based" },
                    ] as Array<{ value: Availability; label: string }>
                  ).map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() =>
                        setProfileData((prev) => ({
                          ...prev,
                          availability: option.value,
                        }))
                      }
                      className={cn(
                        "py-3 px-4 text-sm font-medium rounded-lg border transition-colors",
                        profileData.availability === option.value
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
          </div>

          {/* Save Button */}
          <div className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/profile")}
              className="px-6"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-8 bg-green-600 hover:bg-green-700"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;

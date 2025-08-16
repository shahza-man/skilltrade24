import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [userPosts, setUserPosts] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<"posts" | "about" | "skills">(
    "posts",
  );

  useEffect(() => {
    const userData = localStorage.getItem("userProfile");
    const isAuth = localStorage.getItem("isAuthenticated");

    if (!isAuth || !userData) {
      navigate("/create-profile");
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    // Load user's posts
    const posts = JSON.parse(localStorage.getItem("userPosts") || "[]");
    setUserPosts(posts);
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate("/feed")}
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-gray-900">Profile</h1>
            </div>

            <Button
              onClick={() => navigate("/create-post")}
              className="bg-green-600 hover:bg-green-700"
            >
              New Post
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img
                src={
                  user.profilePicture ||
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                }
                alt={user.name}
                className="w-32 h-32 rounded-full border-4 border-green-200 object-cover"
              />
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {user.name}
                  </h1>
                  <p className="text-gray-600 mb-2">
                    {user.location || "Location not set"}
                  </p>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">
                      Available for skill trades
                    </span>
                  </div>
                </div>
                <Button
                  onClick={() => navigate("/edit-profile")}
                  variant="outline"
                  className="mt-4 sm:mt-0 border-green-500 text-green-600 hover:bg-green-50"
                >
                  Edit Profile
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-4 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {userPosts.length}
                  </div>
                  <div className="text-gray-600 text-sm">Posts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.9</div>
                  <div className="text-gray-600 text-sm">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">23</div>
                  <div className="text-gray-600 text-sm">Trades</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-8">
              {[
                { id: "posts", label: "Posts", count: userPosts.length },
                { id: "about", label: "About" },
                {
                  id: "skills",
                  label: "Skills",
                  count: user.skillsIHave?.length || 0,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "py-4 px-2 border-b-2 font-medium text-sm transition-colors",
                    activeTab === tab.id
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700",
                  )}
                >
                  {tab.label}
                  {tab.count !== undefined && (
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-8">
            {activeTab === "posts" && (
              <div className="space-y-6">
                {userPosts.length > 0 ? (
                  userPosts.map((post) => (
                    <div
                      key={post.id}
                      className="border border-gray-200 rounded-lg p-6"
                    >
                      <div className="flex items-start space-x-4">
                        <img
                          src={post.user.avatar}
                          alt={post.user.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold">
                              {post.user.username}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {post.timestamp}
                            </span>
                          </div>
                          <p className="text-gray-800 mb-3">{post.content}</p>

                          {post.image && (
                            <img
                              src={post.image}
                              alt="Post content"
                              className="w-full max-w-md rounded-lg border border-gray-200 mb-3"
                            />
                          )}

                          {(post.skillsOffered || post.skillsNeeded) && (
                            <div className="space-y-2">
                              {post.skillsOffered && (
                                <div className="flex flex-wrap gap-1">
                                  <span className="text-xs text-green-600 font-medium">
                                    Offering:
                                  </span>
                                  {post.skillsOffered.map(
                                    (skill: string, index: number) => (
                                      <span
                                        key={index}
                                        className="px-2 py-1 bg-green-50 text-green-700 rounded-full text-xs"
                                      >
                                        {skill}
                                      </span>
                                    ),
                                  )}
                                </div>
                              )}
                              {post.skillsNeeded && (
                                <div className="flex flex-wrap gap-1">
                                  <span className="text-xs text-blue-600 font-medium">
                                    Seeking:
                                  </span>
                                  {post.skillsNeeded.map(
                                    (skill: string, index: number) => (
                                      <span
                                        key={index}
                                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                                      >
                                        {skill}
                                      </span>
                                    ),
                                  )}
                                </div>
                              )}
                            </div>
                          )}

                          <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-gray-100">
                            <span className="text-sm text-gray-500">
                              {post.likes} likes
                            </span>
                            <span className="text-sm text-gray-500">
                              {post.comments} comments
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No posts yet
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Share your first post to get started with skill trading
                    </p>
                    <Button
                      onClick={() => navigate("/create-post")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Create Your First Post
                    </Button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "about" && (
              <div className="space-y-8">
                {/* Bio Section */}
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-green-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    About Me
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {user.bio ||
                      user.whatImGoodAt ||
                      "No bio provided yet. Share something about yourself, your background, and what drives your passion for skill trading."}
                  </p>
                </div>

                {/* Professional Information Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Location */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
                      <svg
                        className="w-4 h-4 text-green-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Location
                    </h4>
                    <p className="text-gray-700">
                      {user.location || "Location not specified"}
                    </p>
                  </div>

                  {/* Experience Level */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-md font-semibold text-gray-900 mb-3 flex items-center">
                      <svg
                        className="w-4 h-4 text-green-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Experience Level
                    </h4>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium capitalize">
                      {user.experienceLevel || "Intermediate"}
                    </span>
                  </div>
                </div>

                {/* Skills Offered */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-4 h-4 text-green-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    Skills I Offer
                  </h4>
                  {user.skillsIHave && user.skillsIHave.length > 0 ? (
                    <div className="flex flex-wrap gap-2">
                      {user.skillsIHave.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-green-100 text-green-800 rounded-lg text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 italic">No skills listed yet</p>
                  )}
                </div>

                {/* Top Skills */}
                {user.topSkills && user.topSkills.length > 0 && (
                  <div className="bg-white border border-gray-200 rounded-lg p-6">
                    <h4 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                      <svg
                        className="w-4 h-4 text-blue-600 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                      Top Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {user.topSkills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-100 text-blue-800 rounded-lg font-semibold border border-blue-200"
                        >
                          ⭐ {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Work Preferences */}
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-4 h-4 text-purple-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
                      />
                    </svg>
                    Work Preferences
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Availability:
                      </span>
                      <span className="ml-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium capitalize">
                        {user.preferredWork || "Not specified"}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-700">
                        Seeking:
                      </span>
                      <div className="mt-1 text-gray-600">
                        {user.workWanted ||
                          "Open to various skill trading opportunities"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trading Statistics */}
                <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-gray-200 rounded-lg p-6">
                  <h4 className="text-md font-semibold text-gray-900 mb-4 flex items-center">
                    <svg
                      className="w-4 h-4 text-green-600 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-12V9a2 2 0 00-2-2M5 3v4a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2H7a2 2 0 00-2 2z"
                      />
                    </svg>
                    Trading Activity
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        23
                      </div>
                      <div className="text-sm text-gray-600">
                        Trades Completed
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        4.9
                      </div>
                      <div className="text-sm text-gray-600">
                        Average Rating
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        87%
                      </div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-600">
                        15
                      </div>
                      <div className="text-sm text-gray-600">
                        Active Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "skills" && (
              <div className="space-y-6">
                {user.topSkills && user.topSkills.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Top Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {user.topSkills.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {user.skillsIHave && user.skillsIHave.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      All Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {user.skillsIHave.map((skill: string, index: number) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(!user.skillsIHave || user.skillsIHave.length === 0) && (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No skills listed
                    </h3>
                    <p className="text-gray-600">
                      Add your skills to help others find you for trades
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<any>(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = localStorage.getItem("isAuthenticated");
      const profile = localStorage.getItem("userProfile");

      setIsAuthenticated(authStatus === "true");
      if (profile) {
        setUserProfile(JSON.parse(profile));
      }
    };

    checkAuth();
    // Listen for storage changes to update auth state
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleGetStarted = () => {
    navigate("/create-profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userProfile");
    setIsAuthenticated(false);
    setUserProfile(null);
    setShowProfileMenu(false);
    navigate("/");
  };

  return (
    <>
      <header className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white border-b border-gray-100">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">ST</span>
          </div>
          <span className="text-xl font-semibold text-gray-900">
            SkillTrade
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/skills"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Skills
          </Link>
          <Link
            to="/trades"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Trades
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About us
          </Link>
        </nav>

        {/* Search Bar - Desktop/Tablet */}
        <div className="hidden sm:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg hover:border-primary/50 focus-within:border-primary transition-colors">
              <svg className="w-4 h-4 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search skills..."
                className="flex-1 px-3 py-2 text-gray-700 bg-transparent focus:outline-none text-sm"
                onClick={() => {
                  const isAuth = localStorage.getItem("isAuthenticated");
                  if (isAuth === "true") {
                    window.location.href = "/feed";
                  } else {
                    window.location.href = "/create-profile";
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Desktop Auth Section */}
        <div className="hidden sm:flex items-center space-x-4">
          {isAuthenticated && userProfile ? (
            <div className="relative">
              <div className="flex items-center space-x-2">
                <Link
                  to="/profile"
                  className="flex items-center space-x-3 hover:opacity-80 transition-opacity rounded-lg p-2 hover:bg-gray-50"
                >
                  <img
                    src={
                      userProfile.profilePicture ||
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    }
                    alt={userProfile.name}
                    className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  />
                  <div className="text-left">
                    <div className="text-gray-900 font-medium text-sm">
                      {userProfile.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {userProfile.topSkills?.[0] || "Skill Trader"}
                    </div>
                  </div>
                </Link>
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 10l5 5 5-5z" />
                  </svg>
                </button>
              </div>

              {/* Profile Dropdown */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="py-1">
                    <Link
                      to="/feed"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      📱 My Feed
                    </Link>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      👤 Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      ⚙️ Settings
                    </Link>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              onClick={handleGetStarted}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2"
            >
              Get Started →
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <nav className="px-4 py-4 space-y-4">
            {/* Mobile Search Bar */}
            <div className="sm:hidden mb-4">
              <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg hover:border-primary/50 focus-within:border-primary transition-colors">
                <svg className="w-4 h-4 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search skills..."
                  className="flex-1 px-3 py-2 text-gray-700 bg-transparent focus:outline-none text-sm"
                  onClick={() => {
                    const isAuth = localStorage.getItem("isAuthenticated");
                    if (isAuth === "true") {
                      window.location.href = "/feed";
                    } else {
                      window.location.href = "/create-profile";
                    }
                    setIsMenuOpen(false);
                  }}
                />
              </div>

              {/* Popular Skills for Mobile */}
              <div className="mt-3 flex flex-wrap gap-2">
                {["React", "Design", "Python", "Marketing"].map((skill) => (
                  <button
                    key={skill}
                    onClick={() => {
                      const isAuth = localStorage.getItem("isAuthenticated");
                      if (isAuth === "true") {
                        window.location.href = "/feed";
                      } else {
                        window.location.href = "/create-profile";
                      }
                      setIsMenuOpen(false);
                    }}
                    className="px-3 py-1 bg-gray-100 hover:bg-primary/10 hover:text-primary text-gray-600 rounded-full text-xs transition-colors"
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            <Link
              to="/skills"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/trades"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trades
            </Link>
            <Link
              to="/about"
              className="block text-gray-600 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About us
            </Link>
            {isAuthenticated && userProfile ? (
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 px-3">
                  <img
                    src={
                      userProfile.profilePicture ||
                      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                    }
                    alt={userProfile.name}
                    className="w-10 h-10 rounded-full border-2 border-primary object-cover"
                  />
                  <div>
                    <div className="text-gray-900 font-medium text-sm">
                      {userProfile.name}
                    </div>
                    <div className="text-gray-500 text-xs">
                      {userProfile.topSkills?.[0] || "Skill Trader"}
                    </div>
                  </div>
                </div>
                <Link
                  to="/feed"
                  className="block text-gray-600 hover:text-gray-900 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  📱 My Feed
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left text-red-600 hover:text-red-700 transition-colors"
                >
                  🚪 Logout
                </button>
              </div>
            ) : (
              <Button
                onClick={handleGetStarted}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                Get Started →
              </Button>
            )}
          </nav>
        </div>
      )}
    </>
  );
}

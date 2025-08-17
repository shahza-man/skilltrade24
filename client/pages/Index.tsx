import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import ServicesShowcase from "@/components/ServicesShowcase";
import FAQSection from "@/components/FAQSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <main className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Success Metric */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-primary">✓</span>
              <span className="text-gray-600">
                Join 20,000+ Happy Skills Traders
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Transform your skills to{" "}
                <span className="block">grow your opportunities</span>
              </h1>

              <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
                Unlock growth and collaboration with our skill trading platform.
                From seamless skill exchange to cutting-edge collaboration
                tools, we help your talents thrive in a cooperative world. Let's
                build the future together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const isAuth = localStorage.getItem("isAuthenticated");
                  if (isAuth === "true") {
                    window.location.href = "/feed";
                  } else {
                    window.location.href = "/create-profile";
                  }
                }}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base"
              >
                Let's Trade →
              </Button>
              <Button
                onClick={() => {
                  const isAuth = localStorage.getItem("isAuthenticated");
                  if (isAuth === "true") {
                    window.location.href = "/messages";
                  } else {
                    window.location.href = "/create-profile";
                  }
                }}
                variant="outline"
                className="border-gray-200 text-gray-700 px-8 py-3 text-base"
              >
                💬 Messages →
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="flex items-center justify-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5bdae9b2904d4e6f8e00b8c0f2e5670e%2Fc9d4ba38360a440b90b602f6915db14e?format=webp&width=800"
                alt="WorkTrade skill exchange illustration showing people collaborating and trading skills"
                className="w-full h-auto max-w-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="container mx-auto px-6">
          {/* Sliding Text Animation - At top of about us */}
          <div className="overflow-hidden whitespace-nowrap border-b border-gray-800 pb-8 mb-16">
            <div className="animate-slide-left inline-flex space-x-16 text-4xl lg:text-6xl font-bold opacity-30">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-lg">
                SkillSwap
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-lg">
                WorkTrade
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-lg">
                CollabHub
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-lg">
                TradeSkills
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-lg">
                ExchangePro
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-lg">
                SkillSwap
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-lg">
                WorkTrade
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-lg">
                CollabHub
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-primary">✓</span>
                <span className="text-gray-300">ABOUT US</span>
              </div>

              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                Innovation and Success in{" "}
                <span className="block">Digital Marketing</span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed">
                Where innovation meets strategy. With 25 years of experience, we
                are a forward-thinking digital marketing agency dedicated to
                helping businesses like yours achieve exceptional growth and
                success in the digital landscape. Our team is passionate about
                delivering tailored marketing solutions that drive results,
                leveraging decades of industry expertise to stay ahead of the
                curve.
              </p>
            </div>

            {/* Right Image - Placeholder for now */}
            <div className="relative">
              <div className="bg-gray-800 rounded-lg aspect-video flex items-center justify-center">
                <span className="text-gray-400">Conference Room Image</span>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 lg:mt-24">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-gray-300 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                10+
              </div>
              <div className="text-gray-300 text-sm">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                110+
              </div>
              <div className="text-gray-300 text-sm">Employees</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                2K+
              </div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <ServicesShowcase />

      {/* Join the Feed Section */}
      <section className="bg-black text-white py-20 lg:py-32 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-primary/30 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-primary/60 text-sm font-mono tracking-wider">
                  {'>>>'} LIVE_FEED.connect()
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Drop into the
                  <span className="block text-primary bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent">
                    live action
                  </span>
                </h2>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Real conversations. Real skills. Real opportunities.
                  <br />Skip the wait, dive straight into the flow.
                </p>
              </div>

              {/* Live Activity Preview */}
              <div className="space-y-3 bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span>LIVE ACTIVITY</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                      A
                    </div>
                    <div className="flex-1">
                      <span className="text-white">Alex</span>
                      <span className="text-gray-400 ml-2">trading React for Design skills</span>
                    </div>
                    <span className="text-primary text-xs">2m ago</span>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center text-xs font-bold">
                      S
                    </div>
                    <div className="flex-1">
                      <span className="text-white">Sarah</span>
                      <span className="text-gray-400 ml-2">started a Python mentorship</span>
                    </div>
                    <span className="text-primary text-xs">5m ago</span>
                  </div>

                  <div className="flex items-center space-x-3 text-sm">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center text-xs font-bold">
                      M
                    </div>
                    <div className="flex-1">
                      <span className="text-white">Mike</span>
                      <span className="text-gray-400 ml-2">looking for UI/UX collaborators</span>
                    </div>
                    <span className="text-primary text-xs">8m ago</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">2.8K</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Active Now</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">143</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Trades Today</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">Match Rate</div>
                </div>
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <Button
                  onClick={() => {
                    const isAuth = localStorage.getItem("isAuthenticated");
                    if (isAuth === "true") {
                      window.location.href = "/feed";
                    } else {
                      window.location.href = "/create-profile";
                    }
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-black font-bold py-4 text-lg transform hover:scale-105 transition-all duration-200 shadow-2xl shadow-primary/25"
                >
                  JUMP IN →
                </Button>

                <div className="text-center text-gray-400 text-sm">
                  No setup, no waiting • Join in 30 seconds
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-3xl"></div>

              {/* Main container */}
              <div className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800 overflow-hidden">
                {/* Top bar like a browser */}
                <div className="flex items-center space-x-2 mb-6 pb-4 border-b border-gray-800">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded px-4 py-1 text-xs text-gray-400 font-mono">
                    skilltrade.com/feed
                  </div>
                </div>

                {/* Your image */}
                <div className="relative">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F5bdae9b2904d4e6f8e00b8c0f2e5670e%2F2a09d0e9c02848efb3eac0ac53678054?format=webp&width=800"
                    alt="Live skill trading interface"
                    className="w-full h-auto rounded-lg"
                  />

                  {/* Overlay UI elements */}
                  <div className="absolute top-4 right-4 bg-black/80 backdrop-blur rounded-lg px-3 py-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-primary text-xs font-mono">LIVE</span>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur rounded-lg px-3 py-2">
                    <div className="text-white text-xs">
                      <div className="font-semibold">Active Traders</div>
                      <div className="text-primary">2,847 online</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}

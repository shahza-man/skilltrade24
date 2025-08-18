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
                �� Messages →
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

      {/* Join Community Section */}
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Success Metric */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-primary">✓</span>
                <span className="text-gray-300">
                  Join 20,000+ Active Skill Traders
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Connect with professionals{" "}
                  <span className="block">and start trading skills</span>
                </h1>

                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  Join our thriving community where knowledge flows freely. Share
                  your expertise, learn new skills, and build meaningful professional
                  relationships that advance your career.
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
                  className="bg-primary hover:bg-primary/90 text-black px-8 py-3 text-base font-semibold"
                >
                  Join the Community →
                </Button>
                <Button
                  onClick={() => {
                    const isAuth = localStorage.getItem("isAuthenticated");
                    if (isAuth === "true") {
                      window.location.href = "/feed";
                    } else {
                      window.location.href = "/create-profile";
                    }
                  }}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-base"
                >
                  Browse Skills →
                </Button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5bdae9b2904d4e6f8e00b8c0f2e5670e%2F2a09d0e9c02848efb3eac0ac53678054?format=webp&width=800"
                  alt="Professionals collaborating and sharing skills in a modern workspace"
                  className="w-full h-auto max-w-lg rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Trade-Matching Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="relative">
              <div className="flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5bdae9b2904d4e6f8e00b8c0f2e5670e%2Fb7836dc880764791bff4469dbed7278b?format=webp&width=800"
                  alt="AI-powered skill matching connecting professionals for seamless collaboration"
                  className="w-full h-auto max-w-lg rounded-lg"
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-8">
              {/* AI Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                AI-Powered Matching
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Smart AI finds your perfect{" "}
                  <span className="text-primary">trade partners</span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  The AI in our WorkTrade platform acts as a smart trade-matching assistant.
                  Instead of wasting time searching manually, users instantly get personalized
                  trade suggestions.
                </p>
              </div>

              {/* AI Features */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Instant Skill Matching</h3>
                    <p className="text-gray-600 text-sm">
                      If you want to offer a skill, AI shows you the right people who are looking for it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Smart Connections</h3>
                    <p className="text-gray-600 text-sm">
                      If you are looking for a skill, AI connects you to users who are offering it.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Learning Algorithm</h3>
                    <p className="text-gray-600 text-sm">
                      It learns from your preferences and past trades to recommend the best matches.
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">The Result</h4>
                <p className="text-gray-700 leading-relaxed">
                  This makes the whole process of exchanging work <strong>faster, easier, and more accurate</strong>,
                  so users spend less time searching and more time actually working and trading.
                </p>
              </div>

              {/* CTA */}
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
                  Try AI Matching →
                </Button>
                <button
                  onClick={() => {
                    const isAuth = localStorage.getItem("isAuthenticated");
                    if (isAuth === "true") {
                      window.location.href = "/feed";
                    } else {
                      window.location.href = "/create-profile";
                    }
                  }}
                  className="group flex items-center justify-center space-x-2 text-primary hover:text-primary/80 font-medium transition-colors duration-200"
                >
                  <span>See How It Works</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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

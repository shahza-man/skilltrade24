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
                  Join our thriving community where knowledge flows freely.
                  Share your expertise, learn new skills, and build meaningful
                  professional relationships that advance your career.
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
      <section className="bg-black text-white py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              {/* Success Metric */}
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-primary">✓</span>
                <span className="text-gray-300">
                  AI-Powered Smart Matching Technology
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Smart AI finds your perfect{" "}
                  <span className="block">trade partners instantly</span>
                </h1>

                <p className="text-lg text-gray-300 max-w-lg leading-relaxed">
                  Connect with professionals and start trading skills with our
                  AI-powered matching system. Our smart algorithm learns from
                  your preferences and instantly connects you with the right
                  people who are looking for your skills or offering exactly
                  what you need.
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
                  Try AI Matching →
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
                  See How It Works →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <footer className="bg-black text-white py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ST</span>
                </div>
                <span className="text-xl font-semibold">SkillTrade</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Connect with professionals and start trading skills. Transform your expertise into opportunities.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/skills" className="hover:text-primary transition-colors">Browse Skills</a>
                </li>
                <li>
                  <a href="/trades" className="hover:text-primary transition-colors">Active Trades</a>
                </li>
                <li>
                  <a href="/about" className="hover:text-primary transition-colors">About Us</a>
                </li>
                <li>
                  <a href="/feed" className="hover:text-primary transition-colors">Community</a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <span className="hover:text-primary transition-colors cursor-pointer">Skill Exchange</span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-pointer">AI Matching</span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-pointer">Project Trading</span>
                </li>
                <li>
                  <span className="hover:text-primary transition-colors cursor-pointer">Mentorship</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Email:</span>
                </div>
                <a
                  href="mailto:mohammedzama9024@gmail.com"
                  className="text-primary hover:text-primary/80 transition-colors text-sm break-all"
                >
                  mohammedzama9024@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 SkillTrade. All rights reserved.
              </div>
              <div className="text-gray-400 text-sm">
                Built with ❤️ by <span className="text-primary font-semibold">Mohammed Shahzaman</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

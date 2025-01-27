import React, { useEffect, useState } from "react";
import { ArrowRight, Eye, Brain, Tablet } from "lucide-react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const featuresSection = document.getElementById("features-section");
      if (featuresSection) {
        const rect = featuresSection.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white font-sans">
  {/* VEDA Heading */}
  <header className="absolute top-0 left-1/2 transform -translate-x-1/2 py-4 z-10">
    <h2 className="text-3xl font-semibold text-white" style={{ fontFamily: "Times New Roman" }}>
      VEDA
    </h2>
  </header>

  {/* Header Section with Background Image */}
  <header
    className="relative min-h-screen flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: "url('/spotlight1.png')" }} // Update the path to your image
  >
    {/* Optional Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

    {/* Content */}
    <div className="relative z-10">
      <h1 className="text-6xl md:text-8xl font-serif text-white tracking-wide drop-shadow-lg whitespace-nowrap">
        Revolutionizing Accessibility
      </h1>
      <p className="mt-4 text-xl md:text-2xl font-serif text-gray-300">With Cutting-Edge Technology</p>
      <button
        className="mt-8 px-6 py-3 rounded-full text-xl font-semibold bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}
      >
        Join the Pre-Order Waitlist
      </button>
    </div>
  </header>



      {/* Welcome Section */}
<section className="py-24 bg-black text-white text-center">
  <h1
    className="text-3xl font-semibold mb-6"
    style={{ fontFamily: "Times New Roman" }}
  >
    Welcome to VEDA
  </h1>
  <p
    className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
    style={{ lineHeight: "1.8" }} // Increased line height for better readability
  >
    Welcome to VEDA — Vision Enabled Digital Assistant, where accessibility meets innovation.
    We’re reimagining assistive technology for individuals with visual and hearing
    impairments, paving the way for an inclusive future. Our groundbreaking solutions combine
    advanced AI with tactile precision, empowering users to experience their surroundings like
    never before.
  </p>
</section>


     {/* The Future of Accessibility Section */}
<section className="py-24 bg-black text-white">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-4">
    <div className="md:w-1/2">
      <h2
        className="text-3xl font-semibold text-blue-600 mb-4"
        style={{ fontFamily: "Times New Roman" }}
      >
        The Future of Accessibility Is Here
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed">
        Experience the power of real-time object detection and Braille output, designed to
        enhance independence and safety. At VEDA, we believe accessibility is a right, not a
        privilege, and we’re making it happen with revolutionary technology that bridges the
        gap between limitations and possibilities.
      </p>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <div
        className="bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-600/30 transition-all transform w-full max-w-sm rounded-xl overflow-hidden"
        style={{
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/pad.webp"
          alt="Braille Pad"
          className="rounded-lg shadow-lg transform transition-all"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  </div>
</section>



      {/* Updated Features Grid with full-screen height and improved styling */}
<section id="features-section" className="min-h-screen flex items-center bg-black/95 py-24">
  <div className="container mx-auto px-7">
    <h2 className="text-3xl font-semibold text-center mb-16 bg-gradient-to-r from-blue-700 to-indigo-600 text-transparent bg-clip-text" >
      Revolutionary Tactile Technology
    </h2>
    <div className="grid md:grid-cols-3 gap-12">
      <div
        className={`p-8 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-600/30 transition-all transform min-h-[300px] ${
          isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        } transition-all duration-1000 delay-0`}
      >
        <Eye className="w-16 h-16 text-teal-400 mb-6" />
        <p className="text-gray-400 text-center">A Glimpse Into the Extraordinary</p>
      </div>
      <div
        className={`p-8 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-600/30 transition-all transform min-h-[300px] ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        } transition-all duration-1000 delay-300`}
      >
        <Brain className="w-16 h-16 text-teal-400 mb-6" />
        <p className="text-gray-400 text-center">AI-Powered Insight that opens a new realm of understanding.</p>
      </div>
      <div
        className={`p-8 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-b from-gray-900 to-black border border-gray-800 hover:border-blue-600/30 transition-all transform min-h-[300px] ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-all duration-1000 delay-600`}
      >
        <Tablet className="w-16 h-16 text-teal-400 mb-6" />
        <p className="text-gray-400 text-center">A sleek, futuristic design built to inspire and empower</p>
      </div>
    </div>
  </div>
</section>


      {/* Launch Section */}
      <section
        className="py-24 bg-cover bg-center text-center text-white"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      >
        <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: "Times New Roman" }}>
          Launching Mid 2025
        </h2>
        <p className="text-lg mb-8" style={{ fontFamily: "Times New Roman" }}>
          Get ready for a game-changer.
        </p>
        <div className="h-1 bg-[#fff] w-20 mx-auto animate-pulse"></div>
      </section>

      {/* Join Waitlist Section */}
      <section className="py-24 bg-black text-center text-white">
        <h2 className="text-4xl font-bold mb-8" style={{ fontFamily: "Times New Roman" }}>
          Join the Pre-Order Waitlist
        </h2>
        <form className="flex flex-row justify-center items-center space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-gray-800 shadow-lg focus:ring-2 focus:ring-blue-600 w-2/3"
            style={{ fontFamily: "Times New Roman" }}
          />
          <button
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-indigo-600 text-white hover:from-indigo-600 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            style={{ fontFamily: "Times New Roman" }}
          >
            Sign Up Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-8 bg-black text-white">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          <img src="/logo.png" alt="VEDA Logo" className="h-10" />
          <p style={{ fontFamily: "Times New Roman" }}>
            Contact Us: veda.accessibility@gmail.com | Website: vedaatech.com
          </p>
          <p style={{ fontFamily: "Times New Roman" }}>© 2025 VEDA. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

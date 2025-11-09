import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 text-white overflow-hidden">
      {/* 🌫️ Glassy Navbar */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/10 border border-white/20 text-gray-200 rounded-full px-8 py-3 flex items-center justify-between w-[90%] max-w-4xl shadow-lg z-20">
        <h1 className="text-lg font-semibold tracking-wide text-white/90">
          Puncture Proof
        </h1>
        <ul className="flex gap-8 text-sm md:text-base">
          {["Home", "Services", "Testimonials", "Contact"].map((link) => (
            <li
              key={link}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>

      {/* 🖼️ Hero Image Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/images/hero.png"
          alt="Puncture Proof Logo Background"
          className="w-[600px] md:w-[800px] opacity-45 object-contain pointer-events-none select-none"
        />
      </div>

      {/* 🌟 Hero Content (above the logo image) */}
      <div className="relative z-10 mt-24 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-400 drop-shadow-[0_2px_10px_rgba(0,255,255,0.2)]">
          May these tires<br />guide you on your path
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl mx-auto">
          Drive with peace of mind using cutting-edge puncture protection and comfort.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 text-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300">
            Get Started
          </button>
          <button className="px-8 py-3 text-lg bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

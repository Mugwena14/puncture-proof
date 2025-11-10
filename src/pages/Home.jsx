import React, { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 text-white overflow-hidden">
      {/* 🌫️ Glassy Navbar */}
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 backdrop-blur-md bg-white/10 border border-white/20 text-gray-200 rounded-full px-6 py-3 flex items-center justify-between w-[90%] max-w-4xl shadow-lg z-30">
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide text-white/90">
          Puncture Proof
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-sm md:text-base">
          {["Home", "Services", "Testimonials", "Contact"].map((link) => (
            <li
              key={link}
              className="hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/90 hover:text-cyan-400 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* 🧊 Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%] bg-gray-900/95 backdrop-blur-xl border-l border-white/10 shadow-2xl transform transition-transform duration-500 ease-in-out z-40 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between py-12 px-8">
          <ul className="space-y-6 text-lg">
            {["Home", "Services", "Testimonials", "Contact"].map((link) => (
              <li
                key={link}
                className="hover:text-cyan-400 transition-colors cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </li>
            ))}
          </ul>

          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-gray-400 hover:text-cyan-400 transition"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="mt-auto text-sm text-gray-500 border-t border-gray-700 pt-6">
            © {new Date().getFullYear()} Puncture Proof
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity"
        />
      )}

      {/* 🖼️ Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src="/images/hero.png"
          alt="Puncture Proof Logo Background"
          className="w-[600px] md:w-[800px] opacity-45 object-contain pointer-events-none select-none"
        />
      </div>

      {/* 🌟 Hero Content */}
      <div className="relative z-10 mt-24 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-200 to-gray-400 drop-shadow-[0_2px_10px_rgba(0,255,255,0.2)]">
          May these tires<br />guide you on your path
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl mx-auto">
          Drive with peace of mind using cutting-edge puncture protection and comfort.
        </p>

        {/* 🌐 Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md px-4">
          <button className="w-full sm:w-auto px-8 py-3 text-lg bg-white/10 backdrop-blur-lg border border-white/20 rounded-full text-white hover:bg-cyan-500/20 hover:border-cyan-400 transition-all duration-300">
            Get Started
          </button>
          <button className="w-full sm:w-auto px-8 py-3 text-lg bg-cyan-500 text-white rounded-full hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;

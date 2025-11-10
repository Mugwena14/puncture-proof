import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
  Wrench,
  Package,
  Shield,
  Truck,
  Star,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Invalid email");
      return;
    }

    alert("Thank you! We'll be in touch soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="py-24 px-4"
      style={{
        background: "linear-gradient(to bottom, #171717 0%, #0a0a0a 25%, #0a0a0a 100%)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 🧭 Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p>Johannesburg, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p>+27 81 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>info@panctureproof.co.za</p>
                </div>
              </div>
            </div>
          </div>

          {/* 📬 Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white"
            />
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white min-h-[150px]"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

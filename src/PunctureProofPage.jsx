import { useState } from "react";
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

const PunctureProofPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

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

  const services = [
    {
      icon: Wrench,
      title: "Professional Installation",
      description:
        "Expert technicians ensure perfect fitment and optimal performance for your vehicle.",
      image:
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    },
    {
      icon: Package,
      title: "Premium Tire Selection",
      description:
        "Wide range of Pancture Proof tires for all vehicle types and driving conditions.",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    },
    {
      icon: Shield,
      title: "Lifetime Protection Plan",
      description:
        "Comprehensive warranty coverage and 24/7 roadside assistance for complete peace of mind.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    },
    {
      icon: Truck,
      title: "Mobile Service",
      description:
        "Convenient at-home or office installation service available throughout Johannesburg.",
      image:
        "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&q=80",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daily Commuter",
      content:
        "I've been using Pancture Proof tires for six months now, and I haven't had a single issue. The peace of mind is worth every penny.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Delivery Driver",
      content:
        "As someone who drives 200+ km daily, the noise reduction is a game changer. My ride is so much quieter now.",
      rating: 5,
    },
    {
      name: "Emily Botha",
      role: "Family Driver",
      content:
        "Safety is my priority with kids in the car. These tires give me confidence on every journey, rain or shine.",
      rating: 5,
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <div className="overflow-hidden text-white bg-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a1a3a] text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">Pancture Proof</h1>
        <p className="text-2xl md:text-3xl text-gray-300 mb-12">
          Drive with peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 text-lg bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Learn More <ArrowRight className="inline-block ml-2" />
          </button>
          <button className="px-8 py-4 text-lg border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Get Protected Today
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Innovation Meets Safety
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Pancture Proof technology revolutionizes tire safety with
            cutting-edge puncture protection that keeps you moving forward.
          </p>
          <p className="text-lg md:text-xl text-gray-300">
            Our advanced materials not only shield against punctures but also
            reduce road noise, delivering a quieter, more comfortable experience.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-[#0d0d0d]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Our Services
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Comprehensive solutions designed to keep you safe on the road
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 bg-blue-600/80 p-2 rounded-md">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-[#111827]">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Trusted by Drivers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gray-900 border border-gray-700 p-6 rounded-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.content}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Get In Touch
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
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

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white"
              />
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
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

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 py-12 px-4 text-gray-400">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Pancture Proof
              </h3>
              <p>Drive with peace of mind.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About Us", "Features", "Testimonials", "Contact"].map(
                  (link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-blue-500 transition">
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h4>
              <div className="flex gap-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="p-2 rounded-full bg-gray-800 hover:bg-blue-600 text-white transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center">
            <p>&copy; {currentYear} Pancture Proof. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PunctureProofPage;

import React from "react";
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

const Services = () => {
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
        "Wide range of Puncture Proof tires for all vehicle types and driving conditions.",
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

  return (
    <section className="relative py-24 px-4 text-white">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Our Services
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Comprehensive solutions designed to keep you safe on the road
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.05)] hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]"
            >
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute bottom-4 left-4 bg-cyan-500/80 p-2 rounded-md backdrop-blur-md">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white/90">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

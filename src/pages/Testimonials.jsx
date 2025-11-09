import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Daily Commuter",
      content:
        "I've been using Puncture Proof tires for six months now, and I haven't had a single issue. The peace of mind is worth every penny.",
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

  return (
    <section className="relative py-24 px-4 text-white">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.15)]">
          Trusted by Drivers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,255,255,0.2)]"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_5px_rgba(255,255,0,0.3)]"
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                “{t.content}”
              </p>
              <div>
                <p className="font-semibold text-white/90">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

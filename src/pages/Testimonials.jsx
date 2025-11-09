import React from 'react'
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

const Testimonials = () => {

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


return (
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
  )
}

export default Testimonials
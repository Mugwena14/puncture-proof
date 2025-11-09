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
  
return (
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
  )
}

export default Services
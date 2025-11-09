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

const Footer = () => {

const currentYear = new Date().getFullYear();

return (
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
)
}

export default Footer
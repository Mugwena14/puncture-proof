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

const Home = () => {
  return (
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
  )
}

export default Home
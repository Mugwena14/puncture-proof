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

const About = () => {
  return (
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
  )
}

export default About
import { useState } from "react";
import LightRays from "./LightRays";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";

const PunctureProofPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const currentYear = new Date().getFullYear();

    return (
        <div className="relative overflow-hidden text-white bg-[#0a0a0a]">
        {/* 🔥 Fixed LightRays Background */}
        <div
            style={{
            position: "fixed",
            inset: 0,
            zIndex: 0,
            pointerEvents: "none", 
            }}
        >
            <LightRays
            raysOrigin="top-center"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
            />
        </div>

        {/* 🔹 Main Page Content */}
        <div className="relative z-10">
            <Home />
            <About />
            <Services />
            <Testimonials />
            <Contact />
            <Footer year={currentYear} />
        </div>
        </div>
    );
};

export default PunctureProofPage;

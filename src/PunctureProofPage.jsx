import { useState } from "react";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./pages/Footer.jsx";

const PunctureProofPage = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className="overflow-hidden text-white bg-[#0a0a0a]">
        {/* Hero Section */}
        <Home />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer year={currentYear} />
        </div>
    );
};

export default PunctureProofPage;

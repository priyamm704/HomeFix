import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Pservices from "../components/Pservices";
import Howitw from "../components/Howitw";
import Why from "../components/Why";
import Ready from "../components/Ready";
import Footer from "../components/Footer";

export default function LandingPage(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Pservices />
            <Howitw />
            <Why />
            <Ready />
            <Footer />
        </div>
    )
}
import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import aboutHero from "../images/aboutHero.jpg";

export default function AboutPage() {
    return (
        <>
            <Hero img={aboutHero} />
            <Info />
        </>
    );
}
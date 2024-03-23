import React from "react";
import Hero from "./hero";
import About from "./about";
import Portfolio from "./Portfolio";
import Contact from "./contact";

export default function Home() {
    return (
        <div>
            <Hero />
            <About />
            <Portfolio />
            <Contact />
        </div>
    );
}

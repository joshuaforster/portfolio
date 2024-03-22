import React from "react";
import Hero from "./hero";
import About from "./about";
import Portfolio from "./Portfolio";
import Contact from "./contact";

export default function Home() {
    return (
        <div>
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="portfolio"><Portfolio /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
}

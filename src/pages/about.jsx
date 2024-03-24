import React from "react";

export default function About() {
  return (
    <section className="font-sans text-gray-800 flex flex-col md:flex-row px-4 md:px-12 lg:px-24 lg:gap-8 py-8 max-w-screen-2xl m-auto">
        <div className="w-full lg:w-1/2">
          <div>
            {/* Bold and larger font for section titles */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            {/* Regular font for paragraph text */}
            <p className="mb-6">
              I am a Front-End Developer with a unique background. Starting my career with a BSc in Nutrition, I ventured into the world of health and fitness, which led to my role at Norfolk Health and Fitness. Here, my fascination with web development and design was rekindled, guiding me towards an MA in Communication Design.
            </p>
            <p className="mb-6">
              Armed with skills in HTML, CSS, JavaScript, React, Typescript, and Tailwind, I craft accessible, functional, and visually appealing web applications. My journey from nutrition to technology reflects my ability to adapt and thrive in diverse environments, making me a versatile asset to any team.
            </p>
          </div>

          <div className="mt-8">
            {/* Maintain consistency with title styling */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Interests</h2>
            {/* Stylish list with custom bullets */}
            <ul className="list-disc list-inside space-y-2">
              <li>⚽️ Football - Arsenal FC supporter</li>
              <li>👨🏽‍🍳 Cooking - Enjoy experimenting with unique ingredients from around the world</li>
              <li>👕 Charity shopping - Enjoys finding hidden treasures</li>
              <li>🏋🏽 Strength training</li>
            </ul>
          </div>
        </div>


        <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4">
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
            <div><img src="/html.png" alt="" className="h-12 w-auto"/></div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
            <div><img src="/css.png" alt="" className="h-12 w-auto"/></div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
            <div><img src="/js.png" alt="" className="h-12 w-auto"/></div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
            <div><img src="/typescript.svg.png" alt="" className="h-12 w-auto"/></div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
          <div><img src="/Tailwind CSS.png" alt="" className="h-12 w-auto"/></div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
            <div><img src="/git.png" alt="" className="h-12 w-auto"/></div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
            <div><img src="/github.png" alt="" className="h-12 w-auto"/></div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
            <div><img src="/firebase.png" alt="" className="h-12 w-auto"/></div>
          </div>
          <div className="bg-gray-50 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
            <div><img src="/react.png" alt="" className="h-12 w-auto"/></div>
          </div>
        </div>
   
        
    </section>
  );
}


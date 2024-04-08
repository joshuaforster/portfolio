import React from "react";

const technologies = [
  { name: 'HTML', imagePath: '/html.png' },
  { name: 'CSS', imagePath: '/css.png' },
  { name: 'JavaScript', imagePath: '/js.png' },
  { name: 'TypeScript', imagePath: '/typescript.svg.png' },
  { name: 'Tailwind CSS', imagePath: '/Tailwind CSS.png' },
  { name: 'Git', imagePath: '/git.png' },
  { name: 'GitHub', imagePath: '/github.png' },
  { name: 'Firebase', imagePath: '/firebase.png' },
  { name: 'React', imagePath: '/react.png' },
];

export default function About() {
  return (
    <section className="flex justify-center items-center  dark:bg-gray-900">
      <div className="font-sans text-gray-800 dark:text-white flex flex-col md:flex-row px-4 md:px-12 lg:px-24 lg:gap-8  py-8 max-w-screen-2xl m-auto">
          <div className="w-full lg:w-1/2 ">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">About Me</h2>
              <p className="mb-6  dark:text-white">
                I am a Front-End Developer with a unique background. Starting my career with a BSc in Nutrition, I ventured into the world of health and fitness, which led to my role at Norfolk Health and Fitness. Here, my fascination with web development and design was rekindled, guiding me towards an MA in Communication Design.
              </p>
              <p className="mb-6  dark:text-white">
                Armed with skills in HTML, CSS, JavaScript, React, Typescript, and Tailwind, I craft accessible, functional, and visually appealing web applications. My journey from nutrition to technology reflects my ability to adapt and thrive in diverse environments, making me a versatile asset to any team.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Interests</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>⚽️ Football - Arsenal FC supporter</li>
                <li>👨🏽‍🍳 Cooking - Enjoy experimenting with unique ingredients from around the world</li>
                <li>👕 Charity shopping - Enjoys finding hidden treasures</li>
                <li>🏋🏽 Strength training</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto px-4">
            {technologies.map(technology => (
              <div key={technology.name} className="bg-gray-50 dark:bg-gray-800 shadow-lg rounded-md flex justify-center items-center p-4 m-2">
                <img src={technology.imagePath} alt={technology.name} className="h-12 w-auto"/>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../portfoliodata";

export default function Portfolio() {
    const portfolio = projects.map((project) => (
      <div key={project.id} className="my-8 lg:flex overflow-hidden bg-white dark:bg-gray-800 rounded-lg">
        <div className="lg:w-1/2 p-4">
          <img src={project.image} alt={project.name} className="w-full h-auto lg:w-4/5 mx-auto rounded border-2 border-gray-300 dark:border-gray-600"/>
        </div>
        <div className="lg:w-1/2 p-4 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold my-2 lg:my-4 text-gray-900 dark:text-white">{project.title}</h2>
          <p className="mb-4 text-gray-700 dark:text-gray-300">
            {project.shortDescription.split('\n').map((line, index, arr) => (
              <React.Fragment key={index}>
                {line}{index < arr.length - 1 ? <br /> : ''}
              </React.Fragment>
            ))}
          </p>
          <Link to={`/portfolio/${project.id}`} aria-label={`View details for the ${project.title} project`}>
            <i className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-150 ease-in-out dark:bg-blue-600 dark:hover:bg-blue-800">{project.buttonText}</i>
          </Link>
        </div>
      </div>
    ));

    return (
        <section id="portfolio" className="flex justify-center items-center min-h-screen bg-white dark:bg-gray-800">
            <div className="mx-auto px-4 md:px-12 lg:px-24 py-8 max-w-screen-2xl">
                <h1 className="text-center text-3xl lg:text-4xl font-bold mb-12 text-gray-900 dark:text-white">Projects</h1>
                {portfolio}
            </div>
        </section>
    );
}

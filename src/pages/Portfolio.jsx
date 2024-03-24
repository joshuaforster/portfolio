import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../portfoliodata";

export default function Portfolio() {
    const portfolio = projects.map((project) => (
        <div key={project.id} className="my-8 lg:flex  overflow-hidden">
            <Link to={`/portfolio/${project.id}`} aria-label={`View details for the ${project.title} project`} className="lg:flex w-full items-center text-center lg:text-left">
                <div className="lg:w-1/2">
                    <img src={project.image} alt={project.name} className="w-full h-auto lg:w-4/5 mx-auto rounded-lg m-4 shadow-2xl lg:rounded-none lg:rounded-l-lg" />
                </div>
                <div className="lg:w-1/2 p-4 lg:p-8">
                    <h2 className="text-2xl lg:text-3xl font-bold my-2 lg:my-4">{project.title}</h2>
                    <p className="mb-4 text-gray-700">
                        {project.shortDescription.split('\n').map((line, index, arr) => (
                            <React.Fragment key={index}>
                                {line}{index < arr.length - 1 ? <br /> : ''}
                            </React.Fragment>
                        ))}
                    </p>
                    <i className="text-customRed-100 font-semibold">{project.buttonText}</i>
                </div>
            </Link>
        </div>
    ));

    return (
        <div className="mx-auto px-4 md:px-12 lg:px-24 py-8 max-w-screen-2xl">
            <h1 className="text-center text-3xl lg:text-4xl font-bold mb-12">Projects</h1>
            {portfolio}
        </div>
    );
}

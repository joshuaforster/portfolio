import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../portfoliodata";

export default function PortfolioDetail() {
  const params = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find((project) => project.id === params.id);
    setProject(foundProject);
  }, [params.id]);

  const productDescription = project.description.split('\n').map((line, index, arr) =>(
    <React.Fragment key={index}>
      {line} {index < arr.length - 1? <br /> : ''}
    </React.Fragment>
  ))

  return (
    <div className="flex justify-center text-center pt-8 pb-16 bg-gray-100 min-h-screen">
      <div className='w-full max-w-4xl mx-auto px-4 sm:px-12 lg:px-24'>
        <h1 className="text-4xl font-bold text-center my-8">{project.title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{productDescription}</p>
        <div className="flex justify-center my-4">
          <img 
            src={project.image} 
            alt={project.name} 
            className="max-w-full h-auto rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105" 
          />
        </div>
        {/* Additional project details could go here */}
      </div>
    </div>
  );
}

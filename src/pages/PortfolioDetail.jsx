import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../portfoliodata";

export default function PortfolioDetail() {
  const params = useParams();
  const [project, setProject] = React.useState(null);

React.useEffect(() => {
  const projectID = Number(params.id);
  const foundProject = projects.find((project) => project.id === projectID);
  setProject(foundProject);
}, [params]);

if (!project) {
  return <p>Loading...</p>;
}

const productDescription = project.description.split('\n').map((line, index, arr) =>(
  <React.Fragment key={index}>
    {line} {index < arr.length - 1? <br /> : ''}
  </React.Fragment>
));

const technologies = project.tech ? (
  <div className="border-b border-gray-300 dark:bg-gray-700 dark:border-gray-600 shadow-lg mb-4">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8 px-4">
      {project.tech.map((technology, index) => (
        <li key={index} className="font-bold text-gray-900 dark:text-white before:content-['•'] before:mr-2 before:text-blue-500">
          {technology}
        </li>
      ))}
    </ul>
  </div>
) : <p className="text-gray-700 dark:text-white">Nothing to see here.</p>;

return (
  <div className="flex justify-center pt-8 pb-16 bg-gray-100 dark:bg-gray-800 min-h-screen">
    <div className='w-full max-w-4xl mx-auto px-4 sm:px-12 lg:px-24'>
      <h1 className="text-4xl font-bold text-center my-8 text-gray-900 dark:text-white">{project.title}</h1>
      <div className="flex justify-center my-4">
        <img 
          src={project.image} 
          alt={project.name} 
          className="max-w-full h-auto rounded-lg shadow-lg" 
        />
      </div>
      <p className="text-lg text-gray-700 dark:text-white leading-relaxed mb-8">{productDescription}</p>
      <h2 className="dark:text-white">Technologies</h2>
      {technologies}
      <Link
        to={project.url}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition duration-150 ease-in-out"
      >
        Live Link
      </Link>

      {/* Additional project details could go here */}
    </div>
  </div>
);
}

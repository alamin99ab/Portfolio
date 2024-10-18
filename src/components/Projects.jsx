import React, { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    title: 'I HAVE NO PROJECT RIGHT NOW',
    description: '',
    link: '',
    image: '', 
    technologies: '',
  },
];

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) => 
      (prevIndex - 1 + projects.length) % projects.length
    );
  };

  const { title, description, link, image, technologies } = projects[currentProjectIndex];

  return (
    <div className="min-h-screen bg-gray-900 p-6 md:p-10 flex flex-col items-center" id="projects">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8">My Projects</h1>
      
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-4 md:p-6 flex flex-col md:flex-row items-center">
        
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <img 
            src={image} 
            alt={title} 
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-between p-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-yellow-400 mb-2">{title}</h2>
            <p className="text-sm md:text-lg text-gray-300 mb-4">{description}</p>
            <p className="text-gray-400 italic mb-4">Technologies Used: {technologies}</p>
          </div>

          <div className="flex justify-between mt-4">
            <button 
              onClick={handlePrevProject}
              className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <ArrowLeftIcon className="w-6 h-6 text-white" />
            </button>
            <button 
              onClick={handleNextProject}
              className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <ArrowRightIcon className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

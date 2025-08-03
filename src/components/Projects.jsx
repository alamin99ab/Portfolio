import React, { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Onimo AI - AI-Powered Chat Application',
    description: '"Onimo AI" is an intelligent, full-stack chat application designed to overcome the limitations of conventional chatbots. Built on a microservice architecture, it ensures security, scalability, and high performance.',
    link: 'https://onimo-frontend.vercel.app/', 
    image: 'https://i.postimg.cc/fT3Hs5Cs/Screenshot-2025-08-02-095703.png', 
    technologies: 'React.js, Node.js, Express.js, Python, Flask, MongoDB, Tailwind CSS',
  },
  {
    title: 'Laugh Anytime, Anywhere!',
    description: 'Enjoy a collection of hilarious jokes at Funny Jokes Hub! This site is your go-to destination for endless laughter. Visit now and brighten your day with the best jokes! 😆🎭',
    link: 'https://alamin99ab.github.io/ALAMIN/',
    image: 'https://i.postimg.cc/NjYv89qm/Screenshot-2025-02-19-185617.png',
    technologies: 'HTML, CSS, JavaScript',
  },
  {
    title: 'Business Web Solutions – Elevate Your Online Presence',
    description: 'Business Web Solutions offers cutting-edge website design and development services to help businesses thrive online. Our expertly crafted solutions ensure a seamless user experience and responsive design.',
    link: 'https://business-websie.vercel.app/',
    image: 'https://i.ibb.co/zVC61YDk/Screenshot-2025-02-19-185753.png',
    technologies: 'React.js, Tailwind CSS',
  },
    {
    title: 'PGP SECRURE MAIL',
    description: 'Secure Mail & SMS System is a secure communication solution that allows users to send and receive encrypted emails and messages using PGP encryption',
    link: 'https://pgp-frontend-five.vercel.app/',
    image: 'https://i.postimg.cc/MXJ8kYHm/Screenshot-2025-08-03-154945.png',
    technologies: 'React.js, Tailwind CSS,Node.js (Express),MongoDB,PGP Encryption',
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

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePrevProject}
              className="bg-gray-700 hover:bg-gray-600 rounded-full p-2"
            >
              <ArrowLeftIcon className="w-6 h-6 text-white" />
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold"
            >
              Live Preview
            </a>
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
import React, { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    title: 'Onimo AI - AI-Powered Chat Application',
    description: '"Onimo AI" is an intelligent, full-stack chat application designed to overcome the limitations of conventional chatbots. Built on a microservice architecture, it ensures security, scalability, and high performance.',
    link: 'https://onimo-frontend.vercel.app/', 
    image: 'https://i.postimg.cc/fT3Hs5Cs/Screenshot-2025-08-02-095703.png', 
    technologies: ['React.js', 'Node.js', 'Express.js', 'Python', 'Flask', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'Laugh Anytime, Anywhere!',
    description: 'Enjoy a collection of hilarious jokes at Funny Jokes Hub! This site is your go-to destination for endless laughter. Visit now and brighten your day with the best jokes! 😆🎭',
    link: 'https://alamin99ab.github.io/ALAMIN/',
    image: 'https://i.postimg.cc/NjYv89qm/Screenshot-2025-02-19-185617.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Business Web Solutions – Elevate Your Online Presence',
    description: 'Business Web Solutions offers cutting-edge website design and development services to help businesses thrive online. Our expertly crafted solutions ensure a seamless user experience and responsive design.',
    link: 'https://business-websie.vercel.app/',
    image: 'https://i.ibb.co/zVC61YDk/Screenshot-2025-02-19-185753.png',
    technologies: ['React.js', 'Tailwind CSS'],
  },
    {
    title: 'PGP SECRURE MAIL',
    description: 'Secure Mail & SMS System is a secure communication solution that allows users to send and receive encrypted emails and messages using PGP encryption',
    link: 'https://pgp-frontend-five.vercel.app/',
    image: 'https://i.postimg.cc/MXJ8kYHm/Screenshot-2025-08-03-154945.png',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js (Express)', 'MongoDB', 'PGP Encryption'],
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
    <div className="min-h-screen bg-gray-900 p-6 md:p-10 flex flex-col items-center justify-center" id="projects">
      <h1 className="text-4xl font-extrabold text-white mb-10 border-b-4 border-yellow-400 pb-2">My Featured Projects 🚀</h1>
      
      {/* Main Project Card Container */}
      <div className="w-full max-w-5xl bg-gray-800/70 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl transition duration-500 hover:shadow-yellow-500/30 border border-gray-700/50">
        
        <div className="flex flex-col md:flex-row gap-6 items-center">
          
          {/* Project Image */}
          <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
            <img
              key={currentProjectIndex}
              src={image}
              alt={title}
              className="w-full max-w-sm h-auto aspect-video object-cover rounded-xl shadow-xl border-4 border-yellow-400 transition duration-500 transform hover:scale-[1.02]"
            />
          </div>

          {/* Project Details */}
          <div 
                key={`details-${currentProjectIndex}`}
                className="w-full md:w-1/2 lg:w-3/5 flex flex-col justify-between p-2 animate-slide-in"
            >
            <div>
              <h2 className="text-3xl font-extrabold text-yellow-400 mb-3">{title}</h2>
              <p className="text-lg text-gray-200 mb-4 leading-relaxed">{description}</p>
            </div>

            {/* Technologies Used Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="text-sm font-semibold text-gray-400 mr-2">Built with:</span>
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-400/20 text-yellow-300 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Navigation and Link Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrevProject}
                className="bg-gray-700 hover:bg-yellow-400 transition duration-300 rounded-full p-3 shadow-lg group"
              >
                <ArrowLeftIcon className="w-5 h-5 text-white group-hover:text-gray-900" />
              </button>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full text-base font-bold shadow-xl transition duration-300 transform hover:scale-105"
              >
                Live Preview
              </a>
              <button
                onClick={handleNextProject}
                className="bg-gray-700 hover:bg-yellow-400 transition duration-300 rounded-full p-3 shadow-lg group"
              >
                <ArrowRightIcon className="w-5 h-5 text-white group-hover:text-gray-900" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';  // Import framer-motion

const skillsData = [
  { name: 'HTML', level: 'Intermediate', image: '../src/assets/html.png' },
  { name: 'CSS', level: 'Intermediate', image: '../src/assets/css.png' },
  { name: 'JavaScript', level: 'Beginner', image: '../src/assets/js.png' },
  { name: 'React.js', level: 'Beginner', image: '../src/assets/react.png' },
  { name: 'Node.js', level: 'Beginner', image: '../src/assets/nodejs.png' },
  { name: 'Express.js', level: 'Beginner', image: '../src/assets/express.png' },
  { name: 'MongoDB', level: 'Beginner', image: '../src/assets/mongodb.png' },
  { name: 'Tailwind CSS', level: 'Intermediate', image: '../src/assets/tailwind.png' },
  { name: 'GIT Git Hub', level: 'Intermediate', image: '../src/assets/git.png' },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-10 flex flex-col items-center" id="skills">
      <h1 className="text-4xl font-bold text-white mb-8">My Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Slide left for even indexes, right for odd
            whileInView={{ opacity: 1, x: 0 }} // Move into view
            transition={{ duration: 0.6, ease: "easeInOut" }} // Adjust duration and easing
            viewport={{ once: true }} // Only animate once when in view
          >
            <div className="flex flex-col items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-4 transition duration-300 transform hover:scale-110" 
              />
              <h2 className="text-2xl font-semibold text-yellow-400 mb-2">{skill.name}</h2>
              <p className="text-gray-300">Level: {skill.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

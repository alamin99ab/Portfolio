import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', level: 'Intermediate', image: 'https://i.postimg.cc/FKVzJNWd/html.png' },
  { name: 'CSS', level: 'Intermediate', image: 'https://i.postimg.cc/L5XJpwVq/css.png' },
  { name: 'JavaScript', level: 'Beginner', image: 'https://i.postimg.cc/C1M1GXXv/js.png' },
  { name: 'React.js', level: 'Beginner', image: 'https://i.postimg.cc/GtVm122N/react.png' },
  { name: 'Node.js', level: 'Beginner', image: 'https://i.postimg.cc/d3LVXdqr/nodejs.png' },
  { name: 'Tailwind CSS', level: 'Intermediate', image: 'https://i.postimg.cc/ryPm4hJJ/tailwind.png' },
  { name: 'GIT Git Hub', level: 'Intermediate', image: 'https://i.postimg.cc/52v6bw8m/git.png' },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6 sm:p-10 flex flex-col items-center" id="skills">
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">My Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center">
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mb-4 transition duration-300 transform hover:scale-110"
              />
              <h2 className="text-xl font-semibold text-yellow-400 mb-2">
                {skill.name}
              </h2>
              <p className="text-gray-300">Level: {skill.level}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

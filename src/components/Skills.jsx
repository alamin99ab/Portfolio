import React from 'react';
import { motion } from 'framer-motion';

// --- আইকন ইম্পোর্ট (react-icons ব্যবহার করে) ---
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaWindows, FaNetworkWired, FaTools, FaMicrosoft } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiCisco, SiComptia } from 'react-icons/si';

// --- UPDATED SKILLS DATA ARRAY (Networking First) ---
const skillsData = [
    // --- 1. Networking Skills (Technical Skils) ---
    { name: 'LAN/WAN Configure', level: 'Intermediate', icon: <FaNetworkWired className="text-blue-500" /> },
    { name: 'IP Addressing / Subnetting', level: 'Intermediate', icon: <SiCisco className="text-white" /> },
    { name: 'OSI Model / TCP/IP', level: 'Intermediate', icon: <FaNetworkWired className="text-blue-500" /> },
    { name: 'Routing / VLAN (Inter VLAN)', level: 'Intermediate', icon: <SiCisco className="text-white" /> },
    { name: 'DHCP / OSPF', level: 'Intermediate', icon: <SiCisco className="text-white" /> },
    { name: 'CCNA / MTCNA', level: 'Learning Focus', icon: <SiCisco className="text-white" /> }, // Learning Focus

    // --- 2. Hardware & Maintenance ---
    { name: 'PC Assembly / Troubleshooting', level: 'Intermediate', icon: <FaTools className="text-yellow-600" /> },
    { name: 'OS Installation', level: 'Intermediate', icon: <FaWindows className="text-cyan-500" /> },
    { name: 'CompTIA A+', level: 'Learning Focus', icon: <SiComptia className="text-orange-400" /> }, // Learning Focus

    // --- 3. Web Development / MERN Stack ---
    { name: 'Node.js', level: 'Beginner', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Express.js', level: 'Beginner', icon: <SiExpress className="text-gray-400" /> }, 
    { name: 'MongoDB', level: 'Beginner', icon: <SiMongodb className="text-green-600" /> }, 
    { name: 'React.js', level: 'Beginner', icon: <FaReact className="text-cyan-400" /> },
    
    // --- 4. Core Web & Tools ---
    { name: 'HTML', level: 'Intermediate', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS', level: 'Intermediate', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', level: 'Beginner', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Tailwind CSS', level: 'Intermediate', icon: <SiTailwindcss className="text-teal-400" /> },
    { name: 'GIT / GitHub', level: 'Intermediate', icon: <FaGitAlt className="text-red-600" /> },
    { name: 'MS Office (Word, PPT)', level: 'Expert', icon: <FaMicrosoft className="text-red-400" /> },
];
// ------------------------------------

const Skills = () => {
    return (
        <div className="min-h-screen bg-gray-900 p-6 sm:p-10 flex flex-col items-center" id="skills">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">My Skills 🛠️</h1>
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
                            {/* Icon rendering using skill.icon */}
                            <div className="w-16 h-16 mb-4 flex items-center justify-center text-4xl transition duration-300 transform hover:scale-110">
                                {skill.icon}
                            </div>
                            <h2 className="text-xl font-semibold text-yellow-400 mb-2 text-center">
                                {skill.name}
                            </h2>
                            <p className="text-gray-300 text-center">Level: **{skill.level}**</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
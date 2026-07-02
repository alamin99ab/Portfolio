import React from 'react';
import { motion } from 'framer-motion';

// --- Icon imports from react-icons ---
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
    FaGitAlt, FaWindows, FaNetworkWired, FaTools, FaMicrosoft,
    FaServer, FaTerminal
} from 'react-icons/fa';
import { 
    SiTailwindcss, SiMongodb, SiExpress, SiCisco, SiComptia,
    SiVmware
} from 'react-icons/si';
// Note: GiNetworkBars or GiRouter not imported because they don't exist

// --- Skills data with category ---
const skillsData = [
    // ---------- Networking ----------
    { 
        name: 'LAN/WAN Configure', 
        level: 'Intermediate', 
        icon: <FaNetworkWired className="text-blue-400" />,
        category: 'Networking'
    },
    { 
        name: 'IP Addressing / Subnetting', 
        level: 'Intermediate', 
        icon: <SiCisco className="text-cyan-300" />,
        category: 'Networking'
    },
    { 
        name: 'OSI Model / TCP/IP', 
        level: 'Intermediate', 
        icon: <FaNetworkWired className="text-blue-400" />,
        category: 'Networking'
    },
    { 
        name: 'Routing / VLAN (Inter VLAN)', 
        level: 'Intermediate', 
        icon: <SiCisco className="text-cyan-300" />,
        category: 'Networking'
    },
    { 
        name: 'DHCP / OSPF', 
        level: 'Intermediate', 
        icon: <SiCisco className="text-cyan-300" />,
        category: 'Networking'
    },
    { 
        name: 'CCNA / MTCNA', 
        level: 'Learning Focus', 
        icon: <SiCisco className="text-cyan-300" />,
        category: 'Networking'
    },

    // ---------- Hardware ----------
    { 
        name: 'PC Assembly / Troubleshooting', 
        level: 'Intermediate', 
        icon: <FaTools className="text-yellow-400" />,
        category: 'Hardware'
    },
    { 
        name: 'OS Installation', 
        level: 'Intermediate', 
        icon: <FaWindows className="text-cyan-400" />,
        category: 'Hardware'
    },
    { 
        name: 'CompTIA A+', 
        level: 'Learning Focus', 
        icon: <SiComptia className="text-orange-400" />,
        category: 'Hardware'
    },

    // ---------- Web Development ----------
    { 
        name: 'Node.js', 
        level: 'Beginner', 
        icon: <FaNodeJs className="text-green-400" />,
        category: 'Web Development'
    },
    { 
        name: 'Express.js', 
        level: 'Beginner', 
        icon: <SiExpress className="text-gray-300" />,
        category: 'Web Development'
    },
    { 
        name: 'MongoDB', 
        level: 'Beginner', 
        icon: <SiMongodb className="text-green-500" />,
        category: 'Web Development'
    },
    { 
        name: 'React.js', 
        level: 'Beginner', 
        icon: <FaReact className="text-cyan-400" />,
        category: 'Web Development'
    },

    // ---------- Core Web ----------
    { 
        name: 'HTML', 
        level: 'Intermediate', 
        icon: <FaHtml5 className="text-orange-500" />,
        category: 'Core Web'
    },
    { 
        name: 'CSS', 
        level: 'Intermediate', 
        icon: <FaCss3Alt className="text-blue-500" />,
        category: 'Core Web'
    },
    { 
        name: 'JavaScript', 
        level: 'Beginner', 
        icon: <FaJs className="text-yellow-400" />,
        category: 'Core Web'
    },
    { 
        name: 'Tailwind CSS', 
        level: 'Intermediate', 
        icon: <SiTailwindcss className="text-teal-400" />,
        category: 'Core Web'
    },

    // ---------- Tools (Expanded with new tools) ----------
    { 
        name: 'GIT / GitHub', 
        level: 'Intermediate', 
        icon: <FaGitAlt className="text-red-500" />,
        category: 'Tools'
    },
    { 
        name: 'MS Office (Word, PPT)', 
        level: 'Expert', 
        icon: <FaMicrosoft className="text-blue-400" />,
        category: 'Tools'
    },
    { 
        name: 'Winbox', 
        level: 'Intermediate', 
        icon: <FaServer className="text-purple-400" />,
        category: 'Tools'
    },
    { 
        name: 'PuTTY', 
        level: 'Intermediate', 
        icon: <FaTerminal className="text-green-300" />,
        category: 'Tools'
    },
    { 
        name: 'VMware', 
        level: 'Beginner', 
        icon: <SiVmware className="text-blue-300" />,
        category: 'Tools'
    },
    { 
        name: 'GNS3', 
        level: 'Beginner', 
        icon: <FaNetworkWired className="text-orange-300" />,
        category: 'Tools'
    },
];

// --- Level badge colors ---
const getLevelColor = (level) => {
    const colors = {
        'Expert': 'bg-gradient-to-r from-purple-600 to-pink-600',
        'Intermediate': 'bg-gradient-to-r from-blue-600 to-cyan-600',
        'Beginner': 'bg-gradient-to-r from-green-600 to-emerald-600',
        'Learning Focus': 'bg-gradient-to-r from-orange-600 to-red-600',
    };
    return colors[level] || 'bg-gray-600';
};

// --- Category theme colors ---
const categoryTheme = {
    'Networking': {
        bg: 'from-blue-900/20 to-cyan-900/20',
        border: 'border-blue-500/30',
        header: 'text-blue-400',
        iconBg: 'bg-blue-500/10',
        glow: 'shadow-blue-500/20'
    },
    'Hardware': {
        bg: 'from-yellow-900/20 to-orange-900/20',
        border: 'border-yellow-500/30',
        header: 'text-yellow-400',
        iconBg: 'bg-yellow-500/10',
        glow: 'shadow-yellow-500/20'
    },
    'Web Development': {
        bg: 'from-green-900/20 to-emerald-900/20',
        border: 'border-green-500/30',
        header: 'text-green-400',
        iconBg: 'bg-green-500/10',
        glow: 'shadow-green-500/20'
    },
    'Core Web': {
        bg: 'from-red-900/20 to-pink-900/20',
        border: 'border-red-500/30',
        header: 'text-red-400',
        iconBg: 'bg-red-500/10',
        glow: 'shadow-red-500/20'
    },
    'Tools': {
        bg: 'from-purple-900/20 to-indigo-900/20',
        border: 'border-purple-500/30',
        header: 'text-purple-400',
        iconBg: 'bg-purple-500/10',
        glow: 'shadow-purple-500/20'
    }
};

// ---------- Main Component ----------
const Skills = () => {
    // Group skills by category
    const grouped = skillsData.reduce((acc, skill) => {
        const cat = skill.category || 'Other';
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(skill);
        return acc;
    }, {});

    const categoryKeys = Object.keys(grouped);

    return (
        <div 
            className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 sm:px-6 relative overflow-hidden"
            id="skills"
        >
            {/* Decorative background blobs */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
            </div>

            {/* Main Header */}
            <motion.div 
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center mb-12"
            >
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                        My Skills
                    </span>
                    <span className="ml-3">🛠️</span>
                </h1>
                <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
                    Categorized expertise across networking, hardware, web development, and tools.
                </p>
            </motion.div>

            {/* Category Sections */}
            <div className="relative z-10 max-w-7xl mx-auto space-y-16">
                {categoryKeys.map((category, idx) => {
                    const skills = grouped[category];
                    const theme = categoryTheme[category] || categoryTheme['Tools'];

                    return (
                        <motion.section
                            key={category}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            className={`relative rounded-3xl p-8 bg-gradient-to-br ${theme.bg} border ${theme.border} backdrop-blur-sm transition-all hover:shadow-2xl hover:${theme.glow}`}
                        >
                            {/* Category Header with icon */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-3 rounded-xl ${theme.iconBg} border ${theme.border}`}>
                                    {category === 'Networking' && <FaNetworkWired className="text-2xl text-blue-400" />}
                                    {category === 'Hardware' && <FaTools className="text-2xl text-yellow-400" />}
                                    {category === 'Web Development' && <FaReact className="text-2xl text-cyan-400" />}
                                    {category === 'Core Web' && <FaHtml5 className="text-2xl text-orange-500" />}
                                    {category === 'Tools' && <FaGitAlt className="text-2xl text-red-500" />}
                                </div>
                                <h2 className={`text-2xl sm:text-3xl font-bold ${theme.header}`}>
                                    {category}
                                </h2>
                            </div>

                            {/* Skills Grid for this category */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        className="group flex flex-col items-center text-center p-6 rounded-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:border-yellow-400/60 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-yellow-400/10"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        viewport={{ once: true }}
                                    >
                                        {/* Icon container */}
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-700/30 to-gray-800/50 border-2 border-gray-600/50 flex items-center justify-center text-5xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-yellow-400/30 group-hover:border-yellow-400/60">
                                            {skill.icon}
                                        </div>

                                        <h3 className="mt-4 text-base font-semibold text-white group-hover:text-yellow-300 transition-colors">
                                            {skill.name}
                                        </h3>

                                        <div className={`mt-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${getLevelColor(skill.level)} shadow-md group-hover:shadow-lg transition-all`}>
                                            {skill.level}
                                        </div>

                                        <div className="w-3/4 mt-4 bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                            <motion.div 
                                                className={`h-full rounded-full ${getLevelColor(skill.level)}`}
                                                initial={{ width: 0 }}
                                                whileInView={{ 
                                                    width: skill.level === 'Expert' ? '95%' :
                                                           skill.level === 'Intermediate' ? '70%' :
                                                           skill.level === 'Beginner' ? '45%' : '25%'
                                                }}
                                                transition={{ duration: 1.2, ease: 'easeInOut' }}
                                                viewport={{ once: true }}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    );
                })}
            </div>

            {/* Footer */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="relative z-10 mt-16 text-center text-gray-500 text-sm"
            >
            </motion.div>
        </div>
    );
};

export default Skills;
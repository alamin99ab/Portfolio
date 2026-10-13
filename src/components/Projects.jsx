import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Onimo AI - AI-Powered Chat Application',
    description: 'Intelligent full-stack chat app with microservice architecture for security, scalability, and high performance.',
    link: 'https://onimo-frontend.vercel.app/',
    image: 'https://i.postimg.cc/fT3Hs5Cs/Screenshot-2025-08-02-095703.png',
    technologies: ['React.js', 'Node.js', 'Express.js', 'Python', 'Flask', 'MongoDB', 'Tailwind CSS'],
  },
  {
    title: 'Laugh Anytime, Anywhere!',
    description: 'A hilarious collection of jokes to brighten your day – simple, fun, and addictive.',
    link: 'https://alamin99ab.github.io/ALAMIN/',
    image: 'https://i.postimg.cc/NjYv89qm/Screenshot-2025-02-19-185617.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Business Web Solutions – Elevate Your Online Presence',
    description: 'Cutting-edge web design and development services with seamless user experience and responsive design.',
    link: 'https://business-websie.vercel.app/',
    image: 'https://i.ibb.co/zVC61YDk/Screenshot-2025-02-19-185753.png',
    technologies: ['React.js', 'Tailwind CSS'],
  },
  {
    title: 'PGP SECURE MAIL',
    description: 'Secure communication system using PGP encryption for sending and receiving encrypted emails and messages.',
    link: 'https://pgp-frontend-five.vercel.app/',
    image: 'https://i.postimg.cc/MXJ8kYHm/Screenshot-2025-08-03-154945.png',
    technologies: ['React.js', 'Tailwind CSS', 'Node.js (Express)', 'MongoDB', 'PGP Encryption'],
  },
];

const Projects = () => {
  return (
    <section
      className="section-shell scroll-mt-24"
      id="projects"
    >
      {/* Animated background particles/circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 text-center mb-14"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-sky-300 to-violet-300">
            Featured Projects
          </span>
          <span className="ml-3">🚀</span>
        </h1>
        <p className="text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
          A curated collection of my best work – each project demonstrates my passion for clean code and user-centric design.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-300 to-violet-300 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      {/* Projects Grid – each project as a card with hover effect */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true, margin: '-30px' }}
            className="group glass-panel rounded-3xl overflow-hidden hover:border-cyan-200/30 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col md:flex-row">
              {/* Left: Image with overlay */}
              <div className="md:w-2/5 lg:w-2/5 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 md:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent md:bg-gradient-to-r md:from-slate-950/75 md:via-transparent"></div>
                {/* Number badge */}
                <div className="absolute top-4 left-4 bg-cyan-300/10 backdrop-blur-sm px-3 py-1 rounded-full border border-cyan-200/20">
                  <span className="text-cyan-100 text-xs font-bold">
                    #{String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Right: Content */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-100 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>

                {/* Technologies with icons */}
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="text-xs text-gray-400 mr-1">🛠</span>
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-xs font-medium text-gray-200 hover:bg-cyan-300/10 hover:border-cyan-200/30 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action button */}
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-300 to-sky-200 text-slate-950 rounded-xl text-sm font-bold shadow-lg hover:shadow-cyan-300/20 transition-all duration-300 hover:scale-105"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5" />
                    Live Preview
                  </a>
                  <span className="text-xs text-gray-500">
                    {project.technologies.length} techs
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="relative z-10 mt-16 text-center text-gray-500 text-sm"
      >
        <p className="flex items-center justify-center gap-2">
          <span className="text-cyan-300">✦</span> More projects under development <span className="text-cyan-300">✦</span>
        </p>
      </motion.div>
    </section>
  );
};

export default Projects;
import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="h-screen bg-gray-900 overflow-hidden relative" id="home">
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="flex flex-col lg:flex-row h-full items-center justify-center px-6 md:px-12 text-white pt-20 relative z-10">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex space-x-4 mb-6">
            <a
              href="https://www.linkedin.com/in/md-alamin-a59840319/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a
              href="https://github.com/alamin99ab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaGithub className="w-8 h-8" />
            </a>
            <a
              href="https://www.facebook.com/alamin009j"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebook className="w-8 h-8" />
            </a>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-left">
            Hello, I'm ALAMIN
          </h1>
          <p className="text-sm md:text-lg mb-6 animate-slide-in-left-delayed">
            I'm a budding web developer passionate about crafting interactive web experiences.
            Currently, I'm learning the MERN stack to take my skills to the next level.
          </p>

          <div className="mt-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#contact"
              className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg transition duration-300"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 mr-2" />
              Say Hello
            </a>
            <a
              href="#projects"
              className="flex items-center justify-center p-2 bg-blue-500 hover:bg-blue-700 rounded-full transition duration-300"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-4">
          <div
            className="relative p-6 border-4 rounded-full bg-gray-900"
            style={{
              clipPath: 'circle(50%)',
              backgroundColor: 'inherit',
            }}
          >
            <img
              src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/480666353_1132215255299096_5349943944667895573_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFTBtYNzbChBw30qSRAhz9Gqhqb7CyDwzaqGpvsLIPDNkfr0FmYTi0hrk5SopOyEv9XGmsYymVlevSJXqVdyV-9&_nc_ohc=fru9ROoby_cQ7kNvgE4Q0g5&_nc_oc=AdgJ0u0NLAZP9G5jHfvBe_KHq8Uy7Sr3JVbtfSwEdxgWIG4ObwQyDLZ5shLtXsSCogg&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=APANLKkFlb7j4zI2adoNpOD&oh=00_AYB1QA9eD1HlYX4_1b3wmOtFIy78-ECpj_JV-bC-fDQNEA&oe=67B791B9"
              alt="Alamin"
              className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover transition-transform duration-500 hover:scale-110"
              style={{ clipPath: 'circle(50%)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

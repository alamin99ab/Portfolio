import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative h-screen bg-gray-900 overflow-hidden">
      <div className="absolute top-4 right-4 flex space-x-4 z-10">
        <a
          href="https://www.linkedin.com/in/md-alamin-a59840319/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaLinkedin className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://github.com/alamin99ab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaGithub className="w-6 h-6 md:w-8 md:h-8" />
        </a>
        <a
          href="https://www.facebook.com/alamin009j"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          <FaFacebook className="w-6 h-6 md:w-8 md:h-8" />
        </a>
      </div>

      <div className="flex flex-col lg:flex-row h-full items-center justify-center px-6 md:px-12 text-white">
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-left">
            Hello, I'm ALAMIN
          </h1>
          <p className="text-sm md:text-lg mb-6 animate-slide-in-left-delayed">
            Hello! I'm Alamin, a budding web developer passionate about crafting interactive and
            dynamic web experiences. I'm currently learning the MERN stack to take my skills to the next level.
          </p>

          <div className="mt-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <a
              href="#home"
              className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg transition duration-300"
            >
              <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 mr-2" />
              Say Hello
            </a>
            <a
              href="#home"
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
              src="https://i.postimg.cc/43gndm5R/alamin.jpg"
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

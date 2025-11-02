import React from 'react';
import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
// import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa'; // Truti dewar jonno sorano hoyeche

// Inline SVG Icons for social links
const LinkedInIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM4 21h4V8H4v13zM6 4a2 2 0 100 4 2 2 0 000-4z"/>
    </svg>
);

const GithubIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.864 8.154 6.828 9.465.5.092.682-.218.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.15-.11-1.173-.11-1.173.978.678 1.49.106 1.49.106.87-.678 2.27-.678 2.27-.678.075-.529.34-.87.62-1.07-2.16-.23-4.434-1.077-4.434-4.8 0-1.06.379-1.928 1.004-2.606-.1-.23-.435-1.23.096-2.568 0 0 .825-.26 2.7.994.787-.218 1.637-.327 2.5-.329 2.5 0 1.71.075 2.5.329 1.875-1.254 2.7-.994 2.7-.994.53 1.338.2 2.338.1 2.568.625.678 1.004 1.546 1.004 2.606 0 3.732-2.274 4.56-4.439 4.795.346.29.687.957.687 1.928 0 1.393-.013 2.515-.013 2.846 0 .267.18.577.688.484C19.14 20.17 22 16.447 22 12.017 22 6.484 17.523 2 12 2z" clipRule="evenodd"/>
    </svg>
);

const FacebookIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.084 3.708 9.294 8.525 9.993v-7.005H7.078v-2.988h2.447V9.435c0-2.43 1.488-3.75 3.646-3.75 1.037 0 1.936.077 2.196.112v2.54h-1.503c-1.18 0-1.41.56-1.41 1.38v1.822h2.983l-.478 2.988h-2.505v7.005C18.292 21.294 22 17.084 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
);

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
   className="text-gray-400 hover:text-white transition duration-300" >
    <LinkedInIcon className="w-8 h-8" /> </a>
  <a href="https://github.com/alamin99ab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300" >
   <GithubIcon className="w-8 h-8" /> </a>
   <a href="https://www.facebook.com/alamin009j"target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300" > <FacebookIcon className="w-8 h-8" /> </a>
   </div>

  <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-left"> I'm ALAMIN: Network Engineer </h1>
 <p className="text-sm md:text-lg mb-6 animate-slide-in-left-delayed"> A Diploma Engineer focused on **Network Engineering** and **System Maintenance**. I configure LAN/WAN, manage IP addressing, and troubleshoot infrastructure while building dynamic web applications using the **MERN Stack**. </p>
 <div className="mt-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4"> <a href="#contact" className="flex items-center px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg transition duration-300" > <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 mr-2" /> Say Hello </a>
   <a href="#projects" className="flex items-center justify-center p-2 bg-blue-500 hover:bg-blue-700 rounded-full transition duration-300" > <ArrowRightIcon className="w-5 h-5" /> </a>
   </div>
     </div>
   <div className="flex-1 flex items-center justify-center p-4">
    <div className="relative p-6 border-4 rounded-full bg-gray-900" style={{ clipPath: 'circle(50%)', backgroundColor: 'inherit', }} >
       <img
             src="https://i.postimg.cc/mkJFVZfc/Whats-App-Image-2025-08-03-at-14-29-01-522ba05c.jpg"alt="Alamin"
                 className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover transition-transform duration-500 hover:scale-110"
                       style={{ clipPath: 'circle(50%)' }} />
            </div>
         </div>
       </div>
    </div>
   );
};

export default Home;

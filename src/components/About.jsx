import React from 'react';
import cvFile from '../assets/Alamin - Resume _ Ostad CV Builder.pdf'; 
import { FaDownload } from 'react-icons/fa'; 

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-white p-6 lg:p-10" id="about">
      
      <div className="flex-1 flex justify-center mb-8 lg:mb-0">
      <img 
  src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/476753194_1129616435558978_3552198489983614072_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGuITultCaUKCkcJ7CImdJxP04aVt1z_O4_ThpW3XP87uP4bc_tJ8hkUvI1bURIgtkTzjxQogdstxfZmS74GFdq&_nc_ohc=-YZl4KHKo_oQ7kNvgHs0hNs&_nc_oc=Adg1ZAwjSQS5xhwBjIDiSKsSSRwgmCOW8L3fC4xp1_NCWd99E3P1CeX8KAWBC0Jzvo8&_nc_zt=23&_nc_ht=scontent.fdac14-1.fna&_nc_gid=AW-R-O8E1T8WxTB4mvKShlA&oh=00_AYBvgQbjihufp47duKzF-lo--knNPmTihxM5_QaKR3Cjbw&oe=67B7657B" 
  alt="Alamin" 
  className="w-40 h-56 sm:w-60 sm:h-80 md:w-72 md:h-96 object-cover rounded-lg border-4 border-blue-500"
/>
      </div>

      <div className="flex-1 max-w-2xl text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 animate-slide-in-left">About Me</h1>
        
        <p className="text-base sm:text-lg mb-4">
          Hi there! I'm Alamin, a budding web developer passionate about crafting interactive and dynamic web applications.
        </p>
        <p className="text-base sm:text-lg mb-4">
          My journey into web development began with a curiosity for technology and a desire to create. I'm currently mastering the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js, through Ostad's interactive courses.
        </p>
        <p className="text-base sm:text-lg mb-4">
          I enjoy tackling challenges and turning ideas into reality. I believe that a well-designed application can make a difference in people's lives, and I'm dedicated to crafting applications that are not only functional but also visually appealing.
        </p>
        <p className="text-base sm:text-lg mb-4">
          In my free time, I love exploring new technologies, contributing to open-source projects, and sharing knowledge with fellow developers. I'm excited about the future of web development and eager to collaborate on impactful projects.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <a href="/" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition duration-300">
            Back to Home
          </a>
          <a 
            href={cvFile} 
            download="Alamin_CV.pdf" 
            className="px-4 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg transition duration-300 flex items-center justify-center"
          >
            <FaDownload className="mr-2" /> 
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

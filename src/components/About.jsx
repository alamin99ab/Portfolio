import React from 'react';
import cvFile from '../assets/Alamin.pdf'; 

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-white p-6 lg:p-10" id="about">

     <div className="flex-1 flex justify-center mb-8 lg:mb-0">
      <img 
        src="https://i.postimg.cc/CLxvQcyS/Whats-App-Image-2025-08-03-at-14-25-18-9ded5020.jpg" 
        alt="Alamin" 
        className="w-40 h-56 sm:w-60 sm:h-80 md:w-72 md:h-96 object-cover rounded-lg border-4 border-blue-500"
      />
     </div>

     <div className="flex-1 max-w-2xl text-center lg:text-left">
       <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 animate-slide-in-left">About Me</h1>

       <p className="text-base sm:text-lg mb-4">
        Hi there! I'm <b>Alamin</b>, a highly motivated and enthusiastic <b>Diploma Engineer in Computer Science & Technology</b>. My core passion lies in <b>Network Engineering</b> and <b>System Maintenance</b>, where I focus on ensuring seamless connectivity and reliable infrastructure.
       </p>

       <p className="text-base sm:text-lg mb-4">
        I possess strong hands-on skills in <b>LAN/WAN configuration</b>, <b>IP Addressing, Subnetting, OSPF, and DHCP</b> setup. I have a foundational understanding of key protocols like the <b>OSI Model and TCP/IP</b>, which allows me to troubleshoot and manage complex network environments effectively. I'm actively pursuing further knowledge in <b>CCNA and MTCNA</b> to solidify my expertise.
       </p>

       <p className="text-base sm:text-lg mb-4">
        Beyond networking, I'm adept at <b>PC Assembly, System Troubleshooting, and OS Installation</b>, ensuring hardware and software run efficiently. My experience also extends to <b>Web Development</b>, where I utilize the <b>MERN stack (MongoDB, Express.js, React.js, Node.js)</b> to build dynamic backend systems and user interfaces.
       </p>

       <p className="text-base sm:text-lg mb-4">
        I am a dedicated problem-solver who thrives in collaborative environments. My goal is to apply my combined knowledge of networking infrastructure and development skills to contribute meaningfully to technological advancement.
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
           <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
           </svg>
           Download Resume
         </a>
       </div>
     </div>

   </div>
  );
};

export default About;

import React from 'react';

// PDF placed in public folder
const cvPath = '/Alamin.pdf';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-900 text-white p-6 lg:p-12"
    >
      {/* Profile Image */}
      <div className="flex-1 flex justify-center mb-8 lg:mb-0">
        <img
          src="https://i.postimg.cc/CLxvQcyS/Whats-App-Image-2025-08-03-at-14-25-18-9ded5020.jpg"
          alt="Alamin"
          className="w-40 h-56 sm:w-60 sm:h-80 md:w-72 md:h-96 object-cover rounded-lg border-4 border-blue-500 shadow-xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* About Text */}
      <div className="flex-1 max-w-2xl text-center lg:text-left space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-400">
          About Me
        </h1>

        <p>
          Hi there! I'm <b>Alamin</b>, a highly motivated <b>Diploma Engineer in Computer Science & Technology</b>. 
          My core passion lies in <b>Network Engineering</b> and <b>System Maintenance</b>, ensuring seamless connectivity 
          and reliable infrastructure.
        </p>

        <p>
          I have strong hands-on skills in <b>LAN/WAN configuration</b>, <b>IP Addressing, Subnetting, OSPF, and DHCP</b>. 
          I understand key protocols like <b>OSI Model</b> and <b>TCP/IP</b>, allowing me to troubleshoot and manage 
          complex networks. I'm actively pursuing <b>CCNA and MTCNA</b> to strengthen my expertise.
        </p>

        <p>
          Beyond networking, I excel in <b>PC Assembly, System Troubleshooting, and OS Installation</b>. 
          I also have experience in <b>Web Development</b> using the <b>MERN stack</b> to build dynamic web applications.
        </p>

        <p>
          I'm a dedicated problem-solver who thrives in collaborative environments. 
          My goal is to leverage my networking and development skills to contribute meaningfully to technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 mt-6 justify-center lg:justify-start">
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold shadow-md transition transform hover:scale-102 active:scale-95"
          >
            Back to Home
          </a>

          <a
            href={cvPath}
            download="Alamin_CV.pdf"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-semibold shadow-md flex items-center justify-center transition transform hover:scale-102 active:scale-95"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;

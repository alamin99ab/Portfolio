import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-gray-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-4xl">
       <h2 className="text-4xl font-extrabold mb-12 text-center text-yellow-400">Educational Qualifications</h2>
        <div className="space-y-10">
          {/* Ostad - MERN Stack */}
            <div className="border-l-4 border-yellow-400 pl-6 p-4 bg-gray-700/50 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-300">Ostad</h3>
            <p className="text-xl mt-1">Web Design And Development (MEARN STACK)</p>
            <p className="text-sm text-gray-400 mt-2">Completion Status: Done</p>
          </div>
          {/* City Polytechnic Institute - CST */}
          <div className="border-l-4 border-yellow-400 pl-6 p-4 bg-gray-700/50 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-300">City Polytechnic Institute</h3>
            <p className="text-xl mt-1">Computer Science And Technology (CST)</p>
            <p className="text-sm text-gray-400 mt-2">Expected Graduation: 2025</p>
           </div>
           {/* Creative IT Institute - Industrial Attachment (New Entry) */}
          <div className="border-l-4 border-yellow-400 pl-6 p-4 bg-gray-700/50 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-300">Creative IT Institute</h3>
             <p className="text-xl mt-1">Industrial Attachment</p>
            <p className="text-sm text-gray-400 mt-2">Expected: September 2025</p>
          </div>
          {/* Deara High School - SSC */}
          <div className="border-l-4 border-yellow-400 pl-6 p-4 bg-gray-700/50 rounded-lg shadow-xl hover:bg-gray-700 transition duration-300">
            <h3 className="text-2xl font-bold text-yellow-300">Deara High School</h3>
            <p className="text-xl mt-1">Secondary School Certificate (SSC)</p>
            <p className="text-sm text-gray-400 mt-2">Graduated: 2021</p>
          </div>
          </div>
      </div>
    </section>
  );
};

export default Education;

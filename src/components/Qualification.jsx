import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-gray-800 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Educational Qualifications</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-2xl font-semibold">Ostad</h3>
            <p className="text-lg">Web Design And Development (MEARN STACK)</p>
            <p className="text-sm text-gray-400">Expected Graduation: Ongoing</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-2xl font-semibold">City Polytechnic Institute</h3>
            <p className="text-lg">Computer Scinece And Technology (CST)</p>
            <p className="text-sm text-gray-400">Expected Graduation: 2025</p>
          </div>
          <div className="border-l-4 border-yellow-400 pl-4">
            <h3 className="text-2xl font-semibold">Deara High School</h3>
            <p className="text-lg">Secondary School Certificate (SSC)</p>
            <p className="text-sm text-gray-400">Graduated: 2021</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

import React, { useState } from 'react';
import { FaGithub, FaWhatsapp, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'; 
import emailjs from 'emailjs-com'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [sent, setSent] = useState(false); 
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_g2kkbv4',
      'template_tlbxfgk', 
      formData, 
      'mJPCU3GIS8ub7eU7k' 
    )
    .then(() => {
      setSent(true); 
      setError(false); 
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch(() => {
      setError(true); 
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6 lg:p-10" id="contact">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8">Contact Me</h1>

      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-8">
        <div className="flex-1 bg-gray-800 p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Message"
                rows="4"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-500 hover:bg-blue-700 text-white rounded-lg transition duration-300"
            >
              Send Message
            </button>
            {sent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
            {error && <p className="text-red-500 mt-4">Failed to send message. Try again later.</p>}
          </form>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
          <a 
            href="https://github.com/alamin99ab" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300 flex flex-col items-center justify-center"
          >
            <FaGithub size={40} className="mb-2" />
            <span>GitHub</span>
          </a>

          <a 
            href="https://wa.me/+8801778060662" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition duration-300 flex flex-col items-center justify-center"
          >
            <FaWhatsapp size={40} className="mb-2" />
            <span>WhatsApp</span>
          </a>

          <a 
            href="https://www.facebook.com/alamin009j" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300 flex flex-col items-center justify-center"
          >
            <FaFacebook size={40} className="mb-2" />
            <span>Facebook</span>
          </a>

          <a 
            href="https://www.instagram.com/al_am.in009/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 bg-pink-500 hover:bg-pink-600 text-white rounded-lg transition duration-300 flex flex-col items-center justify-center"
          >
            <FaInstagram size={40} className="mb-2" />
            <span>Instagram</span>
          </a>

          <a 
            href="mailto:mdy017192@gmail.com" 
            className="p-4 bg-red-500 hover:bg-red-600 text-white rounded-lg transition duration-300 flex flex-col items-center justify-center"
          >
            <FaEnvelope size={40} className="mb-2" />
            <span>Gmail</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

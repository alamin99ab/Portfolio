import { ArrowRightIcon, ChatBubbleOvalLeftEllipsisIcon } from '@heroicons/react/24/solid';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="relative flex h-screen bg-gray-900 overflow-hidden">

      <div className="hidden lg:flex flex-col items-center justify-center space-y-4 p-4 fixed right-0 top-1/2 transform -translate-y-1/2 z-10">
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

      <div className="flex-1 text-center lg:text-left flex flex-col justify-center p-10 text-white z-10" id="home">
        <h1 className="text-5xl font-bold mb-4 animate-slide-in-left">Hello, I'm ALAMIN</h1>
        <p className="text-lg mb-6 animate-slide-in-left-delayed">
        ʰᵉˡˡᵒ! ⁱ'ᵐ ᵃˡᵃᵐⁱⁿ, ᵃ ᵇᵘᵈᵈⁱⁿᵍ ʷᵉᵇ ᵈᵉᵛᵉˡᵒᵖᵉʳ ᵖᵃˢˢⁱᵒⁿᵃᵗᵉ ᵃᵇᵒᵘᵗ ᶜʳᵃᶠᵗⁱⁿᵍ ⁱⁿᵗᵉʳᵃᶜᵗⁱᵛᵉ ᵃⁿᵈ ᵈʸⁿᵃᵐⁱᶜ ʷᵉᵇ ᵃᵖᵖˡⁱᶜᵃᵗⁱᵒⁿˢ. ᶜᵘʳʳᵉⁿᵗˡʸ, ⁱ’ᵐ ᵈⁱᵛⁱⁿᵍ ᵈᵉᵉᵖ ⁱⁿᵗᵒ ᵗʰᵉ ᵐᵉʳⁿ ˢᵗᵃᶜᵏ—ᵐᵒⁿᵍᵒᵈᵇ, ᵉˣᵖʳᵉˢˢ.ʲˢ, ʳᵉᵃᶜᵗ.ʲˢ, ᵃⁿᵈ ⁿᵒᵈᵉ.ʲˢ—ᵗʰʳᵒᵘᵍʰ ᵒˢᵗᵃᵈ’ˢ ᵉⁿᵍᵃᵍⁱⁿᵍ ᵖˡᵃᵗᶠᵒʳᵐ. ⁱ ᵇᵉˡⁱᵉᵛᵉ ᵗʰᵃᵗ ᵗᵉᶜʰⁿᵒˡᵒᵍʸ ˢʰᵒᵘˡᵈ ᵇᵉ ⁱⁿᵗᵘⁱᵗⁱᵛᵉ ᵃⁿᵈ ᵃᶜᶜᵉˢˢⁱᵇˡᵉ, ᵃⁿᵈ ⁱ'ᵐ ᵈᵉᵈⁱᶜᵃᵗᵉᵈ ᵗᵒ ᶜʳᵉᵃᵗⁱⁿᵍ ˢᵒˡᵘᵗⁱᵒⁿˢ ᵗʰᵃᵗ ᵐᵉᵉᵗ ᵘˢᵉʳˢ' ⁿᵉᵉᵈˢ. ᵃˢ ⁱ ᵇᵘⁱˡᵈ ᵐʸ ˢᵏⁱˡˡˢ, ⁱ ˡᵒᵒᵏ ᶠᵒʳʷᵃʳᵈ ᵗᵒ ᶜᵒˡˡᵃᵇᵒʳᵃᵗⁱⁿᵍ ᵒⁿ ⁱⁿⁿᵒᵛᵃᵗⁱᵛᵉ ᵖʳᵒʲᵉᶜᵗˢ ᵃⁿᵈ ᵇʳⁱⁿᵍⁱⁿᵍ ⁱᵈᵉᵃˢ ᵗᵒ ˡⁱᶠᵉ. ʲᵒⁱⁿ ᵐᵉ ᵒⁿ ᵗʰⁱˢ ᵉˣᶜⁱᵗⁱⁿᵍ ʲᵒᵘʳⁿᵉʸ ᵃˢ ⁱ ᵉˣᵖˡᵒʳᵉ ᵗʰᵉ ʷᵒʳˡᵈ ᵒᶠ ʷᵉᵇ ᵈᵉᵛᵉˡᵒᵖᵐᵉⁿᵗ!
        </p>

        <div className="mt-4 flex space-x-4">
          <a 
            href="/contact" 
            className="flex items-center px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded-lg transition duration-300"
          >
            <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 mr-2" />
            Say Hello
          </a>

          <a 
            href="/about" 
            className="flex items-center justify-center p-2 bg-blue-500 hover:bg-blue-700 rounded-full transition duration-300"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-gray-900 bg-opacity-50 z-0">
        <div className="relative p-6 border-4 animate-rgb-border rounded-full bg-gray-900"
          style={{
            clipPath: "circle(50%)", 
            backgroundColor: 'inherit' 
          }}>
          <img
            src="https://i.postimg.cc/43gndm5R/alamin.jpg" 
            alt="Alamin"
            className="w-80 h-80 object-cover transition-transform duration-500 hover:scale-110"
            style={{
              clipPath: "circle(50%)", 
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

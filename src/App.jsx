import React from 'react';
import Navbar from './components/Navbar';  // Import the Navbar component
import Home from './components/Home';
import About from './components/About';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar /> {/* Add Navbar component here */}

      {/* Main Content */}
      <main>
        <Home />
        <About />
        <Qualification />
        <Projects />
        <Skills />
        <Contact />
      </main>

     
    </div>
  );
}

export default App;

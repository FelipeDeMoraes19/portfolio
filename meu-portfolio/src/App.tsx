import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header id="home" />
      <Projects id="projects" />
      <Skills id="skills" />
      <Contact id="contact" />
    </div>
  );
}

export default App;

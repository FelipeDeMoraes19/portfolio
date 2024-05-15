import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';  // Certifique-se de que está importando Header
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="section"><Header id="home" /></div>  // Use Header aqui
      <div id="projects" className="section"><Projects id="projects" /></div>
      <div id="skills" className="section"><Skills id="skills" /></div>
      <div id="contact" className="section"><Contact id="contact" /></div>
    </div>
  );
}

export default App;

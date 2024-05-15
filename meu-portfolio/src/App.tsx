import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;

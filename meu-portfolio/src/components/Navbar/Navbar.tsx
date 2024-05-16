import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <div className="navbar-content">
        <h1>Felipe de Moraes</h1>
        <div>
          <Link to="home" spy={true} smooth={true} duration={500} className="navbar-link">Início</Link>
          <Link to="projects" spy={true} smooth={true} duration={500} className="navbar-link">Projetos</Link>
          <Link to="skills" spy={true} smooth={true} duration={500} className="navbar-link">Habilidades</Link>
          <Link to="contact" spy={true} smooth={true} duration={500} className="navbar-link">Contato</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
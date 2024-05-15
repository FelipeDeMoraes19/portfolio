import React from 'react';
import { Link } from 'react-scroll';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav>
      <div className="navbar-content">
        <h1>Felipe de Moraes</h1> {}
        <ul>
          <li><Link to="home" spy={true} smooth={true} duration={500}>Início</Link></li>
          <li><Link to="projects" spy={true} smooth={true} duration={500}>Projetos</Link></li>
          <li><Link to="skills" spy={true} smooth={true} duration={500}>Habilidades</Link></li>
          <li><Link to="contact" spy={true} smooth={true} duration={500}>Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

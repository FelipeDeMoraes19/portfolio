import React from 'react';
import './Navbar.css';

function Navbar() {
    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="navbar">
            <ul>
                <li><a href="#home" onClick={() => scrollTo('home')}>Início</a></li>
                <li><a href="#projects" onClick={() => scrollTo('projects')}>Projetos</a></li>
                <li><a href="#skills" onClick={() => scrollTo('skills')}>Habilidades</a></li>
                <li><a href="#contact" onClick={() => scrollTo('contact')}>Contato</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;

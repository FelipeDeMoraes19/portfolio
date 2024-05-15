import React from 'react';
import './Projects.css';

interface ProjectsProps {
  id: string;
}

function Projects({ id }: ProjectsProps) {
    return (
        <section id={id} className="projects">
            <h2>Projetos</h2>
            <div className="project">
                <h3>Projeto 1</h3>
                <p>Descrição breve do Projeto 1.</p>
            </div>
            <div className="project">
                <h3>Projeto 2</h3>
                <p>Descrição breve do Projeto 2.</p>
            </div>
        </section>
    );
}

export default Projects;

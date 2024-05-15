import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const projectsData = [
  {
    name: "Task Automation",
    description: "This project uses PyAutoGUI to automate GUI interactions, simplifying tasks like web form data entry. Features include browser automation, automatic logins, and CSV data processing. Additionally, it offers a tool to capture and display cursor positions.",
    repoUrl: "https://github.com/FelipeDeMoraes19/task-automation",
    technologies: ["Python"],
  },
  {
    name: "Employee Hub",
    description: "This is an employee management application developed in React. The project was created using Create React App and aims to simplify team organization and management by allowing users to view, add, edit, and remove employee information.",
    repoUrl: "https://github.com/FelipeDeMoraes19/employee-hub",
    technologies: ["React", "CSS", "JavaScript"],
  },
    {
    name: "SpringBoot-jpa",
    description: "This Java project leverages the power of Spring Boot combined with Java Persistence API (JPA) to create a robust backend application.",
    repoUrl: "https://github.com/FelipeDeMoraes19/project-springboot-jpa",
    technologies: ["Java"],
  },
];

function Projects({ id }: { id: string }) {
  return (
    <section id={id} className="projects">
      <h2>Projetos</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project">
          <div className="project-details">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="technology">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Repositório
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;

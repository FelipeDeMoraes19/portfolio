import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faJava,
  faPython, faGithub, faGit, faFigma
} from '@fortawesome/free-brands-svg-icons';

interface Skill {
  icon: any; 
  name: string;
}

interface SkillsProps {
  id: string;
}

const Skills = ({ id }: SkillsProps) => {
  const frontEndSkills: Skill[] = [
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3Alt, name: "CSS3" },
    { icon: faJsSquare, name: "JavaScript" },
    { icon: faReact, name: "React" },
    { icon: faFigma, name: "Figma" }
  ];

  const backEndSkills: Skill[] = [
    { icon: faNodeJs, name: "Node.js" },
    { icon: faJava, name: "Java" },
    { icon: faPython, name: "Python" },
    { icon: faGithub, name: "GitHub" },
    { icon: faGit, name: "Git" }
  ];

  return (
    <section id={id} className="skills">
      <h2>Habilidades</h2>
      <div className="skill-category">
        <h3>Front-End</h3>
        <div className="skill-set">
          {frontEndSkills.map((skill, index) => (
            <div key={index} className="skill">
              <FontAwesomeIcon icon={skill.icon} size="2x" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="skill-category">
        <h3>Back-End</h3>
        <div className="skill-set">
          {backEndSkills.map((skill, index) => (
            <div key={index} className="skill">
              <FontAwesomeIcon icon={skill.icon} size="2x" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faPython, faReact, faHtml5, faCss3Alt, faJsSquare} from '@fortawesome/free-brands-svg-icons';
import { faFigma } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase } from '@fortawesome/free-solid-svg-icons'; 


interface SkillsProps {
  id: string;
}

function Skills({ id }: SkillsProps) {
  return (
    <section id={id} className="skills">
      <h2>Habilidades</h2>
      <div className="skill">
        <FontAwesomeIcon icon={faJava} size="2x" />
        <span>Java</span>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faPython} size="2x" />
        <span>Python</span>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faReact} size="2x" />
        <span>React</span>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faHtml5} size="2x" />
        <span>HTML5</span>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faCss3Alt} size="2x" />
        <span>CSS3</span>
      </div>
      <div className="skill">
        <FontAwesomeIcon icon={faJsSquare} size="2x" />
        <span>JavaScript</span>
      </div>

      <div className="skill">
        <FontAwesomeIcon icon={faDatabase} size="2x" />
        <span>MySQL</span>
      </div>

      <div className="skill">
        <FontAwesomeIcon icon={faFigma} size="2x" />
        <span>Figma</span>
      </div>

    </section>
  );
}

export default Skills;

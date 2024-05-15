import React from 'react';
import './Skills.css';

interface SkillsProps {
  id: string;
}

function Skills({ id }: SkillsProps) {
    return (
        <section id={id} className="skills">
            <h2>Habilidades</h2>
            <div className="skill">HTML, CSS, JavaScript</div>
            <div className="skill">React, TypeScript</div>
        </section>
    );
}

export default Skills;

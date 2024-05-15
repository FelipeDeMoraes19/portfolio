import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact({ id }: { id: string }) {
  return (
    <footer id={id} className="contact">
      <h2>Contato</h2>
      <div className="contact-links">
        <a href="mailto:moorraes16@gmail.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faEnvelope} /> moorraes16@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/felipe-de-moraes-48249026b/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> 
        </a>
        <a href="https://github.com/FelipeDeMoraes19" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} /> 
        </a>
      </div>
    </footer>
  );
}

export default Contact;

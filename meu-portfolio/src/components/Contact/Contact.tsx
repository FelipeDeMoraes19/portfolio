import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact({ id }: { id: string }) {
  return (
    <footer id={id} className="contact">
      <h2 style={{ transform: 'translateY(-10px)' }}>Contato</h2>
      <div className="contact-links">
        <a href="mailto:moorraes16@gmail.com" rel="noopener noreferrer" className="contact-item">
      <FontAwesomeIcon icon={faEnvelope} size="2x" />
        moorraes16@gmail.com
        </a>

        <a href="https://www.linkedin.com/in/felipe-de-moraes-48249026b/" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a href="https://github.com/FelipeDeMoraes19" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Contact;

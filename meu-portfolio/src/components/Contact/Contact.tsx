import React from 'react';
import './Contact.css';

interface ContactProps {
  id: string;
}

function Contact({ id }: ContactProps) {
    return (
        <footer id={id} className="contact">
            <h2>Contato</h2>
            <p>Email: moorraes16@gmail.com</p>
            <p>LinkedIn: ["LinkedIn"]</p>
        </footer>
    );
}

export default Contact;

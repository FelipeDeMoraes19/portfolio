import React from 'react';
import './Contact.css';

interface ContactProps {
  id: string;
}

function Contact({ id }: ContactProps) {
    return (
        <footer id={id} className="contact">
            <h2>Contato</h2>
            <p>Email: exemplo@exemplo.com</p>
            <p>LinkedIn: [seu LinkedIn]</p>
        </footer>
    );
}

export default Contact;

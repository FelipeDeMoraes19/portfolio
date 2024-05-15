import React from 'react';
import './Header.css';

function Header({ id }: { id: string }) {
    return (
        <header className="header" id={id}>
            <h1>Felipe de Moraes</h1>
            <p>Data Scientist</p>
        </header>
    );
}

export default Header;

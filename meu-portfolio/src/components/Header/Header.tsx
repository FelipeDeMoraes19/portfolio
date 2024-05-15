import React from 'react';
import './Header.css';

function Header({ id }: { id: string }) {
  return (
    <header id={id} className="header">
      <h1>Felipe de Moraes</h1>
      <p>👋 Hello, my name is Felipe de Moraes, and I am a Data Scientist specializing in Python. I am continually seeking to acquire professional knowledge and skills relevant to my career in Data Science. Welcome to my portfolio, and enjoy your visit!</p>
    </header>
  );
}
export default Header;

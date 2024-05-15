import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Felipe de Moraes</h1>
        <p>Data Scientist</p>
      </header>
      <section className="Objective">
        <h2>Objetivo Profissional</h2>
        <p>Descreva aqui seu objetivo profissional.</p>
      </section>
      <section className="Projects">
        <h2>Projetos</h2>
        <div>
          <h3>Projeto 1</h3>
          <p>Descrição breve do Projeto 1.</p>
        </div>
        <div>
          <h3>Projeto 2</h3>
          <p>Descrição breve do Projeto 2.</p>
        </div>
      </section>
      <section className="Skills">
        <h2>Habilidades</h2>
        <p>HTML, CSS, JavaScript, React, TypeScript, etc.</p>
      </section>
      <footer className="App-footer">
        <p>Contato: seuemail@example.com | LinkedIn</p>
      </footer>
    </div>
  );
}

export default App;

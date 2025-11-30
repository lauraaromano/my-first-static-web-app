import React from "react";
import "./laura.css";

function Laura() {
  return (
    <div className="cv-container">
      <h1>Currículo - Laura</h1>

      <section className="profile-section">
        <img 
          src="img/fotolaura.jpg" 
          alt="Foto de Laura" 
          className="profile-photo"
        />
        <div className="personal-info">
          <h2>Informações Pessoais</h2>
          <p><strong>Nome:</strong> Laura Romano</p>
          <p><strong>Email:</strong> lauraromano2018@gmail.com</p>
          <p><strong>Cidade:</strong> Ribeirão Pires - SP</p>
        </div>
      </section>

      <section>
        <h2>Formação</h2>
        <p> Ensino Médio em andamento – Informática pra Internet</p>
      </section>

      <section>
        <h2>Experiência</h2>
        <ul>
          <li>Pequenos Talentos</li>
          <li>Curso de inglês</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades</h2>
        <p>Figma | React | HTML | CSS</p>
      </section>
    </div>
  );
}

export default Laura;
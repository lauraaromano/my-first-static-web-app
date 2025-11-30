import React from "react";
import "./evellyn.css";

function Evellyn() {
  return (
    <div className="cv-container">
      <h1>Currículo - Evellyn</h1>

      <section className="profile-section">
        <img 
          src="/img/fotoevellyn.jpg" 
          alt="Foto da Evellyn" 
          className="profile-photo"
        />
        <div className="personal-info">
          <h2>Informações Pessoais</h2>
          <p><strong>Nome:</strong> Evellyn Furtado</p>
          <p><strong>Email:</strong> evellynfurtado100@gmail.com</p>
          <p><strong>Cidade:</strong> Mauá - SP</p>
        </div>
      </section>

      <section>
        <h2>Formação</h2>
        <p> Ensino Médio em andamento – Informática para Internet</p>
      </section>

      <section>
        <h2>Experiência</h2>
        <ul>
          <li>Voluntariado: Pequenos Talentos</li>
          <li>Voluntariado: UniYou</li>
          <li>Pré-Iniciação Científica: RecolheAI - Lixeira Inteligente</li>
          <li>Pré-Iniciação Científica: Dr.AIgnóstico - Assistente Médico</li>
        </ul>
      </section>

      <section>
        <h2>Habilidades</h2>
        <p>Figma | React | HTML | CSS</p>
      </section>
    </div>
    );
}

export default Evellyn;

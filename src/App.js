import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nav/navbar";
import Footer from "./Components/footer/footer";
import Evellyn from "./Components/pages/evellyn";
import Laura from "./Components/pages/laura";
import "./App.css"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/evellyn" element={<Evellyn />} />
        <Route path="/laura" element={<Laura />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Bem-vindo!</h1>
      
      <div className="photo-container">
        <img 
          src="/img/foto-dupla.jpeg"
          alt="Evellyn e Laura" 
          className="center-photo"
        />
      </div>

      <div className="info-section">
        <h2 className="info-title">Nossos Curriculos</h2>
        <p className="info-text">
          Evellyn dos Santos Furtado e Laura Romano - 2ºF
        </p>
      </div>

      <div className="navigation-section">
        <h3>Conheça nossos currículos:</h3>
        <div className="buttons-container">
          <a href="/evellyn" className="nav-button">Currículo da Evellyn</a>
          <a href="/laura" className="nav-button">Currículo da Laura</a>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Nav/navbar";
import Footer from "./Components/footer/footer";
import Evellyn from "./Components/pages/evellyn";
import Laura from "./Components/pages/laura";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1 style={{textAlign:"center"}}>Bem-vindo!</h1>} />
        <Route path="/evellyn" element={<Evellyn />} />
        <Route path="/laura" element={<Laura />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

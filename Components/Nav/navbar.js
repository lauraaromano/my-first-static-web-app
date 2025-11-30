import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <h2 className="logo">Currículos</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/evellyn">Evellyn</Link></li>
        <li><Link to="/laura">Laura</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

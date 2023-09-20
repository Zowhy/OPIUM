import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div>
      <div className="navbar">
      <img src="/oakle.png" alt="Logo" className="logo" />
        <Link to="/todo" className="button-link"> Enter / Login </Link>
      </div>
      
      <div className="introduction">
        <h1> Welcome to Opium</h1>
        <p>build your style.</p>
        <img src="/opium.png" alt="Imagem de Introdução" />
      </div>
    </div>
  );
}

import React from "react";
import ContPessoas from "./ContPessoas";
import "./ContPessoas.css";
import { Link } from "react-router-dom";

function Atv02() {
  return (
    <div className="container">
      <h1 className="title">Atividade 02</h1>

        <Link 
          to="/" 
          className="link"
          onMouseEnter={(e) => e.target.classList.add('hover-glow')}
          onMouseLeave={(e) => e.target.classList.remove('hover-glow')}
        >
          <span className="link-text">← Voltar ao Terminal Principal</span>
          <span className="link-cursor">_</span>
        </Link>

      <ContPessoas />
    </div>
    
  );
}

export default Atv02;

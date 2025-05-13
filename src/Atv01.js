import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";
import "./Atv01.css";

export default function Atv01() {
  return (
    <div className="terminal">
      <div className="screen">
        <h1 className="title glitch" data-text="Atividade 1">Atividade 1</h1>
        
        <div className="component">
          <Relogio />
        </div>
        
        <div className="component">
          <Letreiro />
        </div>
        
        <Link 
          to="/" 
          className="link"
          onMouseEnter={(e) => e.target.classList.add('hover-glow')}
          onMouseLeave={(e) => e.target.classList.remove('hover-glow')}
        >
          <span className="link-text">← Voltar ao Terminal Principal</span>
          <span className="link-cursor">_</span>
        </Link>
      </div>
      
      <div className="rain"></div>

      <div className="scanlines"></div>
    </div>
  );
}
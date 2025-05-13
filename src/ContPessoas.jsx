import React, { useState } from "react";
import "./ContPessoas.css";

function ContPessoas() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const total = homens + mulheres;

  const resetar = () => {
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="contador-box">
      <h2 className="title">Contador de Pessoas</h2>
      <div className="contador-total">
        <span>Total: {total}</span>
        <button className="botao-resetar" onClick={resetar}>⟳</button>
      </div>

      <div className="contador-grupo">
        <div className="contador-individual">
          <span className="contador-imagem">👨</span>
          <div className="botoes">
            <button onClick={() => setHomens(homens + 1)}>+</button>
            <button onClick={() => setHomens(homens > 0 ? homens - 1 : 0)}>-</button>
          </div>
          <span>Homens: {homens}</span>
        </div>

        <div className="contador-individual">
          <span className="contador-imagem">👩</span>
          <div className="botoes">
            <button onClick={() => setMulheres(mulheres + 1)}>+</button>
            <button onClick={() => setMulheres(mulheres > 0 ? mulheres - 1 : 0)}>-</button>
          </div>
          <span>Mulheres: {mulheres}</span>
        </div>
      </div>
    </div>
  );
}

export default ContPessoas;

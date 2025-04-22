import React, { useState, useEffect } from 'react';
import './Relogio.css'; 

export default function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div>
      <h1>Relógio</h1>
      <p>{hora.toLocaleTimeString()}</p>
    </div>
  );
}
import { useState, useEffect } from 'react';

export default function Letreiro() {
  const mensagemCompleta = 'Conheça a Fatec';
  const [mensagemAtual, setMensagemAtual] = useState('');
  const [letraAtual_index, setLetraAtual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (letraAtual_index < mensagemCompleta.length) {
        setMensagemAtual((textoAnterior) => textoAnterior + mensagemCompleta[letraAtual_index]);
        setLetraAtual((indiceAnterior) => indiceAnterior + 1);
      } else {
        clearInterval(intervalo);
        setTimeout(() => {
          setMensagemAtual('');
          setLetraAtual(0);
        }, 1000);
      }
    }, 200);

    return () => clearInterval(intervalo);
  }, [letraAtual_index]);

  return (
    <section>
      <h2>{mensagemAtual}</h2>
    </section>
  );
}
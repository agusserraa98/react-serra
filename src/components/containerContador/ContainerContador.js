import React from "react";
import { useState } from "react";
import "./ContainerContador.css";
const ContainerContador = () => {
  const [count, setCount] = useState(1);

  const handleSuma = () => {
    if (count < 15 ) {
      setCount((prevCount) => prevCount + 1);
      console.log(count);
    }
  };
  //FUNCION RESTA
  const handleResta = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  let date = Date();

  return (
    <div className="count">
      <h2 className="container_hora">{date}</h2>
      <h1>{count}</h1>
      <div className="container_btns">
        <button onClick={handleSuma}>SUMAR</button>
        <button onClick={handleResta}>RESTAR</button>
      </div>
    </div>
  );
};

export default ContainerContador;

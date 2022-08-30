import React from "react";
import { useState } from "react";
import "./ContainerContador.css"
const ContainerContador = () => {
  const [count, setCount] = useState(5);

  const handleSuma = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };
  //FUNCION RESTA
  const handleResta = () => {
    setCount((prevCount) => prevCount - 1);
  };

  let date = Date();

  return (
    <div className="count">
      <h2 className="container_hora">{date}</h2>
      <h1>{count}</h1>
      <div className="container_btns">
        <button onClick={handleSuma}>boton 1</button>
        <button onClick={handleResta}>boton 2</button>
      </div>
    </div>
  );
};

export default ContainerContador;

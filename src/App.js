//import "./App.css";

import * as React from "react";
import ContainerContador from "./components/containerContador/ContainerContador";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

import NavBar from "./components/navbar/NavBar";

function App() {
  return (
      <div>
      <NavBar></NavBar>
      <ContainerContador></ContainerContador>
      <ItemListContainer></ItemListContainer>
      </div>
      );
}
export default App;

import './App.css';
import ListContainer from './components/listContainer/ListContainer';
import { Navbar } from './components/navbar/navBar.tsx/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ListContainer saludo={'BIENVENIDO'}></ListContainer>
    </div>
  );
}
export default App;

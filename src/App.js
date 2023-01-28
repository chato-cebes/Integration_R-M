import "./App.css";
import Cards from "./componentes/Cards";
import Nav from "./componentes/Nav";
import About from "./componentes/About"
import Detail from "./componentes/Detail"
import Error from "./componentes/Error"
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
        <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element = {<Cards characters={characters} onClose={onClose}/>} />
        <Route path="/about" element = {<About/>} />
        <Route path="/detail/:detailId" element = {<Detail/>} />
        <Route path="*" element = {<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;

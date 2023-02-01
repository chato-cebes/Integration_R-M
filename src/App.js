import "./App.css";
import Cards from "./componentes/Cards";
import Nav from "./componentes/Nav";
import About from "./componentes/About";
import Detail from "./componentes/Detail";
import Error from "./componentes/Error";
import Form from "./componentes/Form/Form";
import Favorites from "./componentes/Favorites";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



function App() {
  
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [ access, setAccess ] = useState(false);

  const username = "juanitoperes@hotmail.com"
  const password = "123abcd"

  const login = (userData) =>{
    if (userData.username === username && userData.password === password){
      setAccess (true);
      navigate("/home")
    }
  }
  
  //useEffect(()=>{},[]) recibe 2 parametrs uno es una callback y el otro es un array. 
  useEffect(()=>{
    !access && navigate("/")
  },[access, navigate])
  

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch(err => console.log(err))
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div className="App">
      {location.pathname === "/" ? <Form login={login} /> : <Nav onSearch={onSearch} />}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/" />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";

function Main(){
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
    
}

export default Main;
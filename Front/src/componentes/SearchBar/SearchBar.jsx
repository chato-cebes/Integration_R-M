import React from "react";
import { useState } from "react";

export default function SearchBar({onSearch}) {
  const [character, setCharacter] = useState("")

  const handleChange = (event) => {
    setCharacter(event.target.value);
  }


  return (
    <div>
      <input type="search" value= { character } placeholder="Type Id" onChange={handleChange}/>
      <button onClick={()=> onSearch(character) }>Agregar</button>
    </div>
  );
}

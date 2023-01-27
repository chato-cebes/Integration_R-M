import React, {useEffect}from "react";
import Card from "./Card";
import characters  from "../data"

export default function Cards() {

  return (
    <div>
    {
        characters.map((character)=>{
          return(
          <Card
          key = {character.id}
          name = {character.name}
          species = {character.species}
          gender = {character.gender}
          image = {character.image}
          />) 
    })
    }
    </div>
  );
}

import React from "react";

export default function Card(props) {
  return (
    <div>
      <button onClick={()=> alert("se debe cerrar la card")}>X</button>
      <h2>Nombre : {props.name}</h2>
      <img src={props.image} alt={props.name} />
      <h2>Especie : {props.species} </h2>
      <h2>Género : {props.gender}</h2>
      <br/>
      <hr/>
    </div>
  );
}

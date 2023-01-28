import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <img src={props.image} alt={props.name} />
      <h2>Especie : {props.species} </h2>
      <h2>Género : {props.gender}</h2>
      <br />
      <hr />
    </div>
  );
}

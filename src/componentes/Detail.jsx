import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <Link to="/home"> Volver a Home </Link>
      <h1>Nombre: {character?.name}</h1>
      <p>Status: {character?.status}</p>
      <p>Specie: {character?.species}</p>
      <p>Gender: {character?.gender}</p>
      <p>Origin Place: {character?.origin?.name }</p>
      <img src={character?.image} alt={character?.name} />
    </div>
  );
};

export default Detail;

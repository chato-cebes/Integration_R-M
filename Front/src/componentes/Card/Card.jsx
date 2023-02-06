import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createFavorites, deleteFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Tarjeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const [isFav, setIsfav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsfav(false);
      dispatch(deleteFav(props.id));
    } else {
      setIsfav(true);
      dispatch(createFavorites(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((element) => {
      if (element.id === props.id) {
        setIsfav(true);
      }
    });
  }, [myFavorites, props]);

  return (
    <Tarjeta>
      <Buttons>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button onClick={props.onClose}>X</button>
      </Buttons>
      <Link to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} />
      </Link>
      <h2>Especie : {props.species} </h2>
      <h2>Género : {props.gender}</h2>
      <br />
      <hr />
    </Tarjeta>
  );
}

/*

// este si funciono pero queria probar los hooks
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

// este mapDispatchToProps no funciono no se por que :(
const mapDispatchToProps = (dispatch) => {
  return {
    createFavorites: (personaje) => dispatch(createFavorites(personaje)),
    deleteFav: (id) => dispatch(deleteFav(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
*/
export default Card;

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Favorites = (props) => {
  //const myFavorites = useSelector((state) => state.myFavorites)
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div>
        <select name="order" onChange={handleOrder}>
                <option selected="true" disabled="disabled">Order By</option>
                <option value="All">All</option>
                <option value="Ascendente">Ascendente</option>
                <option value="Descendente">Descendente</option>
            </select>
            <select name="filter" onChange={handleFilter}>
                <option selected="true" disabled="disabled">Filter By</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="Unknown">Unknown</option>
            </select>
        <Link to="/home"> Volver a Home </Link>
      </div>
      <hr />
      <br />

      <Container>
        {props.myFavorites.map((element) => {
          return (
            <Card
              key={element.id}
              id={element.id}
              name={element.name}
              species={element.species}
              gender={element.gender}
              image={element.image}
            />
          );
        })}
      </Container>
    </div>
  );
};

// aca en favorites use el map state to props que funciono muy bien
// la otra opcion es "useSelector" que lo use en el componente Card
// el mapDispatchToProps no me funciono en el otro lado, "cards" no se por que asi que por eso lo use con hooks.

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps)(Favorites);

//export default Favorites

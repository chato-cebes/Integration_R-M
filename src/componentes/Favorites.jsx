import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "./Card";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Favorites = (props) => {
  //const myFavorites = useSelector((state) => state.myFavorites)

  return (
    <div>
      <div>
        <Link to="/home"> Volver a Home </Link>
      </div>

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
import { CREATE_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  allFavs: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_FAVORITES:
    
      return {
        ...state,
          myFavorites: [...state.myFavorites, action.payload],
          allCharacters: [...state.myFavorites, action.payload],
          allFavs: [...state.myFavorites, action.payload],
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (element) => element.id !== action.payload
        ),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.name > b.name ? 1 : -1)
            : action.payload === "Descendente"
            ? state.allCharacters.sort((a, b) => a.name > b.name ? -1 : 1)
            : state.allFavs,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

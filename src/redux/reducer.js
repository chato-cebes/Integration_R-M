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
        allCharacters: [...state.myFavorites],
        allFavs: [...state.myFavorites],
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (element) => element.id !== action.payload
        ),
      };

    case FILTER:
      const { allCharacters } = state;
      return {
        ...state,
        myFavorites: allCharacters.filter(
          (char) => char.gender === action.payload
        ),
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => (a.id > b.id ? 1 : -1))
            : action.payload === "Descendente"
            ? state.allCharacters.sort((a, b) => (a.id > b.id ? -1 : 1))
            : state.allFavs,
      };

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

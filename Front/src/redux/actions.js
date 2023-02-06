export const CREATE_FAVORITES = "CREATE_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

export const createFavorites = (personaje) => {
  return {
    type: CREATE_FAVORITES,
    payload: personaje,
  };
};

export const deleteFav = (id) => {
  return {
    type: DELETE_FAVORITES,
    payload: id,
  };
};

export const filterCards = (status) => {
  return { 
    type: FILTER, 
    payload: status 
  };
};

export const orderCards = (id) => {
  return { 
    type: ORDER, 
    payload: id 
  };
};

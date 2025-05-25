import { ADD_FAVORITE, REMOVE_FAVORITE } from './favoritesActions';

const initialState = {
  favorites: []

};

const favoritesReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_FAVORITE:
      if (!state.favorites.some(fav => fav.id === action.payload.id)) {
        newState = {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
        return newState;
      }
      return state;
    case REMOVE_FAVORITE:
      newState = {
        ...state,
        favorites: state.favorites.filter(fav => fav.id !== action.payload),
      };
      return newState;
    default:
      return state;
  }
};

export default favoritesReducer;
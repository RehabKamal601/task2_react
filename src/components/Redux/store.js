import { createStore, combineReducers } from 'redux';
// import favoritesReducer from './reducers/favoritesReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export const store = createStore(rootReducer);
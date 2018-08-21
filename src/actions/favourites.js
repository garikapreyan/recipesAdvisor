import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES
} from '../constants';

export const addToFavourites = recipe => ({
  type: ADD_TO_FAVOURITES,
  payload: recipe
});

export const removeFromFavourites = recipe => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: recipe
});

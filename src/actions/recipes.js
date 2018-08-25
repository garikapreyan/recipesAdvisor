import {
  FAVOURITE_RECIPE,
  RECIPES_FETCHING,
  RECIPES_FETCHING_FAILURE,
  RECIPES_FETCHING_SUCCESS
} from '../constants';

export const favouriteRecipe = (index, q) => ({
  type: FAVOURITE_RECIPE,
  payload: {
    index,
    q
  }
});

const recipesFetching = () => {
  return { type: RECIPES_FETCHING };
};

const recipesFetchingSuccess = recipes => {
  return {
    type: RECIPES_FETCHING_SUCCESS,
    payload: recipes
  };
};

const recipesFetchingFailure = () => {
  return { type: RECIPES_FETCHING_FAILURE };
};

export const getRecipes = (page = 0) => dispatch => {
  const excludes = [],
    includes = ['eggs'];
  let count = 24;
  if (includes.length) count = 24 / includes.length;
  const arr = [];
  dispatch(recipesFetching());
  let exludecFoods = '';
  includes.forEach(inclFoods => {
    excludes.forEach(
      food => (exludecFoods = exludecFoods + `&excluded=${food}`)
    );
    fetch(
      `https://api.edamam.com/search?q=${inclFoods}&app_id=8d30ad7e&app_key=2e15423acdc14ff0c010ea43cd8c94e8&from=${page *
        count}&to=${(page + 1) * count}&` + exludecFoods
    )
      .then(recipes => recipes.json())
      .then(recipes => {
        arr.push(recipes);
        return dispatch(recipesFetchingSuccess(arr));
      })
      .catch(error => {
        console.log(error);
        dispatch(recipesFetchingFailure());
      });
  });
};

/* eslint-disable no-unused-vars */
import {Reducer} from 'redux';
import {IRecipe, RecipesActionTypes} from './recipes.interface';
const RecipesReducer: Reducer<IRecipe[], RecipesActionTypes> =
  (
      state= [],
      action: RecipesActionTypes,
  ): IRecipe[] => {
    switch (action.type) {
      case RecipesActions.GET_RECIPES:
        return action.payload.data.drinks;
      default:
        return state;
    }
  };

export enum RecipesActions {
  GET_RECIPES = 'get-recipe'
}

export default RecipesReducer;

import {combineReducers} from 'redux';
import recipesReducer from './recipes';
import revenueReducer from './revenue';
import storageReducer from './storage';

export default combineReducers({
  revenue: revenueReducer,
  storage: storageReducer,
  recipes: recipesReducer,
});

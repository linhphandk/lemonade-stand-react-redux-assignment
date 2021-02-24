import {combineReducers} from 'redux';
import revenueReducer from './revenue';
import storageReducer from './storage';

export default combineReducers({
  revenue: revenueReducer,
  storage: storageReducer,
});

import {Reducer} from 'redux';
import {StorageActions} from './storage';
const RevenueReducer: Reducer<number> =
  (
      state: number = 0,
      action): number => {
    switch (action.type) {
      case StorageActions.DECREASE_STORAGE:
        return state + action.price * action.amount;
      default:
        return state;
    }
  };

export default RevenueReducer;

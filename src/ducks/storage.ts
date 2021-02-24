/* eslint-disable no-unused-vars */
import {IAddStorage} from './storage.interface';
import {Reducer} from 'redux';
const storageReducer: Reducer<number> =
  (
      state: number = 0,
      action): number => {
    switch (action.type) {
      case StorageActions.INCREASE_STORAGE:
        return state + action.amount;

      case StorageActions.DECREASE_STORAGE:
        return state - action.amount;

      default:
        return state;
    }
  };

export enum StorageActions {
  INCREASE_STORAGE = 'increase-storage',
  DECREASE_STORAGE = 'decrease-storage',
}

export default storageReducer;

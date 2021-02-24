import {StorageActions} from './storage';

export interface IAddStorage {
  type: StorageActions.INCREASE_STORAGE,
  amount: number
}

export interface IDecreaseStorage {
  type: StorageActions.DECREASE_STORAGE,
  amount: number,
  price: number
}

export type StorageActionTypes = IAddStorage

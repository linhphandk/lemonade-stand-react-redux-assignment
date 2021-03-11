import revenueReducer from './revenue';
import {StorageActions} from './storage';

describe('Increase Revenue reducer', () => {
  it('should return 4', () => {
    expect(revenueReducer(
        0,
        {
          type: StorageActions.DECREASE_STORAGE,
          price: 4,
          amount: 1,
        }),
    ).toBe(4);
  });

  it('should return 75', () => {
    expect(revenueReducer(
        6,
        {
          type: StorageActions.DECREASE_STORAGE,
          price: 12,
          amount: 3,
        }),
    ).toBe(42);
  });
});

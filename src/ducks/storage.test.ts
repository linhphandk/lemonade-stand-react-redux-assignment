import storageReducer, {StorageActions} from './storage';

describe('Increase storage reducer', () => {
  it('should return 4', () => {
    expect(storageReducer(
        0,
        {
          type: StorageActions.INCREASE_STORAGE,
          amount: 4,
        }),
    ).toBe(4);
  });

  it('should return 75', () => {
    expect(storageReducer(
        6,
        {
          type: StorageActions.INCREASE_STORAGE,
          amount: 69,
        }),
    ).toBe(75);
  });
});

describe('decrease storage reducer', () => {
  it('should return 4', () => {
    expect(storageReducer(
        10,
        {
          type: StorageActions.DECREASE_STORAGE,
          amount: 4,
        }),
    ).toBe(6);
  });

  it('should return 75', () => {
    expect(storageReducer(
        100,
        {
          type: StorageActions.DECREASE_STORAGE,
          amount: 31,
        }),
    ).toBe(69);
  });
});



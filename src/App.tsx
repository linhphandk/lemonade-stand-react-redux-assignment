import React, {FC} from 'react';
import rootReducer from '../src/ducks/rootReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import StorageBanner from './features/StorageBanner';
import SellBanner from './features/SellBanner';
const store = createStore(rootReducer);
const App: FC = () => {
  return (
    <Provider store={store}>
      <StorageBanner />
      <SellBanner />
    </Provider>
  );
};

export default App;

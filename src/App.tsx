import React, {FC} from 'react';
import rootReducer from '../src/ducks/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Home.page';
import Navigation from './features/Navigation';
import RecipesPage from './pages/Recipes.page';
import thunk from 'redux-thunk';
const store = createStore(rootReducer, applyMiddleware(thunk));
const App: FC = () => {
  return (
    <div style={{
      maxWidth: '1024px',
      left: '50%',
      position: 'relative',
      transform: 'translateX(-50%)',
    }}>
      <Provider store={store}>
        <Router>
          <>
            <Navigation />
            <Switch>
              <Route path='/recipes' component={RecipesPage} />
              <Route exact path='/' component={Homepage} />
            </Switch>
          </>
        </Router>
      </Provider>
    </div>
  );
};

export default App;

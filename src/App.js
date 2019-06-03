import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory  } from 'history';

import Home from './components/Home';

const history = createBrowserHistory();

const App = () => {
  return (
   <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
   </Router>
  );
};

export default App;

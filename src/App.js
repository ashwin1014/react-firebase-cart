import React from 'react';
// import { firebaseApp } from './config';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory  } from 'history';
// components
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';


const history = createBrowserHistory();

const App = () => {
  return (
   <Router history={history}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/signin' component={SignIn}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
   </Router>
  );
};

export default App;

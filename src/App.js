import React, {useEffect} from 'react';
import { firebaseApp } from './firebase/config';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
// import { connect } from 'react-redux';
// import { compose } from 'redux';
// components
import Home from './components/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';



const App = (props) => {
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user=>{
      if(user) {
          const { email, phoneNumber } = user;
          let signedInType = email ? email:phoneNumber;
          console.log(signedInType);
          console.log('User signed in')
          props.history.push('/')  
      } else {
          console.log('User signed out')
          props.history.push('/signin')
      }
  })
  },[props.history])
  return (
      <>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signin' component={SignIn}/>
          <Route path='/signup' component={SignUp}/>
        </Switch>
      </>
  );
};

export default withRouter(App);

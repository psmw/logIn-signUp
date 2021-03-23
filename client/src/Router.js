import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import RegisterForm from './components/RegisterForm';
import Users from './components/Users';
import AuthContext from './context/AuthContext';

function Router() {
  const authControl = useContext(AuthContext)
  console.log(authControl.logIn)
  return (
  <BrowserRouter>
    <Switch>
      {authControl.logIn === false && (
        <>
          <Route path='/register'>
            <RegisterForm />
          </Route>
          <Route exact path='/'>
            <LogIn />
          </Route>                 
        </>
      )} 
      {authControl.logIn === true && (
        <>
          <Route path='/user'>
            <Users />
            <LogOut />
          </Route>      
        </>
      )}   
    </Switch>
  </BrowserRouter>
  );
};

export default Router;
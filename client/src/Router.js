import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import NavBar from './components/Navbar';
import RegisterForm from './components/RegisterForm';
import AuthContext from './context/AuthContext';

function Router() {
  const authControl = useContext(AuthContext)
  console.log(authControl.logIn)
  return (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <div>Home</div>
      </Route>
      {authControl.logIn === false && (
        <>
          <Route path='/register'>
            <RegisterForm />
          </Route>
          <Route path='/log-in'>
            <LogIn />
          </Route>                 
        </>
      )} 
      {authControl.logIn === true && (
        <>
          <Route path='/user'>
            <div>user</div>
            <LogOut />
          </Route>      
        </>
      )}   
    </Switch>
  </BrowserRouter>
  );
};

export default Router;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import LogIn from './components/LogIn';
import NavBar from './components/Navbar';
import RegisterForm from './components/RegisterForm';

function Router() {
  return (
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path='/'>
        <div>Home</div>
      </Route>
      <Route path='/register'>
        <RegisterForm />
      </Route>
      <Route path='/log-in'>
        <LogIn />
      </Route>
      <Route path='/user'>
        <div>user</div>
      </Route>
    </Switch>
  </BrowserRouter>
  );
};

export default Router;
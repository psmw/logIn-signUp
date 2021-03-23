import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function NavBar() {
  const logControl = useContext(AuthContext)
  return (
    <>
      <Link to='/'>Home</Link>
      {logControl.logIn === false && (
        <>
          <Link to='/register'>register</Link> 
          <Link to='/log-in'>log in</Link>
        </>
      )} 
      {logControl.logIn === true && <Link to='/user'>user</Link>}    
    </>
  );
}

export default NavBar; 
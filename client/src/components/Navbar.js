import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/register'>register</Link> 
      <Link to='/log-in'>log in</Link> 
      <Link to='/user'>user</Link>     
    </>
  );
}

export default NavBar;
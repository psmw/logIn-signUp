import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../context/AuthContext';

function LogOut() {
  const getLoggedIn = useContext(AuthContext)
  const oldUrl = useHistory()
  async function LogOutFunction() {
    await axios.get('http://localhost:5001/auth/logout')
    await getLoggedIn.getAuth()
    oldUrl.push('/log-in')
  }
  return (
    <button onClick={LogOutFunction}>
      Sair
    </button>
  );
}

export default LogOut; 
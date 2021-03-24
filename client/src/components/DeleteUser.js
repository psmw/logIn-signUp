import axios from 'axios';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import AuthContext from '../context/AuthContext';

function DeleteUser() {
  const getLoggedIn = useContext(AuthContext)
  const oldUrl = useHistory()
  async function DeleteUserFunction() {
    await axios.get('http://localhost:5001/auth/delete')
    await getLoggedIn.getAuth()
    oldUrl.push('/')
  }
  return (
    <button onClick={DeleteUserFunction}>
      Sair e deletar
    </button>
  );
}

export default DeleteUser; 
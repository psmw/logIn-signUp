import React, { useState } from 'react';
import axios from 'axios';

function LogIn() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function logIn(e) {
    e.preventDefault()

    try {
      const logInData = {
        email, 
	      password 
      }

      await axios.post('http://localhost:5001/auth/login', logInData)

    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h3>Log in</h3>
      <form onSubmit={logIn} >
        <input 
          type='email' 
          placeholder='e-mail' 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}  
        />
        <input 
          type='password' 
          placeholder='digite sua senha'
           onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        <button type='submit'>Registrar</button>
      </form>
    </div>  
  );
}

export default LogIn;
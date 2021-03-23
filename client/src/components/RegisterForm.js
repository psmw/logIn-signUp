import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router';

function RegisterForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerification, setPasswordVerification] = useState('');
  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [cpf, setCpf] = useState('');
  const [pis, setPis] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [streetName, setStreetName] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setcCmplement] = useState('');

  const getLoggedIn = useContext(AuthContext)
  const oldUrl = useHistory()

  async function register(e) {
    e.preventDefault()

    try {
      const registerData = {
        email, 
	      password, 
	      passwordVerification, 
	      firstName, 
	      surName, 
	      cpf, 
	      pis, 
	      country, 
	      state, 
	      city, 
	      cep, 
	      streetName, 
	      number, 
	      complement, 
      }

      await axios.post('http://localhost:5001/auth/', registerData)
      await getLoggedIn.getAuth()
      oldUrl.push('/log-in')
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h3>Registro de usuário</h3>
      <form onSubmit={register} >
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
        <input 
          type='password' 
          placeholder='confirme sua senha' 
          onChange={(e) => setPasswordVerification(e.target.value)} 
          value={passwordVerification}  
        />
        <input 
          type='text' 
          placeholder='Nome' 
          onChange={(e) => setFirstName(e.target.value)} 
          value={firstName}  
        />
        <input 
          type='text' 
          placeholder='sobrenome' 
          onChange={(e) => setSurName(e.target.value)} 
          value={surName}  
        />
        <input 
          type='number' 
          placeholder='cpf' 
          onChange={(e) => setCpf(e.target.value)} 
          value={cpf}  
        />
        <input 
          type='number' 
          placeholder='pis' 
          onChange={(e) => setPis(e.target.value)} 
          value={pis}  
        />
        <input 
          type='text' 
          placeholder='país' 
          onChange={(e) => setCountry(e.target.value)} 
          value={country}  
        />
        <input 
          type='text' 
          placeholder='estado' 
          onChange={(e) => setState(e.target.value)} 
          value={state}  
        />
        <input 
          type='text' 
          placeholder='cidade' 
          onChange={(e) => setCity(e.target.value)} 
          value={city}  
        />
        <input 
          type='number' 
          placeholder='cep' 
          onChange={(e) => setCep(e.target.value)} 
          value={cep}  
        />
        <input 
          type='text' 
          placeholder='rua' 
          onChange={(e) => setStreetName(e.target.value)} 
          value={streetName}  
        />
        <input 
          type='number' 
          placeholder='número' 
          onChange={(e) => setNumber(e.target.value)} 
          value={number}  
        />
        <input 
          type='text' 
          placeholder='complemento' 
          onChange={(e) => setcCmplement(e.target.value)} 
          value={complement}  
        />
        <button type='submit'>Registrar</button>
      </form>
    </div>  
  );
}

export default RegisterForm;
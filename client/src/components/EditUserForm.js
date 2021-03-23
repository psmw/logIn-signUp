import axios from 'axios';
import React, { useState } from 'react';

function EditUser() {

  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [streetName, setStreetName] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setcCmplement] = useState('');

  async function saveEdit(e) {
    e.preventDefault()

    try {
      const userData = {
        firstName
      }
      await axios.post('http://localhost:5001/edit/', userData)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <h3>Registro de usuário</h3>
      <form onSubmit={saveEdit} >
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
        <button type='submit'>Salvar alterações</button>
        <button type='submit'>Apagar usuário</button>
      </form>
    </div>
  );
}

export default EditUser; 
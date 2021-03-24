import axios from 'axios';
import React, { useState } from 'react';
import DeleteUser from './DeleteUser';
import { makeStyles, Grid, Typography, Hidden } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  formCard: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    borderRadius: '15px',
    padding: '20px',
    '& .MuiTypography-root': {
      marginBottom: '25px',
    }
  },
  formHolder: {
    display: 'flex'
  },
  logInForm: {
    display: 'inline-grid',
    margin: '0 auto'
  },
  actionHolder: {
    display: 'flex',
    '& .MuiTypography-root': {
      margin: 'auto 0 auto 10px'
    }
  },
  formMargin: {
    marginBottom: '10px'
  }
}))

function EditUser() {
  const classes = useStyle();
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
      await axios.post('http://localhost:5001/auth/', userData)
    } catch (err) {
      console.error(err)
    }
  }

  return (    
    <div className={classes.root}>
      <Grid container>
        <Hidden xsDown>          
          <Grid item sm={2} md={4} spacing={2}/>
        </Hidden>
        <Grid item xs={12} sm={8} md={4}>
          <div className={classes.formCard}>
            <Typography variant='h4' align='center'>Olá {firstName}</Typography>
            <div className={classes.formHolder}>
              <form onSubmit={saveEdit} className={classes.logInForm}>
                <input 
                  type='text' 
                  placeholder='Nome' 
                  onChange={(e) => setFirstName(e.target.value)} 
                  value={firstName} 
                  className={classes.formMargin} 
                />
                <input 
                  type='text' 
                  placeholder='sobrenome' 
                  onChange={(e) => setSurName(e.target.value)} 
                  value={surName}  
                  className={classes.formMargin}
                />
                <input 
                  type='text' 
                  placeholder='país' 
                  onChange={(e) => setCountry(e.target.value)} 
                  value={country}  
                  className={classes.formMargin}
                />
                <input 
                  type='text' 
                  placeholder='estado' 
                  onChange={(e) => setState(e.target.value)} 
                  value={state} 
                  className={classes.formMargin} 
                />
                <input 
                  type='text' 
                  placeholder='cidade' 
                  onChange={(e) => setCity(e.target.value)} 
                  value={city}  
                  className={classes.formMargin}
                />
                <input 
                  type='number' 
                  placeholder='cep' 
                  onChange={(e) => setCep(e.target.value)} 
                  value={cep}  
                  className={classes.formMargin}
                />
                <input 
                  type='text' 
                  placeholder='rua' 
                  onChange={(e) => setStreetName(e.target.value)} 
                  value={streetName}  
                  className={classes.formMargin}
                />
                <input 
                  type='number' 
                  placeholder='número' 
                  onChange={(e) => setNumber(e.target.value)} 
                  value={number} 
                  className={classes.formMargin} 
                />
                <input 
                  type='text' 
                  placeholder='complemento' 
                  onChange={(e) => setcCmplement(e.target.value)} 
                  value={complement}  
                  className={classes.formMargin}
                />
                <button type='submit' className={classes.formMargin}>Salvar alterações</button>
                <DeleteUser />
              </form>
            </div>
          </div>
        </Grid>
        <Hidden xsDown>          
          <Grid item sm={2} md={4} />
        </Hidden>
      </Grid>
    </div>
  );
}

export default EditUser; 
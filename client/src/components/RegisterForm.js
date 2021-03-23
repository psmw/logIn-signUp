import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router';
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

function RegisterForm() {
  const classes = useStyle();
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
      oldUrl.push('/user')
    } catch(err) {
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
            <Typography variant='h4' align='center'>Cadastro de novo usuário</Typography>
            <div className={classes.formHolder}>
              <form onSubmit={register} className={classes.logInForm}>
                <input 
                  type='email' 
                  placeholder='e-mail' 
                  onChange={(e) => setEmail(e.target.value)} 
                  value={email}
                  className={classes.formMargin}
                />
                <input 
                  type='password' 
                  placeholder='digite sua senha'
                  onChange={(e) => setPassword(e.target.value)} 
                    value={password}
                    className={classes.formMargin} 
                  />
                <input 
                  type='password' 
                  placeholder='confirme sua senha' 
                  onChange={(e) => setPasswordVerification(e.target.value)} 
                  value={passwordVerification} 
                  className={classes.formMargin} 
                />
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
                  type='number' 
                  placeholder='cpf' 
                  onChange={(e) => setCpf(e.target.value)} 
                  value={cpf} 
                  className={classes.formMargin} 
                />
                <input 
                  type='number' 
                  placeholder='pis' 
                  onChange={(e) => setPis(e.target.value)} 
                  value={pis} 
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
                <button type='submit'>Registrar</button>
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

export default RegisterForm;
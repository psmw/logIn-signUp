import React, { useContext, useState } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';
import { useHistory } from 'react-router';
import { makeStyles, Grid, Typography, Hidden } from '@material-ui/core';
import { Link } from 'react-router-dom';

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

function LogIn() {
  const classes = useStyle();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const getLoggedIn = useContext(AuthContext)
  const oldUrl = useHistory()

  async function logIn(e) {
    e.preventDefault()

    try {
      const logInData = {
        email, 
	      password 
      }

      await axios.post('http://localhost:5001/auth/login', logInData)
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
          <Grid item sm={2} md={4} />
        </Hidden>
        <Grid item xs={12} sm={8} md={4} spacing={2}>
          <div className={classes.formCard}>            
            <Typography variant='h4' align='center'>Olá visitante</Typography>
            <div className={classes.formHolder}>
              <form onSubmit={logIn} className={classes.logInForm}>
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
                <div className={classes.actionHolder}>
                  <button type='submit'>Registrar</button>
                  <Typography variant='body2'><Link to='/register'>Cadastre-se</Link></Typography>             
                </div>
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

export default LogIn;
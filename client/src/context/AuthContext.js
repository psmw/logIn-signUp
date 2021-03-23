import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [ logIn, setLogIn ] = useState(undefined)

  async function getAuth() {
    const authResponse = await axios.get('http://localhost:5001/auth/loggedIn')
    setLogIn(authResponse.data)
  }

  useEffect(() => {
    getAuth()
  }, [])
  return (
    <AuthContext.Provider value={ { logIn, getAuth } }>
      { props.children }
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthContextProvider }

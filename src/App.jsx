import { useState } from 'react'
import Navbar from './components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import Logout from './components/Logout';
import Login from './components/Login';

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    /** pasando la props name del componente Navbar */
    <div>
      {isAuthenticated ? (
        <>
          <Navbar name="Evelyn Sofia"/>
          <Logout />
        </>
      ) : (
        <Login />
      )}
        
    </div>
  )
}

export default App

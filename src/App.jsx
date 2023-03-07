import { useState } from 'react'
import Navbar from './components/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import Login from './components/Login';

function App() {
  const { user, isAuthenticated } = useAuth0();
  /** direccion local de nuestro proyecto */
  console.log(window.location.origin)
  return (
    /** pasando la props name del componente Navbar */
    <div>
      {isAuthenticated ? (
        <>
          <Navbar name={user.name}/>
        </>
      ) : (
        
        <Login />
      )}
        
    </div>
  )
}

export default App

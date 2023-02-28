import { useState } from 'react'
import Navbar from './components/Navbar'
import ListaPokemon from './components/ListaPokemon'

function App() {
  return (
    /** pasando la props name del componente Navbar */
    <div>
        <Navbar name="Evelyn Sofia"/>
        <ListaPokemon />
    </div>
  )
}

export default App

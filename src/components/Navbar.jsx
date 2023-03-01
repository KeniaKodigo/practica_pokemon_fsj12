import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import ListaPokemon from './ListaPokemon'
import Formulario from './Formulario'

/** pasando por parametro las props */
export default function Navbar(props) {
    /**
     * this.props.nombre
     * constructor(props)
     */

    /**
     * Manejo de rutas REACT ROUTER
     * <BrowserRouter/> : Rama principal o contenedor principal de las rutas, porque dentro del componente se maneja las rutas 
     * <Routes />: Contenedor subprincipal donde asignaremos las rutas del nav
     * <Route />: Asignamos ruta por ruta para el nav
     */
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* pasando la prop name en el menu */}
                    <a className="navbar-brand" href="#">Bienvenido, {props.name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/**
                         * Componente <Link/> Hace referencia a las rutas que creamos
                         * propiedad to => asignamos el nombre del a ruta (path)
                         */}
                        <Link to="/">Home</Link>
                        <Link to="/formulario">Formulario</Link>
                    </div>
                    </div>
                </div>
            </nav>
            <Routes>
                {/** asignando las rutas Home y formulario 
                 * path => nombre de la ruta que va ser referencia al link del nav
                 * element => asignamos el componente en el que se va dirigir la ruta
                */}
                <Route path='/' element={<ListaPokemon />}/>
                <Route path='/formulario' element={<Formulario />}/>
            </Routes>
        </BrowserRouter>
    )
}


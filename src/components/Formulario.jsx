import React, { useState } from 'react'

export default function Formulario() {
    /** estado para obtener informacion del pokemon en base a su nombre */
    const [pokemon, setPokemon] = useState({});
    /** estado para obtener el nombre del pokemon */
    const [nombre, setNombre] = useState(""); 
    /** estado para obtener las imagenes de cada pokemon */
    const [imagen, setImagen] = useState({});

    const obtenerPokemonByName = async () => {
        /** hacemos referencia al nombre que manejamos en el estado para obtener informacion de dicho pokemon */
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
        const datos = await respuesta.json();
        setPokemon(datos);
        setImagen(datos.sprites);
    }

    /** capturando el nombre del pokemon por medio de un input */
    const handleName = (e) => {
        /** capturando el value del input */
        //console.log(e.target.value);
        /** llamando al estado nombre para guardar el value del input */
        setNombre(e.target.value);
    }
    /** asignando el metodo del formulario */
    const handleSubmit = (e) => {
        obtenerPokemonByName();
        /** cancelando el boton submit */
        e.preventDefault();
    }

    console.log(pokemon);
    return (
        <div className='container'>
            <h1 className='text-center fst-italic'>Encuentra a tu Pokemon</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Ingresa el nombre del pokemon</label>
                <input type="text" placeholder='Ingresa Pokemon' className='form-control' onChange={handleName}/><br></br>
                <button className='btn btn-dark' type='submit'>Capturar Pokemon</button>
            </form><br></br>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <img src={imagen.front_default} alt="" />
                </div>
            </div>
        </div>
    )
}

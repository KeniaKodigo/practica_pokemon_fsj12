import React, { useEffect, useState } from 'react'

export default function Tarjeta(props) {
    /**
     * estamos pasando las props que provienen el estado de pokemones del componente
     * ListaPokemon.jsx
     */

    //estado donde guardar informacion de un pokemon
    const [pokemon, setPokemon] = useState({});

    /** obteniendo por medio del fetch cada url de cada pokemon */
    const obtenerPokemonByUrl = async (url) => {
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        //console.log(datos.results); //results es el atributo donde esta el arreglo de los pokemones
        /** actualizando el estado con la informacion del api */
        setPokemon(datos);
    }

    useEffect(() => {
        /** pasamos por las props la url de cada pokemon */
        obtenerPokemonByUrl(props.url);
    }, []);

    console.log(pokemon);
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.url}</p>
        </div>
    )
}

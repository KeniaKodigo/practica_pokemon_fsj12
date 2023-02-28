import React from 'react'
import { useState, useEffect } from 'react'
import Tarjeta from './Tarjeta'

export default function ListaPokemon() {
    /** estado para guardar la lista de los pokemones */
    /** utilizando el hooks useState(), el estado tendra un arreglo de 2 posiciones
     * [0] => es el estado donde guarda y como empieza
     * [1] => es el estado que se va actualizando
    */

    const [pokemones, setPokemones] = useState([]);

    /** creando metodo para obtener la api pokemon 
     * trabajando con una funcion asincrona porque nos estamos conectando a una api de otro servidor
    */
    const obtenerPokemones = async () => {
        let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
        let datos = await respuesta.json();
        //console.log(datos.results); //results es el atributo donde esta el arreglo de los pokemones
        /** actualizando el estado con la informacion del api */
        setPokemones(datos.results);

    }

    /** Hook que maneja 2 parametros
     * 1 parametro => hacer efecto a un estado, metodo
     * 2 parametro => es el proceso del renderizado/ [] / vacio
     * 
     * El useEffect hace efecto en el estado o metodo para renderizarlos en la interfaz
     * este hook hace los 3 ciclos de vida: montar, actualizar y desmontar
     */
    useEffect(() => {
        obtenerPokemones();
    }, []);

    console.log(pokemones); //llamando al estado para verificar si contiene los pokemones
    return (
        <div>
            <h1>Lista Pokemones</h1>
            <div className='row'>
                {
                    pokemones.map((personajes, indice) => {
                        /**
                         * Enviando la informacion del estado a otro componente mediante las props
                         */
                        return <Tarjeta key={indice} {...personajes}/>
                    })
                }
            </div>
        </div>
    )
}

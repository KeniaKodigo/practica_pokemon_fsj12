import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CardPokemon from './CardPokemon'

export default function ListPokemones() {
    /**
     * axios: Es una libreria para peticiones HTTP
     * axios.get() => peticion para obtener la informacion pokemones
     * axios.post() => envio de datos
     * axios.put() => actualizacion de los datos
     * axios.delete() => eliminamos todos los datos
     */

    //declarando el estado
    const [listPokemon, setListPokemon] = useState([]);

    //metodo para obtener todos los pokemones con axios
    const obtenerPokemones2 = () =>{
        //haciendo la peticicon con axios
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
        .then((response) => {
            console.log(response.data.results);
            setListPokemon(response.data.results);
        }).catch((error) => {
            console.log(error);
        })
    }


    /** montando el metodo obtenerPokemones2() */
    useEffect(() => {
        obtenerPokemones2();
    }, [])

    return (
        <div>
            <div className='container'>
                <h1 className='text-center fst-italic'>Lista Pokemones - Parte 2</h1>
                <div className='row'>
                    {
                        listPokemon
                        /*.filter((personaje) => personaje.name == "pikachu")*/
                        .map((pokemones, indice) => {
                            /**
                             * Enviando la informacion del estado a otro componente mediante las props
                             */
                            return (
                                <div className='col-md-4 mt-4'>
                                    <CardPokemon key={indice} poke={pokemones}/>
                                    {/*<h1>{pokemones.url}</h1>*/}
                            </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

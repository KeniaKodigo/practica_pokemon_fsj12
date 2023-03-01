import React, { useEffect, useState } from 'react'

export default function Tarjeta(props) {
    /**
     * estamos pasando las props que provienen el estado de pokemones del componente
     * ListaPokemon.jsx
     */

    //estado donde guardar informacion de un pokemon
    const [pokemon, setPokemon] = useState({});
    //estado para el manejo de imagenes del pokemon
    const [sprites, setSprites] = useState({});
    //estado para el manejo de especies en pokemon
    const [species, setSpecies] = useState({});

    /** obteniendo por medio del fetch cada url de cada pokemon */
    const obtenerPokemonByUrl = async (url) => {
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        //console.log(datos.results); //results es el atributo donde esta el arreglo de los pokemones
        /** actualizando el estado con la informacion del api */
        setPokemon(datos);
        /** almacenamos la informacion directa de las imagenes de la url de cada pokemon */
        setSprites(datos.sprites);
        /** almacenamos la informacion directa de cada especie de pokemon */
        setSpecies(datos.species);
    }

    useEffect(() => {
        /** pasamos por las props la url de cada pokemon */
        obtenerPokemonByUrl(props.url);
    }, []);

    console.log(sprites);
    /** idModal hace referencia al id de cada pokemon para que cada uno tenga un modal propio */
    const idModal = `#${pokemon.id}`;

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{pokemon.name}</h5>
                    <img src={sprites.front_default} alt="" />
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                        Ver mas Info
                    </button>
                </div>
            </div>
            
            {/** apartado del modal */}
            <div className="modal fade" id={pokemon.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{pokemon.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={sprites.back_shiny} alt={pokemon.name} />
                        <p><b>ID: {pokemon.id}</b></p>
                        <p><b>Height: {pokemon.height}</b></p>
                        <p><b>weight: {pokemon.weight}</b></p>
                        <p><b>species: {species.name}</b></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

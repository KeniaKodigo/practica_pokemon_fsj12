import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CardPokemon({poke}) {
    /** estado para cada pokemon */
    const [pokes, setPokes] = useState({});
    const [sprites, setSprites] = useState({});
    const [species, setSpecies] = useState({});


    const obtenerPokemonByUrl2 = (url) => {
        axios.get(url).then((response) => {
            setPokes(response.data);
            setSprites(response.data.sprites);
            setSpecies(response.data.species);
        })
    }

    useEffect(() => {
        obtenerPokemonByUrl2(poke.url);
    }, [])

    const idModal = `#${pokes.id}`;
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{pokes.name}</h5>
                    <img src={sprites.front_default} alt="" />
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                        Ver mas Info
                    </button>
                </div>
            </div>
            
            {/** apartado del modal */}
            <div className="modal fade" id={pokes.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{pokes.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={sprites.back_shiny} alt={pokes.name} />
                        <p><b>ID: {pokes.id}</b></p>
                        <p><b>Height: {pokes.height}</b></p>
                        <p><b>weight: {pokes.weight}</b></p>
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

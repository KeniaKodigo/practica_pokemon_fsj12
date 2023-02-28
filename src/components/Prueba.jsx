import React, { useState } from 'react'

const [personas, setPersonas] = useState(datos);
const datos = [
    {
        nombre: "kenia",
        apellido: "paiz"
    },
    {
        nombre: "kenia",
        apellido: "paiz"
    },
    {
        nombre: "kenia",
        apellido: "paiz"
    },
]

const obtenerPersona = () => {
    personas.map()
}

/**
 * 
 * metodos y peticiones sincronos => la informacion que obtenemos esta localmente
 * metodos y peticiones asincronas => peticiones donde la informacion esta en otro sistema, servidor
 */

export default function Prueba() {
    return (
        <div>Prueba</div>
    )
}

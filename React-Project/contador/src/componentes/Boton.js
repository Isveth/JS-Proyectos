import React from 'react'
import '../Estilos/Boton.css'
function Boton({ texto, esDeClic, manejarClic}) {
    return (
        <button 
            className={esDeClic ? 'boton-clic' : 'boton-reinicio'}
            onClick={manejarClic}>
            {texto}
        </button>
    )
}

export default Boton;
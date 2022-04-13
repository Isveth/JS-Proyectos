import React from 'react';
import '../Estilo/Testimonio.css';

function Testimonio(props){
  return (
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'src={require(`../Imagenes/${props.imagen}.PNG`)} alt={`${props.imagen}`} />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre'>{props.nombre}</p>
        <p className='coleccion'>{props.coleccion}</p>
        <p className='artista'>Pintado por {props.artista}</p>
        <p className='proposito'>{props.proposito}</p>
      </div>
    </div>
  );
}

export default Testimonio;
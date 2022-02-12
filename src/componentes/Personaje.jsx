import React from 'react';

function Personaje(props) {
  return (
    <div>
      <p><b>Nombre:</b> {props.name}</p>
      <p><b>Genero:</b> {props.genero}</p>
      <img alt='imagen-personaje' src={props.foto}></img>
    </div>
  );
}

export default Personaje;

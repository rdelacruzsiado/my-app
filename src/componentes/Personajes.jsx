import React, { useEffect, useState } from "react";
import axios from "axios";
import Personaje from "./Personaje";
import '../App.css';

function Personajes() {
  const [pagina, setPagina] = useState(1);
  const [buscar, setBuscar] = useState(false);
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    // Petición
    async function request() {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`);

      setPersonajes(res.data.results);
    }

    request();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buscar]);

  const handleChange = (e) => {
    setPagina(e.target.value);
  }

  const handleClick = () => {
    setBuscar(!buscar);
  }

  return (
    <div>
      <input type="text" value={pagina} onChange={handleChange} />
      <button onClick={handleClick}>Buscar</button>
      {personajes.length > 0 ? (
        personajes.map((personaje, index) => (
          <Personaje
            key={`personaje${index + 1}`}
            name={personaje.name}
            genero={personaje.gender}
            foto={personaje.image}
          />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Personajes;

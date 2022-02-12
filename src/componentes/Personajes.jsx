import React, { useEffect, useState } from "react";
import Personaje from "./Personaje";

function Personajes() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    // Petición
    setTimeout(
      () =>
        setPersonajes([
          { name: "Andŕes" },
          { name: "Rick" },
          { name: "Morty" },
        ]),
      1000
    );
  }, []);

  return (
    <div>
      {personajes.length > 0 ? (
        personajes.map((personaje, index) => (
          <Personaje key={`personaje${index + 1}`} name={personaje.name} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Personajes;

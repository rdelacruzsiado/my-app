import React, { useEffect, useState } from "react";

function NuevoComponente() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Montado');

    return () => console.log('Desmontado');
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>boton</button>
      <p>Count: {count}</p>
    </>
  );
}

export default NuevoComponente;

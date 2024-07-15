import React from 'react';
import '../css/Mensaje.css';  // Importamos el CSS

function Mensaje({ mensaje, tipo }) {
  return (
    <div className={`mensaje ${tipo}`}>
      <p>{mensaje}</p>
    </div>
  );
}

export default Mensaje;

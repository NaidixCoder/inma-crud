// AgregarProducto.js

import React, { useState } from 'react';

const AgregarProducto = () => {
  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');

  const handleAgregarProducto = () => {
    // Lógica para agregar un nuevo producto
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form>
        <label>
          Nombre:
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Precio:
          <input type="text" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleAgregarProducto}>
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default AgregarProducto;

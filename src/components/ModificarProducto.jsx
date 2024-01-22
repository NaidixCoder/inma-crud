// ModificarProducto.js

import { useState } from 'react';

const ModificarProducto = () => {
  const [productoId, setProductoId] = useState('');
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevoPrecio, setNuevoPrecio] = useState('');

  const handleModificarProducto = () => {
    // Lógica para modificar un producto existente
  };

  return (
    <div>
      <h2>Modificar Producto</h2>
      <form>
        <label>
          ID del Producto:
          <input type="text" value={productoId} onChange={(e) => setProductoId(e.target.value)} />
        </label>
        <br />
        <label>
          Nuevo Nombre:
          <input type="text" value={nuevoNombre} onChange={(e) => setNuevoNombre(e.target.value)} />
        </label>
        <br />
        <label>
          Nuevo Precio:
          <input type="text" value={nuevoPrecio} onChange={(e) => setNuevoPrecio(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleModificarProducto}>
          Modificar Producto
        </button>
      </form>
    </div>
  );
};

export default ModificarProducto;

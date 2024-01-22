// Admin.js

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AgregarProducto from './AgregarProducto';
import ModificarProducto from './ModificarProducto';

const Admin = () => {
  return (
    <div>
      <h2>Panel de Administración</h2>
      <nav>
        <ul>
          <li><Link to="/admin/agregar-producto">Agregar Producto</Link></li>
          <li><Link to="/admin/modificar-producto">Modificar Producto</Link></li>
          {/* Agrega más enlaces para otras secciones del panel */}
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="agregar-producto" element={<AgregarProducto />} />
        <Route path="modificar-producto" element={<ModificarProducto />} />
        {/* Agrega más rutas para otras secciones del panel */}
      </Routes>
    </div>
  );
};

export default Admin;

import React, { useState } from "react";
import Inicio from "./pages/Inicio";
// import Productos from "./componentes/Productos";
import ProductoDetalle from "./pages/DetalleProdutos";
import Footer from "./componentes/Footer";
import { Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Carrito from "./componentes/Carrito";

import Menu from "./pages/Menu";
import Formulario from "./componentes/Formulario";
import RutaProtegida from "./componentes/Rutaprotegida";
import Admin from "./componentes/Admin";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Menu />} />
        {/* <Route path="/productos" element={<Productos />} /> */}
        <Route path="/productos/:id" element={<ProductoDetalle />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/contacto" element={<Formulario />} />

        <Route
          path="/carrito"
          element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          }
        />
        <Route
          path="/admin"
          element={
            <RutaProtegida>
              <Admin/>
            </RutaProtegida>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;

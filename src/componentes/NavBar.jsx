import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contex/AuthContex";

const NavBar = () => {
  const { usuario } = useAuthContext();
  const esAdmin = usuario === "admin";
  return (
    <nav>
      <ul>
        <li >
          <Link to="/">Inicio</Link>
          <Link to="/servicios">Menu</Link>
          <Link to="/productos">Productos</Link>
          <Link to="/contacto">Formulario de contacto</Link>
          {esAdmin && (
            <Link to="/admin" >
              Admin
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

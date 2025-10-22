import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/servicios">Menu</Link></li>
            <li><Link to="/productos">Productos</Link></li>
            <li><Link to="/contacto">Formulario</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar
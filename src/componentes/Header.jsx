
import React, { useContext, useState } from "react";
import Navbar from '../componentes/NavBar';
import styles from '../componentes/Header.module.css';
import BagIcon from '../assets/BagIcon';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../contex/AuthContex';
import { CarritoContext } from '../contex/CarritoContext';
import CodeCoffeeLogo from "../assets/CodeCofeeLogo";

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const { usuario, logout } = useAuthContext();
  const estaLogeado = !!usuario;
  const contadorEnCarrito = carrito.length;

  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <header className={styles.header}>

  {/* CONTENEDOR PRINCIPAL EN DESKTOP */}
  <div className={styles.headerMain}>
    
    {/* LOGO */}
    <div className={styles.logo}>
      <CodeCoffeeLogo />
    </div>

    {/* NAVBAR DESKTOP */}
    <div className={styles.navbarDesktop}>
      <Navbar />
    </div>

    {/* ICONOS A LA DERECHA */}
    <div className={styles.iconsContainer}>
      {estaLogeado ? (
        <button onClick={logout} className={styles.login}>Cerrar Sesión</button>
      ) : (
        <Link to="/login">
          <button className={styles.login}>Ingresá</button>
        </Link>
      )}

      <div className={styles.iconoDeCarrito}>
        <Link to="/carrito">
          <BagIcon className={styles.icono} />
          {contadorEnCarrito > 0 && (
            <span className={styles.contadorDeCarrito}>
              {contadorEnCarrito}
            </span>
          )}
        </Link>
      </div>
    </div>

    {/* HAMBURGUESA SOLO MOBILE */}
    <div className={styles.hamburger} onClick={toggleMenu}>
      ☰
    </div>

  </div>

  {/* NAVBAR MOBILE */}
  <div className={`${styles.navbarMobile} ${menuAbierto ? styles.open : ""}`}>
    <Navbar />
  </div>

</header>

 
  );
};

export default Header;

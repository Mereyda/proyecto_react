// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Carrito from "./Carrito";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetch("https://68d482e3214be68f8c696ae2.mockapi.io/api/productos")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error!", error);
        setError("Hubo un problema al cargar los productos.");
        setCargando(false);
      });
  }, []);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    alert(`Producto ${producto.nombre} agregado al carrito`);
  };

  // eliminar un producto por id
  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((item) => item.id !== id);
    setCarrito(nuevoCarrito);
  };

  // Vaciar todo el carrito
  const vaciarCarrito = () => {
    setCarrito([]);
  };

  if (cargando) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  const total = carrito.reduce((sum, item) => sum + Number(item.precio), 0);

  return (
    <>
      <ul id="lista-productos">
        {productos.map((producto) => (
          <li key={producto.id}>
            <h2>{producto.nombre}</h2>
            <br />
            Descripción: {producto.descripcion}
            <br />
            Precio: ${producto.precio}
            <br />
            <img src={producto.avatar} alt={producto.nombre} width="80%" />
            <Link to={`/productos/${producto.id}`} state={{ producto }}>
              <button>Más detalles</button>
            </Link>
            <button onClick={() => agregarAlCarrito(producto)}>Comprar</button>
          </li>
        ))}
      </ul>
      <Link to="/"><button>Volver al Inicio</button></Link>

      <hr />
      <h2>🛒 Carrito de Compras</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
        
          {carrito.map((item) => (
            <div key={item.id}>
              {item.nombre} - ${Number(item.precio).toFixed(2)}
              {/* Boton nuevo para eliminar un solo producto */}
              <button onClick={vaciarCarrito}>Vaciar carrito</button>
              <button onClick={() => eliminarDelCarrito(item.id)}>
                Eliminar
              </button>
            </div>
          ))}

          <div>
            <hr />
            <strong>Total: ${Number(total).toFixed(2)}</strong>
          </div>
          

          
          
        </>
      )}
    </>
  );
}
export default Productos;
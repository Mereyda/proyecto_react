
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useProductosContext } from "../contex/ProductosContext";
import "./Productos.css";

import { CarritoContext } from "../contex/CarritoContext";






const Productos = () => {
  // Contexto
  const { productos, cargando, error } = useProductosContext();
  const { agregarAlCarrito } = useContext(CarritoContext);


  // 🔍 Búsqueda
  const [busqueda, setBusqueda] = useState("");

  // 📄 Paginación
  const [pagina, setPagina] = useState(1);
  const productosPorPagina = 8; // puedes cambiarlo

  if (cargando) return "Cargando productos...";
  if (error) return error;

  // 1️⃣ Filtrado por búsqueda
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  // 2️⃣ Lógica de paginación
  const indexInicio = (pagina - 1) * productosPorPagina;
  const indexFin = indexInicio + productosPorPagina;

  const productosPaginados = productosFiltrados.slice(indexInicio, indexFin);
  const totalPaginas = Math.ceil(
    productosFiltrados.length / productosPorPagina
  );

 return (
  <div className="productos-container">
    
    {/* Buscador */}
    <input
      type="text"
      placeholder="Buscar producto..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
      className="buscador"
    />

    {/* Grid */}
    <div className="productos-grid">
      {productosPaginados.map((producto) => (
        <div className="producto-card" key={producto.id}>
          
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="producto-img"
          />

          <h3>{producto.nombre}</h3>
          <p>${producto.precio}</p>

          <Link to={`/productos/${producto.id}`} className="btn-detalle">
            Ver detalle
          </Link>

          {/* BOTÓN QUE FALTABA */}
          <button
            className="btn-agregar"
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>

    {/* Paginación */}
    <div className="paginacion">
      <button
        onClick={() => setPagina(pagina - 1)}
        disabled={pagina <= 1}
      >
        ◀ Anterior
      </button>

      <span>Página {pagina} de {totalPaginas}</span>

      <button
        onClick={() => setPagina(pagina + 1)}
        disabled={pagina >= totalPaginas}
      >
        Siguiente ▶
      </button>
    </div>
  </div>
)};

export default Productos;
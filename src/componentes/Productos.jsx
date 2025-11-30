// import { useContext } from "react";
// import { Link } from "react-router-dom";

// import { useProductosContext } from "../contex/ProductosContext";

// const Productos = () => {
//   // Usamos los contextos
//   const { productos, cargando, error } = useProductosContext();
  
//   if (cargando) return "Cargando productos...";
//   if (error) return error;

//   return (
//     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//       <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//         Productos
//       </h2>
//       <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//         {productos.map((producto) => (
//           <div key={producto.id} className="group relative">
//             <img
//               alt={producto.nombre}
//               src={producto.imagen}
//               className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
//             />
//             <div className="mt-4 flex justify-between">
//               <div>
//                 <h3 className="text-sm text-gray-700">
//                   <Link to={`/productos/${producto.id}`}>
//                     <span aria-hidden="true" className="absolute inset-0" />
//                     {producto.nombre}
//                   </Link>
//                 </h3>
//               </div>
//               <p className="text-sm font-medium text-gray-900">
//                 ${producto.precio}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Productos;
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useProductosContext } from "../contex/ProductosContext";

const Productos = () => {
  // Contexto
  const { productos, cargando, error } = useProductosContext();

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
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Productos
      </h2>

      {/* 🔍 Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar producto..."
        className="mt-4 w-full rounded-md border px-4 py-2 shadow-sm focus:outline-none focus:ring"
        value={busqueda}
        onChange={(e) => {
          setBusqueda(e.target.value);
          setPagina(1); // volver a la primera página cuando busco
        }}
      />

      {/* 🧩 Grid de productos */}
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productosPaginados.map((producto) => (
          <div key={producto.id} className="group relative">
            <img
              alt={producto.nombre}
              src={producto.imagen}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <Link to={`/productos/${producto.id}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {producto.nombre}
                  </Link>
                </h3>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${producto.precio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 📄 Controles de paginación */}
      <div className="mt-8 flex justify-center items-center gap-4">
        <button
          className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50"
          onClick={() => setPagina(pagina - 1)}
          disabled={pagina === 1}
        >
          Anterior
        </button>

        <span className="text-lg font-medium">
          Página {pagina} de {totalPaginas}
        </span>

        <button
          className="px-4 py-2 rounded bg-gray-300 disabled:opacity-50"
          onClick={() => setPagina(pagina + 1)}
          disabled={pagina === totalPaginas || totalPaginas === 0}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Productos;

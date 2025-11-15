import FormProducto from "./FormProducto";
import GestionProductos from "./GestionProductos";

const Admin = () => {
  return (
    <div>
      <h1> Gestion de productos</h1>
      < GestionProductos />
      < FormProducto />
    </div>
  )
}

export default Admin;
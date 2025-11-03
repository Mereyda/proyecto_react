import { Navigate } from "react-router-dom";
import { useAuthContext } from "../contex/AuthContex";
// se ve en clase 7 no se pide para la Pre-entrega
const RutaProtegida = ({ children }) => {
  const { usuario } = useAuthContext();

  if (!usuario) return <Navigate to="/login" replace />;

  return children;
};

export default RutaProtegida;

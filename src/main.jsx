import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";

import { CarritoProvider } from "./contex/CarritoContext.jsx";
import { AuthProvider } from "./contex/AuthContex.jsx";
import { ProductosProvider } from "./contex/ProductosContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProductosProvider>
          <CarritoProvider>
            <App />
          </CarritoProvider>
        </ProductosProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);

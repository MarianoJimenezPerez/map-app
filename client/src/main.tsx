import React from "react";
import ReactDOM from "react-dom/client";
import PublicRoutes from "./routes/PublicRoutes.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PublicRoutes />
    </BrowserRouter>
  </React.StrictMode>
);

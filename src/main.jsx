import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./views/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

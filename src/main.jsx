import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./view/header/Navbar.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./view/Home.jsx";
import About from "./view/About.jsx";
import Work from "./view/Work.jsx";
import Router from "./routes/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);

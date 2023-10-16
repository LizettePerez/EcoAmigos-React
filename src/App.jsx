/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import "tailwindcss/tailwind.css";
import "./index.css";
import { Footer } from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Comunidad from "./pages/Comunidad";
import Eventos from "./pages/Eventos";
import Contact from "./pages/Contacto";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

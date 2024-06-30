import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { Route, Routes } from "react-router-dom";
import CaardDDatail from "./Component/CaardDDatail";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartdetail" element={<CaardDDatail />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

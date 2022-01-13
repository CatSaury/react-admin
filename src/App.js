import React from "react";
import { Routes, Route } from "react-router-dom";
import { Component } from "react/cjs/react.production.min";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { isAuth } from "./utils";

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<Home />}/>
    </Routes>
  );
}

export default App;

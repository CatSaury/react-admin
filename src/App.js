import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";


function App() {
  return (
    <Routes>

      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />}>
        <Route index element={<Dashboard />} />
        <Route path="user" element={<User />} />
      </Route>

    </Routes>
  );
}

export default App;

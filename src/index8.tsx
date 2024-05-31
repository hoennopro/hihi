import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Admin from "./bai8/Admin";
import Account from "./bai8/Account";
import Product from "./bai8/Product";
import Navigation from "./bai8/Navigation";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

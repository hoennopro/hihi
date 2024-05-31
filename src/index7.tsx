import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./bai7/Home";
import Product from "./bai7/Product";
import Detail from "./bai7/Detail";
import Header from "./bai7/Header";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

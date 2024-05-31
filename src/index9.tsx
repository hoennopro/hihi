import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomLink from "./bai9/CustomLink";
import HomePage from "./bai9/HomePage";
import NotFound from "./bai9/NotFound";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CustomLink />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

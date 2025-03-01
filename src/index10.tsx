import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListUser from "./bai10/ListUser";
import UserDetail from "./bai10/UserDetail";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/user-detail/:id" element={<UserDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

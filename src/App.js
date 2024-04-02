import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Problems } from "./components";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/problem" element={<Problems />} />
      </Routes>
    </div>
  );
}

export default App;

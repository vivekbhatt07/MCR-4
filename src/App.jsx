import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";

const App = () => {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postDetail/:postID" element={<Detail />} />
      </Routes>
    </div>
  );
};

export default App;

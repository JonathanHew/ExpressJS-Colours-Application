import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

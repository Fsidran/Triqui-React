import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { SharedValueProvider } from "./SharedValueContext";

function App() {
  return (
    <div className="globalContainer">
      <SharedValueProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Results" element={<Results />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </SharedValueProvider>
    </div>
  );
}

export default App;

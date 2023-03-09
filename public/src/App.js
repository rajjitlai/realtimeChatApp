import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";

export default function App() {
  return
  {
    <BrowserRouter>
    <Routes>

      {/* Route 1 */}
      <Route path="/register" element={<Register />} />
      {/* X Route 1 */}

    </Routes>
  </BrowserRouter >;
  }
}

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Chat from "./pages/Chat";

export default function App() {
  return
  {
    <BrowserRouter>
      <Routes>

        {/* Route 1 */}
        <Route path="/register" element={<Register />} />
        {/* X Route 1 */}

        {/* Route 2 */}
        <Route path="/login" element={<Login />} />
        {/* X Route 2 */}

        {/* Route 3 */}
        <Route path="/" element={<Chat />} />
        {/* X Route 3 */}
      </Routes>
    </BrowserRouter >;
  };
}

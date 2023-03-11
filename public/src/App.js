import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SetAvatar from "./pages/SetAvatar";

export default function App() {
  return (
    <BrowserRouter >
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

        {/* Route 4 */}
        <Route path="/setAvatar" element={<SetAvatar />} />
        {/* X Route 4 */}
      </Routes>
    </BrowserRouter >
  );
}

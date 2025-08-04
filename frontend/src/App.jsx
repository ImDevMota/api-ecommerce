import { useState } from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ListUsers from "./pages/ListUsers";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/list-users" element={<ListUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

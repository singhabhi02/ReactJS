import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Companies from "./Pages/Companies.jsx";
import Login from "./Pages/Login.jsx";
import Jobs from "./Pages/Jobs.jsx";
import Home from "./Pages/Home.jsx";
import Navbar from "./Pages/Navbar.jsx";



function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/companies" element={<Companies />} />
      <Route path="/login" element={<Login />} />
      <Route path="/jobs/:jobId" element={<Jobs />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
    </>
  );
}

export default App;

//     URL changes
//        |
// React router detects URL
//       |
// Matching component renders

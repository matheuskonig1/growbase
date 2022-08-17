import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Logout from "./pages/Logout";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

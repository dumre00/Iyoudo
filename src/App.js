import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import About from './components/About.js';
import User from './components/User.js';
import logo from './components/images/logo_web.png';
import './App.css';
import Image from  './components/images/logo_web.png';
import Registro from './components/Registro.js';
import Recover from './components/Recover.js';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="Header">
          <Link to="/" className="Header-title">
            <img src={Image} className="Header-logo" alt="Logo" />
            Iyoudo
          </Link>
          <nav className="Navbar">
            <ul className="Navbar-links">
              <li><a href="/login">Login</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recover" element={<Recover />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
    
  );
}


export default App;

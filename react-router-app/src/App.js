import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <header className="navbar">
        <h1 className="logo">TechCorp</h1>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        </Routes>
      </main>

      <footer className="footer">
        © 2025 TechCorp Solutions | React Router Demo
      </footer>
    </BrowserRouter>
  );
}

export default App;

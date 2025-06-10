import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Wine & Food</div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

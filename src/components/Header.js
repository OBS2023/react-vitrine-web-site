import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpeg'; 

const Header = () => (
  <header className="bg-dark text-white p-3 d-flex align-items-center">
    <div className="container d-flex justify-content-between align-items-center">
      <div className="logo">
        <Link className="nav-link text-white" to="/"><img src={logo} alt="Logo" style={{ height: '50px' }} /></Link>
      </div>
      <nav>
        <ul className="nav">
          <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/services">Services</Link></li>
          <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

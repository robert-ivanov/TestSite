import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import img from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="main-header">
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" onClick={handleLinkClick}>
            <img src={img} alt="Logo" />
          </NavLink>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={handleLinkClick} end>
            Home
          </NavLink>
          <NavLink to="/services" onClick={handleLinkClick}>
            Services
          </NavLink>
          <NavLink to="/projects" onClick={handleLinkClick}>
            Projects
          </NavLink>
          <NavLink to="/products" onClick={handleLinkClick}>
            Construction products
          </NavLink>
          <NavLink to="/about" onClick={handleLinkClick}>
            About us
          </NavLink>
          <NavLink to="/news" onClick={handleLinkClick}>
            News
          </NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </div>

        <div className="language-select">
          <select defaultValue="en">
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="hy">HY</option>
          </select>
        </div>

        <div className="burger" onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
    </header>
  );
};

export default Header;

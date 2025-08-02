import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false); // ✅ Close on link click

  return (
    <header className="main-header">
      <div className="navbar">
        <div className="logo">Logo</div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
          <Link to="/services" onClick={handleLinkClick}>Services</Link>
          <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
          <Link to="/products" onClick={handleLinkClick}>Construction products</Link>
          <Link to="/about" onClick={handleLinkClick}>About us</Link>
          <Link to="/news" onClick={handleLinkClick}>News</Link>
          <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
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

import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import img from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLinkClick = () => setIsOpen(false);

  // Handle scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // scroll down → hide
      } else {
        setShowHeader(true); // scroll up → show
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`main-header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/" onClick={handleLinkClick}>
            <img src={img} alt="Logo" />
          </NavLink>
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={handleLinkClick} end>Home</NavLink>
          <NavLink to="/services" onClick={handleLinkClick}>Services</NavLink>
          <NavLink to="/projects" onClick={handleLinkClick}>Projects</NavLink>
          <NavLink to="/products" onClick={handleLinkClick}>Construction products</NavLink>
          <NavLink to="/about" onClick={handleLinkClick}>About us</NavLink>
          <NavLink to="/news" onClick={handleLinkClick}>News</NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>Contact</NavLink>

          <div className="language-select mobile-only">
            <select defaultValue="en">
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="hy">HY</option>
            </select>
          </div>
        </div>

        <div className="language-select desktop-only">
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

import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const favoritesCount = useSelector(state => state.favorites.favorites.length);
  
  return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <BootstrapNavbar.Brand as={Link} to="/">Movie App</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/favorites" className="favorites-nav-link">
            <FaHeart className="favorites-icon" />
            <span className="favorites-count">{favoritesCount}</span>
          </Nav.Link>
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import logo from '../logo/logo.png';
import '../styles/Header.css';

function Header() {
  const logoProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 500,
  });

  const navProps = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 800,
  });

  return (
    <animated.header className="header" style={logoProps}>
      <nav className="nav" style={navProps}>
        <Link to="/">
          <animated.img src={logo} alt="Amajungle Logo" className="logo" />
        </Link>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </animated.header>
  );
}

export default Header;

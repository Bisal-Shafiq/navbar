// components/Header.tsx

"use client"

import Link from 'next/link';

import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <span>Navigation Bar</span>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰ {/* Hamburger menu icon */}
      </button>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/aboutus">About Us</Link></li>
          <li><Link href="/service">Services</Link></li>
          <li><Link href="/contactus">Contact us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

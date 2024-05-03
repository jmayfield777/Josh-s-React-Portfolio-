import React from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Navbar.module.css';
import { getImage } from '../utils/getImageHelper';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const currentPage = useLocation().pathname;

  return (
  <nav className={styles.navbar}>
    <a className={styles.title} href="/">Josh's Portfolio</a>
    <div className={styles.menu}>
      <img 
        className={styles.menuBtn} 
        src={menuOpen 
          ? getImage("Nav/closeIcon.png")
          : getImage("Nav/menuIcon.png")
        } 
        alt="menu-button" 
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
      onClick={() => setMenuOpen(false)}
      >
        <li>
          <Link
            to="/"
            className={currentPage === "/" ? "nav-link active" : "nav-link"}
          >
            Home 
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            className={currentPage === "/About" ? "nav-link active" : "nav-link"}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/Projects"
            className={currentPage === "/Projects" ? "nav-link active" : "nav-link"}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/Resume"
            className={currentPage === "/Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to="/Contact"
            className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
  );
};
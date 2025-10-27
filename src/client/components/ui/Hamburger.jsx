import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Hamburger.module.css"; // ✅ Import as module

const HamburgerMenu = ({ isLoggedIn, username, photoCount }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <div className={styles.hamburgerContainer}>
      {/* Hamburger Icon */}
      <button className={styles.hamburgerButton} onClick={toggleMenu} aria-label="Toggle Menu">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Slide-out Menu */}
      <div className={`${styles.sideMenu} ${open ? styles.open : ""}`}>
        <h2 className={styles.menuTitle}>📸 Forever Photos</h2>

        {isLoggedIn ? (
          <>
            <p className={styles.menuText}>Hi, {username}!</p>
            <p className={styles.menuSubtext}>{photoCount} Photos Shared</p>
            <Link to="/albums" className={styles.menuLink} onClick={toggleMenu}>
              Manage Albums
            </Link>
            <Link to="/upload" className={styles.menuLink} onClick={toggleMenu}>
              Upload Photo(s)
            </Link>
            <Link to="/logout" className={`${styles.menuLink} ${styles.logout}`} onClick={toggleMenu}>
              Log Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/" className={styles.menuLink} onClick={toggleMenu}>
              Welcome
            </Link>
            <Link to="/register" className={styles.menuLink} onClick={toggleMenu}>
              Register
            </Link>
            <Link to="/login" className={styles.menuLink} onClick={toggleMenu}>
              Login
            </Link>
          </>
        )}
      </div>

      {/* Dimmed Overlay */}
      {open && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </div>
  );
};

export default HamburgerMenu;

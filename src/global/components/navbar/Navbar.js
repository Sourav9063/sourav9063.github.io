import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect } from "react";

const Navbar = () => {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setActive(false);
    }
  }, []);

  return (
    <div className={styles.nav_wrap}>
      <nav className={styles.main_nav}>
        <Link
          className={`${isActive ? styles.hide : styles.show} ${styles.menu}  ${
            styles.pointer
          }`}
          onClick={toggleClass}
        >
          Menu
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            window.location.replace("/");
          }}
          className={`${isActive ? styles.show : styles.hide}`}
          to="/"
        >
          Home
        </Link>
        {/* <AnchorLink className={`${isActive ? styles.show : styles.hide}`} href="#about">About</AnchorLink> */}
        <a
          className={`${isActive ? styles.show : styles.hide}`}
          href="https://github.com/Sourav9063"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        {/* <AnchorLink href="#gallery">Gallery</AnchorLink> */}
        <Link className={`${isActive ? styles.show : styles.hide}`} to="/Cv">
          Resume
        </Link>
        {/* {user === "Student" && < >
            <Link to="/issue" state={{ forWhat: "Issue" }}>Issue</Link>
            <Link to="/issue" state={{ forWhat: "Payment" }}>Payment</Link>
          </>}
          {user !== 'Student' && user !== "" && user != null && <Link to="/issue_list">Current Issues</Link>
          } */}
        {window.innerWidth < 768 && (
          <Link
            className={`${isActive ? styles.show : styles.hide}  ${
              styles.pointer
            }`}
            onClick={toggleClass}
          >
            X
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useContext, useState } from "react";
import styles from "./Navbar.module.css"
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {

  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };



  return (

    <div className={styles.nav_wrap}>

      <nav className={styles.main_nav}>
        <div className={`${isActive ? styles.hide : styles.show} ${styles.menu}  ${styles.pointer}`}
          onClick={toggleClass}
        >Menu</div>
        <Link className={`${isActive ? styles.show : styles.hide}`} to="/">Home</Link>
        <AnchorLink className={`${isActive ? styles.show : styles.hide}`} href="#about">About</AnchorLink>
        <AnchorLink className={`${isActive ? styles.show : styles.hide}`} href="#projects">Projects</AnchorLink>
        {/* <AnchorLink href="#gallery">Gallery</AnchorLink> */}
        <Link className={`${isActive ? styles.show : styles.hide}`} to="/Cv">Resume</Link>
        {/* {user === "Student" && < >
            <Link to="/issue" state={{ forWhat: "Issue" }}>Issue</Link>
            <Link to="/issue" state={{ forWhat: "Payment" }}>Payment</Link>
          </>}
          {user !== 'Student' && user !== "" && user != null && <Link to="/issue_list">Current Issues</Link>
          } */}
        <div className={`${isActive ? styles.show : styles.hide}  ${styles.pointer}`} onClick={toggleClass} >X</div>

      </nav>

    </div>

  );
};

export default Navbar;

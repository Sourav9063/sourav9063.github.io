import React, { useContext } from "react";
import styles from "./Navbar.module.css"
import { Link, useLocation } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {


  return (

    <div className={styles.nav_wrap}>
      <nav className={styles.main_nav}>
        <Link to="/">Home</Link>
        <AnchorLink href="#about">About</AnchorLink>
        <AnchorLink href="#projects">Projects</AnchorLink>
        {/* <AnchorLink href="#gallery">Gallery</AnchorLink> */}
        <Link to="/Cv">Resume</Link>
        {/* {user === "Student" && < >
          <Link to="/issue" state={{ forWhat: "Issue" }}>Issue</Link>
          <Link to="/issue" state={{ forWhat: "Payment" }}>Payment</Link>
        </>}
        {user !== 'Student' && user !== "" && user != null && <Link to="/issue_list">Current Issues</Link>
        } */}
      </nav>
    </div>

  );
};

export default Navbar;

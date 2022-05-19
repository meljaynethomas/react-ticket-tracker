import React from 'react';
import styles from './NavBar.module.scss';
import logo from "../../assets/ticket.svg";

const NavBar = () => {
  return (
    <nav className={styles.navFlex}>
      <div className={styles.navFlex}>
        <img src={logo} alt="Ticket Tracker Logo" />
        <h1>Ticket Tracker</h1>
      </div>
    </nav>
  );
};

export default NavBar;
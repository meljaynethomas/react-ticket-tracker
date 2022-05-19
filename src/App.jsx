import React, { Component } from "react";
import styles from './App.module.scss';
import Employee from './components/Employee';
import NavBar from './components/NavBar';

import team from './data/team';

const App = () => {
  const getEmployeeJsx = (employee) => (
    <Employee key={employee.idEmployee} employee={employee} />
  );
 
  return (
    <>
      <section className={styles.nav}>
        <NavBar />
      </section>
      <section className={styles.content}>
        {team.map(getEmployeeJsx)}
      </section>
    </>
  );
};

export default App;

import React, { Component } from "react";
import styles from './App.module.scss';
import Employee from './components/Employee';

import team from './data/team';

const App = () => {
  const getEmployeeJsx = (employee) => (
    <Employee key={employee.idEmployee} employee={employee} />
  );

  
  return (
    <>
      <h1>Ticket Tracker</h1>
      <section className={styles.content}>
        {team.map(getEmployeeJsx)}
      </section>
    </>
  );
};

export default App;

import React, { Component } from "react";
import styles from './App.module.scss';
import Card from './components/Card';

import team from './data/team';

const App = () => {
  const getCardJsx = (employee) => (
    <Card key={employee.idEmployee} employee={employee} />
  );
  
  return (
    <>
      <h1>Ticket Tracker</h1>
      <section className={styles.content}>
        {team.map(getCardJsx)}
      </section>
    </>
  );
};

export default App;

import React, { useState } from 'react';
import styles from './Employee.module.scss';

const Employee = (props) => {

  const { strName, strRole } = props.employee;

  const [count, setCount] = useState(0);

  return (    
    <>
    <section className={styles.employeeInfo}>
      <h2>{strName}</h2>
      <h3>{strRole}</h3>
      <h1>Tickets</h1>
        <div className={styles.counter}>
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    </section>
    </>
  );
};

export default Employee;
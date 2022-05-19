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
        <div className={styles.tickets}>
          <h1 className={styles.ticketHeading}>Tickets</h1>
            <div>
              <button onClick={() => setCount(count - 1)}>-</button>
              <span className={styles.counter}>{count}</span>
              <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    </section>
    </>
  );
};

export default Employee;
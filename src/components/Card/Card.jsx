import React, { Component } from "react";
import styles from './Card.module.scss';

const Card = (props) => {
  const { strName, strRole } = props.employee;
  
  return (
    <section className={styles.employeeInfo}>
      <h2>{strName}</h2>
      <h3>{strRole}</h3>
      <h2>Counter</h2>
    </section>
  );
};

export default Card;
import React, { Component } from "react";
import styles from './Card.module.scss';

import Counter from "../Counter";

const Card = (props) => {
  const { strName, strRole } = props.employee;
   
  return (
    <section className={styles.employeeInfo}>
      <h2>{strName}</h2>
      <h3>{strRole}</h3>
      <div>
        <Counter />
      </div>
    </section>
  );
};

export default Card;
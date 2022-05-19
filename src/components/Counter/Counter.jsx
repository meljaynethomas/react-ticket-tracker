import React, { useState } from 'react';

import styles from './Counter.module.scss';


const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Tickets</h1>
        <div className={styles.counter}>
          <button onClick={() => setCount(count - 1)}>-</button>
          <p>{count}</p>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    </div>
  );
};

export default Counter
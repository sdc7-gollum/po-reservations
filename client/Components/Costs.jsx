import React from 'react';
import styles from './Costs.css';

const Costs = (props) => {
  return (
    <div>
      <ul className={styles.fee_lines}>
        <li>
          <span className={styles.left_item}>
            $139 x 17 nights
          </span>
          <span className={styles.right_item}>
            $2,363
          </span>
        </li>
        <li>
          <span className={styles.left_item}>
            Cleaning fee
          </span>
          <span className={styles.right_item}>
            $30
          </span>
        </li>
        <li>
          <span className={styles.left_item}>
            Service fee
          </span>
          <span className={styles.right_item}>
            $200
          </span>
        </li>
        <li>
          <span className={styles.left_item}>
            Occupancy taxes and fees
          </span>
          <span className={styles.right_item}>
            $227
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Costs;

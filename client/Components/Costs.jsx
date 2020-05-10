import React from 'react';
import styles from './Costs.css';

const Costs = (props) => {
  const { data, duration } = props;
  const { price, service, tax, cleaning } = data;
  console.log(props);
  if (duration) {
    return (
      <div>
        <ul className={styles.fee_lines}>
          <li>
            <span className={styles.left_item}>
              ${price} x {duration} night{duration > 1 ? 's' : ''}
            </span>
            <span className={styles.right_item}>
              ${price * duration}
            </span>
          </li>
          <li>
            <span className={styles.left_item}>
              Cleaning fee
            </span>
            <span className={styles.right_item}>
              ${cleaning}
            </span>
          </li>
          <li>
            <span className={styles.left_item}>
              Service fee
            </span>
            <span className={styles.right_item}>
              ${service}
            </span>
          </li>
          <li>
            <span className={styles.left_item}>
              Occupancy taxes and fees
            </span>
            <span className={styles.right_item}>
              ${tax}
            </span>
          </li>
        </ul>
      </div>
    );
  }
  return null;
};

export default Costs;

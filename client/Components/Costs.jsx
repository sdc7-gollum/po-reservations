import React from 'react';
import PropTypes from 'prop-types';
import styles from './Costs.css';

const Costs = (props) => {
  const { data, duration } = props;
  const {
    price, service, tax, cleaning,
  } = data;
  if (duration) {
    return (
      <div className={styles.costContainer}>
        <div className={styles.fee_lines}>
          <span className={styles.left_item}>
            {`$${price} x ${duration} night${duration > 1 ? 's' : ''}`}
          </span>
          <span className={styles.right_item}>
            $
            {price * duration}
          </span>
        </div>
        <div className={styles.fee_lines}>
          <span className={styles.left_item}>
            Cleaning fee
          </span>
          <span className={styles.right_item}>
            $
            {cleaning}
          </span>
        </div>
        <div className={styles.fee_lines}>
          <span className={styles.left_item}>
            Service fee
          </span>
          <span className={styles.right_item}>
            $
            {service}
          </span>
        </div>
        <div className={styles.fee_lines}>
          <span className={styles.left_item}>
            Occupancy taxes and fees
          </span>
          <span className={styles.right_item}>
            $
            {tax}
          </span>
        </div>
        <div className={styles.separator}>
          <span className={styles.left_total}>
            Total
          </span>
          <span className={styles.right_total}>
            ${price * duration + tax + cleaning + service}
          </span>
        </div>
      </div>
    );
  }
  return null;
};

Costs.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    service: PropTypes.number.isRequired,
    cleaning: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
  }).isRequired,
  duration: PropTypes.number.isRequired,
};

export default Costs;

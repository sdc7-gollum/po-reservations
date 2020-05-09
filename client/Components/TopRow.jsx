import React from 'react';
import styles from './TopRow.css';

const TopRow = (props) => {
  const { price, reviewScore, reviews} = props.data;
  return (
    <div className={styles.topRow}>
      <div>
        <span className={styles.price}>
          ${price}&nbsp;
        </span>
        <span className={styles.diem}>
          / night
        </span>
      </div>
      <div>
        <span className={styles.reviewWrapper}>
          <span className={styles.star}>&#9733;</span>
          <button className={styles.reviewButton} type="button">
            <span className={styles.rating}>{reviewScore} ({reviews})</span>
          </button>
        </span>
      </div>
    </div>
  );
};

export default TopRow;

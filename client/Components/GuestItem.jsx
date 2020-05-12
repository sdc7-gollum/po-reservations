import React from 'react';
import PropTypes from 'prop-types';
import styles from './GuestItem.css';
// totalGuests
const GuestItem = ({
  guestType, minus, plus, quant,
}) => (
  <div className={styles.listItem}>
    <div className={styles.leftEnd}>
      <span>{guestType}</span>
    </div>
    <div className={styles.numberEntry}>
      <div className={styles.minus}>
        <button type="button" id="guestCounter" onClick={minus} className={styles.adjust}>
          <div className={styles.operatorWrapper}>
            -
          </div>
        </button>
      </div>
      <span>
        {quant}
      </span>
      <div className={styles.plus}>
        <button type="button" id="guestCounter" onClick={plus} className={styles.adjust}>
          <div className={styles.operatorWrapper}>
            +
          </div>
        </button>
      </div>
    </div>
  </div>
);

GuestItem.propTypes = {
  guestType: PropTypes.string.isRequired,
  plus: PropTypes.func.isRequired,
  minus: PropTypes.func.isRequired,
  quant: PropTypes.number.isRequired,
};

export default GuestItem;

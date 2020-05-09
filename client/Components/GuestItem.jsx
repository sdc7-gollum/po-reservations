import React from 'react';
import PropTypes from 'prop-types';
import styles from './GuestItem.css';
// totalGuests
const GuestItem = ({ guestType }) => {
  return (
    <div className={styles.listItem}>
      <span>{guestType}</span>
      <div className="numberEntry">
        <button type="button" id="guestCounter" className="adjust">
          -
        </button>
        <span>1</span>
        {/*<span> {totalGuests} </span> */}
        <button type="button" id="guestCounter" className="adjust">
          +
        </button>
      </div>
    </div>
  );
};

GuestItem.propTypes = {
  guestType: PropTypes.string.isRequired,
};

export default GuestItem;

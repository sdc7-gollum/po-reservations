import React from 'react';
import GuestDropdown from './GuestDropdown.jsx';
import styles from './Form.css';

const Form = (props) => {
  const { maxGuests, handleSubmit } = props;
  return (
    <form id="form" onSubmit={handleSubmit}>
      <label htmlFor="checkin">
        Check-In
        <input type="date" placeholder="Add date" id="checkin" />
      </label>
      <label htmlFor="checkout">
        Checkout
        <input type="date" placeholder="Add date" id="checkout" />
      </label>
      <GuestDropdown totalGuests={maxGuests} />
    </form>
  );
};

export default Form;

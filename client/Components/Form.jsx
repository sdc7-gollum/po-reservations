import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCheckin, changeCheckout } from '../store';
import GuestDropdown from './GuestDropdown';
import styles from './Form.css';

const mapDispatchToProps = {
  changeCheckin,
  changeCheckout,
};

const mapStateToProps = (state) => {
  const { checkin, checkout } = state.dateReducer;
  let duration = 0;
  if (checkin && checkout) {
    const checkinDate = checkin.slice(-2);
    const checkoutDate = checkout.slice(-2);
    duration = Number.parseInt(checkoutDate, 10) - Number.parseInt(checkinDate, 10);
  }
  return { duration };
};

const ConnectedForm = (props) => {
  const onCheckinChange = (e) => {
    e.persist();
    // const checkinDate = JSON.stringify(new Date(e.target.valueAsDate));

    const checkin = e.target.value;
    props.changeCheckin(JSON.stringify(checkin));
    // Send action to Redux store to update checkin date

    // console.log(e.target.value);
  };
  const onCheckoutChange = (e) => {
    e.persist();
    // const checkoutDate = JSON.stringify(new Date(e.target.valueAsDate));

    const checkout = e.target.value;
    props.changeCheckout(checkout);
    // Send action to Redux store to update checkout date
    // when both dates exist, subtract checkin DAY from checkout DAY and set it to "duration"

    // console.log(e.target.valueAsDate);
  };

  const { duration, data, handleSubmit } = props;
  return (
    <div className={styles.formWrapper}>
      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="checkin">
          Check-In
          <input type="date" onChange={onCheckinChange} id="checkin" />
        </label>
        <label htmlFor="checkout">
          Checkout
          <input type="date" onChange={onCheckoutChange} id="checkout" />
        </label>
        <GuestDropdown duration={duration} data={data} />
      </form>
      <button className={styles.the_button} type="submit" onSubmit={handleSubmit} form="form">
        {duration ? 'Reserve' : 'Check availability'}
      </button>
    </div>
  );
};


const Form = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedForm);

export default Form;

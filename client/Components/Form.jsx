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
    const checkin = e.target.value;
    props.changeCheckin(checkin);
    // Send action to Redux store to update checkin date
  };
  const onCheckoutChange = (e) => {
    const checkout = e.target.value;
    props.changeCheckout(checkout);
    // Send action to Redux store to update checkout date
    // when both dates exist, subtract checkin DAY from checkout DAY and set it to "duration"
  };

  const { duration, data, handleSubmit } = props;
  const { maxGuests } = data;
  return (
    <div className={styles.formWrapper}>
      <form id="form" onSubmit={handleSubmit}>
        <div className={styles.dateBox}>
          <label htmlFor="checkin">
            Check-In:
            <input type="date" onChange={onCheckinChange} id="checkin" />
          </label>
          <label htmlFor="checkout">
            Checkout:
            <input type="date" onChange={onCheckoutChange} id="checkout" />
          </label>
        </div>
        <GuestDropdown duration={duration} maxGuests={maxGuests} />
      </form>
      <button className={styles.the_button} type="submit" onSubmit={handleSubmit} form="form">
        {duration ? 'Reserve' : 'Check availability'}
      </button>
    </div>
  );
};

ConnectedForm.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number.isRequired,
    service: PropTypes.number.isRequired,
    cleaning: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    maxGuests: PropTypes.number.isRequired,
  }).isRequired,
  changeCheckin: PropTypes.func.isRequired,
  changeCheckout: PropTypes.func.isRequired,
  duration: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const Form = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedForm);

export default Form;

import React from 'react';
import PropTypes from 'prop-types';
import styles from './GuestDropdown.css';
import GuestItem from './GuestItem';

// const mapStateToProps = (state) => {
//   return {
//     checkin: state.checkin,
//     checkout: state.checkout,
//   };
// };

class GuestDropdown extends React.Component {
  constructor(props) {
    super(props);
    const { maxGuests } = this.props;
    this.state = {
      max: maxGuests,
      adults: 1,
      children: 0,
      infants: 0,
      expand: false, // false in production
    };
    this.expanded = this.expanded.bind(this);
  }

  expanded() {
    const { maxGuests } = this.props.data;
    return (
      <div className={styles.dropdown_outerwrap}>
        <div className={styles.dropdown_container}>
          <div className={styles.dropdown}>
            <GuestItem guestType="Adults" minimum="1" />
            <GuestItem guestType="Children" />
            <GuestItem guestType="Infants" />
            <div className={styles.guestInfo}>
              {maxGuests}
              guests maximum. Infants don&apos;t count toward the number of guests.
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { expand } = this.state;
    return (
      <div>
        <div className={styles.guests_box}>
          <label htmlFor="guests">
            Guests
            <input type="text" id="guests" placeholder="1 guest" />
          </label>
        </div>
        {expand ? this.expanded() : '' }
      </div>
    );
  }
}

export default GuestDropdown;

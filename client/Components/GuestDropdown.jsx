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
    this.state = {
      adults: 1,
      children: 0,
      infants: 0,
      expand: false, // false in production
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.expanded = this.expanded.bind(this);
  }

  buttonHandler(e) {
    e.persist();
    const expand = !this.state.expand;
    this.setState({ expand });
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
              &nbsp;guests maximum. Infants don&apos;t count toward the number of guests.
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { adults, children, expand, infants } = this.state;
    const { maxGuests } = this.props;
    return (
      <div>
        <div className={styles.guests_box}>
          <label htmlFor="guests">
            <button type="button" id="guests" onClick={this.buttonHandler}>
              Guests:&nbsp;
              {adults + children}
              {infants ? ` and ${infants} infants` : ''}
            </button>
          </label>
        </div>
        {expand ? this.expanded() : '' }
      </div>
    );
  }
}

export default GuestDropdown;

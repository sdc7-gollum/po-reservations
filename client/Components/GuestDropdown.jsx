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
      expand: false,
    };
    this.buttonHandler = this.buttonHandler.bind(this);
    this.expanded = this.expanded.bind(this);
    this.adultsPlusHandler = this.adultsPlusHandler.bind(this);
    this.childrenPlusHandler = this.childrenPlusHandler.bind(this);
    this.infantsPlusHandler = this.infantsPlusHandler.bind(this);
    this.adultsMinusHandler = this.adultsMinusHandler.bind(this);
    this.childrenMinusHandler = this.childrenMinusHandler.bind(this);
    this.infantsMinusHandler = this.infantsMinusHandler.bind(this);
  }

  adultsPlusHandler(e) {
    e.preventDefault();
    const { maxGuests } = this.props;
    const { adults, children } = this.state;
    if ((adults + children) < maxGuests) {
      this.setState((prevState) => ({
        adults: prevState.adults + 1,
      }));
    }
  }

  childrenPlusHandler(e) {
    e.preventDefault();
    const { maxGuests } = this.props;
    const { adults, children } = this.state;
    if ((adults + children) < maxGuests) {
      this.setState((prevState) => ({
        children: prevState.children + 1,
      }));
    }
  }

  infantsPlusHandler(e) {
    e.preventDefault();
    const { infants } = this.state;
    if (infants < 5) {
      this.setState((prevState) => ({
        infants: prevState.infants + 1,
      }));
    }
  }

  adultsMinusHandler(e) {
    e.preventDefault();
    const { adults } = this.state;
    if (adults > 1) {
      this.setState((prevState) => ({
        adults: prevState.adults - 1,
      }));
    }
  }

  childrenMinusHandler(e) {
    e.preventDefault();
    const { children } = this.state;
    if (children > 0) {
      this.setState((prevState) => ({
        children: prevState.children - 1,
      }));
    }
  }

  infantsMinusHandler(e) {
    e.preventDefault();
    const { infants } = this.state;
    if (infants > 0) {
      this.setState((prevState) => ({
        infants: prevState.infants - 1,
      }));
    }
  }

  buttonHandler(e) {
    e.persist();
    this.setState((prevState) => ({ expand: !prevState.expand }));
  }

  expanded() {
    const { maxGuests } = this.props;
    const { adults, children, infants } = this.state;
    return (
      <div className={styles.dropdown_outerwrap}>
        <div className={styles.dropdown_container}>
          <div className={styles.dropdown}>
            <GuestItem guestType="Adults" quant={adults} plus={this.adultsPlusHandler} minus={this.adultsMinusHandler} />
            <GuestItem guestType="Children" quant={children} plus={this.childrenPlusHandler} minus={this.childrenMinusHandler} />
            <GuestItem guestType="Infants" quant={infants} plus={this.infantsPlusHandler} minus={this.infantsMinusHandler} />
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
    const {
      adults, children, expand, infants,
    } = this.state;
    return (
      <div>
        <div className={styles.guests_box}>
          <label htmlFor="guests">
            <button type="button" id="guests" onClick={this.buttonHandler}>
              Guests:&nbsp;
              {adults + children}
              &nbsp;guest
              {(adults + children) > 1 ? 's' : ''}
              {infants ? ` and ${infants} infant` : ''}
              {infants > 1 ? 's' : ''}
            </button>
          </label>
        </div>
        {expand ? this.expanded() : '' }
      </div>
    );
  }
}

GuestDropdown.propTypes = {
  maxGuests: PropTypes.number.isRequired,
};

export default GuestDropdown;

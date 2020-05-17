import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Costs from './Costs';
import Form from './Form';
import TopRow from './TopRow';
import styles from './Reservation.css';
import { fetchData } from '../store';

const mapStateToProps = (state) => {
  const { checkin, checkout } = state.dateReducer;
  let duration = 0;
  if (checkin && checkout) {
    const checkinDate = checkin.slice(-2);
    const checkoutDate = checkout.slice(-2);
    duration = Number.parseInt(checkoutDate, 10) - Number.parseInt(checkinDate, 10);
  }
  const { room } = state.roomReducer;
  return { duration, room };
};

const mapDispatchToProps = {
  fetchData,
};

class ConnectedReservation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { fetchData: fetch } = this.props;
    const params = new URLSearchParams(window.location.search);
    const record = Number.parseInt(params.toString(), 10);
    if (record) {
      fetch(record);
    } else {
      // console.error('No record associated with this URL.')
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    const { duration, room } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <TopRow data={room} />
          <Form
            data={room}
            duration={duration}
            handleSubmit={this.handleSubmit}
          />
          <div className={styles.nocharge}>
            { duration ? <p>You won&apos;t be charged yet</p> : ''}
          </div>
          <Costs data={room} duration={duration} />
        </div>
      </div>
    );
  }
}

ConnectedReservation.propTypes = {
  room: PropTypes.shape({
    price: PropTypes.number.isRequired,
    service: PropTypes.number.isRequired,
    cleaning: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
  }).isRequired,
  duration: PropTypes.number.isRequired,
  fetchData: PropTypes.func.isRequired,
};

const Reservation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedReservation);

export default Reservation;

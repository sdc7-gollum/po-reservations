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
    console.log(checkinDate, checkoutDate);
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
    const { fetchData } = this.props;
    fetchData();
    // try {
    //   const data = await this.fetchData();
    //   this.setState(data);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  handleSubmit(e) {
    e.preventDefault();
    e.persist();
    console.log(e);
  }

  render() {
    const { duration, room } = this.props;
    console.log(duration);
    // const { } = room;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <TopRow data={room} />
          <Form data={room} duration={duration} handleSubmit={this.handleSubmit} />
          {/* <Button handleSubmit={this.handleSubmit} /> */}
          <div className={styles.nocharge}>
            { duration ? <p>You won&apos;t be charged yet</p> : ''}
          </div>
          <Costs data={room} duration={duration} />
        </div>
      </div>
    );
  }
}

const Reservation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnectedReservation);

export default Reservation;

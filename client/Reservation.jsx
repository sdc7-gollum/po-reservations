import React, { Component } from 'react';
import axios from 'axios';
import Costs from './Components/Costs.jsx';
import Button from './Components/Button.jsx';
import Form from './Components/Form.jsx';
import TopRow from './Components/TopRow.jsx';
import styles from './Reservation.css';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxGuests: 1,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState(data);
    } catch (err) {
      console.log(err);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  fetchData() {
    return axios.get('/api/room/1')
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log('Error downloading room:', err));
  }

  // eslint-disable-next-line class-methods-use-this
  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <TopRow data={this.state} />
          <Form data={this.state} handleSubmit={this.handleSubmit} />
          <Button />
          <div className={styles.nocharge}>
            <p>You won&apos;t be charged yet</p>
          </div>
          <Costs data={this.state} />
        </div>
      </div>
    );
  }
}

export default Reservation;

  import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styles from './Reservation.css';

const Reservation = () => {
  const [room, setRoom] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get('/api/room/1')
        .then((response) => {
          console.log(response.data[0]);
          setRoom(response.data[0]);
        })
        .catch((err) => {
          console.log('Error downloading room:', err);
        })
        .finally(() => {
          console.log(room);
        });
    };
    fetchData();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p>{room.price}</p>
        <form>
          <label htmlFor="checkin">
            Check-In
            <input type="date" placeholder="Add date" id="checkin" />
          </label>
          <label htmlFor="checkout">
            Checkout
            <input type="date" placeholder="Add date" id="checkout" />
          </label>
          <br />
          <label htmlFor="guests">
            Guests
            <input type="text" id="guests" placeholder="1 guest" />
          </label>
        </form>
        <button type="submit">Check availability</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Reservation />, document.getElementById('reservation'));

export default Reservation;

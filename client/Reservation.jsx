import React, { Component } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import styles from './Reservation.css';

class Reservation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const data = await this.fetchData();
    this.setState(data);
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
    const { price } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <p id="price">{price}</p>
          <form id="form" onSubmit={this.handleSubmit}>
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
          <button type="submit" form="form">Check availability</button>
        </div>
      </div>
    );
  }
}


// const Reservation = () => {
//   const [room, setRoom] = useState([]);

//   useEffect(() => {
//     };
//     fetchData();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };

//   return (
//     <div className={styles.wrapper}>
//       <div className={styles.container}>
//         <p>{room.price}</p>
//         <form id="form" onSubmit={handleSubmit}>
//           <label htmlFor="checkin">
//             Check-In
//             <input type="date" placeholder="Add date" id="checkin" />
//           </label>
//           <label htmlFor="checkout">
//             Checkout
//             <input type="date" placeholder="Add date" id="checkout" />
//           </label>
//           <br />
//           <label htmlFor="guests">
//             Guests
//             <input type="text" id="guests" placeholder="1 guest" />
//           </label>
//         </form>
//         <button type="submit" form="form">Check availability</button>
//       </div>
//     </div>
//   );
// };

export default Reservation;
